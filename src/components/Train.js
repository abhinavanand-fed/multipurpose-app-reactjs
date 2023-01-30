import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Train = () => {
  const [trainData, setTrainData] = useState({});
  const [pnrNumber, setPnrNumber] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const options = {
      method: "GET",
      url: "URL",
      params: { pnrNumber: pnrNumber },
      headers: {
        "X-RapidAPI-Key": "API-KEY",
        "X-RapidAPI-Host": "API-HOST",
      },
    };

    axios
      .request(options)
      .then((response) => {
        setTrainData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div style={{textAlign: "center"}}>
      <h1>Train Information</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter PNR Number"
          value={pnrNumber}
          onChange={e => setPnrNumber(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {trainData.status === true && (
        <table style={{border: "1px solid black", margin: "20px auto 0 auto"}}>
          <thead>
            <tr>
              <th>PNR Number</th>
              <th>No of Passengers</th>
              <th>Class</th>
              <th>Train Name</th>
              <th>Train Number</th>
              <th>Quota</th>
              <th>Date</th>
              <th>Boarding Station</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{trainData.data.pnr_number}</td>
              <td>{trainData.data.no_of_passengers}</td>
              <td>{trainData.data.class}</td>
              <td>{trainData.data.train_name}</td>
              <td>{trainData.data.train_number}</td>
              <td>{trainData.data.quota}</td>
              <td>{trainData.data.date}</td>
              <td>{trainData.data.boarding_station.station_name}</td>
            </tr>
          </tbody>
        </table>
      )}
      {trainData.status === false && (
          <div>
              <p> No data available</p>
          </div>
    )}
    </div>
  );
};

export default Train;
