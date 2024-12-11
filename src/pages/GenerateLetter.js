import React from 'react';
import './GenerateLetter.css';

const GenerateLetter = () => {
  return (
    <div className="endorsement-container">
      <h1 className="endorsement-header">Endorsement Letter</h1>
      <div className="endorsement-requirements">
        <table className="requirements-table">
          <thead>
            <tr>
              <th className="requirements-header">REQUIREMENTS</th>
              <th className="status-header">STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Necessary student information are filled out</td>
              <td className="status-completed">Completed</td>
            </tr>
            <tr>
              <td>All required documents are uploaded</td>
              <td className="status-uncompleted">Uncompleted</td>
            </tr>
          </tbody>
        </table>
        <p className="endorsement-note">
          *** The Endorsement Letter will only be available for printing once the conditions are met. Please complete the requirements. ***
        </p>
      </div>
      <button className="generate-button">Generate Endorsement Letter</button>
      <div className="endorsement-output">
        <p>generated endorsement letter here . . .</p>
      </div>
    </div>
  );
};

export default GenerateLetter;
