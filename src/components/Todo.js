import React from 'react';

const Todo = props => {
    return(
        <li>{props.todo}<button onClick={props.delete}>x</button></li>
    )
}

export default Todo;

