import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Users() {
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
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">image</th>
    </tr>
  </thead>
 
  <tbody>
    {user.map(user=>
        <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.name}</td>
            <td>
                <img src={user.imageUrl} />
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
