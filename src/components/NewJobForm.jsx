import React from 'react';
import styled from 'styled-components';


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
  const HeadDiv = styled.div`
    height: 49px;
    width: 100%;
    text-align: center;
    padding-top: 10px;
    font-weight: bold;
    border-right: 2px solid black;
    border-top-right-radius: 10px;

  `;

  // drop down to select a specific type of job already in the system? Edit form to update? 

  return (
    <div className='main'>
      <HeadDiv>Add a Job To Board</HeadDiv>
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
          <br/>
        <button type='submit'>Add New Job</button>
      </form>
      <style jsx>{`
        .main {
          animation: openUp 0.3s ease-in;
        }
        form {
          padding-top: 20px;
          border: 2px solid black;
          background-color: lightgrey;
          // exact height needs work
          height: 100%;
          text-align: center;
        }
        input {
          border-radius: 5px;
          line-height: 20px;
          font-size: 18px;
          margin: 10px;
          padding: 2px;
        }
        button {
          line-height: 20px;
          font-size: 18px;
          margin: 10px;
          padding: 5px;
        }
        button:hover {
          background-color: lightgreen;
        }

        @keyframes openUp {
          0% {width: 0px}
          100% {width: 400px}
        }
      `}</style>
    </div>
  )
}

export default NewJobForm;