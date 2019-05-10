import React from 'react';

function NewJobForm() {
  let _title = null;
  let _desciption = null;
  let _lanes = null;

  function handleNewJobSubmission(e) {
    e.preventDefault();
    console.log(_title.value);
    console.log(_desciption.value);
    console.log(_lanes.value);
    _title = '';
    _desciption = '';
    _lanes = '';
  }

  return (
    <div>
      <form onSubmit={handleNewJobSubmission}>
        <input type='text' 
          id='title'
          placeholder='title'
          ref={(input) => {_title = input;}} />
        <input type='text' 
          id='desciption'
          placeholder='desciption'
          ref={(input) => {_desciption = input;}} />
        <input type='text' 
          id='lanes'
          placeholder='lanes'
          ref={(input) => {_lanes = input;}} />
        <button type='submit'>Add New Job</button>
      </form>
    </div>
  )
}

export default NewJobForm;