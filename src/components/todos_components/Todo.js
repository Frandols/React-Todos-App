import React from 'react';

const Todo = ({ todo, text, completed, todos, setTodos }) => {

    const completeHandler = () => {

        setTodos(todos.map(item => {
            if(item.id === todo.id){
                    return{
                        ...item, completed: !completed
                    };
            }
            return item;
        }))

    }

    const deleteHanlder = () => {

        setTodos(todos.filter(item => item.id !== todo.id))

    }

    return(
        <div className={`todo-${completed ? 'completed' : 'uncompleted'}`}>
            <div className='todo-head'>
                <div className='status-circle'>
                    <div className={`status-${completed ? 'completed' : 'uncompleted'}`}></div>
                </div>
                <button className='todo-button' onClick={completeHandler}>
                    <i className="fas fa-check-square"></i>
                </button>
                <button className='todo-button' onClick={deleteHanlder}>
                    <i className="fas fa-trash"></i>
                </button>
            </div>
            <div className='todo-info'>
                <p>
                    {text}
                </p>
            </div>
            <div className='todo-foot'>
                <p>
                    Status: {completed ? 'completed' : 'uncompleted'}
                </p>
            </div>
        </div>
    );

}

export default Todo;