import React from 'react';
import './UploadRequirements.css';

const UploadRequirements=()=>{
    return(
        <div className='uploadreq-body'>
            <div className='uploadreq-container'>
            <div className='uploadreq-rectangle'>
                <div className='uploadreq-header'><h3>UPLOAD REQUIREMENTS</h3></div>
                <div className='uploadreq-top'>
                    <div className='uploadreq-p1'><p>REQUIREMENTS TO UPLOAD</p></div>
                    <div className='uploadreq-p2'><p>STATUS</p></div>
                </div>
                <div className='box'>
                    <label htmlFor='parent-consent'>Parent Consent</label>
                    <input type='file' id='parent-consent'></input>
                </div>
    
                <div className='box'>
                    <label htmlFor='med-exam'>Medical Exam Result</label>
                    <input type='file' id='medical-exam'></input>
                </div>

                <div className='box'>
                    <label htmlFor='psychological-exam'>Psychological Exam Result</label>
                    <input type='file' id='psychological-exam'></input>
                </div>

                <div className='box'>
                    <label htmlFor='resume'>Resume</label>
                    <input type='file' id='resume'></input>
                </div>        
            </div>
        </div>
        </div>
    )
}

export default UploadRequirements;