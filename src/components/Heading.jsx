import Link from "next/link";
import React from "react";

const Heading = () => {
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
  ];

  return (
    <div className=" flex justify-center bg-amber-100 m-3 p-3">

      <nav>
        <ul>
          {links?.map((link) => (
            <Link key={link.path} href={link.path}>
              <button className=" bg-yellow-600 gap-2 m-3 border-amber-50 p-3">{link.title} </button>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Heading;
