import React, { useState } from 'react';
import './UploadRequirements.css';

const UploadRequirements = () => {
  const [files, setFiles] = useState({
    parentConsent: { name: "", status: "Invalid", file: null },
    medicalExam: { name: "", status: "Invalid", file: null },
    psychologicalExam: { name: "", status: "Invalid", file: null },
    resume: { name: "", status: "Invalid", file: null },
  });

  const handleFileChange = (e, key) => {
    const file = e.target.files[0];
    setFiles({
      ...files,
      [key]: {
        name: file ? file.name : "",
        status: file ? "Valid" : "Invalid",
        file: file || null,
      },
    });
  };

  const handleFileRemove = (key) => {
    setFiles({
      ...files,
      [key]: { name: "", status: "Invalid", file: null },
    });
  };

  const allValid = Object.values(files).every((file) => file.status === "Valid");

  return (
    <div className="upload-container">
      <h1 className="upload-header">Upload Requirements</h1>
      <div className="requirements-table-container">
        <table className="requirements-table">
          <thead>
            <tr>
              <th className="table-header">REQUIREMENTS TO UPLOAD</th>
              <th className="table-header">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(files).map(([key, file]) => (
              <tr key={key}>
                <td>
                  <div className="file-row">
                    <input
                      type="file"
                      id={key}
                      onChange={(e) => handleFileChange(e, key)}
                      className="upload-input"
                    />
                    {file.name && (
                      <>
                        <span className="file-name">{file.name}</span>
                        <button
                          className="remove-file"
                          onClick={() => handleFileRemove(key)}
                        >
                          ✕
                        </button>
                      </>
                    )}
                  </div>
                </td>
                <td className={file.status === 'Valid' ? 'status-valid' : 'status-invalid'}>
                  {file.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="moa-validation-container">
        <p>{allValid ? "All files are valid!" : "Not all files are valid! Please upload required necessary documents."}</p>
        <button
          className={`moa-validation-button ${allValid ? 'enabled' : 'disabled'}`}
          disabled={!allValid}
          onClick={() => alert("MOA Validation clicked!")}
        >
          MOA Validation
        </button>
      </div>
    </div>
  );
};

export default UploadRequirements;
