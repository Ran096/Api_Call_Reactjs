import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [products, setUser] = useState([]);

  useEffect(() => {
    dataLoading();
  }, []);
  /* async function dataLoading() {
    const api = "https://jsonplaceholder.typicode.com/users";
    const result = await fetch(api);
    const getresult = await result.json();
    setUser(getresult);
    console.log(getresult);
  } */
  const dataLoading = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  };
  const mappedData = () => {
    let resultfilter = products.filter((user) => {
      return user.id <= 6;
    });
    setUser(resultfilter);
  };
  return (
    <div>
      <div className="App">
        {products.map((item) => (
          <>
            <h1>{item.id}</h1>
            <label>Name :{item.name}</label>
            <br />
            <label> User Name: {item.username}</label>
            <br />
            <label> Email Address : {item.email}</label>
            <br />
            <label key={item.address.street}>
              {" "}
              Address : {item.address.street}
            </label>
            <br />
            <br />
          </>
        ))}
        <button onClick={mappedData}>More Data View</button>
      </div>
    </div>
  );
}
