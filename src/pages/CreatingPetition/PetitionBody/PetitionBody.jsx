import React from "react";
import "./PetitionBody.scss";
import ProgressBar from "react-bootstrap/ProgressBar";

const PetitionBody = () => {
  return (
    <div id="body_main">
      <ProgressBar now={80} className="body_bar" />
      <h1>Опишите проблему подробнее</h1>
      <h4>
        Начните с нуля или воспользуйтесь предлагаемой нами структурой,
        приведенной ниже. Вы всегда можете редактировать свою петицию, даже
        после ее публикации.
      </h4>

      <input type="text" className="textbox_body" />

      <div className="body_buttons">
        <a href="/photo">
          <button id="body_btn1">Вернуться</button>
        </a>
        <a href="/solution">
          <button id="body_btn2">Продолжить</button>
        </a>
      </div>
    </div>
  );
};

export default PetitionBody;
