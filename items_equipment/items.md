# Items & Equipment

Overview: There are always unique items and equipment in stories, like the Excalibur in Legend of King Arthur or the One Ring in Lord of the Rings. Our stories and adventure will also have items and equipment in which our players can discover, equip, or used to increase their survival chances or to solve a mystery in the chapter. As such, it is important to implement this mechanic properly.

## Items Library

Similar to *enemies*, we need a library for items. And due to the near infinite possibilities of the effect of each item, we will need to provide a large library for our players in which they can create new stories with.

This will include ID, NAME, DESCRIPTION, and STATS (including its corresponding roll). When needed, Creators can select whichever item they want to appear in their story.

### Examples:

| ID: | Name: | Description: | Stat: | Type: | Weight:
:-- | :-: | :-: | :-: | :-: | --: |
001 | First Aid Kit | Great for attending all wounds, even the dying. | FIRST AID SKILL: CF: +0 HP, F: +1 HP, RS: +3 HP, HS: +4 HP, CS: +6 HP | Consumable | 0.5kg
002 | Flashlight | Lights up in the dark. | - | Tool | 0.3kg
003 | Golden Chalice | A golden chalice adorned with beautiful jewels | - | Key Item | 0.6kg
004 | Sword | A well forged blade | 1D10 + DB | Equipment: Melee | 5kg
005 | Thick Leather Jacket | A well crafted leather jacket | 1 Armor Point | Equipment: Armor | 0.7kg

*Depending on the level of success of the item's corresponding skill, the effect of the item may be increased or decreased.*

### Weight: 

I have added weight in there for now, but I am unsure if we will need this function since there probably isn't much of a chance for the player's character to even carry so much stuff on them on 1 or 2 play through.

*Might be using **build** check instead for many instances.*

## Item Types:

As you can see, there are also different item types, each with a specific purpose behind it:

- Consumable: Are items that disappears after using. (Affects character stats and equipments)
- Tool: Items that can be used multiple time. (**can be used on the environment**)
- Key Item: Specifically for story purposes.
- Equipment/Weapon: Gives the player character a weapon to use against enemy
- Equipment/Armor: Gives the player character armor for better survival

### Consumable:

Consumable items disappear from the player character's inventory after it's used. It is also important to note that consumable items can **alter** player stats **DURING** and **OUTSIDE** of battle. Meaning, a first aid kit can be used during combat, or after combat when they are relatively safer.


### Tool:

Tools can only be used outside of battle, or, during **exploration**. As they are mainly designed to be used on the environment to invoke changes (e.g. light up a dark room with a flashlight).

### Key Items:

As the name suggests, these are items that are important and quest/story related. They cannot be thrown away or disposed of.

### Equipment:

There are various types of equipments player's character can equip themselves with on the **inventory** screen:

- Firearms
- Melee
- Brawl Weapons (e.g. brass knuckle)
- Armor

Each of these equipments will affect the player's stats in one form or another. Equipping a specific type of weapon, for example, a melee weapon (sword) will give the player the **option** to **use** melee during combat. The same goes for firearms. Each weapon and armor will have their own attack stats etc.

*Note that the player can still choose to brawl if they wish to do so.*
