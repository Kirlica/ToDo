import React from "react";

import ToDo from "./ToDo";

const ToDoList = ({taskList, handleToggle, handleRemove}) => {
    return (
        <div>
            {taskList.map(todo => {
                return (
                    <ToDo task={todo} handleToggle={handleToggle} handleRemove={handleRemove}/>
                )
            })}
        </div>
    )
}

export default ToDoList;