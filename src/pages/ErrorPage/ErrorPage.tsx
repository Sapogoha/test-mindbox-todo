import React from 'react';
import { useNavigate } from 'react-router-dom';
import links from '../../constants/links';
import styles from './ErrorPage.module.scss';

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.error}>
      <h2 className={styles.header}>404 - Страница не найдена</h2>
      <div className={styles.bottom}>
        <p>Извините, такая страница не существует</p>
        <button
          className={styles.button}
          type="button"
          onClick={() => navigate(links.main)}
        >
          На главную
        </button>
      </div>
    </section>
  );
};

export default ErrorPage;
