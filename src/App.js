import "./App.css";
import ProgressBar from "./Components/ProgressBar";
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from "./Components/images";
import { useState } from "react";
import BoyImg from "./assets/avatar.png";
import GirlImg from "./assets/girl.png";
import trophyImg from "./assets/trophy.png"

function App() {
  let Player1 = "Vivek";
  let Player2 = "Abhay";

  const [diceNo, setDiceNo] = useState(Dice1);
  const [Player1Turn, setPlayer1Turn] = useState(true);
  const [Player1Score, setPlayer1Score] = useState(0);
  const [Player2Score, setPlayer2Score] = useState(0);

  const roll = () => {
    let roll = Math.floor(Math.random() * 6 + 1);

    if (Player1Turn) {
      setPlayer1Score((prev) => prev + roll);
    } else {
      setPlayer2Score((prev) => prev + roll);
    }
    //for showing dice img according to roll
    if (roll === 1) {
      setDiceNo(Dice1);
    } else if (roll === 2) {
      setDiceNo(Dice2);
    } else if (roll === 3) {
      setDiceNo(Dice3);
    } else if (roll === 4) {
      setDiceNo(Dice4);
    } else if (roll === 5) {
      setDiceNo(Dice5);
    } else {
      setDiceNo(Dice6);
    }
    //changing turn
    setPlayer1Turn(!Player1Turn);
  };

  return (
    <div className="app-container">
      
      <div className="top-container">
        <ProgressBar playerName={Player1} progress={Player1Score} />
        <ProgressBar playerName={Player2} progress={Player2Score} />
      </div>

      <div className="mid-container">
        <h1>
          {Player1Turn === true ? `${Player1}'s turn` : `${Player2}'s turn`}
        </h1>
        {(Player1Score >= 100 || Player2Score >= 100) && (
          <div className="modal">
            <div className="modal-container">
              <img src={trophyImg} alt="" className="trophy-img"></img>
              <h1>Congratulations!</h1>
              <h4>
                {Player1Score > Player2Score ? `${Player1}` : `${Player2}`}
              </h4>
              <button
                onClick={() => {
                  setPlayer1Score(0);
                  setPlayer2Score(0);
                  setPlayer1Turn(true);
                }}
                className="reset-btn"
              >
                Play again
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="bottom-container">
        <div className="player-info">
          <img src={BoyImg} alt=""></img>
          <h2>{Player1}</h2>
          <h1 className="total-score">{Player1Score}</h1>
        </div>
        <div className="dice">
          <img onClick={roll} src={diceNo} title="Click to roll" alt=""></img>
        </div>
        <div className="player-info">
          <h2>{Player2}</h2>
          <h1 className="total-score">{Player2Score}</h1>
          <img src={GirlImg} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default App;
