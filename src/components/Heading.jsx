"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React from "react";
const Heading = () => {
  const { data: session, status } = useSession();
  const router = useRouter()

  console.log("session is from heading", session); // Useful for debugging

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  const links = [
    {
      title: "post",
      path: "/post",
    },
    {
      title: "welcome",
      path: "/welcome",
    },
    {
      title: "meal",
      path: "/meal",
    },
    {
      title: "gallery",
      path: "/gallery",
    },
    {
      title: "about",
      path: "/about",
    },
  ];

  const handler = () => {
    router.push("/api/auth/signin")
  }
  return (
    <div className=" flex justify-center bg-amber-100 m-3 p-3">
      <h1 className=" m-5 text-2xl">
        Welcome, {session?.user?.name || "Guest"}!
      </h1>
      <nav>
        <ul>
          {links?.map((link) => (
            <Link key={link.path} href={link.path}>
              <button className=" bg-yellow-600 gap-2 m-3 border-amber-50 p-3 uppercase">
                {link.title}{" "}
              </button>
            </Link>
          ))}
<Link href="/api/auth/signup"><button className=" btn-active" type="button">Sign Up</button></Link>
          {session ? (
           <button type="button" onClick={() =>signOut() }>sign out</button>
            //<Link href="/api/auth/signout">Sign out</Link>
          ) : (
            //<Link href="/api/auth/signin">Sign in</Link>
             <button type="button" className="px-6 btn-primary" onClick={handler}>Sign in</button>
          )}
          <>
            {session?.user?.name ? (
              <><img height={10} width={50}  src={session.user?.image} alt="{session.user.name}" srcset="" />
                <p>Welcome, {session.user.name}</p>
                <p>Type: {session.user.type}</p>
              </>
            ) : (
              <p>Not signed in</p>
            )}
          </>
        </ul>
      </nav>
    </div>
  );
};

export default Heading;
