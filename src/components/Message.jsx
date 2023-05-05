import React from "react";

function Message({ level, onPlayAgain }) {
  return (
    <div className="message">
      <h2>Congratulations! You have completed level {level}!</h2>
      <button onClick={onPlayAgain}>Play Again</button>
    </div>
  );
}

export default Message;