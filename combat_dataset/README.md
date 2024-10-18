# Combat Dataset

**Overview:** In this document I will propose the datasets (data category) and combat formulas that will be used for our game's combat system. Categories like Health Points (HP), Damage (ATK), Sanity (SAN), and formulas to determine how damage is dealt and received.

I will discuss in the order below:

1. Player Characters

2. Enemies (Monsters + Cosmic Beings)

3. Bonus & Penalty Die

4. Weapons

5. Combat Formula

**Note that I will be utilizing *Call of Cthulhu* as the base infrastructure of the character data and combat formula.**

## Player Characters

**Overview:** Building on top of what we already have on *Rollingsagas* and *Cyberoll*, the dataset provided by **Call of Cthulhu** will be used predominantly for our infrastructure.

### Characteristics

**Strength:** Muscle Power.
- 3D6 x 5

**Constitution:** Represents the vigor and vitality.
- 3D6 x 5

**Dexterity:** How nimble a person is.
- 3D6 x 5

**Intelligence:** The ability to generate ideas, to connect previous information and form new ones. IQ.
- (2D6 + 6) x 5

**Size:** Pretty straight forward.
- (2D6 + 6) x 5

**Power:** Will power.
- 3D6 x 5

**Appearance:** Physical appearance.
- 3D6 x 5

**Education:** How knowledgeable a person is, how much information they know.
- (2D6 + 6) x 5

**Age:** Self Explanatory
- **table 1-3*

**Hit Points:** How much Health a character has. 0 HP = DEAD. 
- CON + SIZ / 10
- Round Down the result

**Magic Points:** How much magic points the character has. This is used for casting spells.
- 1/5 POWER

**Luck:** Everyone eventually runs out of luck.
- 3D6 x 5

**Sanity:** The mental/psychological state of a character. The lower it is, the crazier the character becomes. 0 SAN = DEAD
- Starting SAN = POWER

### Skills

**Here I will only focus on combat specific skills.**

**Fighting (Brawl):** 1D3 + DB **table 1-1*

**Fighting (Weapon):** Refer to Weapons Table (Depends on what weapons we would like to include into our game.)

**Firearms (Handgun):** Refer to Weapons Table (Depends on what weapons we would like to include into our game.)

**Firearms (Rifle/Shotgun):** Refer to Weapons Table (Depends on what weapons we would like to include into our game.)

### Additional Stats

**Movement:** How fast and far one could move.
- **table 1-2*

**Build:** The ability to perform maneuvers on others.
- **table 1-1*

**Dodge:** The ability to avoid an attack.
- 1/2 of DEX.

**Damage Bonus:** Additional damage dealt based on the character's inherent strength.
- **table 1-1*

---
### Table 1-1: Damage Bonus & Build Table(DB)


Str + Size | Damage Bonus | Build
:-- | :-: | --:
2-64 | -2 | -2
65 - 84 | -1 | -1 
85 - 124 | None | 0 
125 - 164 | +1D4 | 1
165 - 204 | +1D6 | 2
205 - 284 | +2D6 | 3
285 - 364 | +3D6 | 4
365 - 444 | +4D6 | 5
445 - 524 | +5D6 | 6

*For every 80 points in weight is increased beyond 524, increase the DB by an additional 1D6 and increase build by 1.*


### Table 1-2: Movement Rate

DEX < SIZE + STR < SIZE = MOVEMENT 7

If either STR + DEX is equal or greater than SIZE, or if all 3 are equal = MOVEMENT 8

DEX > SIZE + STR > SIZE = MOVEMENT 9

Age | Movement Modification
:-- | --:
40s | -1
50s | -2
60s | -3
70s | -4
80s | -5


### Table 1-3: Age Modifiers

Age | Modifiers
:-- | --:
15 - 19 | -5 among STR & SIZ, -5 EDU, Roll Luck twice and take the **higher** value
20 - 39 | Make EDU Improvement Check
40 - 49 | -5 among STR & CON & DEX, -5 APP, 2 EDU improvement check
50 - 59 | -10 among STR & CON & DEX, -10 APP, 3 EDU improvement check
60 - 69 | -20 among STR & CON & DEX, -15 APP, 4 EDU improvement check
70 - 79 | -40 among STR & CON & DEX, -20 APP, 4 EDU improvement check
80 - 89 | -80 among STR & CON & DEX, -25 APP, 4 EDU improvement check

