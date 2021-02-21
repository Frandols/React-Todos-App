import React from 'react';

//Components
import Todo from './Todo'

const TodoList = ({ todos, setTodos, filteredTodos }) => {

    return(
        <div className='todo-container'>
            <div className='todo-container-info'>
                <ul className='todo-list'>
                    {filteredTodos.map(todo => (
                        <Todo key={todo.id} todo={todo} text={todo.text} completed={todo.completed} todos={todos} setTodos={setTodos}/>
                    ))}
                </ul>
            </div>
        </div>
    );

}

export default TodoList;