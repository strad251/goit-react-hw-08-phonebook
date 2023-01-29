import UserMenu from 'components/UserMenu/UserMenu';
import css from './AppBar.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/user/selectors';


function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <h1 className={css.logo}>Contact Book</h1>
      <div>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <div className={css.nav}>
            <Link className={css.link} to={'/register'}>
              Register
            </Link>
            <Link className={css.link} to={'/login'}>
              Log In
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default AppBar;