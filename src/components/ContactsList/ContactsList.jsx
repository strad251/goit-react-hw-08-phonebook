
import css from './ContactList.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/services/getContacts';
import { selectFilteredContacts } from 'redux/contacts/selectors';

const ContactList = () => {

  const filter = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <>
      <ul className={css.list}>
        {filter.map(contact => (
      <li key={contact.id} className={css.listItem}>
      <span>{contact.name}: {contact.number}</span>
      <button className={css.Btn} type="button" onClick={() => dispatch(deleteContact(contact))}>
        Delete
      </button>
      </li>
        ))}
      </ul>
    </>
  );
};
export default ContactList;