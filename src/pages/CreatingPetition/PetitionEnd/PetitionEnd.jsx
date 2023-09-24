import React from "react";
import "./PetitionEnd.scss";

const PetitionEnd = () => {
  return (
    <div className="end_main">
      <div className="succesfully">
        <h1>Ваша петиция готова!</h1>
        <a href="/">
          <button>OK</button>
        </a>
      </div>
    </div>
  );
};

export default PetitionEnd;
