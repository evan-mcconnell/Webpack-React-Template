import React, { useState } from 'react';
import styled from 'styled-components';
import LaneDisplay from './LaneDisplay';
import JobBoardOptions from './JobBoardOptions';
import NewJobForm from './NewJobForm';

function JobBoard() {

  const [newJobOpen, setNewJobOpen] = useState(true);

  function handleOpenNewJob() {
    setNewJobOpen(!newJobOpen)
  }
  const FlexDiv = styled.div`
    display: flex;
    flex-direction: row;
  `;
  const HeadDiv = styled.div`
    height: 30px;
    wdith: 100%;
  `;

  return (
    <div>
      <HeadDiv></HeadDiv>
      <JobBoardOptions onOpenNewJob={handleOpenNewJob}/>
      <FlexDiv>
        { newJobOpen && 
          <NewJobForm /> 
        }
        <LaneDisplay />
      </FlexDiv>
      <style jsx>{`
        NewJobForm {
          height: 100%;
        }
        
      `}</style>
    </div>
  );
}

export default JobBoard;