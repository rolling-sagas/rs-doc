
---
Battle: Fight(Brawl & Melee)
---
```mermaid
    sequenceDiagram
    participant game over
    participant player death
    participant player skill check
    participant fight back
    participant dodge
    actor player
    actor enemy
    participant enemy skill check
    participant enemy death
    participant exit battle


loop If both player & enemy: HP > 0
    note left of player: Start here if player DEX is higher
    player->>enemy: Action: Brawl, Melee
    note over player, enemy: action skill check
    enemy->>+ enemy skill check: initiates skill check against my action
    note right of enemy skill check: ENEMIES ALWAYS FIGHT BACK
    alt if skill check succeeds
    enemy skill check-->> enemy: 
    enemy-->> player: deal damage
    else if skill check fails
    enemy skill check->>- enemy: 
    enemy->> enemy: receives damage from player
    end
    opt if enemy HP = 0
    enemy->> enemy death: enemy dies
    enemy death->> exit battle: player wins
    end

loop If enemy has multiple attacks
    enemy-->>+player: Action: Attack
    note right of enemy: Start here if enemy DEX is higher
    note over enemy, player: action skill check
    alt if player dodges
    player-->> dodge: 
    dodge-->>+ player skill check: initiates skill check against enemy action
    else if player fights back
    player-->>- fight back: 
    fight back-->>+ player skill check: initiates skill check against enemy action
    end

    alt if fight back succeeds
    player skill check->> player: 
    player->> enemy: deal damage
    else if fight back fails
    player skill check-->>- player: 
    player-->> player: receive damage 
    end
    opt if player HP = 0
    player-->> player death: 
    player death->> game over: 
    end


    alt if dodge skill check succeeds 
    player skill check->>player: 
    player-->> player: no damage
    else if dodge skill check fails: 
    player skill check-->>-player: 
    player-->>player: receive damage
    end
    opt if player HP = 0
    player-->> player death: 
    player death-->> game over: 
    end
end
end



