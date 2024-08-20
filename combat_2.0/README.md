# Combat Sytem 2.0

**Overview:** Given the recent change's in the game's direction, we will be implementing **3D** character models in the future. The purpose of the 3D modeled character is to enhance the player's experience with story immersion. This is achieved by introducing these characters into combat, where player's can **see** their character's **in action**, fighting against eldritch beasts and monstrosities. The use of 3D models allows us to include stylish combat animations that is unique and exciting. 

Below I will propose some ideas on what our combat could potentially look like.

## Combat System A: Turn-Based Tactical Combat

This combat system is modeled after **Darkest Dungeon 2's** combat system. Its enemy placement style allows many elements in **Call of Cthulhu** to be implemented. 

The combat mechanic of **DD2** has multiple complex systems working with each other to determine many combat actions and results. **But in our case, we will simplify this to our need and apply CoC rules to the combat.** Despite of that, there is a good reason to utilize the DD2 combat system for our game, **many aspect of the game aligns with CoC**.

![DarkestDungeon2Combat](/combat_2.0/images/Darkest%20Dungeon%202.webp)

*With this unit placement style, there is the concept of **distance** blended with **strategy**.* 

This representation of the units gives the player full view of their characters during combat, watching them battle, fight, dismember, and kill.

### 3D models

Since we will be using 3D models for our game, it is imperative that we present these models whenever we can. As player's spend more time with the character, the deeper the emotional bonds can become, and the more they care.

There will also be 3D models for enemies, making the threat appear more real.

#### Animation

There will be a multiple preset animations for all characters *(brawl, sword fighting, firing a gun, etc.)*. As seen in **Darkest Dungeon 2**, these animations are explicitely demonstrated during combat. 

![Wicked Slice](/combat_2.0/images/dd2%20wicked%20slice.jpg)

*They have made the attack animation pop out and do a still image, and another animation plays that returns the characters to their original postion. We don't need to follow this necessarily, and have the characters just complete the animation on screen.*

**But special characters can have unique animations. This would further encourage player's to collect certain characters.**


### Combat

#### Position & Rank

DD2's combat divides the player character's and enemy character's into **ranks/positions**. This determines the range of enemy a character can hit (**distance**), and the effectiveness of said skill (**strategy**). 

![DD2Solo](/combat_2.0/images/dd2%20solo%20fight.png)

*For our purposes, it would look more like this. 1 v 1 or 1 v 2.*

#### Distance

The way the character's are positioned, it automatically creates **distance** between the character and enemies. This in fact works very well with our game as it also has *firearms* in combat scenario. Weapons like handgun, shotgun, and rifles will have different roll difficulty depending on the enemy distance **(exactly like CoC)**. This will adda layer to strategy during combat, creating situations where a firearm may not always be the best choice at every given time!


#### Strategy 

With the introduction of distance, it would naturally create various types of strategy when there are different enemy types and when there are multiple enemies. Player's will naturally need to determine which enemy they need to **prioritize**, which is a greater **threat**, and if they should even **engage** in the combat at all (especially when it is unfair!).


#### Dismemberment

This will be a mechanic that does not originate from DD2, instead, this will be borrowed from **Fear & Hunger**.

![Fear&HungerAttackLimbs](/combat_2.0/images/Fear&Hunger%20Combat%20limbs.png)
*Characters can attack enemy limbs.*
- *Left Arm*
- *Right Arm*
- *Left Leg*
- *Right Leg*
- *Torso*
- *Head*


![Fear&HungerOgre](/combat_2.0/images/fear&Hunger%20ogre%20enemy.webp)
*As you can see, the ogre monster is holding a cleaver with his left hand. Player can TARGET that left hand/arm.*


![Fear&HungerDismemberment](/combat_2.0/images/fear&guner%20dismemberment.webp)
*If the attack was successful and powerful enough, then the enemy is dismembered.*

Dismemberment adds multiple dimensions to combat, prioritization and strategy. These all add another layer of decision making, enhancing the combat experience for the player.

Ontop of that, different weapons will have variable dismemberment ability, e.g. *Sword* vs *Revolver* vs *Pipe*. Each of these weapons also inflict different type of damage, *slash* vs *pierce* vs *blunt*.

---
 **Implementation Method A:** We utilize the same exact system and allow players to target enemy's specific limbs.

```mermaid
    flowchart LR
    id1[Character]
    id2[Attack]
    id3[Brawl]
    id4[Melee]
    id5[Firearm]
    id6[Limb/Body Part]
    id7[Result]

    id1-->id2
    id2-->id3
    id2-->id4
    id2-->id5
    id3-->id6
    id4-->id6
    id5-->id6
    id6-->id7
```

The player's decision will essentially flow like this for combat. The **result** will be where the **dice roll** occurs, which will determine the attack success and damage.

---

**Implementation Method B:** We subtract the limb/body part targeting, but include dismemberment into **critical success** rolls.

In other words, **critical success** would mean a random limb would be completely dismembered. If they are lucky, they may chop off the enemy head (but not all enemy has their head as a weakness).

```mermaid
    flowchart LR
    id1[Character]
    id2[Attack]

    subgraph action
    id3[Brawl]
    id4[Melee]
    id5[Firearm]
    end

    id6[Success]
    id7[Crit Success]
    id8[Random Limb Dismemberment]

    id1-->id2
    id2-->id3
    id2-->id4
    id2-->id5
    action-->id6
    action-->id7
    id7-->id8
```

For this implementation method, there is less decision making, and more **emphasis** on the **dice roll**.

### Multiplayer

The direction of the game's development will eventually strive towards cooperation gameplay and player interaction with each other. The combat mechanic of DD2 allows for additional player's to be inserted into battle, making them each take up a different postion.

![Multiplayer](/combat_2.0/images/dd2%204v4.webp)
*A full party can potentially look like this. All the player's are on the left side, and they can decide where thier character should be positioned.*

#### Time Constriant

We can also implement a timer for each player's action to create a sense of urgency, danger, and thrill. This would naturally push the game forward and create less wait time.

*This could be an option in settings, as some player's want to move things slower.*

![BG3PartyCombat](/combat_2.0/images/baldurs-gate-3-party-combat.webp)
*It would be similar to BG3, co-op with other players with the additional timer on their action so it pushes the combat forward faster.*


## Combat System B: Classic Turn-Based Combat

