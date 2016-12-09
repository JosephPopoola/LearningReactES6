import React,{PropTypes} from 'react';
import {Link} from 'react-router';

const TaskListRow = ({task, onComplete}) => {
    onComplete = onComplete.bind(null,task);
    
    let btnColour = "btn-danger";
    if(task.complete === "true"){
        btnColour = "btn-success";
    }

    return (
        <tr>
            <td><Link to={"/task/"+ task.id}>{task.title}</Link></td>
            <td><button className={"btn btn-default " + btnColour} onClick={onComplete}>{task.complete}</button></td>
        </tr>
    );
};

TaskListRow.propTypes ={
    task: PropTypes.object.isRequired
};

export default TaskListRow;