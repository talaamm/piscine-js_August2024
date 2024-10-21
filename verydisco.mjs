// verydisco.mjs
// Get the argument from the command line
const input = process.argv[2];

if (!input) {
  console.error("Please provide an argument");
  process.exit(1);
}

// Split the input into words
const words = input.split(" ");

// Function to make a word "very disco"
const veryDisco = (word) => {
  const mid = Math.ceil(word.length / 2);
  const firstHalf = word.slice(0, mid);
  const secondHalf = word.slice(mid);
  return secondHalf + firstHalf;
};

// Process each word and make it "very disco"
const result = words.map(veryDisco).join(" ");

// Display the result
console.log(result);
