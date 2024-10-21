// tell-me-how-many.mjs
import fs from 'fs';
import path from 'path';

// Get the directory path from command-line arguments or default to the current directory
const dirPath = process.argv[2] || '.';

try {
  // Read the directory contents
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err.message);
      process.exit(1);
    }

    // Get the number of entries in the directory
    const numFiles = files.length;

    // Print only the number of files (no extra text)
    console.log(numFiles);
  });
} catch (error) {
  console.error("An unexpected error occurred:", error.message);
}
