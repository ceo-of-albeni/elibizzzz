import React from "react";
import "./petitionItem.scss";

const PetitionItem = () => {
  return (
    <div className="card-body">
      <div className="card-text">
        <h6>Name Surname</h6>
        <h2>Change the article headline</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
          distinctio quam inventore saepe? Harum, fugit? Et sit tempora mollitia
          totam! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Harum, fugit? Et sit tempora mollitia totam!
        </p>
        <div className="card_bottom">
          <h5>22/01/2023</h5>
          <h5>00000 votes</h5>
        </div>
      </div>
      <img
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
        alt=""
      />
    </div>
  );
};

export default PetitionItem;
