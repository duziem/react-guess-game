import React from "react";

const Status = ({ status }) => {
  return <div className={status && "status"}>{status}</div>;
};

export default Status;
