import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";


function OTTAxios() {
  const [tts, setData] = useState([]);
  /*const [isLoading, setIsLoading] =
  const [error, setError] = */

  useEffect(() => {
    axios
      .get("URL", {
        params: { region: "IN" },
        headers: {
          "X-RapidAPI-Key":
            "API-KEY",
          "X-RapidAPI-Host": "API-HOST",
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(tts);

  return (
    <div style={{ }}>
      {tts &&
        tts.map((tt,index) => (
          <div key={index}>
            <p style={{ display: "block", textAlign:"center", margin: "10px 0"}}>{tt.label}</p>
          </div>
        ))}
</div>


  );
}

export default OTTAxios;
