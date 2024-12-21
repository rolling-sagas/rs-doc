// Checkout the repo examples to get an idea of other ways you can use scripting 
// https://github.com/AIDungeon/Scripting/blob/master/examples

const modifier = (text) => {
    let modifiedText = text;
    const lowered = text.toLowerCase();
  
    // The text passed in is either the user's input or player's output to modify.
    if (lowered.includes('you become king') || lowered.includes('you are now king')) {
      // You can modify the state variable to keep track of state throughout the adventure
      state.isKing = true;
  
      // Setting state.memory.context will cause that to be used instead of the user-set memory
      state.memory = { context: 'You are now the king.' };
  
      // You can modify world info entries using the below commands
      // addWorldEntry(keys, entry);
      // removeWorldEntry(index);
      // updateWorldEntry(index, keys, entry);
  
      // You can read world info keys with worldEntries
      const entries = worldEntries;
  
      // Setting state.message will set an info message that will be displayed in the game
      state.message = JSON.stringify(entries);
  
      // Log a message to the console for debugging purposes
      console.log('Player is now king');
  
      // Modify the text to reflect the new status
      modifiedText = `${text}\nYou are now the king!`;
    }
  
    // Return the modified text as an object with the text property defined
    return { text: modifiedText };
  };
  
  // Don't modify this part
  modifier(text);