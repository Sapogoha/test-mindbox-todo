import React from 'react';
import { useAppDispatch } from '../../../store/hooks';
import { toggleCompleted, removeTodo } from '../../../store/slices/todosSlice';
import ITask from '../../../interfaces/task';
import empty from '../../../img/empty.png';
import done from '../../../img/done.png';
import remove from '../../../img/remove.png';
import styles from './TaskItem.module.scss';

interface ItemProps {
  task: ITask;
}

const TaskItem: React.FC<ItemProps> = ({ task }) => {
  const dispatch = useAppDispatch();

  const pic = task.completed ? done : empty;
  const alt = task.completed
    ? 'иконка - выполнено'
    : 'иконка - предстоит выполнить';
  const textClass = task.completed ? styles['text-light'] : styles.text;

  return (
    <div className={styles.task}>
      <div className={styles.left}>
        <button
          className={styles.button}
          type="button"
          onClick={() => {
            dispatch(toggleCompleted(task.id));
          }}
        >
          <img className={styles.img} src={pic} alt={alt} />
        </button>
        <div className={textClass}>{task.task}</div>
      </div>

      <button
        type="button"
        className={styles.button}
        onClick={() => {
          dispatch(removeTodo(task.id));
        }}
      >
        <img className={styles.img} src={remove} alt="иконка - удалить" />
      </button>
    </div>
  );
};

export default TaskItem;
