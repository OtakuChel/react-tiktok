import { CircularProgress } from "@mui/material";
import React from "react";

const Spinner = () => {
  return (
    <div className="spinner">
      <CircularProgress size={30} />
    </div>
  );
};

export default Spinner;
