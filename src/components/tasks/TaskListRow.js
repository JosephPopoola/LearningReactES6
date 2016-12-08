import React,{PropTypes} from 'react';
import {Link} from 'react-router';

const TaskListRow = ({task}) => {
    return (
        <tr>
            <td><Link to={"/task/"+ task.id}>{task.title}</Link></td>
            <td>{task.complete}</td>
        </tr>
    );
};

TaskListRow.propTypes ={
    task: PropTypes.object.isRequired
};

export default TaskListRow;