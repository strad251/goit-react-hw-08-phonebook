import css from './HomePage.module.css'

export default function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
         Welcome to your personal contact book!
      </h1>
    </div>
  );
}