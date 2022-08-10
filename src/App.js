import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GuessInput from "./components/GuessInput";
import Limit from "./components/Limit";
import PreviousGuess from "./components/PreviousGuess";
import Status from "./components/Status";
import Reset from "./components/Reset";

const randInt = (lower, upper) => {
  if (!lower) lower = 1; // set lower limit to 1 if param is empty
  if (!upper) upper = 10; // set upper limit to 10 if param is empty
  var range = Number(upper) - Number(lower);
  return Math.trunc(Math.random() * range + Number(lower));
};

function App() {
  const [guessedNumber, setGuessedNumber] = useState(0);
  const [status, setStatus] = useState("");
  const [lower, setLower] = useState("");
  const [upper, setUpper] = useState("");
  const [answer, setAnswer] = useState(randInt(lower, upper));
  const [isReset, setIsReset] = useState(false);
  const instruction = `Guess the number between ${lower ? lower : 1} and ${
    upper ? upper : 10
  }`;

  useEffect(() => {
    if (lower.length > 0 && upper.length > 0) setAnswer(randInt(lower, upper));
  }, [lower, upper]);

  // useEffect(() => {
  //   console.log(answer);
  // }, [answer]);

  const setGuess = (guess) => {
    setGuessedNumber(guess);
  };

  const changeStatus = (status) => {
    setStatus(status);
  };

  const reset = () => {
    setGuessedNumber(0);
    setStatus("");
    setLower("");
    setUpper("");
    setAnswer(randInt(lower, upper));
    setIsReset(true);
  };

  const changeIsReset = (val) => {
    setIsReset(val);
  };

  const handleLimitChange = (limit, value) => {
    if (value.length === 0) {
      if (limit === "lower") setLower("");
      if (limit === "upper") setUpper("");
      return;
    }

    if (!value.search(/^[0-9]+$/)) {
      if (limit === "lower") setLower(value);
      if (limit === "upper") setUpper(value);
    } else {
      setStatus("Enter a valid number to begin");
    }
  };

  return (
    <div className="App mt-5">
      <div className="game-box m-auto">
        <h3 className="mb-3">Game on!!</h3>
        <h6>{instruction}</h6>
        <Status status={status} />
        <GuessInput
          setGuess={setGuess}
          answer={answer}
          changeStatus={changeStatus}
          guessedNumber={guessedNumber}
          isReset={isReset}
          changeIsReset={changeIsReset}
        />
        <PreviousGuess guessedNumber={guessedNumber} />
        <Limit
          limit="lower"
          handleLimitChange={handleLimitChange}
          lower={lower}
          upper={upper}
        />
        <Limit
          limit="upper"
          handleLimitChange={handleLimitChange}
          lower={lower}
          upper={upper}
        />
        <Reset reset={reset} />
      </div>
    </div>
  );
}

export default App;
