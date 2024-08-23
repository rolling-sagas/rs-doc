# Darkest Dungeon 2 Combat Framework

**Overview:** This document will take a deep dive into the combat framework and mechanics of **Darkest Dungeon 2**. In order to better implement this mechanic into our game, it is imperative that we understand the inner workings. I will cover turn order, position, stress, status effects, environment, unique token system, enemies, bosses, mastery system.

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

## Tokens

Tokens are essentially **status effects** with a fixed stat, and there are **2 types**: Positive (Buffs), Negatives (Debuffs)

Some tokens grant unique abilities like counter attack (e.g. Riposte).

![Tokens](/darkest_dungeon_2/images/dd2-tokens.png)
*There can be many different tokens applied to a character at any given moment. It can be both positives and negatives.*

There are also unique **tokens** that are tied to specific **characters** and **enemies**. Thus it is party of the game play look for player's to maximize their buffs while evading or manage debuffs.

### Damage Over Time

Characters and enemies can both inflict **DOT** effects:
- Bleeding
- Blight
- Burn

The three of them function identically but is effective on different enemies since there are a variety of resistance among them.



## Enemies

There are many different kinds of enemies in the game to give variability and different challenges in the game. Regardless, I will take a deep dive into one example, and take a look at how it interacts with the existing combat mechanic, and how players can develop strategies for it.

### Fisherfolk: Docker

![Docker](/darkest_dungeon_2/images/docker.png)
**Docker** is a tougher enemy that appears in **The Shroud** region.

![DockerStat](/darkest_dungeon_2/images/docker%20stats.png)

*It has high HP and deals heavy damage. He also comes with a token called "Death Armor".*

![DockerSkills](/darkest_dungeon_2/images/Docker%20combat%20skills.png)

*We can see that certain skills **cannot** activate in certain positions.*

**Note that the above information can be found during combat by clicking on the enemy, also called: Academic View**

Player can maximize their attack by exploiting its weakness, alter its position to back ranks so it deals less damage, or even prioritize it and attempt to take it down ASAP.

I would also like to put an emphasis on the skill "Brine Bucket", for it may also add "Barnacle Token", dealing damage if the player's characters move among the ranks. It also takes up 2 ranks/positions due to his size, a very simple and **intuitive** way of saying "he's dangerous".


## Combat Flow

Combat takes place over a number of rounds, and during each **round** every unit takes a **turn**. During their turn they can take an **action** or use a **combat item**. Once everyone completes their **turn**, the next **round** would begin, this will repeat until one side is annihilated.

```mermaid
    flowchart TD

    id1(((Battle Start: Round n+1)))

    id2[(Speed Stat + 1D6)]
    id2a[[Everyone's turn order based on final speed stat]]

    id3[Action]
    id3a[Enemy]
    id3b[Self]
    id3c[Team]
    id3d[Combat Items]

    id4[Action]
    id4a[Enemy]
    id4b[Self]
    id4c[Team]

    id6[Is one side compeltely Annihilated?]
    id7[Yes]
    id8[No]
    id9[Battle Ends]
    id10(((Round n+1)))
    
    subgraph Turn-Order
    id2-->id2a
    end

    subgraph Player-units
    id3-->id3a
    id3-->id3b
    id3-->id3c
    id3-.->id3d-.->id3
    end

    subgraph Enemy-units
    id4-->id4a
    id4-->id4b
    id4-->id4c
    end

    id1-->Turn-Order
    Turn-Order-->Player-units
    Turn-Order-->Enemy-units
    Enemy-units-->id6
    Player-units-->id6
    id6-->id7
    id7-->id9
    id6-->id8
    id8-->id10
```

### Player Combat Journey

```mermaid
    sequenceDiagram
    Actor Player
    Participant Combat
    Participant Turn Order System
    Participant Map
    Participant Town

    
    Player->>+Combat: Enters
    Combat->>-Turn Order System: Round starts and triggers

    loop
    activate Turn Order System
    Turn Order System->>Combat: Establish character and enemy turn order
    deactivate Turn Order System

    alt Enemy is faster
    Combat-->>Player: Takes an action against
    else Player is faster
    Player-->>Combat: Character is free to take an action
    end 

    loop Until everyone takes a turn
    Combat->>Combat: Bloodshed
    end


    alt No side is Annihilated
    Combat->>Turn Order System: Round 2 Begins with new turn order
    end
    end

    alt Enemy Annihilated
    Combat->>Map: Returns to
    else Player Annihilated
    Combat->>Town: Returns to
    end
```
    

## Supplementary Information

Additional elements that may influence combat outcome.

### Flame

The status of the flame could provide **buffs** or **debuffs**.

![FlameSystem](/darkest_dungeon_2/images/Flame%20System.png)
*e.g. The denial confession would give these modifiers to combat.*

Different confessions will give different hero and enemy modifiers.

### Stress

Characters can accumulate or remove stress in various ways.

Certain actions or results will cause an increase or decrease of stress, 

Enemies can inflict **horror** damage instead of physical damage, pushing the mental state of the characters to the brink of insanity. When that occurs, the character's enter 1 of 2 states *(third state is specific to the Flagellent class)*:

- Meltdown: Apply a random negative quirk
- Resolute: Apply a random positive quirk
- Toxic: Adds a "Toxic" token and a bunch of other effects

**These quirks will also give **buffs** or **debuffs** to said character during combat. Greatly influencing the final result of battle.**