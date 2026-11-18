const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
app.disable('x-powered-by');
app.use(express.static(path.join(__dirname)));
app.get('/health', (_req, res) => res.json({ status: 'ok', service: 'CarePulse' }));
app.get('*', (_req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.listen(PORT, () => console.log('CarePulse running on port ' + PORT));
