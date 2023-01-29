import { useSelector } from 'react-redux';
import { BounceLoader } from 'react-spinners';

import css from './ContactsPage.module.css'
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import ContactList from 'components/ContactsList/ContactsList';
import { selectIsLoading } from 'redux/contacts/selectors';
import { selectIsLoggedIn } from 'redux/user/selectors';

const override = {
  position: 'absolute',
  top: '42%',
  left: '45%',
  display: 'block',
};

function ContactsPage() {
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

export default ContactsPage;