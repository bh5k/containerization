// GetUserInfo.js

import React, { useState, useEffect } from 'react';

const GetUserInfo = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/user/1');
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
 
  return (
    <div>
      <h2>User Information</h2>
      {userData ? (
        <div>
          <p>Login: {userData.login}</p>
          <p>ID: {userData.id}</p>
          <p>Name: {userData.fullname}</p>
          <p>Email: {userData.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GetUserInfo;
