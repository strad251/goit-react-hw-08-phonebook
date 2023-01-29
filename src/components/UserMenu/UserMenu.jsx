import { useDispatch } from 'react-redux';
import css from './UserMenu.module.css';

import { logoutUser } from 'redux/user/operations';

import { useAuth } from 'hooks/useAuth';



function UserMenu() {
  const dispatch = useDispatch();
  const { user }  = useAuth();
 



  return (
    <>
      <div className={css.userMenu}>
        <p className={css.text}>Welcome, {user.name}!</p>
        <button className={css.Btn} type="button" onClick={() => dispatch(logoutUser())}>
          Logout
        </button>
      </div>
    </>
  );
}

export default UserMenu;