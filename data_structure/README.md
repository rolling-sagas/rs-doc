# Combat Lifetime

**Overview:** This document I will propose a combat lifetime for our game's combat system. With the introduction of *status effects* and character/enemy abilities that has *delayed effects*, it is important to map out the cycle of combat, and understanding what exactly occurs or happens during each "frame".

**Player Experience Goal:** The goal of the combat experience should emphasize strategy and enemy prioritization. Player should feel a sense of danger, exploit their advantage over the enemies, and plan their attacks accordingly all the while balancing risk and reward. 

- As for multiplayer, there will be an added layer of cooperation among the investigators, along with positioning in order to go against additional enemies.

## Current Combat Cycle

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
---

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
- Traits: Frenzied Strikes
- Ability: venomous bite
---

```mermaid
    timeline
    title Current Combat Cycle

    System [Before Combat]
                                        : Load character [HP, MP]
                                        : Load total number of enemy [HP, MP]
                                        : Investigator [Equipment, Items]
    System [Enter Combat]
                                        : Activate any character + enemy TRAITS
                                        : Initiate Sanity Check
                                        : Compare MOVEMENT to determine which actor attacks first
    During Combat [Player's 1st Turn]
                                        : Resolve any STATUS EFFECTS & -1 turn for the SE
                                        : Player uses the ability [Death Mark]
                                        : Apply [Death Mark] status effect for 3 rounds on Enemy
    During Combat [Enemy's 1st Turn]
                                        : Resolve any STATUS EFFECTS & -1 turn for the SE
                                        : Enemy attacks with brawl
    During Combat [Player's Reaction]
                                        : Player can 1. Fight Back 2. Dodge
                                        : Player chooses [Fight Back]
                                        : Roll against enemy's brawl -> Roll success
                                        : Player rolls 1D4 + 2 + DB, result of 6
                                        : Player deals damage to enemy
                                        : Enemy armor applied, knife deals half damage and -2 attack.
                                        : Enemy lose 1 HP, now has **13** HP
    During Combat [Enemy's 2nd Turn]
                                        : Resolve any STATUS EFFECTS & -1 turn for the SE
                                        : Enemy attacks with brawl
    During Combat [Player's Reaction]
                                        : Player can 1. Fight Back 2. Dodge
                                        : Player chooses [Dodge]
                                        : Roll against enemy's brawl -> Roll fail
                                        : Enemy rolls 1D6 + DB, result of 6
                                        : No armor, no damage reduction
                                        : player loses 6 HP, now has **7** HP 
    During Combat [Enemy's 2nd Turn]
                                        : [Frenzied Strike] condition satisfied, activate trait
                                        : attack with brawl
    During Combat [Player's Reaction]
                                        : Player can 1. Fight Back 2. Dodge
                                        : Player chooses [Dodge]
                                        : Roll against enemy's brawl -> Roll success
                                        : player does not receive damage
    During Combat [Player's 2nd Turn]
                                        : Resolve any STATUS EFFECTS & -1 turn for the SE
                                        : Player uses their [GLOCK] and fires [3] shots
                                        : [Rapid Fire] condition satisfied, activate trait, no *penalty die* applied
                                        : Enemy is 10 yards away, which is within the weapon distance (15 yards) thus no *penalty die* applied
                                        : Enemy has [Death Mark] SE, *bonus die* applied
                                        : Roll for firearms (hangun) x 3, all roll success
                                        : Roll 3 separate 1D10, total of 30
                                        : Enemy armor applied, [Glock] deals half damage and -2 attack
                                        : Enemy loses 13 HP, now has **0** HP left
    System [During Combat]
                                        : Enemy [is dead]
                                        : No other enemy left
                                        : Combat Concludes
    System [After Combat]
                                        : Record and save character state [HP, MP, Equipment, Items (ammo)]
                                        : Exit Combat
```

```mermaid
    timeline
    title Current Combat Cycle

    section Preparation
    System [Before Combat]
                                        : Load character [HP, MP]
                                        : Load total number of enemy [HP, MP]
                                        : Investigator [Equipment, Items]
    System [Enter Combat]
                                        : Activate any character + enemy TRAITS
                                        : Initiate Sanity Check
                                        : Compare MOVEMENT to determine which actor attacks first
    section Round 1
    During Combat [Player's 1st Turn]
                                        : Resolve any STATUS EFFECTS & -1 turn for the SE
                                        : Player uses the ability [Death Mark]
                                        : Apply [Death Mark] status effect for 3 rounds on Enemy
    During Combat [Enemy's 1st Turn]
                                        : Resolve any STATUS EFFECTS & -1 turn for the SE
                                        : Enemy attacks with brawl
    During Combat [Player's Reaction]
                                        : Player can 1. Fight Back 2. Dodge
                                        : Player chooses [Fight Back]
                                        : Roll against enemy's brawl -> Roll success
                                        : Player rolls 1D4 + 2 + DB, result of 6
                                        : Player deals damage to enemy
                                        : Enemy armor applied, knife deals half damage and -2 attack.
                                        : Enemy lose 1 HP, now has **13** HP
    During Combat [Enemy's 2nd Turn]
                                        : Resolve any STATUS EFFECTS & -1 turn for the SE
                                        : Enemy attacks with brawl
    During Combat [Player's Reaction]
                                        : Player can 1. Fight Back 2. Dodge
                                        : Player chooses [Dodge]
                                        : Roll against enemy's brawl -> Roll fail
                                        : Enemy rolls 1D6 + DB, result of 6
                                        : No armor, no damage reduction
                                        : player loses 6 HP, now has **7** HP 
    During Combat [Enemy's 2nd Turn]
                                        : [Frenzied Strike] condition satisfied, activate trait
                                        : attack with brawl
    During Combat [Player's Reaction]
                                        : Player can 1. Fight Back 2. Dodge
                                        : Player chooses [Dodge]
                                        : Roll against enemy's brawl -> Roll success
                                        : player does not receive damage
    section Round 2
    During Combat [Player's 2nd Turn]
                                        : Resolve any STATUS EFFECTS & -1 turn for the SE
                                        : Player uses their [GLOCK] and fires [3] shots
                                        : [Rapid Fire] condition satisfied, activate trait, no *penalty die* applied
                                        : Enemy is 10 yards away, which is within the weapon distance (15 yards) thus no *penalty die* applied
                                        : Enemy has [Death Mark] SE, *bonus die* applied
                                        : Roll for firearms (hangun) x 3, all roll success
                                        : Roll 3 separate 1D10, total of 30
                                        : Enemy armor applied, [Glock] deals half damage and -2 attack
                                        : Enemy loses 13 HP, now has **0** HP left
    section Post Battle
    System [During Combat]
                                        : Enemy [is dead]
                                        : No other enemy left
                                        : Combat Concludes
    System [After Combat]
                                        : Record and save character state [HP, MP, Equipment, Items (ammo)]
                                        : Exit Combat
```
