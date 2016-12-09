import React from 'react';
import TextInput from '../common/TextInput';

export const TaskEditForm = ({task, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Doing the wrong bits for {task.title}</h1>
      <TextInput
        name="title"
        label="Title"
        value={task.title}
        onChange={onChange}
        error={errors}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

TaskEditForm.propTypes = {
  task: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.string
};

export default TaskEditForm;