*EDU Improvement Check: Roll a 1D100, if it is greater than present EDU, add 1D10 percentage points to your EDU.



---


## Enemies

Like characters, every enemy has their own characteristics, skills, abilities and stats. This would allow for a near unlimited design of monster/cosmic beings.

Furthermore, the stats of the enemies also affect the player's decision, to engage or not, to fight or flight.


### Example:

| ID: | Name: | Description: | STR: | CON: | SIZE: | DEX: | POW: | HP: | DMG BONUS: | BUILD: | MP: | MOV: | ATK / RND: | ATK | ARMOR | SAN LOSS: |
:-- | :-: | :-: |:-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |--:
001 | Zombie | Walking Dead that can bite, claw, and loves to eat human flesh | 80 | 80 | 65 | 35 | 05 | 14 | 1D4 | 1 | 1 | 6 | 1 | Maw: 30%, 1D3 + DMG Bonus | - | 0 / 1D8


**ID:** Every monster, cosmic being, beasts, will require an **ID**. Since there can be multiple versions of the same enemy (e.g. Big zombie), it is important that we give them proper codes to differentiate them in the system. *Of course, programmers, feel free to use another system if there is a better one.*

**Name:** Every enemy must have a corresponding name, gives player a good sense of idea what kind of creature they are up against. Furthermore giving a name to a face is important when we have multiplayer, as players can communicate better.

**Description:** A detailed but brief description for the enemy is also important. It is a good place to add some atmosphere and lore into the story. This will be incredibly important especially when players begin developing their own stories and populate their fantasy with unique creatures. 

**Characteristics:** These stats are mirrors those in player characters. It helps determine other basic stats like HP, MP, Build, etc.

**Health Points:** When it's 0, then the enemy is dead.

**Spells:** Certain enemies are capable of conjuring spells.

**Magic Points:** Some enemies, like cosmic entities are capable of conjuring spells. Spells consume MP.

**MOVEMENT:** The higher it is, the faster the enemy. Which will also be used to determine which character goes first. *Will go into detail in the sections below.*

~~**Build:** Its resistance to maneuvers.~~

**Attacks:** The forms of attacks available for the enemy to enact, which can be close range or long range*(note that some enemies may wield weapons like humans)*.

**Damage Bonus:** Additional damage dealt based on the enemy's inherent strength.

**Attack per Round:** Some enemies can attack multiple times during a round of combat. Again, attack turn is based on DEX, so if an enemy has 2 attack/round, they will attack **twice** on their turn.

**Armor:** Some enemies will have exoskeleton, or thick fur (bear), giving them an armor bonus.

**Sanity Loss:** Certain enemies (cosmic entities, other worldly creature) will require the player to roll a **sanity check** to determine how they react to the horror they witness. Then refer to the *sanity point costs.*

**Dodge:** Enemies do not dodge!

## Bonus and Penalty Die

During combat, there are various instances where there is a need to impose bonus and penalty die for the given situation to better imitate realism. 

### Bonus Die
- Imposes an additional "tens" percentage die (00-90) when rolling. 
- Player (or enemy) takes the **LOWER** result (remember, lower is better).

### Penalty Die
- Imposes an additional "tens" percentage die (00-90) when rolling.
- Player (or enemy) takes the **HIGHER** result (remember, lower is better).


## Weapons

It is imperative that we include weapons as it adds a lot of its own unique rules.

![EnemyPositions](/combat_dataset/images/EnemyPositions.jpg)

1. **Touch** - Brawl, melee weapons
2. **10 Yards** - Handguns, whips, some throwing weapons, shotgun
3. **20 Yards** - Bow & Arrow, shotgun, submachine guns, 
4. **30 Yards** - rifles, 

### Example Melee Weapon Stats

