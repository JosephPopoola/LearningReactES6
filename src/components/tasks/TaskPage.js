import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as taskActions from '../../actions/taskActions';
import {bindActionCreators} from 'redux';
import TaskList from './TaskList';
import TextInput from '../common/TextInput';
import toastr from 'toastr';

export class TaskPage extends Component {
    constructor(props, context) {
        super(props, context);
        
        this.state ={
            task: { title: ""},
            errors: {}
        };

        this.onClickSave = this.onClickSave.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onComplete = this.onComplete.bind(this);
    }
    
    isFormValid(){
        let isFormValid = true;
        let errors = {};

        if(this.state.task.title.length < 1){
            errors.title = "You need to add something...";
            isFormValid = false;
            this.setState({errors: errors});
        }

        return isFormValid;
    }

   onTitleChange(e){
       const task = this.state.task;
       task.title = e.target.value;
       this.setState({task: task});
   } 

   onComplete(taskClicked){
       const task = Object.assign({}, taskClicked);
       task.complete = (task.complete === "true") ? "false" : "true";
       this.props.actions.saveTask(task);
   }

   onClickSave(){
       if(!this.isFormValid()){
           return;
       }

       const task = this.state.task;
       task.complete = "false";
       this.setState({task: task});
       this.props.actions.saveTask(this.state.task)
        .then(() => this.resetState())
        .catch(error => {
            toastr.error(error, "Oops!");
        });
   }

   resetState(){
       this.setState({task: {title: ''}});
       toastr.success("Bits to be did","Success");
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
                    error = {this.state.errors.title}

                 />
                <input type="submit" 
                className="btn btn-primary"
                onClick={this.onClickSave}
                value="Add"/>
                <h1>Tasks</h1>
                <TaskList tasks = {this.props.tasks} onComplete={this.onComplete}/>    
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

