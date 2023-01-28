import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/filter/filterSlice';
import css from './Filter.module.css'

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div className={css.Filter}>
    <p className={css.label}>Find contacts by name</p>
    <input
        type="text"
        className={css.input}
        onChange={e => {
        const action = filterContact(e.target.value);
        dispatch(action);
      }}
    />
    </div>
  );
};