function getArchitects(){
  
let eng = [...document.getElementsByTagName('a') ] // const allATags = document.querySelectorAll('a');
let others = [...document.getElementsByTagName('span') ]
//It automatically updates if the document changes
// (e.g., if new <a> elements are added or removed,
// the collection updates).
    return [eng,others]
}

function classicalOrNot(element){
  return  element.classList.contains("classical")
}

function getClassical(){
let tagA = getArchitects()[0]
    let classicalEng = tagA.filter(classicalOrNot)
    // let noneClassical = tagA.filter(!classicalOrNot)
    let noneClassical = tagA.filter(element => !classicalOrNot(element)); // Corrected: Use a function to negate the condition

return [classicalEng , noneClassical]
}

function activeOrNot(element){
    return  element.classList.contains("active")
  }
function getActive(){

    let tagA_classical = getClassical()[0]

    let activeMem = tagA_classical.filter(activeOrNot)
    // let NONEactiveMem = tagA_classical.filter(!activeOrNot)
    let NONEactiveMem = tagA_classical.filter(element => !activeOrNot(element)); // Corrected: Use a function to negate the condition

    return [activeMem , NONEactiveMem]
}

function getBonannoPisano(){
    
    let banana =  document.getElementById('BonannoPisano') //return only one element
    let tagA_classical_Active = getActive()[0]
  
      const filteredOthers = tagA_classical_Active.filter((eng) => eng.id !== "BonannoPisano");
    return [banana , filteredOthers]
    }

    export {getArchitects , getClassical, getActive, getBonannoPisano }
   
  
// let bananas = [... document.getElementById('BonannoPisano')]
// let tagA_classical_Active = getActive()[0]
// for (let oneBanana of bananas){
// if (tagA_classical_Active.includes(oneBanana)){
//     const filteredOthers = tagA_classical_Active.filter(item => item !== oneBanana);
// return [[oneBanana] , filteredOthers]
// }
// }
// return [[], tagA_classical_Active]

// let bananas = document.getElementById('BonannoPisano');
// console.log('BananoPisano element:', bananas); // Check if it is null or has the correct ID

// let tagA_classical_Active = getActive()[0];
// console.log('Active Classical Architects:', tagA_classical_Active); // Check the list of elements

// if (bananas) {
//   // Use .id to check if it is the expected element
//   const filteredOthers = tagA_classical_Active.filter(item => item.id !== bananas.id);
//   return [[bananas], filteredOthers];
// }
// console.warn('Element with ID BonannoPisano not found');
// return [[], tagA_classical_Active]

// }
// const bonanno = 'BonannoPisano'; // Ensure this matches the expected ID

// const bonannoElement = document.getElementById("BonannoPisano");

// // Retrieve all <a> elements
// const allLinks = getActive()[0];

// // Filter to get only the active and classical architects
// const activeClassicalArchitects = allLinks.filter(link => 
//   link.id !== "BonannoPisano"
// );

// return [bonannoElement, activeClassicalArchitects];
