import React from "react";
import Button from "react-bootstrap/Button";

const Reset = ({ reset }) => {
  return (
    <div>
      <Button
        className="text-white mt-3"
        variant="warning"
        onClick={() => reset()}
      >
        Reset
      </Button>{" "}
    </div>
  );
};

export default Reset;
