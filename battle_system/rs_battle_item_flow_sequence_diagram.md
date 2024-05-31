
---
Battle: Item
---
```mermaid
    sequenceDiagram
    participant player death
    participant player skill check
    participant fight back
    participant dodge
    actor player
    actor enemy
    

loop If both player & enemy: HP > 0
    player->>player: uses item

loop If enemy has multiple attacks
    enemy-->>+player: Action: Attack
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
    end

    alt if dodge skill check succeeds 
    player skill check->>player: 
    player->> player: no damage
    else if dodge skill check fails: 
    player skill check-->>-player: 
    player-->>player: receive damage
    end
    opt if player HP = 0
    player-->> player death: 
    end
end
end
```