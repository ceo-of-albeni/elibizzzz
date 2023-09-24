import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./CategoriesPage.scss";

const CategoriesPage = () => {
  return (
    <div className="categories_main">
      <ProgressBar now={20} className="categories_bar" />
      <h1>Категории</h1>
      <div className="all_categories">
        <p>CATEGORY 1</p>
        <p>CATEGORY 2</p>
        <p>CATEGORY 3</p>
        <p>CATEGORY 4</p>
        <p>CATEGORY 5</p>
        <p>CATEGORY 6</p>
        <p>CATEGORY 7</p>
        <p>CATEGORY 8</p>
        <p>CATEGORY 9</p>
        <p>CATEGORY 6</p>
        <p>CATEGORY 7</p>
        <p>CATEGORY 8</p>
        <p>CATEGORY 9</p>
        <p>CATEGORY 6</p>
        <p>CATEGORY 7</p>
      </div>
      <a href="/title">
        <button>Продолжить</button>
      </a>
      <p id="categories_signed">
        70 230 человек подписали петиции по теме "Политика"
      </p>
    </div>
  );
};

export default CategoriesPage;
