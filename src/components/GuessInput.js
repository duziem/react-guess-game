import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const GuessInput = ({
  setGuess,
  answer,
  changeStatus,
  isReset,
  changeIsReset,
}) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    if (isReset) setInput("");
  }, [isReset]);

  const handleChange = (value) => {
    console.log(value);
    setInput(value);
    changeStatus("");
  };

  const handleClick = () => {
    // validate that the input guess field is not empty
    if (input.length === 0) {
      changeStatus("Enter a number to begin");
      return;
    }

    // validate that the input is a number
    if (!input.search(/^[0-9]+$/)) {
      if (Number(input) > answer) {
        setGuess(input);
        changeStatus("Go lower");
      }
      if (Number(input) < answer) {
        setGuess(input);
        changeStatus("Go Higher");
      }
      if (Number(input) === answer) {
        setGuess(input);
        changeStatus("You did it!! Great work champ");
      }
    } else {
      changeStatus("Enter a valid number to begin");
    }

    if (isReset) changeIsReset(false);
  };

  return (
    <div>
      <InputGroup className="mb-3">
        <Form.Control
          className="control"
          placeholder="Guess a number"
          aria-label="Guess"
          aria-describedby=""
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
        <Button
          className="text-white"
          variant="warning"
          id="button-addon2"
          onClick={handleClick}
        >
          Guess
        </Button>
      </InputGroup>
    </div>
  );
};

export default GuessInput;
