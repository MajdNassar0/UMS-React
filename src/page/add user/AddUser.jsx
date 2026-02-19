import React, { useState } from "react";
import { useForm } from "react-hook-form";

function AddUser() {

   const {register ,handleSubmit ,formState:{error}}=useForm();
  return (
    <>
     <div>
        <div className="container">
      <form onSubmit={handleSubmit}>
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
          <button className="btn btn-outline-info">Add User</button>

        </div>
      </form>
      </div>
    </div>
  
    </>

  );
}

export default AddUser;
