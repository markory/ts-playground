import React from 'react';
import { Todo } from '../actions';
import { StoreState } from '../reducers/index';
import { connect } from 'react-redux';
import { fetchTodos } from '../actions/index';

interface AppProps {
    todos: Todo[];
    fetchTodos(): any;
}

class _App extends React.Component<AppProps> {

    onButtonClick = ():void =>{
        this.props.fetchTodos();
    }

    renderList():JSX.Element[]{
        return this.props.todos.map((todo:Todo)=>{
            return <div key={todo.id}>{todo.title}</div>
        });
    }

    render() {
        return (
        <div>
            <button onClick={this.onButtonClick}>Fetch</button>
            {this.renderList()}
        </div>
        );
    }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
    return { todos };
};

export const App = connect(
    mapStateToProps,
    {fetchTodos}
)(_App);