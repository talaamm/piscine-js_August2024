// function letterSpaceNumber(str) {
//     // Regular expression explanation:
//     // \b\w\s\d\b:
//     // - \b: Word boundary to ensure that we're at the start of a word
//     // - \w: Any letter or digit (we assume the requirement is for letters only)
//     // - \s: A space character
//     // - \d: A digit (0-9)
//     // - \b: Word boundary to ensure that the digit is not followed by another letter or digit
//     const regex = /\b[a-zA-Z]\s\d\b/g;

//     // Match all occurrences of the pattern in the string
//     const matches = str.match(regex) || [];
    
//     return matches;
// }

// // Example usage:
// // console.log(letterSpaceNumber('example 1, example 20')); // Output: ['e 1']
// // console.log(letterSpaceNumber('a 1, b 2, c3, d 4e, f 5. g 6')); // Output: ['a 1', 'b 2', 'f 5', 'g 6']
function letterSpaceNumber(str) {
    // Regular expression explanation:
    // [a-zA-Z]\s\d(?!\d)(?!\w):
    // - [a-zA-Z]: Matches any single letter (case-insensitive).
    // - \s: Matches a space.
    // - \d: Matches a single digit (0-9).
    // - (?!\d): Negative lookahead to ensure that the digit is not followed by another digit.
    // - (?!\w): Negative lookahead to ensure that the digit is not followed by a word character.
    const regex = /[a-zA-Z]\s\d(?!\d)(?!\w)/g;

    // Match all occurrences of the pattern in the string
    const matches = str.match(regex) || [];
    
    return matches;
}

// Example usage:
console.log(letterSpaceNumber('I like 7up.')); // Output: []
