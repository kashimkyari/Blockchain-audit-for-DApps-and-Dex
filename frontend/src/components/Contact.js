import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/contact', { message })
      .then(response => {
        setStatus('Message sent successfully!');
        setMessage('');
      })
      .catch(error => {
        setStatus('Failed to send message.');
        console.error('Error sending message:', error);
      });
  };

  return (
    <div>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="4"
          cols="50"
          placeholder="Enter your message"
        />
        <br />
        <button type="submit">Send</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default Contact;
