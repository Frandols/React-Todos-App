import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import './App.css';

// Components
import Register from './components/register/Register';
import Nav from './components/nav_components/Nav';
import Form from './components/todos_components/Form';
import TodoList from './components/todos_components/TodoList';
import Help from './components/help/Help';

const App = () => {

  // States

  const [userName, setUserName] = useState('');

  const [userPhoto, setUserPhoto] = useState('');

  const [inputText, setInputText] = useState('');

  const [todos, setTodos] = useState([]);

  const [status, setStatus] = useState('all');

  const [filteredTodos, setFilteredTodos] = useState([]);

  // Use Effect

  useEffect(() => {
    getUserCredentials();
    getLocalTodos();
  }, [])

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status])

  // Items
  const name_storaged = localStorage.getItem('user-name');

  const image_storaged = localStorage.getItem('user-image');

  // Functions

  const getUserCredentials = () => {

    if(name_storaged){

      setUserName(name_storaged);

      if(image_storaged){

        setUserPhoto(image_storaged);

      }

    }

  }

  const filterHandler = () => {

    switch(status){

      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;

      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;

      default:
        setFilteredTodos(todos)
        break;

    }

  }

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]))
    }
    else{
      var local_todos = JSON.parse(localStorage.getItem('todos'));
      setTodos(local_todos);
    }
  }

  return (
    <Router>

      <Route exact path='/React-Todos-App/'>
        <div className='app'>
          <Nav userName={userName} userPhoto={userPhoto}/>
            <div className='title'>
              <h1>{`${ userName ? `${userName}'s` : 'Your' } Todo List`}</h1>
            </div>
          <Form setStatus={setStatus} todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
          <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
        </div>
      </Route>

      <Route path='/React-Todos-App/register'>

      { name_storaged ? <Redirect to='/React-Todos-App/'/> : <Redirect to='/React-Todos-App/register'/> }

        <Register setUserName={setUserName} setUserPhoto={setUserPhoto} userName={userName} userPhoto={userPhoto}/>
      </Route>

      <Route path='/help'>
        <Help/>
      </Route>

    </Router>

  );
}

export default App;
