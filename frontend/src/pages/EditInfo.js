import React, {useState} from 'react';
import axios from 'axios';
import './EditInfo.css';

const EditInfo=()=>{
    console.log("Edit Info rendered");

    const[lastName, setLastName]=useState('');
    const[firstName, setFirstName]=useState('');
    const[personalEmail, setPersonalEmail]=useState('');
    const[section, setSection]=useState('');
    const[adviser, setAdviser]=useState('');
    const[academicYear, setAcademicYear]=useState('');
    const[semester, setSemester]=useState('');

    const[isEditing, setIsEditing]=useState(false);

    const handleInputChange=(e, setter)=>{
        setter(e.target.value);
    }

    const handleEditClick=()=>{
        setIsEditing(true);
    }

    const handleCancelClick=()=>{
        setLastName('');
        setFirstName('');
        setPersonalEmail('');
        setSection('');
        setAdviser('');
        setAcademicYear('');
        setSemester('');
        setIsEditing(false);
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();

        const formData={
            lastName,
            firstName,
            personalEmail,
            section,
            adviser,
            academicYear,
            semester,
        };

        try{
            const response = await axios.post('http://localhost:8080', formData);
            alert(response.data.message);
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating student details:', error);
            alert('Failed to update student details.');
        }
    };

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
                                    <div className='lastname'>
                                        <input 
                                            id="lastName" 
                                            placeholder="Enter last name"
                                            value={lastName}
                                            disabled={!isEditing}
                                            onChange={(e)=>handleInputChange(e, setLastName)}></input>
                                    </div>
                                </div>

                                <div className='input-box'>
                                    <label htmlFor='firstName'>First Name</label>
                                    <div className='firstname'>
                                        <input 
                                            id="firstName"
                                            placeholder="Enter first name"
                                            value={firstName}
                                            disabled={!isEditing}
                                            onChange={(e) => handleInputChange(e, setFirstName)}></input>
                                        </div>
                                </div>
                        </div>

                        <div className='input-box'>
                            <label htmlFor='personalEmail'>Personal Email</label>
                            <div className='personalemail'>
                                <input 
                                    id="personalEmail"
                                    placeholder="Enter personal email"
                                    value={personalEmail}
                                    disabled={!isEditing}
                                    onChange={(e) => handleInputChange(e, setPersonalEmail)}></input>
                            </div>
                        </div>
                        
                        <div className='column'>
                            <div className='input-box'>
                                <label htmlFor='section'>Section</label>
                                <div className='section'>
                                    <input 
                                        id="section"
                                        placeholder="Choose section"
                                        value={section}
                                        disabled={!isEditing}
                                        onChange={(e) => handleInputChange(e, setSection)}></input>           
                                </div>                 
                            </div>

                            <div className='input-box'>
                                <label htmlFor='adviser'>Adviser</label>
                                <div className='adviser'>
                                    <input 
                                        id="adviser"
                                        placeholder="Choose adviser"
                                        value={adviser}
                                        disabled={!isEditing}
                                        onChange={(e) => handleInputChange(e, setAdviser)}></input>
                                </div>
                            </div>
                        </div>

                        <div className='column'>
                            <div className='input-box'>
                                <label htmlFor='acadYear'>Academic Year</label>
                                <div className='academicyear'>
                                    <input id="academicyear"
                                        placeholder="Academic Year"
                                        value={academicYear}
                                        disabled={!isEditing}
                                        onChange={(e) => handleInputChange(e, setAcademicYear)}></input>      
                                    </div>                      
                            </div>

                            <div className='input-box'>
                                <label htmlFor='sem'>Semester</label>
                                <div className='semester'>
                                    <input 
                                        id="semester"
                                        placeholder="Semester"
                                        value={semester}
                                        disabled={!isEditing}
                                        onChange={(e) => handleInputChange(e, setSemester)}></input>
                                </div>
                            </div>
                        </div>
                        <div className='edit-container'>
                            {isEditing?(
                                <>
                                <button 
                                    className='editinfo-save-button'
                                    onClick={handleSubmit}>Save</button>
                                <button
                                    className='editinfo-cancel-button'
                                    onClick={handleCancelClick}>Cancel</button>
                                </>
                            ):(
                                <button 
                                    className='editinfo-edit-button'
                                    onClick={handleEditClick}>Edit</button>
                            )}
                        </div> 
                    </div>
                    </div>
                </div>
                </div> 
            </div>
        </div>
    )
}
export default EditInfo;