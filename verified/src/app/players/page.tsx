"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch("/players.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPlayers(data);
      } catch (error) {
        console.error("Failed to fetch players:", error);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center">
      <h1 className="text-4xl font-bold mb-8">Player Stats</h1>
      {players.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
          {players.map((player) => (
            <div
              key={player.$id}
              className="border p-4 rounded shadow-md bg-gray-800"
            >
              <h2 className="text-2xl font-bold">
                {player.first_name} {player.last_name} {player.suffix}
              </h2>
              <p>Games Played: {player.games_played}</p>
              <div className="mt-2">
                <p>Yards per Game: {player.stats.yards_per_game}</p>
                <p>Touchdowns per Game: {player.stats.touchdowns_per_game}</p>
                <p>Attempts per Game: {player.stats.attempts_per_game}</p>
                <p>Receptions per Game: {player.stats.receptions_per_game}</p>
                <p>Rushing Touchdowns: {player.stats.rushing_touchdowns}</p>
                <p>Receiving Touchdowns: {player.stats.receiving_touchdowns}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-8">
        <Link href="/">
          <p className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 cursor-pointer">
            Back to Home
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Players;
