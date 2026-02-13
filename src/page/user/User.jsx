import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();   // ✅ برا الدالة

  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BURL}/users/${id}`
      );
      console.log(response.data)
      setUser(response.data.data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!user) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.age}</p>
      <p>{user.email}</p>
    </div>
  );
}

export default User;

