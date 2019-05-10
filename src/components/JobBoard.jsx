import React, { useState } from 'react';
import LaneDisplay from './LaneDisplay';
import JobBoardOptions from './JobBoardOptions';
import NewJobForm from './NewJobForm';

function JobBoard() {

  const [newJobOpen, setNewJobOpen] = useState(true);
  function handleOpenNewJob() {
    setNewJobOpen(!newJobOpen)
  }

  return (
    <div>
      <JobBoardOptions onOpenNewJob={handleOpenNewJob}/>
      <NewJobForm />
      <LaneDisplay />
    </div>
  );
}

export default JobBoard;