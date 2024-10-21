// verydisco-reverso.mjs
import fs from 'fs';

// Get the file name from command-line arguments
const fileName = process.argv[2];

if (!fileName) {
  console.error("Please provide a file name as the first argument");
  process.exit(1);
}

// Function to reverse the "very disco" transformation
const reverseVeryDisco = (word) => {
  const mid = Math.floor(word.length / 2);
  const firstHalf = word.slice(mid);  // Get the first half from where it was originally swapped
  const secondHalf = word.slice(0, mid);  // Get the second half
  return firstHalf + secondHalf;
};

// Read the file
try {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading file:", err.message);
      process.exit(1);
    }

    // Split the content into words
    const words = data.split(" ");
    
    // Reverse the transformation for each word
    const decipheredWords = words.map(reverseVeryDisco);
    
    // Join the words back into a sentence and print the result
    console.log(decipheredWords.join(" "));
  });
} catch (error) {
  console.error("An unexpected error occurred:", error.message);
}
