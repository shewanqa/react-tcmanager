import React from 'react';
import Scenario from './Scenario.js';
import DUMMYSCENARIO from './TestData.js'
import './ScenarioEditor.css';

function TestCaseEditor(props) {

  console.log(DUMMYSCENARIO);

  return (
    <div className="scenario-editor">
      <Scenario scenarios={props.scenarios} onScenarioDrop={props.onScenarioDrop} DUMMY_SCENARIO={DUMMYSCENARIO} />
    </div>
  )
}

export default TestCaseEditor
