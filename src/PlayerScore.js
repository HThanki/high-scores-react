import React from "react";

function PlayerScore(props) {
  return (
    <div>
      <div className="player-scores">
        {props.scores.map((score) => {
          return (
            <div className="player-score">
              <div className="player">{score.n}</div>
              <div className="score">{score.s}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PlayerScore;
