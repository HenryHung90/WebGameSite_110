import React from "react";
import { useNavigate } from "react-router-dom";

const ShortCut = ({ Group }) => {
  const gotoGroup = useNavigate();

  return (
    <div
      className="ShortCutBox"
      id={`ShortCutBox_${Group}`}
      onClick={() => {
        gotoGroup(`/G${Group}`);
      }}
    ></div>
  );
};

export default ShortCut;
