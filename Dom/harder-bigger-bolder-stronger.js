function generateLetters() {
    for (let i = 0; i < 120; i++) {
        let letter = document.createElement("div");
        letter.style.fontSize = `${11 + i}px`;
        letter.textContent = String.fromCharCode(
            65 + Math.floor(Math.random() * 26)
        );
        if (i < 40) {
            letter.style.fontWeight = "300";
        } else if (i < 80) {
            letter.style.fontWeight = "400";
        } else {
            letter.style.fontWeight = "600";
        }
        document.getElementsByTagName("body")[0].appendChild(letter);
    }
}

export { generateLetters };

/*

This function creates 120 div elements, each containing a random uppercase letter from A to Z. The font size of each letter increases as you go through the loop, and the font weight changes at different intervals. Finally, all these letter elements are appended to the body of the webpage, making them visible to the user.

 Looping Through 120 Iterations
javascript
Copy code
for (let i = 0; i < 120; i++) {
The for loop runs 120 times, so it will generate 120 letter elements.
The variable i starts at 0 and increments by 1 each time the loop runs until it reaches 119.
2. Creating a div Element for Each Letter
javascript
Copy code
let letter = document.createElement("div");
Inside the loop, a new div element is created for each letter. This div will hold a single letter.
3. Setting the Font Size
javascript
Copy code
letter.style.fontSize = `${11 + i}px`;
The fontSize of each div element is set dynamically.
The size starts at 11 pixels (when i is 0) and increases by 1 pixel with each iteration. For example:
When i = 0, the font size is 11px.
When i = 1, the font size is 12px.
This continues until i = 119, where the font size will be 130px.
4. Generating a Random Letter
javascript
Copy code
letter.textContent = String.fromCharCode(65 + Math.floor(Math.random() * 26));
This line generates a random uppercase letter from 'A' to 'Z':
Math.random() * 26 generates a random number between 0 and 25.
Math.floor() rounds it down to the nearest whole number (integer).
Adding 65 to this number converts it to the corresponding ASCII code for an uppercase letter (A=65, B=66, ..., Z=90).
String.fromCharCode() converts this ASCII code to the corresponding letter.
The resulting letter is then assigned to the textContent of the div.
5. Setting the Font Weight Based on i
javascript
Copy code
if (i < 40) {
    letter.style.fontWeight = "300";
} else if (i < 80) {
    letter.style.fontWeight = "400";
} else {
    letter.style.fontWeight = "600";
}
The font weight (thickness of the letters) is set based on the value of i:
For the first 40 letters (i < 40), the font weight is set to 300 (lighter).
For the next 40 letters (i < 80), the font weight is set to 400 (normal).
For the final 40 letters (i >= 80), the font weight is set to 600 (bolder).
6. Adding the Letter to the Webpage
javascript
Copy code
document.getElementsByTagName("body")[0].appendChild(letter);
The newly created div element is added to the end of the body of the webpage. This makes the letter visible on the page.
7. Exporting the Function
javascript
Copy code
export { generateLetters };
The generateLetters function is exported so it can be imported and used in other JavaScript files.
*/