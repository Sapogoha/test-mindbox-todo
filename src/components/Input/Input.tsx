import React, { useState, useRef, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addTodo, toggleExpanded } from '../../store/slices/todosSlice';
import open from '../../img/open.png';
import styles from './Input.module.scss';

const Input: React.FC = () => {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(document.createElement('input'));
  const { activeFilter, todos } = useAppSelector((state) => state.todos);
  const initialState = '';
  const [value, setValue] = useState(initialState);

  useEffect(() => {
    inputRef.current.focus();
  }, [activeFilter, todos]);

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.button}
        type="button"
        onClick={() => {
          dispatch(toggleExpanded());
        }}
      >
        <img className={styles.icon} src={open} alt="иконка - открыть" />
      </button>

      <input
        type="text"
        className={styles.input}
        placeholder="What needs to be done?"
        value={value}
        ref={inputRef}
        onChange={(evt) => {
          setValue(evt.target.value);
        }}
        onKeyDown={(evt) => {
          if (evt.key === 'Enter' && value.trim() !== initialState) {
            dispatch(addTodo(value.trim()));
            setValue(initialState);
          }
        }}
      />
    </div>
  );
};

export default Input;
