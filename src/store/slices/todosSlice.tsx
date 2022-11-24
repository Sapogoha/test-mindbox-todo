/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

import buttons from '../../data/buttons';

import ITask from '../../interfaces/task';
import ITodos from '../../interfaces/todos';

const initialState: ITodos = {
  todos: [],
  activeFilter: buttons.all,
  filteredTodosLength: 0,
  expanded: true,
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
    },
    setActiveFilter(state, action: PayloadAction<string>) {
      state.activeFilter = action.payload;
    },
    setFilteredTodosLength(state, action: PayloadAction<number>) {
      state.filteredTodosLength = action.payload;
    },
    clearCompletedTodos(state) {
      state.todos = state.todos.filter((todo) => todo.completed !== true);
    },
    toggleExpanded(state) {
      state.expanded = !state.expanded;
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
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
