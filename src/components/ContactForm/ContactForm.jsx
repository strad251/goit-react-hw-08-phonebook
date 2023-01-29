import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import { contactSelector } from 'redux/contacts/selectors';

import css from './ContactForm.module.css'
import { addContact } from 'redux/contacts/operations';


export const ContactForm = () => {
  
  const dispatch = useDispatch();
  const contacts = useSelector(contactSelector);
  
  const handleSubmit = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;

    const isExist = contacts.find(contact => {
      return contact.name === name;
    });
    if (isExist) {
      alert('contact already exists');
      return
    }

    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    dispatch(addContact(newContact));
    event.target.reset();
  };


  return (
    <>
    <h1 className={css.Title}>Phonebook</h1>
    <form className={css.Form} onSubmit={handleSubmit}>
      <label
        className={css.Label}>
        Name:
        <input
          className={css.Input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label
        className={css.Label}>
        Number:
        <input
          className={css.Input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.Btn} type='submit'>Add contact</button>
      </form>
      </>
  )
};