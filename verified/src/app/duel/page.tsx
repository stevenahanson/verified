"use client";

import React, { useEffect, useState } from "react";
import DataDuel from "../components/DataDuel";
import Link from "next/link";

const Duel = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch("/teams.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTeams(data);
      } catch (error) {
        console.error("Failed to fetch teams:", error);
      }
    };

    fetchTeams();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center">
      <h1 className="text-4xl font-bold mb-8">Data Duel</h1>
      {teams.length < 2 ? (
        <div>Loading...</div>
      ) : (
        <>
          <DataDuel team1={teams[0]} team2={teams[1]} />
          <div className="mt-8">
            <Link href="/">
              <p className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 cursor-pointer">
                Back to Home
              </p>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Duel;
