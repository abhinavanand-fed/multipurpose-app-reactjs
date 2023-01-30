import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Games.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const [games, setGames] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [showAboutMe, setShowAboutMe] = useState(false);
    const [selectedGenre, setSelectedGenre] = useState("");
    const [genres] = useState([
        "Shooter",
        "Action",
        "Fighting",
        "Racing",
        "Strategy",
        "MOBA",
    ]);

    useEffect(() => {
        axios
            .get("URL", {
                headers: {
                    "X-RapidAPI-Key":
                        "API-Key",
                    "X-RapidAPI-Host": "API-HOST",
                },
            })
            .then((response) => {
                setGames(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    console.log(games);

    function AboutMe() {
        return (
            <div style={{}}>
                <div className="d-flex flex-column">
                    <p className="text-white mb-0 mb-sm-2">
                        Muchas gracias afición, esto es para vosotros Siuuu{" "}
                    </p>
                    <p className="text-white mb-0 mb-sm-2"> </p>
                    <p className="text-white mb-0 mb-sm-2">
                        Connect with me on Discord and Twitter-
                    </p>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "right",
                        backgroundColor: "transparent",
                        marginRight: "39px",
                    }}
                >
                    <a
                        href="https://twitter.com/your-twitter-handle"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-light mr-3"
                        style={{ width: "50px", height: "40px" }}
                    >
                        <img
                            src="https://cdn.discordapp.com/emojis/1038129793532702850.webp"
                            alt="Twitter logo"
                            width="25"
                        />
                    </a>

                    <a
                        href="https://discordapp.com/users/492262016644284429"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-light mr-3"
                        style={{ width: "50px", height: "40px" }}
                    >
                        <img
                            src="https://cdn.discordapp.com/emojis/843465955966320641.webp"
                            alt="Discord logo"
                            width="25"
                        />
                    </a>
                </div>
            </div>
        );
    }


    const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

    const filteredGames = games.filter((game) => {
        return (
            game.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
            (selectedGenre === "" ||
                (game.genre && game.genre.includes(selectedGenre)))
        );
    });

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div
            style={{
                background: "linear-gradient(to right, #141e30, #243b55)",
                backgroundSize: "cover",
            }}
        >
            <header
                className="header"
                style={{
                    backgroundImage:
                        "url(https://media.discordapp.net/attachments/852241547327307786/1061309218872885368/css.jpg)",
                    height: "150px",
                    backgroundSize: "cover ",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    padding: "100px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <h1
                        style={{
                            color: "black",
                            textShadow:
                                "0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.5), 0 0 15px rgba(255, 255, 255, 0.5)",
                        }}
                    >
                        Free Games
                    </h1>
                </div>
            </header>

            <div
                className="d-flex  justify-content-between"
                style={{
                    background: "transparent",
                }}
            >
                <div className="d-flex flex-column">
                    <div
                        div
                        className="p-3"
                        style={{
                            width: "155px",
                            display: "flex",
                            justifyContent: "right",
                            marginLeft: "15px",
                        }}
                    >
                        <input
                            style={{ color: "white" }}
                            type="text"
                            className="form-control bg-transparent"
                            placeholder="Search games"
                            onChange={(event) => setSearchQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div
                    className="d-flex flex-column"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginRight: "10px",
                    }}
                >
                    <label
                        style={{ color: "white", marginRight: "7px", marginLeft: "10px" }}
                    >
                        Choose a genre:{" "}
                    </label>
                    <select
                        value={selectedGenre}
                        onChange={(event) => setSelectedGenre(event.target.value)}
                        style={{ backgroundColor: "transparent", color: "white" }}
                    >
                        <option value="">All genres</option>
                        {genres.map((genre) => (
                            <option
                                key={genre}
                                value={genre}
                                style={{ color: "brown", backgroundColor: "transparent" }}
                            >
                                {genre}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="d-flex flex-column">
                    <div
                        div
                        className="p-3"
                        style={{ display: "flex", justifyContent: "right" }}
                    >
                        <button
                            className="btn btn-outline-light btn-responsive mr-3 btn-sm"
                            style={{
                                width: "80px",
                                padding: "8px 8px",
                                fontSize: "14px",
                                marginRight: "15px",
                            }}
                            onClick={() => setShowAboutMe(!showAboutMe)}
                        >
                            About Me
                        </button>
                    </div>
                </div>
            </div>

            <div
                style={{
                    background: "transparent",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "right",
                        backgroundColor: "transparent",
                        marginRight: "9px",
                    }}
                >
                    {showAboutMe && <AboutMe />}
                </div>
            </div>

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    background: "linear-gradient(to right, #141e30, #243b55)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {filteredGames &&
                    filteredGames.map((game) => (
                        <div
                            key={game.id}
                            style={{
                                width: "400px",
                                margin: "10px",
                                backgroundColor: "white",
                                textAlign: "center",
                            }}
                        >
                            <a href={game.game_url} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={game.thumbnail}
                                    alt={game.title}
                                    style={{ width: "100%", maxWidth: "400px" }}
                                />
                            </a>
                            <h2 style={{ color: "blue", fontSize: "20px" }}>{game.title}</h2>
                            <p style={{ color: "black", fontSize: "16px" }}>
                                Developer: {game.developer}
                            </p>
                            <p style={{ color: "purple", fontSize: "14px" }}>
                                {game.short_description}
                            </p>
                        </div>
                    ))}
            </div>
            {showScroll && (
            <button
            onClick={scrollToTop}
            style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                backgroundColor: "transparent",
                border: "none",
                width: "65px",
                height: "56px",
            }}
        >
            <div className="circle">
            <img src="https://media.discordapp.net/attachments/983965913353158737/1064121470365732904/btn_top.png" width="56" height="56" alt="Scroll to top button"/>
            </div>
        </button>
        )}
        </div>
    );
}

export default App;
