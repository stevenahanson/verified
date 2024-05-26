"use client";

import React, { useEffect, useState } from "react";
import DataDuel from "../components/DataDuel";

const Duel = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await fetch("/teams.json");
      const data = await response.json();
      setTeams(data);
    };

    fetchTeams();
  }, []);

  if (teams.length < 2) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <DataDuel team1={teams[0]} team2={teams[1]} />
    </div>
  );
};

export default Duel;
