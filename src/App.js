import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

//Komponente
import Header from './Header';
import ToDoList from './ToDoList';
import AddTask from './AddTask';

//Stylesheet
import './App.css';

function App() {
  const [ toDoList, setToDoList ] = useState([]);
  const [ newTask, setNewTask ] = useState('');
  const [ isActive, setIsActive ] = useState(false);

  const handleToggle = (id) => {
    let updatedList = toDoList.map(task => {
      return task.id == id ? {...task, complete: !task.complete} : {...task}
    });
    setToDoList(updatedList);
  }

  const handleRemove = (id) => {
    let updatedList = toDoList.filter(task => {
      return task.id != id
    })
    setToDoList(updatedList);
  }

  const handleChange = (value) => {
    setNewTask(value);
  }

  const handleSubmit = () => {
    if (newTask === '') {
      return;
    };
    let lastId = 0;
    if (toDoList.length === 0) {
      lastId = 0;
    } else {
      lastId = Math.max.apply(Math, toDoList.map(function(o) { return o.id; }));
    }
    let addedTask = {
      id: lastId + 1,
      task: newTask,
      complete: false
    }
    let updatedList = [...toDoList, addedTask];
    setToDoList(updatedList);
    setNewTask('');
    setIsActive(false);
  }

  function handleIsActive(e) {
    e.preventDefault();
    setIsActive(!isActive);
}


  return (
    <Col lg='5' className="App">
      <Header />
      <div className='buttonWrap'>
      <Button variant="success" onClick={handleIsActive} className={isActive ? 'hide' : ''}>ADD NEW TASK</Button>
      </div>
      <AddTask isActive={isActive} newTask={newTask} handleChange={handleChange} handleSubmit={handleSubmit}/>
      <ToDoList taskList={toDoList} handleToggle={handleToggle} handleRemove={handleRemove}/>
    </Col>
  );
}

export default App;
