import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Post",
  description: "Post of next res",
};

const postPage = async () => {
  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = res.json();

    return data;
  };

  const postData = await getData();
  // console.log(postData);
  return (
    <div>
      <h1>I am post page with {postData.length}</h1>

      <div className=" grid grid-cols-3 gap-4 p-3 ">
        {postData?.slice(0,20)?.map(({title, body, id}) => (
          <div key={id} className="border-2 border-red-600 p-3" >
            <h5 className=" text-2xl text-red-600 uppercase"> Title : {title}</h5>
            <h3 className=" text-xl text-green-600"> Description : {body}</h3>
            <button className=" btn btn-primary">
              <Link href={`/post/${id}`}>See Details</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default postPage;