ID | Name | Skill | Damage | Base Range | Uses per Round | Mag Size | Era
:-- | :-: | :-: | :-: | :-: | :-: | :-: | --: |
M001 | Baseball Bat | Fighting (Brawl) | 1D8 + DB | Touch | 1 | n/a | 1920s & Modern
M002 | Knife(i) | Fighting (Brawl) | 1D4 + DB | Touch | 1 | n/a | 1920s & Modern

### Melee Weapon Modifiers

**Blunt Weapon**: Extreme success & Critical Success: **Max Weapon Damage + Max Damage Bonus**

- Thus, a character with DB of 1D4 rolling a extreme success with a baseball bat can deal this damage: 8 + 4

- If they don't have any DB, then it would just be: 8

**Impaling Weapon**: Extreme success & Critical Success: **Weapon Damage + Max Weapon Damage + Max Damage Bonus**

- Thus, a character with DB of 1D4 rolling a extreme success with a knife can deal this damage:  1D4 + 4 + 4

- If they don't have any DB, then it would just be: 1D4 + 4

### Example Firearm stats

ID | Name | Skill | Damage | Base Range | Uses per Round | Mag Size | Era
:-- | :-: | :-: | :-: | :-: | :-: | :-: | --: |
G001 | .38 Revolver | Firearms (Handgun) | 1D10 | 15 Yards | 1-3 | 6 | 1920s & Modern

### Firearms Modifiers

**Impaling Weapon**: Extreme success & Critical Success: **Weapon Damage + Max Weapon Damage**

