const express = require("express");
const app = express();

// Custom middleware to log timestamp and requested URL
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`Timestamp: ${timestamp} - Requested URL: ${req.url}`);
  next();
});

// Example route
app.get("/", (req, res) => {
  res.send("Hello, this is the home page!");
});

// Start the Express server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// To run this code:

// Copy the code into a file, for example, app.js.
// Open a terminal and navigate to the directory where app.js is located.
// Install Express.js (if not installed) using the command: npm install express.
// Run the application with the command: node app.js.
// Now, when you visit http://localhost:3000/ in your browser or make any requests to the server, you should see the timestamp and requested URL logged in the terminal where the server is running.
