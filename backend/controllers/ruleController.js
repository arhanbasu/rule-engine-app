// backend/controllers/ruleController.js

// Temporary in-memory storage for rules
let rulesStorage = [];

/**
 * Stores rules sent by the frontend.
 * @param {Object} req - HTTP request, expected to have a body with `rules` array.
 * @param {Object} res - HTTP response.
 */
exports.storeRules = (req, res) => {
  const { rules } = req.body;
  
  if (!rules || !Array.isArray(rules)) {
    return res.status(400).json({ error: 'Rules should be an array of strings.' });
  }

  rulesStorage = rules;
  res.json({ status: 'Rules stored successfully' });
};

/**
 * Evaluates user data against stored rules.
 * @param {Object} req - HTTP request, expected to have a body with `user_data`.
 * @param {Object} res - HTTP response.
 */
exports.evaluateRules = (req, res) => {
  const { user_data: userData } = req.body;

  if (!userData || typeof userData !== 'object') {
    return res.status(400).json({ error: 'User data must be a valid object.' });
  }

  const results = {};
  let overallEligibility = true;

  try {
    // Evaluate each rule
    rulesStorage.forEach((rule, index) => {
      try {
        // Replace variable names in the rule with `userData.<variable>`
        const formattedRule = rule.replace(/\b(\w+)\b/g, (match) => {
          return userData.hasOwnProperty(match) ? `userData.${match}` : match;
        });

        // Evaluate the formatted rule
        const ruleResult = eval(formattedRule);
        results[`Rule ${index + 1}`] = ruleResult;
        if (!ruleResult) overallEligibility = false;
      } catch (error) {
        // If rule evaluation fails, log error and set rule result as "Error"
        results[`Rule ${index + 1}`] = `Error: ${error.message}`;
        overallEligibility = false;
      }
    });

    res.json({
      results,
      eligible: overallEligibility,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

