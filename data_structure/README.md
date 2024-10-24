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
    sequenceDiagram
    participant movement    
    participant sanity
    actor player
    actor enemy

    participant status effect
    participant round end


    note left of player: load investigator's current HP, MP, Equipment, Items
    note right of enemy: load enemy's current HP, MP
    note left of player: check to see if player's current condition would activate any traits
    note right of enemy: check to see if enemy's current condition would activate any traits


    player->>+enemy: sees
    enemy->>-sanity: initiate sanity check
    alt if skill check succeeds:
    sanity-->>player: lose minimum sanity
    else if skill check fails:
    sanity-->>player: roll sanity loss die
    end

    alt compare movement:
    player-->+movement: 
    enemy-->movement: 
    else if player is faster: 
    movement->>player: 
    else if enemy is faster:
    movement->>-enemy: 
    end

    player->>enemy: uses the ability: Death Mark
    enemy->>status effect: gains a status effect for 3 rounds

    status effect->>enemy: resolve any damage dealing SE and -1 SE turn

    loop max enemy attack / turn
    enemy->>player: attacks
    alt fight back: Success
    player->>enemy: 
    else fight back: fail
    player->>player: lose HP
    else dodge: success
    player->>player: no HP loss
    else dodge: fail
    player->>player: lose HP
    end
    end

    round end->>status effect: -1 round



