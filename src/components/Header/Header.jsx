import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

import { checkAuthMe, logout } from "../../redux/slices/authSlice";

import "./header.scss";

const Header = () => {
  const isAuth = useSelector(checkAuthMe);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    window.localStorage.removeItem("token");
  };

  return (
    <div className="header_navbar">
      <div className="container_header">
        <NavLink to={"/"} href="/" className="header_logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/0/07/Ala-Too_International_University_Seal.png"
            alt=""
          />
          {/* Eldin oyu */}
        </NavLink>

        <div className="header_links">
          <Link to="/about" className="header_links__item">
            О нас
          </Link>
          <a href="/" className="header_links__item">
            Петиции
          </a>
          <a href="/" className="header_links__item">
            Что-то
          </a>
          <a href="/" className="header_links__item">
            Контакты
          </a>
        </div>

        <div className="login_btn">
          {isAuth ? (
            <button onClick={handleLogout}>Выход</button>
          ) : (
            <Link to={"/login"}> Войти </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
