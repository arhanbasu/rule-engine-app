// backend/index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const ruleRoutes = require('./routes/ruleRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api', ruleRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

