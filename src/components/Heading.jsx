"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
const Heading = () => {
  const { data: session, status } = useSession();

  console.log(" session is " , session); // Useful for debugging

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

  return (
    <div className=" flex justify-center bg-amber-100 m-3 p-3"><h1 className=" m-5 text-2xl">Welcome, {session?.user?.name || "Guest"}!</h1>
      <nav>
        <ul>
          {links?.map((link) => (
            <Link key={link.path} href={link.path}>
              <button className=" bg-yellow-600 gap-2 m-3 border-amber-50 p-3 uppercase">
                {link.title}{" "}
              </button>
            </Link>
          ))}

          {session ? (
            <Link href="/api/auth/signout">Sign out</Link>
          ) : (
            <Link href="/api/auth/signin">Sign in</Link>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Heading;
