import React from "react";

export const metadata = {
  title: {
    absolute: "Details",
  },//absolute is used to ignore default title
  description: "Details page",
};

const getDetailPost = async (id) => {
  console.log(id);
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  console.log(data);
  return data;
};

const detailPage = async ({ params }) => {
  const { id } = await params;
  const { title, body } = await getDetailPost(id);

  return (
    <div className=" m-11">
      <h1>Id {id}</h1>
      <h1 className=" uppercase">title : {title}</h1>
      <p>Description : {body}</p>
    </div>
  );
};

export default detailPage;
