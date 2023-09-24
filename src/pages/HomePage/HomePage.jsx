import React from "react";
import "./homePage.scss";
import PetitionItem from "../../components/PetitionItem/PetitionItem";
import { useNavigate } from "react-router-dom";
// import UncontrolledExample from "../../components/Carousel/Carousel";
import CarouselFadeExample from "../../components/Carousel/Carousel";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="main_div">
      <h1>Гражданская Законодательной Инициативы в Кыргызстане</h1>
      <div className="section1">
        <div className="text">
          <h1>Политика Кыргызстана приближается к гендерному равенству</h1>
          <p>
            На момент завершения моего обучения в сентябре 2021 года Кыргызстан
            был страной, которая продвигала политику, приближающуюся к
            гендерному равенству, но при этом сталкивался с некоторыми вызовами
            и проблемами в этой области.
          </p>
          <a href="/categories">
            <button>Создать петицию</button>
          </a>
        </div>
        <CarouselFadeExample />
      </div>
      <div className="section2">
        <div className="petitions">
          <a href="/petition_page">
            <PetitionItem />{" "}
          </a>
          <a href="/petition_page">
            <PetitionItem />{" "}
          </a>
          <a href="/petition_page">
            <PetitionItem />{" "}
          </a>
        </div>
        <div className="categories">
          <p onClick={() => navigate("/login")}>CATEGORY 1</p>
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
          <p>CATEGORY 8</p>
        </div>
      </div>
      <button className="button_more">Загрузить больше</button>
      <footer>
        <p>© 2023, Name</p>
      </footer>
    </div>
  );
};

export default HomePage;
