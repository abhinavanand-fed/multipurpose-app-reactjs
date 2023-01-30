import React, { useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import './Meme.css';

function Meme() {
  const [meme, setMeme] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchMeme = async () => {
    setLoading(true);
    const options = {
      method: 'GET',
      url: 'URL',
      headers: {
        'X-RapidAPI-Key': 'API-KEY',
        'X-RapidAPI-Host': 'API-HOST'
      }
    };
    try {
      const response = await axios.request(options);
      setMeme(response.data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }

  return (
    <div className="meme-container">
      <button className="meme-button" onClick={fetchMeme}>Fetch a Meme</button>
      {loading && <p>Loading...</p>}
      {meme.url && <img className="meme-img" src={meme.url} alt={meme.title} />}
    </div>
  );
}

export default Meme;
