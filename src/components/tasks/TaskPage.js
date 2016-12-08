import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as taskActions from '../../actions/taskActions';
import {bindActionCreators} from 'redux';
import TaskList from './TaskList';
import TextInput from '../common/TextInput';

class TaskPage extends Component {
    constructor(props, context) {
        super(props, context);
        
        this.state ={
            task: { title: ""},
            errors: ''
        };

        this.onClickSave = this.onClickSave.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
    }
    
   onTitleChange(e){
       const task = this.state.task;
       task.title = e.target.value;
       this.setState({task: task});
   } 

   onClickSave(){
       this.props.actions.createTaskSuccess(this.state.task);
       this.setState({task: {title: ''}});
   }

   taskRow(task, index){
       return <div key={index}>{task.title}</div>;
   }

    render() {
        return (
            <div>
            <br/>
                <TextInput 
                    name = "TaskPage"
                    value={this.state.task.title}
                    onChange={this.onTitleChange}
                    placeholder="Add Task"
                    error = {this.state.errors}

                 />
                <input type="submit" 
                className="btn btn-primary"
                onClick={this.onClickSave} />
                <h1>Tasks</h1>
                <TaskList tasks = {this.props.tasks}/>    
            </div>
        );
    }
}

// TaskPage.propTypes = {
//     dispatch: PropTypes.func.isRequired,
//     tasks: PropTypes.array.isRequired
// };

const mapStateToProps = (state, ownProps) => {
    return {
        tasks: state.tasks
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(taskActions, dispatch)
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(TaskPage);

