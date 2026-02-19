import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function AddUser() {

   const {register ,handleSubmit ,formState:{error}}=useForm();
   const addUser=async(values)=>{
    const formData=new FormData();
    formData.append('name',values.name);
    formData.append('age' ,values.age);
    formData.append('email',values.email);
    formData.append('image',values.image)
    const response=await axios.post(`${import.meta.env.VITE_BURL}/users`,formData);
    console.log(response);

}
  return (
    <>
     <div>
        <div className="container">
      <form onSubmit={handleSubmit(addUser)}>
        <div>
            <div className="form-floating mb-3">
            <input
            {...register('name')}
              type="text"
              id="floatingName"
              className="form-control"
              placeholder="user name"
            />
            <label htmlFor="floatingName">Name</label>
            </div>

            <div className="form-floating mb-3">
            <input
            {...register('age')}
              type="text"
              id="floatingAge"
              className="form-control"
              placeholder="Your age"
            />
            <label htmlFor="floatingName">Age</label>
            </div>

          <div className="form-floating mb-3">
            <input
            {...register('email')}
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
            {...register('passward')}
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-floating mb-3">
            <input
            {...register('image')}
              type="file"
              className="form-control"
              id="floatingPassword"
            />
          </div>
          <button className="btn btn-outline-info">Add User</button>

        </div>
      </form>
      </div>
    </div>
  
    </>

  );
}

export default AddUser;
