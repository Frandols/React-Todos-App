import React from 'react';

const Form = ({ setStatus, inputText, setInputText, todos, setTodos }) => {
    
    const inputTextHandler = (e) => {

        setInputText(e.target.value);

    }

    const submitTodoHandler = () => {

        if(inputText === ''){

            alert('Type something to add a to-do!');
            return false;

        }

        setTodos([...todos,
            {
                text: inputText,
                completed: false,
                id: todos.length
            }
        ]);
        setInputText('');

    }

    const statusHandler = (e) => {

        setStatus(e.target.value)

    }

    return(
        <div className='form'>
            <div className='form-add'>
                <input type='text' value={inputText} className='form-add-input' onChange={inputTextHandler}></input>
                <button className='form-add-button' onClick={submitTodoHandler}>Add</button>
            </div>
            <div className='form-view'>
                <select className='form-view-select' onChange={statusHandler}>
                    <option value='all'>All</option>
                    <option value='completed'>Completed</option>
                    <option value='uncompleted'>Uncompleted</option>
                </select>
            </div>
        </div>
    );

}

export default Form;
