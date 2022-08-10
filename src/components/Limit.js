import React from "react";
import Form from "react-bootstrap/Form";

const Limit = ({ limit, handleLimitChange, lower, upper }) => {
  return (
    <div>
      <Form.Control
        className="control mb-3"
        aria-describedby=""
        onChange={(e) => handleLimitChange(limit, e.target.value)}
        value={limit === "lower" ? lower : upper}
        placeholder={
          limit === "lower" ? "Enter lower bound" : "Enter higher bound"
        }
      />
    </div>
  );
};

export default Limit;
