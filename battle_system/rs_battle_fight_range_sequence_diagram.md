
---
Battle: Fight(Range)
---
```mermaid
    sequenceDiagram
    participant player death
    participant player skill check
    participant fight back
    participant dodge
    participant ammo
    actor player
    actor enemy
    participant enemy death


loop If both player & enemy: HP > 0
    note right of enemy: Enemies cannot dodge range attacks
    player->>ammo: Action: Range (check for ammo)
    ammo->>enemy: Ammo > 0
    note over player, enemy: action skill check 
    alt if skill check succeeds: 
    enemy->> enemy: player deals damage
    else if skill check fails:
    enemy-->> enemy: no damage
    end

    opt if enemy HP = 0
    enemy->> enemy death: enemy dies
    end
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
