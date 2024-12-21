const modifier = (text) => {
    // BEGIN RPG mechanics
  
    if (state.stats.statPoints > 0 || state.skillPoints > 0) {
      state.displayStats = [
        { key: 'You have unspent points! Open the menus to the right', value: '--->', color: 'red' },
        { key: '\nXP', value: state.XP, color: 'green' },
      ];
    } else {
      state.displayStats = [{ key: 'XP', value: state.XP, color: 'green' }];
    }
  
    if (state.XP >= 100) {
      state.XP -= 100;
      state.stats.statPoints += 1;
      state.skillPoints += 10;
      state.displayStats.push({ key: '\nLevel up', value: 'Points added!', color: 'yellow' });
    }
  
    const intMod = state.stats.stats.Intelligence.level;
    const chaMod = state.stats.stats.Charisma.level;
    const wisMod = state.stats.stats.Wisdom.level;
    const strMod = state.stats.stats.Strength.level;
    const dexMod = state.stats.stats.Dexterity.level;
    const conMod = state.stats.stats.Constitution.level;
  
    console.log("info.inputEvaluation:", info?.inputEvaluation);
  
    const chkAtt = info?.inputEvaluation?.attribute;
    const chkDC = info?.inputEvaluation?.DC;
    const chkCuz = info?.inputEvaluation?.reason;
  
    console.log("Attribute Check:", chkAtt);
    console.log("Difficulty Class (DC):", chkDC);
    console.log("Check Reason:", chkCuz);
  
    let chkXP = chkDC ? chkDC / 5 : 0;
  
    let chkCurAtt = 0;
    let chkAttPosAdj = '';
    let chkAttNegAdj = '';
  
    if (chkAtt) {
      switch (true) {
        case chkAtt.includes("Intelligence"):
          chkCurAtt = intMod;
          chkAttPosAdj = "smart";
          chkAttNegAdj = "dumb";
          break;
        case chkAtt.includes("Wisdom"):
          chkCurAtt = wisMod;
          chkAttPosAdj = "wise";
          chkAttNegAdj = "oblivious";
          break;
        case chkAtt.includes("Charisma"):
          chkCurAtt = chaMod;
          chkAttPosAdj = "charming";
          chkAttNegAdj = "annoying";
          break;
        case chkAtt.includes("Strength"):
          chkCurAtt = strMod;
          chkAttPosAdj = "strong";
          chkAttNegAdj = "weak";
          break;
        case chkAtt.includes("Dexterity"):
          chkCurAtt = dexMod;
          chkAttPosAdj = "nimble";
          chkAttNegAdj = "clumsy";
          break;
        case chkAtt.includes("Constitution"):
          chkCurAtt = conMod;
          chkAttPosAdj = "tough";
          chkAttNegAdj = "scrawny";
          break;
      }
    }
  
    console.log("Current Attribute Modifier:", chkCurAtt);
  
    const roll = getRndInteger(1, 20);
    console.log("Dice Roll:", roll);
  
    const chkModRoll = roll + chkCurAtt;
    let chkResult;
    let resultContextString;
  
    if (chkModRoll >= chkDC) {
      chkResult = "Success!";
      resultContextString = `[You are ${chkAttPosAdj} enough for that right now.]`;
      state.XP += chkXP;
    } else {
      chkResult = "Fail!";
      resultContextString = `[You are too ${chkAttNegAdj} for that right now.]`;
      state.XP += chkXP > 1 ? Math.floor(chkXP / 2) : chkXP;
    }
  
    if (history.length >= 2) {
      state.message = `${chkAtt} roll: ${chkModRoll} (${roll} + ${chkCurAtt}), ${chkResult} XP gained: ${chkXP}`;
    }
  
    return { text };
  };
  
  // Don't modify this part
  modifier(text);  