import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from 'redux/user/operations';

import css from './Login.module.css';
import { selectIsLoggedIn } from 'redux/user/selectors';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);
  
  function handleLogin(e) {
    e.preventDefault();
    dispatch(
      loginUser({
      email: e.target.elements[0].value,
      password: e.target.elements[1].value,
      })
    );
  };

  return (
    <form className={css.form} onSubmit={handleLogin}>
      <label className={css.label}>
        Email
      </label>
      <input type="email" name="email" className={css.input} />
      <label className={css.label}>
        Password
      </label>
      <input type="password" name="password" className={css.input} minLength="8" />
      <button className={css.Btn} type="submit">
        Submit
      </button>
    </form>
  );
}

export default Login;