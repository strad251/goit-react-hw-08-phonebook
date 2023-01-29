import { Link, useNavigate } from 'react-router-dom';
import css from './SignUp.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from 'redux/user/operations';
import { selectIsLoggedIn } from 'redux/user/selectors';
import { useEffect } from 'react';



function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);
  const handleSignUp = e => {
    e.preventDefault();
  
    dispatch(
      createUser({
      name: e.target.elements[0].value,
      email: e.target.elements[1].value,
      password: e.target.elements[2].value,
      })
    );
  };

  return (
    <form className={css.form} onSubmit={handleSignUp}>
      <label className={css.label}>
        Name
      </label>
      <input type="text" name="name" className={css.input} />
      <label className={css.label}>
        Email
      </label>
      <input type="email" name="email" className={css.input} />
      <label className={css.label} htmlFor="password">
        Password
      </label>
      <input className={css.input} type="password" name="password" />
      <button className={css.submit} type="submit">
        Submit
      </button>
    </form>
  );
}

export default SignUp;