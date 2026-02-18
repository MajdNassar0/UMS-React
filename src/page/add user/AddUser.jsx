import React from "react";

function AddUser() {
    const Adduser =()=>{

    }
  return (
    <>
     <div>
        <div className="container">
      <form onSubmit={Adduser}>
        <div>
            <div className="form-floating mb-3">
            <input
              name="userName"
              type="text"
              id="floatingName"
              className="form-control"
              placeholder="user name"
            />
            <label htmlFor="floatingName">Name</label>
            </div>
            <div className="form-floating mb-3">
            <input
              name="Age"
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
