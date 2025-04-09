# Character Creation 

**Overview:** Character creation in DnD is a big hassle for new players since their unfamiliarity with the game and the rules make character creation extremely tedious and difficult. Playing the actual game was rather straight forward, as the DM would call for skill checks etc (making it easy even for new players to follow along).

**Goal:** The goal is to create a streamlined version of character creation that is easy to follow without much confusion. Should also **automatically calculate** stat values so player's can focus on the story and engaging with friends/party members.

## Pain Points
There are multiple pain points during character creation which I would like to address and potentially stream line in our product.

- Class and Subclass traits and starting cantrips + spells/abilities
- Proficiency (what it means, how many of it can we have etc)
- *Multi Classing* --> mechanics, strength and benefits?
- Determining origin could be time consuming if a player doesn't have much of an idea on wha that would look like.
- Choosing starting equipment and determining what is appropriate for level 1
- Final Stats and numbers --> Will need to automatically calculate them.


## Current Products on the Market
The current most competitive product on the market for DnD character creation is from *Wizards of the Coasts'* **DnD Beyond Character Creation**. They are the publisher of DnD, and has a very stream lined version of character creation.

- They have streamlined somewhat similar to **Baldur's Gate 3**. 
- Many stats are automatically calculated.
- Nearly unnecessary to check the rule book.
- Built in **dice roll** for character creation (Abilities: Str, Dex, etc...)
- Drop-down list selector for nearly everything that has choices.
- Species and traits are all automatic, and selectable.
- Built in **dice roll** for game play (tapping the ability or whatever stat would automatically generate a dice roll)

### Examples

*Characters Page*
![CharactersPage](/game_character_creation/images/characters.png)

*Abilities & Saves & Senses*
![Abilities&Saves](/game_character_creation/images/abilites%20&%20saves.png)
![Senses](/game_character_creation/images/senses.png)

*Skills*
![Skills](/game_character_creation/images/skills.png)

*Spells*
![Spells](/game_character_creation/images/spells.png)

*Spell Details*
![SpellDetail](/game_character_creation/images/spell%20details.png)

*Inventory*
![Inventory](/game_character_creation/images/manage%20inventory.png)
![Inventory2](/game_character_creation/images/manage%20inventory%202.png)

*Item Description*
![Items](/game_character_creation/images/item%20description.png)

*Level Up*
![Levelup](/game_character_creation/images/level%20up.png)
![Level2](/game_character_creation/images/level%202.png)
![level2Spells](/game_character_creation/images/level%202%20spells.png)
![LearnableSpells](/game_character_creation/images/learnable%20spells.png)
- All of these are automatic, extremely streamlined and simple. All the player needs to decide is what spell they want (just like BG3) instead of **trying to figure out** WHICH spell they can have (which is really making the player going back to the rule book instead of playing the game.)

## Call of Cthulhu

Since Call of Cthulhu is not as complicated as DnD for character creation, there are still many room for improvements. There are already character sheets that does auto-calculations, but it is not streamed lined enough like **DnD** Beyond. Apply some designs and tricks of DnD, I believe we can do the same for Call of Cthulhu.

### Necessary Features
Apply the similar features from DnD Beyond

- Built in dice rolling system on the character sheet (Tapping "skills" or "characteristics" or can initiate a dice roll immediately)

- Built in dice rolling system for character creation (Not everyone wants to use the array, some may want to roll for their starting stats).

- Auto check mark after a successful skill roll (The check mark represents the chance to increase the respective skill after the game ends).

- Items and equipment can be add immediately from a large array.

- Skill description and roll success/fail consequences (like the official rule book).

- Provide character sheets for different ERAs (Alternative visual design)



### New Features

- Auto generate character based on **occupation**
    - So if the player has an occupation in mind, the AI can select and delegate the necessary skills to that character (*Can already be done on GPT*)

- Auto fill character background with the help of **AI**
    - Based on the occupation, it can either generate something completely new, OR, based on a short input and description from the player.

- Character sheet changes or become weird due to injury or large drop in sanity (*Blood stains on character sheet or twisted/upside down text*)

- 