import React from "react";
import FormCheck from 'react-bootstrap/FormCheck';
import CloseButton from 'react-bootstrap/CloseButton';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';

const ToDo = ({task, handleToggle, handleRemove}) => {
    function handleSwitch(e) {
        // e.preventDefault();
        handleToggle(e.currentTarget.id);
    }

    function handleDelete(e) {
        e.preventDefault();
        handleRemove(e.currentTarget.id);
    }

    return (
        <div className={task.complete ? 'checked' : ''} >
            <Container className="taskWrap">
                <Col lg={10}>
                    <span className="taskName">{task.task}</span>
                </Col>
                <Col className="taskOptions">
                <FormCheck 
                    onChange={handleSwitch}
                    checked={task.complete}
                    type="switch"
                    id={task.id}
                />
                <CloseButton 
                    id={task.id}
                    onClick={handleDelete}
                    variant="danger"
                />
                </Col>
            </Container>
        </div>
    )
}

export default ToDo;