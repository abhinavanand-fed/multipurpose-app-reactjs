import React, { useState, useEffect } from "react";
import axios from "axios";
                           
function App() {
  const [data, setData] = useState({});
  const [search, setSearch] = useState("");
  
  useEffect(() => {
    const options = {
      method: "GET",
      url: "URL",
      params: { id: search },
      headers: {
        "X-RapidAPI-Key": "API-KEY",
        "X-RapidAPI-Host": "API-HOST",
      },
    };
    
    axios
      .request(options)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [search]);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSearch(search);
        }}
      >
        <input
          type="text"
          placeholder="Search for a video"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        Link:{" "}
        <a href={data.link} target="_blank" rel="noopener noreferrer">
          {data.link}
        </a>
        <br />
        Title: {data.title}
        <br />
        Duration: {data.duration}
        <br />
        Status: {data.status}
        <br />
        Message: {data.msg}
      </div>
    </div>
  );
}

export default App;
