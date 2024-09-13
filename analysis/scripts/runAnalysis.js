const analyzeWithMythril = require('../tools/mythril');

const contractPath = process.argv[2];

analyzeWithMythril(contractPath)
  .then(result => console.log('Analysis Result:', result))
  .catch(err => console.error('Analysis Error:', err));
