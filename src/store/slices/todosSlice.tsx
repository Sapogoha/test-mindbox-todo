/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

import buttons from '../../data/buttons';

import ITask from '../../interfaces/task';
import ITodos from '../../interfaces/todos';

const savedTodos = localStorage.getItem('todos');
const savedActiveFilter = localStorage.getItem('activeFilter');
const savedFilteredTodosLength = localStorage.getItem('filteredTodosLength');
const savedExpanded = localStorage.getItem('expanded');

const initialState: ITodos = {
  todos: savedTodos !== null ? JSON.parse(savedTodos) : [],
  activeFilter:
    savedActiveFilter !== null ? JSON.parse(savedActiveFilter) : buttons.all,
  filteredTodosLength:
    savedFilteredTodosLength !== null
      ? Number(JSON.parse(savedFilteredTodosLength))
      : 0,
  expanded: savedExpanded !== null ? Boolean(JSON.parse(savedExpanded)) : true,
};

export const todosSlice = createSlice({
  name: 'todosSlice',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      const todo: ITask = {
        id: nanoid(),
        task: action.payload,
        completed: false,
      };

      state.todos.push(todo);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    toggleCompleted(state, action: PayloadAction<string>) {
      state.todos = [
        ...state.todos.map((todo) => {
          if (todo.id === action.payload) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      ];
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    setActiveFilter(state, action: PayloadAction<string>) {
      state.activeFilter = action.payload;
      localStorage.setItem('activeFilter', JSON.stringify(state.activeFilter));
    },
    setFilteredTodosLength(state, action: PayloadAction<number>) {
      state.filteredTodosLength = action.payload;
      localStorage.setItem(
        'filteredTodosLength',
        JSON.stringify(state.filteredTodosLength)
      );
    },
    clearCompletedTodos(state) {
      state.todos = state.todos.filter((todo) => todo.completed !== true);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    toggleExpanded(state) {
      state.expanded = !state.expanded;
      localStorage.setItem('expanded', JSON.stringify(state.expanded));
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
  },
});

export const {
  addTodo,
  toggleCompleted,
  setActiveFilter,
  setFilteredTodosLength,
  clearCompletedTodos,
  toggleExpanded,
  removeTodo,
} = todosSlice.actions;

export default todosSlice.reducer;
