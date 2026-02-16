import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";

function Users() {
    const [isErr,setisErr]=useState(null);
    const deleteUser=async(id)=>{
        try{
            Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then(async(result) => {
  if (result.isConfirmed) {
     const response =await axios.delete(`${import.meta.env.VITE_BURL}/users/${id}`);
            getUser();
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});
           

        }catch(err){
            setisErr(err.message);

        }
    }
    if(isErr){
        return <div className='text-danger'>{isErr}</div>
    }

    const [error,setError]=useState(null);
    const [user,setUser]=useState([]);
    const getUser=async()=>{
        try{
        const response=await axios.get(`${import.meta.env.VITE_BURL}/users`);
        const data = response.data.users;
        console.log(data);
        setUser(data);
        }catch(err){
            setError(err.message);
        }
    }

        useEffect(()=>{
            getUser();
        },[]);

        if(error){
            return <h2>{error}</h2>
        }
        if(user.length==0){
            return <h2>Wait ....</h2>
        }

    
  return (
    <>
    <div className="container">
            <table className="table">
  <thead>
    <tr>
      
      <th scope="col">name</th>
      <th scope="col">image</th>
      <th scope="col">action</th>
    </tr>
  </thead>
 
  <tbody>
    {user.map(user=>
        <tr key={user.id}>
            <td>{user.name}</td>
            <td>
                <img src={user.imageUrl} />
            </td>
            <td>
                <Link className='btn btn-outline-primary' to={`/user/${user.id}`}>Details</Link>
                <button className='btn btn-outline-danger' onClick={()=>deleteUser(user.id)} >Delete</button>
            </td>
        </tr>
    )}
   
  </tbody>
</table>

    </div>



    </>
    
  )
}

export default Users
