import css from './Title.module.css';
import PropTypes from 'prop-types';

export const Title = ({ text }) => <h1 className={css.title}>{text}</h1>;

Title.propTypes = {
  text: PropTypes.string,
};

