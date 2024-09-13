import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/dashboard-stats') // Update with your actual backend API endpoint
      .then(response => setStats(response.data))
      .catch(error => console.error('Error fetching dashboard stats:', error));
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        {stats ? (
          <pre>{JSON.stringify(stats, null, 2)}</pre>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
