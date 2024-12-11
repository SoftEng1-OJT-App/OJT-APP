import React from 'react';
import './MainPage.css';

const MainPage = () => {
  return (
    <div className="main-container">
      <h1 className="main-header">Welcome to New Era University's OJT App!</h1>
      <p className="main-description">
      The OJT App streamlines your On-the-Job Training experience by providing easy access to essential features such
      <br></br>as uploading required documents, editing personal information, and generating endorsement letters.
      <br></br><br></br>Please proceed to the relevant pages and complete your OJT requirements.
      </p>
      <div className="main-buttons">
        <button className="main-button">View Dashboard</button>
      </div>
    </div>
  );
};

export default MainPage;
