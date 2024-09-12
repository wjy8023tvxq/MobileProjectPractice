import React, { useState } from 'react';
import axios from 'axios';
import './FileUpload.css';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

const onSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append('file', file);

  try {
    const res = await axios.post('http://localhost:5001/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    setMessage(res.data.message);
  } catch (err) {
    if (err.response) {
      // The request was made, and the server responded with a status code
      // that falls out of the range of 2xx
      setMessage(err.response.data.message || 'Error uploading file');
    } else if (err.request) {
      // The request was made, but no response was received
      setMessage('No response received from the server. Please try again later.');
    } else {
      // Something happened in setting up the request that triggered an Error
      setMessage('An error occurred while uploading the file.');
    }
  }
};

  return (
    <div className='upload-container'>
      <h2>File Upload</h2>
      <form onSubmit={onSubmit}>
        <div>
          <input type="file" onChange={onFileChange} />
        </div>
        <div>
          <button type="submit">Upload</button>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default FileUpload;
