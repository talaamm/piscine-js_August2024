import fs from 'fs';
import path from 'path';

// Get command-line arguments
const inputFile = process.argv[2];
const action = process.argv[3]; // "encode" or "decode"
const newFileName = process.argv[4]; // Optional

// Check if action is valid
if (!inputFile || !action || (action !== 'encode' && action !== 'decode')) {
  console.error("Usage: node tell-it-cypher.mjs <inputFile> <encode|decode> [newFileName.ext]");
  process.exit(1);
}

try {
  // Read the input file content
  const fileContent = fs.readFileSync(inputFile, 'utf8');
  let result;

  // Perform encoding or decoding
  if (action === 'encode') {
    result = Buffer.from(fileContent, 'utf8').toString('base64'); // Encode to base64
  } else if (action === 'decode') {
    result = Buffer.from(fileContent, 'base64').toString('utf8'); // Decode from base64
  }

  // Determine output file name
  const outputFile = newFileName || (action === 'encode' ? 'cypher.txt' : 'clear.txt');

  // Write the result to the output file
  fs.writeFileSync(outputFile, result, 'utf8');
  console.log(`File successfully ${action}d and saved as ${outputFile}`);
} catch (err) {
  console.error("Error:", err.message);
}
