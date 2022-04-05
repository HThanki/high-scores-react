import React from "react";
import allCountryScores from "./allCountryScores";
import PlayerScore from "./PlayerScore";

function HighScoreTable() {
  return (
    <div>
      <h1>High Scores per Country</h1>
      {allCountryScores
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((country) => {
          return (
            <div className="score-card">
              <h2>HIGH SCORE: {country.name}</h2>
              <PlayerScore scores={country.scores} />
            </div>
          );
        })}
    </div>
  );
}

export default HighScoreTable;
