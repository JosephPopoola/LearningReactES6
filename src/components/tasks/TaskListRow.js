import React,{PropTypes} from 'react';
import {Link} from 'react-router';

const TaskListRow = ({task}) => {
    return (
        <tr>
            <td>{task.title}</td>
            <td>{task.complete}</td>
        </tr>
    );
};

TaskListRow.propTypes ={
    task: PropTypes.object.isRequired
};

export default TaskListRow;