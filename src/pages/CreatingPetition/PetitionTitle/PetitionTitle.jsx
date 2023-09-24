import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./PetitionTitle.scss";
import Form from "react-bootstrap/Form";

const PetitionTitle = () => {
  return (
    <div className="title_main">
      <ProgressBar now={40} className="title_bar" />
      <h1>Напишите заголовок петиции</h1>
      <h4>Опишите ситуацию и расскажите, что бы вы хотели изменить.</h4>
      <h5>Заголовок петиции*</h5>
      <Form.Control
        size="lg"
        type="text"
        placeholder="Click and start typing"
        className="title_form"
      />
      <p>90</p>
      <div className="title_buttons">
        <a href="/categories">
          <button id="btn1">Вернуться</button>
        </a>
        <a href="/photo">
          <button id="btn2">Продолжить</button>
        </a>
      </div>
      <div className="hints">
        <h3>Подсказки</h3>
        <div className="hints_blocks">
          <h4>Пишите четко и кратко</h4>
          <h5>
            Например: "Законодательно запретите массовую травлю собак в
            Волгоградской области."
          </h5>
        </div>
        <div className="hints_blocks">
          <h4>Сделайте акцент на том, как можно решить проблему</h4>
          <h5>Например: "Примите в России закон против домашнего насилия."</h5>
        </div>
        <div className="hints_blocks">
          <h4>Расскажите о важности и срочности</h4>
          <h5>
            Например: "Остановите вырубку нашего парка, пока еще не поздно."
          </h5>
        </div>
      </div>
    </div>
  );
};

export default PetitionTitle;
