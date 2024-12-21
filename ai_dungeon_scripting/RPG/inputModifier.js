const modifier = (text) => {
    let modifiedText = text;
    const lowered = text.toLowerCase();
  
    // BEGIN custom script
    // utility stuff:
    stopInput = false; // good to have
  
    if (lowered.includes("/r")) { // /r command - this will reset ALL stats and skills!
      delete state.init; // init block will run again
      state.message = "Init reset done.";
      stopInput = true; // no model call
    }
  
    // START of placeholder grab thing
    // Grab the placeholders on first input, clean brackets from input
    if (history.length <= 1) { // Only on first input
      grabAllBrackets(text); // Pass 'text' to the function
      console.log("Grabbed brackets:" + state.placeholders.join(", "));
      modifiedText = text.replace(/\[|\]/g, ''); // Clean up the text that goes into history
    }
    // END of placeholder grab thing
  
    // BEGIN RPG mechanics
    // utility initialization:
    if (!state.showDC) {
      state.showDC = false;
    }
  
    if (lowered.includes("/showdc")) { // /showDC command
      state.showDC = !state.showDC;
      state.message = state.showDC ? "Turned DC display on." : "Turned DC display off.";
      stopInput = true; // no model call
    }
  
    if (lowered.includes("/derpmode")) { // /derpmode command - enables stupid things
      state.disableRandomSkill = !state.disableRandomSkill;
      state.message = state.disableRandomSkill ? "Turned random skills off." : "Turned random skills on.";
      stopInput = true; // no model call
    }
  
    // "character classes"/skillsets:
    // These must follow this format to work as intended!
    const witch = { 'Potion Brewing': 0, 'Dancing': 0, 'Cackling': 0 };
    const barbarian = { 'Rock Throwing': 0, 'Rageing': 0, 'Heavy Lifting': 0, 'Intimidating': 0 };
    const kobold = { 'Trap Building': 0, 'Hiding': 0, 'Dragon Imitating': 0, 'Mining': 0 };
  
    if (history.length <= 1) { // Only on first input
      const classString = state.placeholders[1]?.toLowerCase() || 'kobold';
      const petString = state.placeholders[2]
        ? state.placeholders[2].charAt(0).toUpperCase() + state.placeholders[2].slice(1) + ' Handling'
        : 'Pet Handling';
  
      witch[petString] = 0;
  
      // Default to kobold if classString doesn't match known classes
      state.charClass = kobold;
      if (classString === "witch") state.charClass = witch;
      if (classString === "barbarian") state.charClass = barbarian;
    }
  
    // Initialize stats and skills
    if (!state.init) {
      state.stats = {
        stats: {
          Strength: { level: 0, cost: 1 },
          Dexterity: { level: 0, cost: 1 },
          Constitution: { level: 0, cost: 1 },
          Intelligence: { level: 0, cost: 1 },
          Wisdom: { level: 0, cost: 1 },
          Charisma: { level: 0, cost: 1 },
        },
        statPoints: 5,
      };
      state.skills = state.charClass;
      state.skillPoints = 10;
      state.disableRandomSkill = true;
      state.XP = 0;
      state.init = true;
    }
  
    // Raise costs if stats are 4 or over
    for (let att in state.stats.stats) {
      if (state.stats.stats[att].level >= 4) {
        console.log(att + " over 3, setting cost to 2");
        state.stats.stats[att].cost = 2;
      }
    }
  
    // Create skill boosts
    let skillBoosts = {};
  
    for (let skill in state.skills) {
      let skillLow = skill.toLowerCase();
      let skillRoot = skillLow.split(" ");
      let skillVerb, skillNoun;
  
      if (skillRoot.length >= 2) {
        skillVerb = skillRoot[1];
        skillNoun = skillRoot[0];
      } else {
        skillVerb = skillLow;
      }
  
      skillVerb = skillVerb.split("ing")[0];
      let skillMod = state.skills[skill];
  
      if (skillNoun) {
        skillBoosts[skillNoun] = skillMod;
        if (skillMod >= 10) {
          skillBoosts[skillVerb] = skillMod - 9;
        }
      } else {
        skillBoosts[skillVerb] = skillMod;
      }
    }
  
    console.log(skillBoosts);
  
    // Apply situational skill bonus
    for (let boost in skillBoosts) {
      if (lowered.includes(boost)) {
        console.log("caught " + boost + " skill, adding boost");
        state.chkSitBonus = Math.max(state.chkSitBonus || 0, skillBoosts[boost]);
      }
    }
  
    if (!stopInput) {
      state.inputBot = 'InputDCattributeBot';
    }
    // END RPG mechanics
  
    return { text: modifiedText, stop: stopInput };
  }
  
  // Don't modify this part
  modifier(text);