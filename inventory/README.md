# Inventory System

Overview: It is wonderful to find various items available in an adventure, but everyone will still need a place to store all those stuff somewhere. Thus, we have the **inventory system**. 

Not only does it help our player's character carry stuff in their imaginary backpack for future uses, it also has a limit designed to not over power these characters and take the fun out of the game (e.g. having 10 first aid kit).

## Weight Limit

~~This will be the inventory limit of a given character. This is calculated from their SIZE stat.~~ 

- ~~SIZE * 1.5(kg) * 20% = MAX carry Weight~~

- ~~Thus, if a character has a SIZE of 70, that means their weight is 105 kg, and they can carry 21 kg.~~

~~When the player character exceeds this limit, they will not be able to progress through the story until they resolve the weight issue?~~

~~OR~~

~~When the player character exceeds this limit, the game will whisper to the AI and generate content based on that. And the player must resolve the weight issue before proceeding with the story?~~


## Item Category

Items will be separated into 3 different categories, which is reflected in the inventory presentation as there will either be multiple tabs or 3 separate box within a single screen (All depending on UX & UI design).

The 3 categories are:

- Consumables 
- Tools 
- Key Items

As the player amass more and more items, it would be easier to differentiate and utilize each of them.

*Another good benefit is that since certain items have unique functions, players can immediately know that every object in **tools** can be used to interact with the environment.*

### Item Description

Each item should have a short description for it. So we will need a small window for that.

*Do set a word limit for item description.*

### Tools

When player is on the **Tools** tab/window, there should be a "use" button when the object has been selected, or there is a use button on the side? Or drag the item to a use box? 

Tools **cannot** stack.

### Consumables

All items in the consumable section are **stackable**, and are denoted by a multiplication sign "x". 

- e.g. First Aid Kit x 4
- e.g. Water x 7 

For each and every use, the number of items would go down.

### Key Items

These items cannot be removed or dispose of by conventional means, and would only disappear when it is consumed in the story.

Key Items **cannot** stack.


## Equipment

There will be a left hand (LH), right hand (R), and also centerpiece (CP). These are all slots that player character can equipment melee weapons, firearms, and armor.

- If any melee or firearms are equipped, it would directly influence the **attack options** of the character.

- If any armor is equipped, it would directly influence the amount of damage received. 
---

```mermaid
classDiagram
    class Inventory{
    +Store Items
    +Store Equipment
    +Use/throw Items()
    +Equip/throw equipment()
    }

    class Items{
    +Consumables
    +Tools
    +Key Items
    +Environmental Interaction()
    +Character Interaction(e.g. First Aid Kit)
    }

    class Weight{
    +kg
    +MAX Carry Weight
    +Player movement()
    +Player story progression()
    }

    class Equipment{
    +LH [Left Hand]
    +RH [Right Hand]
    +CP [Centerpiece]
    +Modify attack choices()
    +Modify damage received()
    }


Inventory <|-- Items
Inventory <|-- Equipment
Inventory <|-- Weight
