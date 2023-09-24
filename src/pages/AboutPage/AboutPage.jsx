import React from "react";
import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <div className="themainest">
      <div className="about_maindiv">
        <h1>About Us</h1>
        <div className="about_section1">
          <div className="about_text">
            <h1>What is this web-site for?</h1>
            <p>
              Very short description what's actually being discussed in article;
              maybe the first sentece to provide a preview. Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Accusantium doloribus,
              pariatur libero aperiam repellendus soluta consequatur facere
              temporibus eius doloremque quos aspernatur ipsum eveniet laborum
              consequuntur eligendi aliquid autem, expedita esse itaque quis
              exercitationem alias? Nesciunt quo culpa accusamus voluptatibus.
            </p>
            {/* <button>Создать петицию</button> */}
          </div>
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            alt=""
          />
        </div>
        <div className="about_section2">
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            alt=""
          />
          <div className="about_text2">
            <h1>What is this web-site for?</h1>
            <p>
              Very short description what's actually being discussed in article;
              maybe the first sentece to provide a preview. Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Accusantium doloribus,
              pariatur libero aperiam repellendus soluta consequatur facere
              temporibus eius doloremque quos aspernatur ipsum eveniet laborum
              consequuntur eligendi aliquid autem, expedita esse itaque quis
              exercitationem alias? Nesciunt quo culpa accusamus voluptatibus.
            </p>
            {/* <button>Создать петицию</button> */}
          </div>
        </div>
        <div className="about_section3">
          <div className="about_text">
            <h1>What is this web-site for?</h1>
            <p>
              Very short description what's actually being discussed in article;
              maybe the first sentece to provide a preview. Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Accusantium doloribus,
              pariatur libero aperiam repellendus soluta consequatur facere
              temporibus eius doloremque quos aspernatur ipsum eveniet laborum
              consequuntur eligendi aliquid autem, expedita esse itaque quis
              exercitationem alias? Nesciunt quo culpa accusamus voluptatibus.
            </p>
            {/* <button>Создать петицию</button> */}
          </div>
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            alt=""
          />
        </div>
        <div className="contacts">
          <h1>Contacts</h1>
          <p>
            <strong>Phone Numbers: </strong> 000 000 000 000, 111 111 111 111
          </p>
          <p>
            <strong>Email: </strong> namesurname@gmail.com
          </p>
          <p>
            <strong>Address: </strong>Kiev st, 100
          </p>
        </div>
      </div>
      <footer>
        <p>© 2023, Name</p>
      </footer>
    </div>
  );
};

export default AboutPage;
