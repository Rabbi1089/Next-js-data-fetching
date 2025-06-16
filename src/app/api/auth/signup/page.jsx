import React from "react";

const page = () => {
  const handleRegister = async (event) => {
    event.preventDefault();
    const newUser = {
      name : event.target.name.value,
      email : event.target.email.value,
      password : event.target.password.value,
    }
    const response = await fetch("http://localhost:3000/api/auth/signup/new-user" , {
      method : "POST",
      body : JSON.stringify(newUser),
      headers : {
        'content-type' : 'application/json'
      }
    })
    console.log(response);
  };
  return (
    <div className="text-center">
      <h1>Signup with email and password</h1>
      <div className="">
        <form >
          <label htmlFor="name">Name</label>
          <input className="p-2 m-2" type="text" name="name" id="" /><br />
          <label htmlFor="email">Email</label>
          <input className="p-2 m-2"  type="email" name="email" id="" /><br />
           <label htmlFor="password">Password</label>
          <input className="p-2 m-2"  type="password" name="password" id="" />
        </form>
      </div>
    </div>
  );
};

export default page;
