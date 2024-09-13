import React, { useState } from 'react';
import { runAudit } from './services/auditService';

function App() {
  const [contractCode, setContractCode] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await runAudit(contractCode);
    setResult(response.data);
  };

  return (
    <div>
      <h1>Blockchain Audit Application</h1>
      <form onSubmit={handleSubmit}>
        <textarea value={contractCode} onChange={(e) => setContractCode(e.target.value)} />
        <button type="submit">Run Audit</button>
      </form>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}

export default App;
