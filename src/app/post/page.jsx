import React from "react";

const postPage = async () => {
  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = res.json();

    return data;
  };

  const postData = await getData();
  console.log(postData);
  return (
    <div>
      <h1>I am post page with {postData.length}</h1>
      <table>
        {postData.map((data) => (
          <tr className=" m-2" key={data.id}>
            <td className=" text-2xl text-center p-6 border border-black">
              <h5 className=" text-2xl text-red-600">{data.title}</h5>
              <h3 className=" text-xl text-green-600">{data.body}</h3>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};
export default postPage;
