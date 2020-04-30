import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions';

export interface StoreState {
    todos: Todo[]
}

// now the store state todo needs to be the same
// of todos in combiner
export const reducers = combineReducers<StoreState>({
    todos: todosReducer
});
