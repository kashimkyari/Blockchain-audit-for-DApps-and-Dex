import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [audits, setAudits] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/audit') // Correct API endpoint
      .then(response => setAudits(response.data))
      .catch(error => console.error('Error fetching audits:', error));
  }, []);

  return (
    <div>
      <h2>Audit Reports</h2>
      {audits.length > 0 ? (
        <ul>
          {audits.map(audit => (
            <li key={audit._id}>
              <h3>{audit.title}</h3>
              <p>{audit.description}</p>
              <a href={`/audit/${audit._id}`}>View Details</a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No audit reports available.</p>
      )}
    </div>
  );
};

export default Home;
