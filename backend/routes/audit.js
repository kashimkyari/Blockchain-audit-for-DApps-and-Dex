const express = require('express');
const router = express.Router();
const { runAudit } = require('../controllers/auditController');

// Run audit route
router.post('/run', runAudit);

module.exports = router;
