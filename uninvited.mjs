// Import required modules
import http from 'http';
import fs from 'fs';
import path from 'path';

// Define the server port
const PORT = 5000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    // Parse the guest name from the URL (remove leading '/')
    const guestName = req.url.slice(1);

    // Collect the body data from the POST request
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString(); // Append the data chunk
    });

    req.on('end', () => {
      // Define the path to save the guest's data (whether it's JSON or not)
      const filePath = path.join('guests', `${guestName}.json`);

      // Write the raw body data (even if it's not JSON) to the file
      fs.writeFile(filePath, body, 'utf8', err => {
        if (err) {
          // Respond with 500 Internal Server Error if there's an issue
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'server failed' }));
        } else {
          // Respond with 201 Created and the saved raw data
          res.writeHead(201, { 'Content-Type': 'application/json' });
          res.end(body); // Return the raw body that was saved
        }
      });
    });
  } else {
    // For any non-POST request, respond with 404 Not Found
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'not found' }));
  }
});

// Start listening on the specified port
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