- Thus, a extreme success with a revolver can deal this damage:  1D10 + 10. *(no DB because muscles don't affect the bullet power)*

**Range**: 
- Within *base range*: **Regular Difficulty Roll**
- Up to twice the base range: **Hard Difficulty Roll**
- ~~Up to 4 times the base range: **Extreme Difficulty Roll**~~

**Point Blank**
- Using a firearm on a *touch* distant enemy: **BONUS DIE**

**Fast Moving Target**
- Enemy MOVEMENT (MOV) 8 or above: **PENALTY DIE**

**Target Size**
- Enemy Build -2 or below: **PENALTY DIE**
- Enemy Build 4 or above: **BONUS DIE**

**Multiple Shots**
- Firing multiple shots will apply a **PENALTY DIE** on **ALL** attempts.
- e.g. If I fire 2 shots, i need to apply a penalty die for both of my shot attempts.

**Reload & Ammunition**
- Firing weapons **consume** ammunition! Every shot fired is removed from the gun's **magazine** or **chamber**.
- Player can reload **1** magazine in a combat round.
- OR, load **2 shells** in a combat round (shotguns).
- ~~OR, load **1 shell** in a combat round and fire that round (impose **PENATLY DIE**).~~

**Cover**
- Player character or enemies behind cover gains an advantage.
- **Targeting** enemies behind a **cover** imposes a **PENATLY DIE** for the **ATTACKER**.


## Combat

In this section, I will provide examples of situations and demonstrate how damage is calculated. 

### Example 1

*Player Character: Bob*
- HP: 10
- MOV: 9
- ATK: 
    - Brawl: 1D3 + DB
    - Baseball Bat: 1D8 + DB
- Damage Bonus: 1D4
- Sanity: 60

*Enemy: Mummy*
- HP: 14
- MOV: 6
- ATK: 1D6 + DB
- ATK/RND: 2
- Damage Bonus: 1D6
- Armor: 2 AP (Impaling weapon deals 1/2 damage).
- Sanity Loss: 1 / 1D8

**Round 1**

1. Bob must roll a **sanity check** for seeing the mummy! 
    - Bob rolls a **1D100** and fails the sanity check.
    - Bob rolls a **1D8** and got a 2. Bob loses 2 Sanity Points.

2. Compare **Movement** to determine who goes first.
    - Bob goes first.

3. Bob uses the baseball bat against the Mummy. **Skill check succeeds**.
    - Bob rolls a **1D8 + 1D4**, and got a total of **6**.
    - Mummy has **2AP**, so final damage dealt is **4**.
    - Mummy now has **10HP** left

4. Mummy attacks Bob.
    - Bob uses **dodge** and succeeds. 
    - Mummy's **skill check failed**.

5. Mummy attacks Bob **again** (remember, Mummy has 2 attacks per round), **skill check succeeds**.
    - Mummy rolls a **1D6 + 1D6**, and got a total of **3**.
    - Bob receives 3 Damage and now has **7** HP.

6. Repeat from **3**.

### Example 2

*Player Character: John*
- HP: 10
- MOV: 9
- ATK: 
    - Brawl: 1D3 + DB
    - Baseball Bat: 1D8 + DB
    - Glock 17: 1D10 / 15yards / 1(3) Shots per round / Mag:17
- Damage Bonus: 1D4
- Sanity: 60

*Enemy: Mummy 1 (touch distance)*
- HP: 14
- MOV: 6
- ATK: 1D6 + DB
- ATK/RND: 2
- Damage Bonus: 1D6
- Armor: 2 AP (Impaling weapon deals 1/2 damage).
- Sanity Loss: 1 / 1D8

*Enemy: Mummy 2 (10 yards away)*
- HP: 14
- MOV: 6
- ATK: 1D6 + DB
- ATK/RND: 2
- Damage Bonus: 1D6
- Armor: 2 AP (Impaling weapon deals 1/2 damage).
- Sanity Loss: 1 / 1D8


![DD2SoloFight](/combat_dataset/images/dd2%20solo%20fight.png)
*Example Image. Pretend that the left side is the player character and right side are the 2 Mummies.*

**Round 1**

1. Bob must roll a **sanity check** for seeing the mummy! 
    - Bob rolls a **1D100** and succeeds the sanity check.
    - Bob loses 1 Sanity Points.

2. Compare **Movement** to determine who goes first.
    - Bob goes first.

3. Bob uses his **glock** against Mummy 2, and attempts to fire **3** shots.
    - Glock has a range of **15 yards**, and the enemy is only **10 yards** away. No penalty.
    - Firing multiple shots will be given a **penalty die** for each shot.
    - Only 1 shot landed. Bob rolls a **1D10** for the damage dealt, and got a 6.
    - Bob's Glock now has **14** bullets left in the magazine.
    - Mummy 2 loses 6 HP, and now has **8 HP** left.

4. Mummy 1 attacks
    - Bob chooses to **fight back**. Mummy 1 and Bob both used **fighting (brawl)** to roll against each other. Bob succeeds.
    - Bob rolls for damage 1D8 + DB and got a 5.
    - Mummy 1 loses 5 health and has 9 HP remaining

5. Mummy 1 attacks again (remember they can attack **twice** per round)
    - Bob successfully **dodges** the attack.
    - No damage dealt.

6. Mummy 2 attacks
    - Mummy 2 attacks with **disadvantage** since it is not within distance of its attack.
    - Bob chooses to **dodge** and succeeds.
    - No damage dealt.

7. Mummy 2 attacks again
    - Mummy 2 attacks with **disadvantage** since it is not within distance of its attack.
    - Bob chooses to **dodge** and succeeds.
    - No damage dealt.

8. Repeat from **3**.



## Buffs and Debuffs

In order to add a bit of complexity to the already existing combative gameplay, we have decided to implement **Buffs** and **Debuffs**. These addition *should* naturally introduce strategy and tactics in the game play, and provide a welcoming challenge to players if it is balanced right. After a close inspection of *Darkest Dungeon's* character and enemy buff and debuff skills, I believe there is a thing or two in which we can borrow from them.

### Stat Modifications

Below is a list of mechanics in which the buffs and debuffs can modify:

- **Roll Probability: Accuracy + Dodge** (Temporary Increase, OR, temporary decrease. *e.g. +5% or +15% for higher success rates*)

- **Damage Bonus Die Mod:** (Temporary changes the DB die to either **increase** or **decrease** the potential damage. *e.g. 1D3 -> 1D6 or 1D8*)

- **Weapon Base Damage Die Mod:** (Temporary changes the base damage die of the weapon to either **increase** or **decrease** the potential damage. *e.g. 1D10 -> 1D20*)

- **Movement Stat Mod:** (Temporary **increase** or **decrease** the MOV stat, gaining an advantage or disadvantage.)

- **Armor Point Stat Mod:** (Temporary **increase** or **decrease** AP for additional defense. *Note, this can be in the negatives "-" to signify increase damage taken)

*Note that some enemies can activate multiple buffs at once*

![Buffs&DebuffsIcon](/combat_dataset/images/Tokens_List.webp)

*Similar to DD2, we should utilize intuitive icons to represent the buffs and debuffs*


### Status Effect

There will also be various **status effects** during combat that the player needs to manage. These same status effects can also be imposed on the enemies, but this would depend on the character's weapon, items, and skill proficiency.

**Bleed:** When a target is bleeding, they will lose HP per round until the wound is treated. *(Treatment requires gauze, bandages, first aid, or surgery)*

**Poison:** When a target is poisoned, they will lose HP per round until they are cured. *(Treatment requires)*

**Stun:** When a target is stunned, they will be unable to take action for 2 turns. Furthermore, any incoming attacks are an automatic success.

**Burn:** When a target is burned, they will lose HP per round, but it gets progressively worse each round if not treated. 

**Mark:** When a target is marked, they will receive a penalty die.

**Taunt:** When a character or enemy uses taunt, all incoming attack will be directed at them instead. In order words, the opposing side cannot choose specific targets.

**Bind:** When a target is bound, they are unable to take action until they are unbound. May receive damage during this period. *(Unbinding may require a STR check)*

![StatusEffectIcon](/combat_dataset/images/DoT2.png)

*Similar to DD2, we should utilize intuitive icons to represent the status effects*


### Character Abilities

Character Abilities are active abilities in which the players can use **during** combat. Abilities is where players and enemies can inflict **status effects**, **buffs**, and **debuffs**. Depending on the ability we design, we can apply different buffs and debuffs.

**challenges:**

- How many abilities per character?

- How many times can they use their ability per battle?

*Need to balance this out.*

Examples:

Frenzied Assault
Effect: The character can choose to make an extra melee attack on their turn. However, if they do, they must roll a penalty die on all subsequent attacks that round due to fatigue.

Unyielding Defense
Effect: The character can choose to sacrifice their next attack roll to gain a significant bonus to their defense for that round. This means they can absorb damage or counterattack with increased precision on their next turn.

Last Stand
Effect: When the character is reduced to half health or less, they can declare a Last Stand to gain a significant bonus to all attack rolls for one turn. Afterward, they must make a sanity check due to the intense focus and stress.

Precise Strike
Effect: Before rolling for a melee or ranged attack, the character can declare a Precise Strike to add a bonus die to the roll. However, doing so increases the damage taken from the next incoming attack by +1d4 due to overexertion.


### Character Talents

In order to create memorable and unique characters, we shall introduce character **talents**. Talents will be passive skills that may activate under specific circumstances, players will be able to utilize their character's talents to gain the advantage. Or, perhaps take advantage of the talent and use it as part of the play style. **Talents are PERMANENT!!! and each character gets 1 Talent**

*Although this document is combat focused, I believe **talent** can also be used during story progression.*

Taken from **Pulp Cthulhu**, here are some potential talents for our player characters:

![Talent1](/battle_system/Images/pulp_cthulhu_talent1.png)
![Talent2](/battle_system/Images/pulp_cthulhu_talent2.png)
![Talent3](/battle_system/Images/pulp_cthulhu_talent3.png)
![Talent4](/battle_system/Images/pulp_cthulhu_talent4.png)


Critical Precision
Effect: Allows the character to reroll a failed attack roll once per round with a bonus die, reflecting their honed instincts. However, they suffer a penalty die on their next attack roll due to overexertion.

Bloodlust
Effect: Grants a bonus die on all melee attack rolls after a successful attack, reflecting the character’s increasing aggression. However, after three consecutive successful attacks, they must make a sanity check due to their growing obsession with violence.

Savage Strikes
Effect: Increases melee damage by +1d6 when the character is below half health, symbolizing their desperation and ferocity. However, they receive a penalty die on all defense rolls due to reckless aggression.

Berserker Fury
Effect: Allows the character to deal an additional +1d8 damage on a successful melee attack, reflecting their frenzy. However, they must make a sanity check after the attack, as the adrenaline and bloodlust take a toll on their mental state.

Defensive Stance
Effect: Provides a damage reduction bonus of -1d6 for one round when the character is attacked, but all their attacks during that round receive a penalty die due to their focus on defense.


## Characters with Talent Example

| Name: | STR: | CON: | DEX: | INT: | SIZ: | POWER: | APP: | EDU: | HP: | MP: | LUCK: | SAN: | MOV: | BUILD: | DODGE: | DAMAGE BONUS: | Talent: | Abilities:
:-- | :-: | :-: |:-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | --:
Jack Carson | 70 | 60 | 80 | 70 | 70 | 60 | 50 | 60 | 13 | 12 | 55 | 60 | 9 | +1 | 40 | +1D4 | Rapid Fire | Marked

Rapid Fire: Firing multiple times will not be imposed with penalty.

Marked: Attacking marked enemies will give the attacker a bonus die.



## Example 3

*Player Character: Jack Carson*
- HP: 13
- MOV: 9
- Skills:
    - Firearms (Handgun 65% )
    - Fighting (Brawl 50% )
- ATK: 
    - Brawl: 1D3 + DB
    - Combat Knife: 1D4 + 2 + DB
    - Glock 17: 1D10 / 15yards / 1(3) Shots per round / Mag:17
- Damage Bonus: 1D4
- Sanity: 60
- Talent: Rapid Fire
- Ability: Marked


*Enemy: Mummy 1 (touch distance)*
- HP: 14
- MOV: 6
- Skills:
    - Fighting 70%
- ATK: 1D6 + DB
- ATK/RND: 2
- Damage Bonus: 1D6
- Armor: 2 AP (Impaling weapon deals 1/2 damage).
- Sanity Loss: 1 / 1D8


*Enemy: Mummy 2 (10 yards away)*
- HP: 14
- MOV: 6
- Skills:
    - Fighting 70%
- ATK: 1D6 + DB
- ATK/RND: 2
- Damage Bonus: 1D6
- Armor: 2 AP (Impaling weapon deals 1/2 damage).
- Sanity Loss: 1 / 1D8

---

**Round 1**

1. Jack must roll a **sanity check** for seeing the mummy! 
    - Jack rolls a **1D100** and succeeds the sanity check.
    - Jack loses 1 Sanity Points.

2. Compare **Movement** to determine who goes first.
    - Jack goes first.

3. Jack uses the ability **marked**, and marks **Mummy 2**
    - **Mummy 2** is now marked for 2 turns and will receive **penalty** when rolling.

4. Mummy 1 attacks
    - Jack chooses to **fight back**. Mummy 1 and Jack both used **fighting (brawl)** to roll against each other. Jack succeeds.
    - Jack rolls for damage 1D8 + DB and got a 8.
    - Mummy 1 has 2 AP
    - Mummy 1 loses 6 health and has 8 HP remaining.

5. Mummy 1 attacks again (remember they can attack **twice** per round)
    - Jack fails to **dodge** the attack.
    - Mummy 1 rolls for damage 1D6 + DB and got a 6.
    - Jack loses 6 HP and has 7 HP remaining.

6. 6. Mummy 2 attacks
    - Mummy 2 attacks with **disadvantage** since it is not within distance of its attack.
    - Bob chooses to **dodge** and succeeds.
    - No damage dealt.

7. Mummy 2 attacks again
    - Jack chooses to **fight back**. Mummy 1 and Jack both used **fighting (brawl)** to roll against each other. Jack succeeds.
    - Jack rolls for damage 1D8 + DB and got a 5.
    - Mummy 2 has 2 AP
    - Mummy 2 loses 3 health and has 11 HP remaining.

8. Jack uses his **glock** against Mummy 2, and attempts to fire **3** shots.
    - Glock has a range of **15 yards**, and the enemy is only **10 yards** away. No penalty.
    - Firing multiple shots will **NOT** be given a **penalty die** due to **RAPID FIRE** talent.
    - Attacking a marked enemy is granted a **bonus die**.
    - Only 3 shot landed. Bob rolls a **1D10** for the damage dealt, and got a 17.
    - Bob's Glock now has **11** bullets left in the magazine.
    - Mummy 2 has 2 AP
    - Mummy 2 loses 15 HP, and is now destroyed.