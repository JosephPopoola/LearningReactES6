import React, {PropTypes} from 'react';
import TaskListRow from './TaskListRow';

const TaskList = ({tasks, deleteTask, onComplete}) => {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Complete?</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => 
                        <TaskListRow key={task.id} task={task} onComplete={onComplete}/>
                        )}
                </tbody>
            </table>
        );
};

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired
};

export default TaskList;