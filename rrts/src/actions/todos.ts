import axios from 'axios';
import { Dispatch, Action } from 'redux';
import { ActionTypes } from './types';

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export interface DeleteTodoAction {
    type: ActionTypes.deleteTodo;
    payload: number;
}

export interface FetchTodosActions {
    type: ActionTypes.fetchTodos;
    payload: Todo[];
}

const url = 'http://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get<Todo[]>(url);

        dispatch<FetchTodosActions>({ type: ActionTypes.fetchTodos, payload: response.data });
    };
};

export const deleteTodo = (id: number): DeleteTodoAction => {
    return {
        type: ActionTypes.deleteTodo,
        payload: id,
    };
};