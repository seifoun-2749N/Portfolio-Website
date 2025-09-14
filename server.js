const express = require('express');
const path = require('path');
const app = express();

// Get port from environment variable or default to 3000
const port = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static('.'));

// Handle all routes by serving index.html (for single page apps)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`Portfolio website running on port ${port}`);
});