import React from 'react';
import './EditInfo.css';

const EditInfo=()=>{
    console.log("Edit Info rendered");
    return(
        <div>
            <div>
                <div className='editinfo-body'>
                <div className='editinfo-container'>
                    <div className='editinfo-rectangle'>
                    <div className='editinfo-header'>
                        <h3>EDIT INFORMATION</h3>
                    </div> 
                    <div className='form'>
                        <div className='column'>
                                <div className='input-box'>
                                    <label htmlFor='lastName'>Last Name</label>
                                    <div className='lastname'><input id="lastName" placeholder='Enter last name'></input></div>
                                </div>

                                <div className='input-box'>
                                    <label htmlFor='firstName'>First Name</label>
                                    <div className='firstname'><input id="firstName" placeholder='Enter first name'></input></div>
                                </div>
                        </div>

                        <div className='input-box'>
                            <label htmlFor='personalEmail'>Personal Email</label>
                            <div className='personalemail'><input id="personalEmail" placeholder='Enter personal email'></input></div>
                        </div>
                        
                        <div className='column'>
                            <div className='input-box'>
                                <label htmlFor='section'>Section</label>
                                <div className='section'><input id="section" placeholder='Choose section'></input>           </div>                 
                            </div>

                            <div className='input-box'>
                                <label htmlFor='adviser'>Adviser</label>
                                <div className='adviser'><input id="adviser" placeholder='Choose adviser'></input></div>
                            </div>
                        </div>

                        <div className='column'>
                            <div className='input-box'>
                                <label htmlFor='acadYear'>Academic Year</label>
                                <div className='academicyear'><input id="academicyear" placeholder='Academic Year'></input>      </div>                      
                            </div>

                            <div className='input-box'>
                                <label htmlFor='sem'>Semester</label>
                                <div className='semester'><input id="semester" placeholder='Semester'></input></div>
                            </div>
                        </div>
                        <div className='edit-container'><button className='editinfo-edit-button'>Edit</button></div>
                        {//<div><button className='editinfo-save-button'>Save</button></div>
                        }   

                    </div>
                    </div>
                </div>
                </div>


            </div>
        </div>
    )
}

export default EditInfo;