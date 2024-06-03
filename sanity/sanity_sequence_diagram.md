
---
Sanity Sequence Diagram
---
```mermaid
    sequenceDiagram
    actor player
    participant horrifying event
    participant sanity check
    participant sanity roll
    participant cthulhu mythos event
    participant bouts of madness

player->> horrifying event: Experiences
horrifying event->> sanity check: Triggers
alt if roll success
sanity check->> player: decrease minimum or zero sanity points 
else if roll fail
sanity check->> sanity roll: make
end

alt if sanity points loss > 5 or = 5
sanity roll->> bouts of madness: gain
bouts of madness->> player: Decrease Sanity points rolled & gain 1 random bout of madness
else if sanity points loss < 5
sanity roll->> player: Decrease Sanity points rolled

end
