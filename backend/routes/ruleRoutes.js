// backend/routes/ruleRoutes.js
const express = require('express');
const router = express.Router();
const ruleController = require('../controllers/ruleController');

// Route to store rules
router.post('/rules', ruleController.storeRules);

// Route to evaluate user data against rules
router.post('/evaluate', ruleController.evaluateRules);

module.exports = router;

