import React, { useState } from "react";

function AddUser() {

    const [user,setUser]=useState({
        name:'',
        age:'',
        email:'',
        password:''

    });
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setUser({...user,[name]:value});

    }
    const Adduser =(e)=>{
        e.preventDefault();
        console.log(user);

    }
  return (
    <>
     <div>
        <div className="container">
      <form onSubmit={Adduser}>
        <div>
            <div className="form-floating mb-3">
            <input
              name="name"
              value={user.name}
              type="text"
              onChange={handleChange}
              id="floatingName"
              className="form-control"
              placeholder="user name"
            />
            <label htmlFor="floatingName">Name</label>
            </div>

            <div className="form-floating mb-3">
            <input
              name="age"
              value={user.age}
              onChange={handleChange}
              type="text"
              id="floatingAge"
              className="form-control"
              placeholder="Your age"
            />
            <label htmlFor="floatingName">Age</label>
            </div>

          <div className="form-floating mb-3">
            <input
            name="email"
            value={user.email}
            onChange={handleChange}
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
            name="password"
            value={user.password}
            onChange={handleChange}
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
