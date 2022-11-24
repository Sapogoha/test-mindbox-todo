import React from 'react';
import Input from '../../components/Input/Input';
import TasksBlock from '../../components/TasksBlock/TasksBlock';
import Footer from '../../components/Footer/Footer';
import styles from './MainPage.module.scss';

const MainPage: React.FC = () => (
  <section className={styles.todo}>
    <h2 className={styles.header}>todos</h2>
    <div className={styles.mainPart}>
      <Input />
      <TasksBlock />
      <Footer />
    </div>
  </section>
);

export default MainPage;
