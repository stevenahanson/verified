import React from "react";

const TeamCard = ({ team }) => {
  return (
    <div className="border p-4 rounded shadow-md">
      <h2 className="text-2xl font-bold">{team.name}</h2>
      <p>Sport Type: {team.sport_type}</p>
      <div className="mt-2">
        <p>Points per Game: {team.stats.points_per_game}</p>
        <p>
          Net Passing Yards per Game: {team.stats.net_passing_yards_per_game}
        </p>
        <p>Rushing Yards per Game: {team.stats.rushing_yards_per_game}</p>
      </div>
    </div>
  );
};

export default TeamCard;
