

import { useSelector } from 'react-redux';
import { BounceLoader } from 'react-spinners';
import { selectIsLoading } from 'redux/contacts/contactsSlice';
import { selectIsLoggedIn } from 'redux/user/userSlice';
import css from './MainPage.module.css';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

import AppBar from 'components/AppBar/AppBar';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import ContactList from 'components/ContactsList/ContactsList';

const override = {
  position: 'absolute',
  top: '42%',
  left: '45%',
  display: 'block',
};

function MainPage() {
  const loading = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <AppBar />
      {isLoggedIn ? (
        <>
          <ContactForm />
          <Filter />
          <ContactList />
          <BounceLoader
            cssOverride={override}
            color={'#36d7b7'}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </>
      ) : (
        <h2 className={css.text}>Please authorize to proceed</h2>
      )}
    </>
  );
}

export default MainPage;