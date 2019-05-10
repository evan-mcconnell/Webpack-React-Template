import React from 'react';
import styled from 'styled-components';
import {initialState} from './../../redux/modules/jobBoard';
import Job from './Job';


const Main = styled.div`
  height: 100%;
  flex-grow: 1;
  min-width: 350px;
`;
const LaneName = styled.div`
  text-align: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  height: 40px;
`;

const jobsList = initialState.masterJobsList;

function Lane(props) {
  return (
    <Main>
      <LaneName>
        <h4>{props.laneinfo.name}</h4>
      </LaneName>
      <div className="lane-content">
        {Object.keys(jobsList).map(function(jobId, index) {
          let lane = props.laneinfo.name;
          let jobLane = jobsList[jobId].lane;
          if (jobLane === lane){
            return <Job jobInfo={jobsList[jobId]}
                        lane={lane}
              key={index} />;
          }
        })}
      </div>
      <style jsx>{`
        h4 {
          margin-top: 10px;
          font-size: 1.2em
        }
        .lane-content {
          height: 50vw;
          background-color: lightgrey; 
      // background color will be a function to gradually show a gradient of greys
          border: 1px solid black;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </Main>
  );
}

export default Lane;