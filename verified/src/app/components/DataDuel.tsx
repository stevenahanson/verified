import React from "react";
import TeamCard from "./TeamCard";

const DataDuel = ({ team1, team2 }) => {
  return (
    <div className="flex justify-around w-full max-w-4xl mx-auto">
      <TeamCard team={team1} />
      <div className="flex items-center justify-center text-2xl font-bold">
        VS
      </div>
      <TeamCard team={team2} />
    </div>
  );
};

export default DataDuel;
