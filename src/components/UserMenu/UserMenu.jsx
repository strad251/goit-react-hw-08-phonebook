import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { selectToken, selectUser } from 'redux/user/userSlice';
import { logoutUser } from 'redux/services/createUser';

function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  function handleLogout() {
    dispatch(logoutUser(token));
  }

  return (
    <>
      <div className={css.userMenu}>
        <p className={css.text}>Welcome, {user.name}!</p>
        <button className={css.Btn} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </>
  );
}

export default UserMenu;