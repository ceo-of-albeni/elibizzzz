import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./PetitionSolution.scss";

const PetitionSolution = () => {
  return (
    <div id="solution_main">
      <ProgressBar now={100} className="solution_bar" />
      <h1>Решение проблемы</h1>
      <h4>
        Начните с нуля или воспользуйтесь предлагаемой нами структурой,
        приведенной ниже. Вы всегда можете редактировать свою петицию, даже
        после ее публикации.
      </h4>

      <input type="text" className="textbox_solution" />

      <div className="solution_buttons">
        <a href="/body">
          <button id="solution_btn1">Вернуться</button>
        </a>
        <a href="/end">
          <button id="solution_btn2">Продолжить</button>
        </a>
      </div>
    </div>
  );
};

export default PetitionSolution;
