import React, { useState, } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

function Dictionary() {
  const [term, setTerm] = useState('');
  const [definitions, setDefinitions] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const options = {
        method: 'GET',
        url: 'URL',
        params: { term },
        headers: {
          'X-RapidAPI-Key': 'API-KEY',
          'X-RapidAPI-Host': 'API-HOST',
        },
      };
      const response = await axios.request(options);
      setDefinitions(response.data.list.slice(2, 2 + 2).map((def) => def.definition));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="center">
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Enter a term to search"
      />
      <button type="submit">Search</button>
    </form>
    <ul>
      {definitions.map((definition, index) => (
        <ul key={index}>{definition}</ul>
      ))}
    </ul>
    {error && <p>{error}</p>}
  </div>
  
  );
}

export default Dictionary;
