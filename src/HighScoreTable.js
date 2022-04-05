import React from "react";
import allCountryScores from "./allCountryScores";

function HighScoreTable() {
  console.log(allCountryScores);
  return (
    <div>
      <h1>High Scores per Country</h1>
      {allCountryScores.map((country) => {
        return (
          <div className="score-card">
            <h2>HIGH SCORE: {country.name}</h2>
          </div>
        );
      })}
    </div>
  );

  // <div>
  //   <h1>High Scores per Country</h1>
  //   <div className="score-card">
  //     <h2>HIGH SCORE: Bangladesh</h2>
  //     <div className="player-scores">
  //       <div className="player-score">
  //         <div className="player">Rayhan</div>
  //         <div className="score">121382737</div>
  //       </div>
  //       <div className="player-score">
  //         <div className="player">Ali</div>
  //         <div className="score">54000</div>
  //       </div>
  //     </div>
  //   </div>
  //   <div className="score-card">
  //     <h2>HIGH SCORE: London</h2>
  //     <div className="player-scores">
  //       <div className="player-score">
  //         <div className="player">John</div>
  //         <div className="score">2737</div>
  //       </div>
  //       <div className="player-score">
  //         <div className="player">Lee</div>
  //         <div className="score">28</div>
  //       </div>
  //     </div>
  //   </div>
  // </div>
}

export default HighScoreTable;
