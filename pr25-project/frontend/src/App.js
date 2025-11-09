import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [health, setHealth] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/data`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
      setData({ message: 'Error connecting to backend', error: error.message });
    }
    setLoading(false);
  };

  const checkHealth = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/health`);
      const result = await response.json();
      setHealth(result);
    } catch (error) {
      console.error('Health check failed:', error);
      setHealth({ status: 'ERROR', message: 'Backend unavailable' });
    }
  };

  useEffect(() => {
    fetchData();
    checkHealth();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Deployed Production App</h1>
        <p>Environment: {process.env.NODE_ENV || 'development'}</p>
        
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <button onClick={fetchData} disabled={loading}>
            {loading ? 'Loading...' : 'Refresh Data'}
          </button>
          <button onClick={checkHealth}>
            Check Backend Health
          </button>
        </div>
        
        {health && (
          <div className="data-container" style={{ backgroundColor: health.status === 'OK' ? '#1a3a1a' : '#3a1a1a' }}>
            <h2>Backend Health:</h2>
            <pre>{JSON.stringify(health, null, 2)}</pre>
          </div>
        )}
        
        {data && (
          <div className="data-container">
            <h2>Backend Response:</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
        
        <div className="info">
          <h3>Deployment Information:</h3>
          <p><strong>Frontend URL:</strong> {window.location.origin}</p>
          <p><strong>Backend API:</strong> {process.env.REACT_APP_API_URL}</p>
          <p><strong>Environment:</strong> {process.env.NODE_ENV || 'development'}</p>
        </div>
      </header>
    </div>
  );
}

export default App;