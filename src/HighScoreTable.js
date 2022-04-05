import React from "react";
import allCountryScores from "./allCountryScores";
import PlayerScore from "./PlayerScore";

function HighScoreTable() {
  return (
    <div>
      <div className="heading">
        <h1>High Scores per Country</h1>
        <div className="button">
          <button>Order scores</button>
        </div>
      </div>
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
