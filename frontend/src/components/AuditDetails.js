import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AuditDetails = () => {
  const { id } = useParams();
  const [audit, setAudit] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/audit/${id}`) // Correct API endpoint
      .then(response => setAudit(response.data))
      .catch(error => console.error('Error fetching audit details:', error));
  }, [id]);

  return (
    <div>
      {audit ? (
        <div>
          <h2>{audit.title}</h2>
          <p>{audit.description}</p>
          <h3>Findings</h3>
          <pre>{audit.findings}</pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AuditDetails;
