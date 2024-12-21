// BEGIN RPG mechanic stuff
function makeModString(int) {
    if (Number.isInteger(int)) {
      return int >= 0 ? "+" + int : "-" + Math.abs(int);
    }
    return "";
  }
  
  // misc helper functions:
  // get random
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  // generic list-picker
  function getRndFromList(list) {
    return list[getRndInteger(0, list.length)];
  }
  // END RPG mechanic stuff
  
  // START of placeholder grab thing
  const bracketed = /\[(.*?)\]/g; // bracket definition; replace [ ] with symbol of choice
  
  // grab all bracketed things, put them into an array in state
  function grabAllBrackets(text) {
    state.placeholders = []; // Initialize the array at the beginning
  
    const matches = text.match(bracketed); // Get all bracketed matches
    if (matches) {
      for (let entry of matches) {
        entry = entry.replace(/\[|\]/g, ''); // Remove the brackets
        state.placeholders.push(entry); // Add the cleaned entry to the array
      }
    }
  
    console.log(state.placeholders); // To check the grabbed placeholders
  }
  
  // grab only one specific bracketed thing by index
  function grabBracket(text, index) {
    const matches = text.match(bracketed);
    return matches ? matches[index].replace(/\[|\]/g, '') : null;
  }
  // END of placeholder grab thing  