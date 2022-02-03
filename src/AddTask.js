import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddTask = ({newTask, handleChange, handleSubmit, isActive}) => {
    function handleInputChange(e) {
        e.preventDefault();
        handleChange(e.currentTarget.value);
    }

    function handleTaskSubmit(e) {
        e.preventDefault();
        handleSubmit();
    }

    return (
        <div className={isActive ? '' : 'hide'}>
            <div className="addTaskWrap">
                <Form.Control type="text" placeholder="Add task" value={newTask} onChange={handleInputChange}/>
                <Button variant="success" type="submit" onClick={handleTaskSubmit}>
                Submit
                </Button>
            </div>
        </div>
    )
}

export default AddTask;