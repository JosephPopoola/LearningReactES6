import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as taskActions from '../../actions/taskActions';
import {bindActionCreators} from 'redux';

class TaskPage extends Component {
    constructor(props, context) {
        super(props, context);
        
        this.state ={
            task: { title: ""}
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
       this.props.actions.createTask(this.state.task);
       this.setState({task: {title: ''}});
   }

   taskRow(task, index){
       return <div key={index}>{task.title}</div>;
   }

    render() {
        return (
            <div>
                <h1>Tasks</h1>
                {this.props.tasks.map(this.taskRow)}
                <h2>Add Task</h2>
                <input type="text" onChange={this.onTitleChange} value={this.state.task.title} />
                <input type="submit" onClick={this.onClickSave} />
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

