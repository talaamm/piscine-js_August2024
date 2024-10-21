// Import required modules
import http from 'http';
import fs from 'fs';
import path from 'path';

// Define the server port
const PORT = 5000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Parse the guest name from the request URL
  const guestName = req.url.slice(1); // Remove the leading '/'
  
  if (guestName) {
    // Define the path to the guest JSON file
    const filePath = path.join('guests', `${guestName}.json`);
    
    // Read the guest file
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        // Handle file not found or other errors
        if (err.code === 'ENOENT') {
          res.writeHead(404, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'guest not found' }));
        } else {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'server failed' }));
        }
      } else {
        // Send the file content as JSON
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
      }
    });
  } else {
    // Handle invalid requests
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'guest not found' }));
  }
});

// Start listening on the specified port
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
