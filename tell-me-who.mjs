// tell-me-who.mjs
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

    // Filter out the '.json' extension
    const jsonFiles = files.filter(file => file.endsWith('.json'));

    // Sort the files alphabetically by last name (the part before the underscore)
    const sortedFiles = jsonFiles.sort((a, b) => {
      const [firstA, lastA] = a.split('_');  // Split by underscore
      const [firstB, lastB] = b.split('_');
      return lastA.localeCompare(lastB);     // Compare by last name
    });

    // Format the files: "Number. Lastname Firstname"
    const formattedGuests = sortedFiles.map((file, index) => {
      // Remove the file extension '.json'
      const fileNameWithoutExt = path.basename(file, '.json');

      // Split the file name by the underscore to get [Firstname, Lastname]
      const [firstname, lastname] = fileNameWithoutExt.split('_');

      // Return formatted name as "Number. Lastname Firstname"
      return `${index + 1}. ${lastname} ${firstname}`;
    });

    // Print each guest on a new line
    formattedGuests.forEach(guest => console.log(guest));
  });
} catch (error) {
  console.error("An unexpected error occurred:", error.message);
}
