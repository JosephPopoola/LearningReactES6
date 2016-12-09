import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as taskActions from '../../actions/taskActions';
import TaskEditForm from './TaskEditForm';
import toastr from 'toastr';

class TaskEditPage extends Component {
    constructor(props, context) {
        super(props);

        this.state = {
            task: Object.assign({}, this.props.task),
            errors : '',
            saving: false
        };

        this.updateTaskState = this.updateTaskState.bind(this);
        this.saveTask = this.saveTask.bind(this);
    }

  componentWillReceiveProps(nextProps){
      if(this.props.task.id != nextProps.task.id){
          this.setState({task: Object.assign({}, nextProps.task)});
      }
  }

  updateTaskState(event) {
    const field = event.target.name;
    let task = this.state.task;
    task[field] = event.target.value;
    return this.setState({task: task});
  }

  saveTask(event){
      event.preventDefault();
      this.setState({saving:true});
      this.props.actions.saveTask(this.state.task)
        .then(()=> this.redirect())
        .catch(error => {
            this.setState({saving:false});
            toastr.error(error, "Oops!");
        });
      
  }

  redirect(){
      this.setState({saving:false});
      toastr.success("Bits is really right", "Success");
      this.context.router.push('/tasks');
  }

    render() {
        return (
            <div>
                <TaskEditForm 
                task={this.state.task}
                onSave={this.saveTask}
                onChange={this.updateTaskState}
                saving={this.state.saving}
                errors=""/>
            </div>
        );
    }
}

TaskEditPage.propTypes = {
    task: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

TaskEditPage.contextTypes = {
    router: PropTypes.object
};

function getTaskById(tasks, id){
    const task = tasks.filter(task => task.id == id);
    if(task) return task[0];
    return null;
}

const mapStateToProps = (state, ownProps) => {
    const taskId = ownProps.params.id;

    let task = {};

    if(state.tasks.length > 0){
        task = getTaskById(state.tasks, taskId);
    }
    
    return {
        task: task,
        actions: PropTypes.object.isRequired
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(taskActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskEditPage);

