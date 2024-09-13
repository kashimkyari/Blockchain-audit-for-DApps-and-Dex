const { analyzeSmartContract, performComplianceCheck } = require('../services/auditService');

exports.runAudit = async (req, res) => {
  try {
    const { contractCode, platform } = req.body;
    const analysisResult = await analyzeSmartContract(contractCode, platform);
    const complianceResult = await performComplianceCheck(contractCode);
    res.json({ analysisResult, complianceResult });
  } catch (error) {
    res.status(500).json({ error: 'Failed to perform audit.' });
  }
};
