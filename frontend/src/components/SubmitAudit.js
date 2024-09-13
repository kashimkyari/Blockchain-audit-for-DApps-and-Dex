import React, { useState } from 'react';
import axios from 'axios';

const SubmitAudit = () => {
  const [contractAddress, setContractAddress] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/audit', { 
      title: contractAddress, // Assuming title is used as contract address
      description 
    }) // Correct API endpoint
      .then(response => {
        setStatus('Audit submitted successfully!');
        setContractAddress('');
        setDescription('');
      })
      .catch(error => {
        setStatus('Failed to submit audit.');
        console.error('Error submitting audit:', error);
      });
  };

  return (
    <div>
      <h2>Submit New Audit</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={contractAddress}
          onChange={(e) => setContractAddress(e.target.value)}
          placeholder="Contract Address"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
        <button type="submit">Submit</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default SubmitAudit;
