import React, { useState } from 'react';
import { runAudit } from './services/auditService';
import './App.css'; // Import the CSS for styling

function App() {
  const [contractCode, setContractCode] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await runAudit(contractCode);
      setResult(response.data);
    } catch (error) {
      setResult({ error: 'An error occurred while running the audit.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1>Blockchain Audit Application</h1>
        <p>Analyze and audit your smart contracts and decentralized exchanges.</p>
      </header>
      <main>
        <form onSubmit={handleSubmit} className="audit-form">
          <textarea
            value={contractCode}
            onChange={(e) => setContractCode(e.target.value)}
            rows="15"
            placeholder="Paste your smart contract code here..."
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Running Audit...' : 'Run Audit'}
          </button>
        </form>
        {result && (
          <div className="results">
            <h2>Audit Results</h2>
            {result.error ? (
              <p className="error">{result.error}</p>
            ) : (
              <pre>{JSON.stringify(result, null, 2)}</pre>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
