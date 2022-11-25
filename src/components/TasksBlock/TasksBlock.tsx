import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { setFilteredTodosLength } from '../../store/slices/todosSlice';
import buttons from '../../constants/buttons';
import ITask from '../../interfaces/task';
import IState from '../../interfaces/state';
import TaskItem from './TaskItem/TaskItem';
import styles from './TasksBlock.module.scss';

const TasksBlock: React.FC = () => {
  const dispatch = useAppDispatch();
  const { todos, activeFilter, expanded } = useAppSelector(
    (state: IState) => state.todos
  );
  const [toShow, setToShow] = useState<ITask[]>([]);

  useEffect(() => {
    switch (activeFilter) {
      case buttons.active:
        setToShow(todos.filter((todo) => todo.completed === false));
        break;
      case buttons.completed:
        setToShow(todos.filter((todo) => todo.completed === true));
        break;
      default:
        setToShow(todos);
    }
  }, [todos, activeFilter]);

  useEffect(() => {
    dispatch(
      setFilteredTodosLength(
        todos.filter((todo) => todo.completed === false)?.length
      )
    );
  }, [todos]);

  const tasks = toShow?.map((task) => <TaskItem key={task.id} task={task} />);
  const addFirst = <div className={styles.suggestion}>Add your first todo</div>;

  return (
    <>
      {expanded && tasks}
      {expanded && todos?.length < 1 && addFirst}
    </>
  );
};

export default TasksBlock;
