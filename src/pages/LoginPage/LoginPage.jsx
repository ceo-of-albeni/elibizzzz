import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { userLogin, checkAuthMe } from "../../redux/slices/authSlice";

import "./loginPage.scss";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { status } = useSelector(state => state.auth);
  const isAuth = useSelector(checkAuthMe);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) navigate("/");
  }, [status, isAuth, navigate]);

  const handleSubmit = () => {
    try {
      dispatch(userLogin({ username, password }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <form onSubmit={e => e.preventDefault()}>
        <h3 className="login_title">Вход</h3>

        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Username"
          className=""
        />

        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className=""
        />

        <button type="submit" onClick={handleSubmit} className="">
          Войти
        </button>
        <p>Звбыли пароль?</p>
      </form>
    </div>
  );
};

export default LoginPage;
