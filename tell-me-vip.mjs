import fs from 'fs';
import path from 'path';

// Get the directory path from the command line or use the current directory
const dirPath = process.argv[2] || '.';

// Read the directory and process the JSON files
fs.readdir(dirPath, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err.message);
    return;
  }

  // Filter JSON files from the directory
  const jsonFiles = files.filter(file => file.endsWith('.json'));

  // Read and process each JSON file to filter guests who said 'yes' (case-insensitive)
  const vipPromises = jsonFiles.map(file => {
    return new Promise((resolve, reject) => {
      const filePath = path.join(dirPath, file);

      // Read the JSON file
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          return reject(`Error reading file ${file}: ${err.message}`);
        }

        // Parse the JSON data
        try {
          const guest = JSON.parse(data);
          // Check if the guest answered 'yes' (case-insensitive)
          if (guest.answer && guest.answer.toLowerCase() === 'yes') {
            // Remove the .json extension and split the filename to get first and last names
            const [firstname, lastname] = file.replace('.json', '').split('_');
            resolve({ firstname, lastname });
          } else {
            resolve(null);
          }
        } catch (err) {
          reject(`Error parsing JSON in file ${file}: ${err.message}`);
        }
      });
    });
  });

  // Wait for all promises to resolve
  Promise.all(vipPromises).then(guests => {
    // Filter out null values (guests who didn't say 'yes')
    const vipGuests = guests.filter(guest => guest !== null);

    // Sort guests alphabetically by last name
    vipGuests.sort((a, b) => a.lastname.localeCompare(b.lastname));

    // Format the output as "Number. Lastname Firstname"
    const formattedGuests = vipGuests.map((guest, index) => `${index + 1}. ${guest.lastname} ${guest.firstname}`);

    // Write the result to vip.txt
    fs.writeFile('vip.txt', formattedGuests.join('\n'), err => {
      if (err) {
        console.error("Error writing to vip.txt:", err.message);
        return;
      }
      console.log('VIP list saved to vip.txt');
    });
  }).catch(err => {
    console.error(err);
  });
});
