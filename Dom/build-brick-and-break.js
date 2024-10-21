
/*
 Selecting Elements:
document.getElementById('id'): Selects an element by its ID.
document.getElementsByClassName('class'): Selects elements by their class name.
document.querySelector('selector'): Selects the first element that matches the selector.


Create an Element:
let div = document.createElement('div'); // Creates a <div> element

Set Attributes:
div.id = 'myDiv'; // Sets the id attribute of the div
div.className = 'myClass'; // Sets the class attribute of the div

Add to the Page:
document.body.appendChild(div); // Adds the div to the end of the body */

/*

Let's go over each of these concepts one by one:

1. createElement
Purpose: This method is used to create a new HTML element (like a div, button, etc.).
Usage:


let newDiv = document.createElement('div');
Explanation: The createElement method creates an element that exists in memory but is not yet part of the visible web page. To make it visible, you need to add it to the DOM (Document Object Model) using methods like append.
2. append
Purpose: This method is used to add (or "append") a new element as the last child of a parent element in the DOM.
Usage:


let parentDiv = document.getElementById('parent');
let childDiv = document.createElement('div');
parentDiv.append(childDiv);
Explanation: append adds the childDiv to the end of parentDiv. This makes the childDiv visible on the web page within the parentDiv.
3. setInterval / clearInterval
Purpose:
setInterval: Executes a function repeatedly at a specified time interval.
clearInterval: Stops the repeated execution set by setInterval.
Usage:


let intervalId = setInterval(() => {
  console.log('This will print every 2 seconds');
}, 2000);

clearInterval(intervalId); // This stops the above repeated execution
Explanation:
setInterval is useful when you want something to happen repeatedly after a certain amount of time, like creating bricks every 100 milliseconds.
clearInterval stops this repetition when you no longer need it.
4. hasAttribute
Purpose: Checks if an element has a specific attribute.
Usage:


let element = document.getElementById('myElement');
if (element.hasAttribute('data-foundation')) {
  console.log('Element has the data-foundation attribute.');
}
Explanation: This method is used to verify if an element has a certain attribute before performing actions based on its presence. For example, you might want to check if a brick has a data-foundation attribute before setting its value.
5. dataset / data-*
Purpose:
dataset: Provides a way to access custom data attributes (attributes prefixed with data-) on an HTML element.
data-*: Allows you to store custom data on HTML elements.
Usage:


let element = document.getElementById('myElement');
element.dataset.repaired = 'in progress'; // Sets a custom data attribute
console.log(element.dataset.repaired); // Logs 'in progress'
Explanation:
data-* attributes allow you to store extra information on an element without cluttering your markup with non-standard attributes.
dataset is an easy way to access and modify these attributes in javascript.
6. remove
Purpose: Removes an element from the DOM.
Usage:


let element = document.getElementById('myElement');
element.remove(); // Removes the element from the page
Explanation: remove is used when you want to delete an element from the webpage. For instance, if you want to destroy a brick, you can use remove to take it out of the DOM.

*/


// Use document.createElement('div') to create each brick.
//Assign each brick a unique id like brick-1, brick-2, etc.
//Add these bricks to the page.
//Display them at a regular interval (100ms).
// Add a custom data attribute data-foundation="true" to bricks in the middle column.
//   Use setInterval to repeatedly execute code every 100 milliseconds to create and add bricks.

function createBrick(idNum ){
    let body = document.getElementsByTagName("body")[0];
    let mybrick = document.createElement('div')
    mybrick.id = `brick-${idNum}` // use the weired quotes to execute the variables value 
  
    // mybrick.id = 'brick-${idNum}'; // Result: 'brick-${idNum}'
    // brick.id = `brick-${id}`; // Result: 'brick-7'

    mybrick.className = 'brick'
    body.appendChild(mybrick)
}

/*function addingBricks(intervalId, counter, numBricks){
    if (counter > numBricks) {
      clearInterval(intervalId); // Stop when all bricks are created
      return;
    }

    createBrick(counter);

    // For example, you can add a middle column condition here if needed
    if (counter % 3 === 2) {
      let brick = document.getElementById(`brick-${counter}`);
      brick.dataset.foundation = "true"; // Set custom attribute for middle column
    }
   // counter++;

  }*/

function build(num){
    //let container = document.getElementById('container')
    // The assumption that bricks will be added to a container comes from the typical structure of HTML for such tasks and the need to organize and style the elements effectively.
    let count = 1;
    let myInterval = setInterval(()=>{
        if (count > num) {
            clearInterval(myInterval); // Stop when all bricks are created
            return;
          }
      
          createBrick(count);
      
          // For example, you can add a middle column condition here if needed
          if (count % 3 === 2) {
            let brick = document.getElementById(`brick-${count}`);
            brick.dataset.foundation = "true"; // Set custom attribute for middle column
          }
         count++;        
    } , 100) // Delay of 100 milliseconds between each brick creation
}

/**
 
Alternative without setInterval
If you want to create all bricks immediately but with a delay between each, you could use a for loop with setTimeout:



function build(numBricks) {
  let container = document.getElementById('container');

  for (let i = 1; i <= numBricks; i++) {
    setTimeout(() => {
      let brick = document.createElement('div');
      brick.id = `brick-${i}`;
      brick.className = 'brick';
      container.appendChild(brick);

      if (i % 3 === 2) {
        brick.dataset.foundation = "true";
      }
    }, i * 100); // Delay increases with each brick
  }
}
In this version, setTimeout ensures each brick is added with increasing delays, so you get a staggered appearance.

 */


//Goal: Update the status of bricks based on their column position.

// Define a function repair that takes any number of brick IDs.
// For each ID, find the brick and set a custom attribute based on its column position.

function fixbrick(id){
    let brick = document.getElementById(id);
    if (brick) {  //This line checks if the brick variable is not null or undefined.

      if (brick.classList.contains('middle-column')) {
        brick.dataset.repaired = "in progress";
      } else {
        brick.dataset.repaired = "true";
        /**
 dataset is a property of HTML elements that allows you to access data attributes (custom attributes) on the element.
data-* attributes are used to store custom data in HTML elements. For example, data-repaired is a custom attribute in this case.
brick.dataset.repaired accesses the value of the data-repaired attribute.
         */
      }
    }
  }

function repair(...ids) {
//     The ... syntax is known as the rest parameter in .
// It allows you to capture an indefinite number of arguments passed to the function as an array.
// In your function, ids will be an array containing all the arguments passed to repair
    ids.forEach(fixbrick);
  }
  

  function destroy() {
    let container = document.getElementsByTagName("body")[0];

    let bricks = container.getElementsByClassName('brick');
    if (bricks.length > 0) {
      let lastBrick = bricks[bricks.length - 1];
      container.removeChild(lastBrick);
    }
  }

  export { build, repair, destroy }
  