/* eslint-disable arrow-body-style */
import React from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
  setActiveFilter,
  clearCompletedTodos,
} from '../../store/slices/todosSlice';
import buttons from '../../constants/buttons';
import IState from '../../interfaces/state';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { activeFilter, filteredTodosLength } = useAppSelector(
    (state: IState) => state.todos
  );

  const classNameMaker = (name: string) => {
    return activeFilter === name
      ? `${styles.button} ${styles['button-active']}`
      : styles.button;
  };

  const buttonConstructor = (name: string) => {
    return (
      <button
        type="button"
        name={name}
        className={classNameMaker(name)}
        onClick={() => {
          dispatch(setActiveFilter(name));
        }}
      >
        {name}
      </button>
    );
  };

  const tasksLeft: string = ` ${filteredTodosLength} item${
    filteredTodosLength === 1 ? ' ' : 's '
  } left`;

  return (
    <section className={styles.footer}>
      <div>{tasksLeft}</div>
      <div className={styles.filters}>
        {buttonConstructor(buttons.all)}
        {buttonConstructor(buttons.active)}
        {buttonConstructor(buttons.completed)}
      </div>
      <button
        type="button"
        name={buttons.clear}
        onClick={() => {
          dispatch(clearCompletedTodos());
        }}
      >
        {buttons.clear}
      </button>
    </section>
  );
};

export default Footer;
