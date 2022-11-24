import ITask from './task';

interface ITodos {
  todos: ITask[];
  filteredTodosLength: number;
  activeFilter: string;
  expanded: boolean;
}

export default ITodos;
