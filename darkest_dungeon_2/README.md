# Darkest Dungeon 2 Combat Framework

**Overview:** This document will take a deep dive into the combat framework and mechanics of **Darkest Dungeon 2**. In order to better implement this mechanic into our game, it is imperative that we understand the inner workings. I will cover turn order, position, stress, status effects, resistances, resource management, environment, unique token system, enemies, bosses, mastery system.

Furthermore, I will also touch on the combat flow, how fights frequently go, and the information given to players during the fight in order for them to strategize.

## Position

First mechanic I will dive into for DD2's combat framework is **position**, the reason being it is the **first** combat related mechanic the player actually interacts with, even before their first fight, as the character's postion determine the efficiency and strength of the party.

![DD2CharacterPosition](/darkest_dungeon_2/images/DD2%20character%20position.png)

*As you can see, character's have preferred **ranks/position** along with **target preferrences**.*

![DD2PlagueDoctorSkillRange](/darkest_dungeon_2/images/DD2%20Plague%20Doctor%20Skill%20range.webp)

*Furthermore, some character skills have positional conditions. Plague doctor here can only use his **plague grenade** from rank 3 & 4, and only hit enemies in rank 1 & 2.*

It is imperative that they player strategically position their party members to better maximize their skills and damage. Any attacks outside of their preferred position or target range will be imposed with penalties *(Lower accuracy, reduce status effect chance, decrease damage output)*.

## Turn Order

Once the positions are setup, the player will undoubtedly encounter enemies. At the start of battle **(specifically, THE START OF EACH ROUND)**, the system will determine the **turn order** of all characters in play with a simple calculation:

Character's Turn Order = Character Speed + 1D6

Those with a higher total will attack first, and those with lower will attack later. With the 1D6 roll, it is hard to determine who will attack first basing off of their indiviudal **speed** stat. 

![DD2TurnOrder](/darkest_dungeon_2/images/DD2%20TurnOrder.png)

*Red Box: Turn order is visible to the player once it is established, this gives player the chance to **strategize** and **plan** ahead for their approach.*

### Turn Order Modifiers

Character's base speed stat is infact **not** the only thing that can potentially influence its turn order.

#### Abilities & Skills

Some character's can apply either **buff** to themselves or others to increase **speed** for a **limited** turn. This can influence the current round's turn order, or the next round's turn order.

- The buff can be a **Token** (which is a type of buff with a fix set of stats).
- The buff can also be just increasing a specific stat or effect in percentages.

![DuelistPrep](/darkest_dungeon_2/images/duelist%20preparation%20skill.png)

*Duelist character can give themselves a speed buff*

#### Status Effects

Just as characters can apply buffs, they could also apply **debuffs** to enemies, reducing their turn speed. Again, this can influence current round and or future rounds.

![BountyHunterCaltrops](/darkest_dungeon_2/images/BountyHunterCaltrops.png)
*Caltrops can reduce enemy speed for 3 turns*

There are also instances where the player will come across a node on the map, and is required to make a decision. This decsion could also impact status affects during combat.

![NodeDecision](/darkest_dungeon_2/images/dd2%20node%20decisions%20assit%20us.png)
*At the bottom, we can see the gains and losses. There are also instaces where it can increase speed or attack*


## Environment

All combat encounters occur in a specific environment within a specific region. This can impact battle strategy, generating a unique experience for every new encounters.

For example, in the region: Shroud, there is a chance that a fog would roll in during battle, imposing buffs and debuffs to all characters.

![TheShroudFog](/darkest_dungeon_2/images/The%20Shroud%20Fog.png)

*Some characters are blinded, while others are vulnerable.*

### Obstacles

There could also be obstacles on the battlefield, increasing diffuclty or forces a chance in the usually strategy. Either way, it adds variability to encouters.

![Barricade](/darkest_dungeon_2/images/barricade.webp)

*Here a barricade takes the first rank, protecting the units behind it.*


## Combat Flow








