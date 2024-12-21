# AI Dungeon Scripting

**Overview:** Scripting in AI Dungeon allows for more intricate and complex story telling. Essentially giving players the tools to alter the input and output messages, along with taking advantage of its already existing system.

## Input/Output Manipulation

This is the most basic and simple form of scripting, which is changing the **input** message of the user before it get fed to the AI. Or, changing the **output** message by giving the AI commands. 
- These are all **invisible**, meaning, the manipulation occurs in the background.


Checkout the **UWU** folder under ai_dungeon_scripting, it is a great example of HOW **texts** are manipulated.
- instructions for *string* edits are passed through for input and output.



## RPG Mechanics

Implementing RPG mechanics is much more complex, as there are many more **functions** and **constants** required to make the mechanic work.
- Even then, I find it difficult to make it operate properly.

## RPG Folder Example
I found this premade RPG with dice roll on Git. My initial implementation did not work as there was an error that prevent it from running. After tinkering it with the help of ChatGPT, I was able to get it running but with with broken dice rolls.

### Dice Rolls
There is a dice roll, but I can't seem to get it to define the roll (I guess the AI doesn't know what it is rolling FOR)
- The AI currently rolls for **all** text input.(I can't seem to get it only roll for certain inputs.)


### Inputs & Context
 It appears that they **update** the character stats through each **input**. This operates with the **context** which is getting the AI information about the newly introduced **rules**/**world** so that it has the necessary information required to produce expected results.

- Ai is given context of the character stats, and character stats are sent during each input.

- It appears that if the **player** levels up, they are sent(input) to the AI to update the stats.

- Context ensures that the AI is always aware of the rules.


### Possible Flow Process

```mermaid
    flowchart LR

    id1([Player])
    id2([Input Modifier])
    id3([AI])
    id4([Context Modifier])
    id5([Out Modifier])
    id6([Displayed Text])


    id1--inserts a text (e.g. Do action)-->id2
    id2--modifies the text/ add important information to-->id3
    id3--processes the information with the inscripted game rules-->id4
    id4--generated text is processed through-->id5
    id5--shown in-->id6
```








*Through research, I noticed that it appears to be a **trial & error** process, as the designer needs to wrestle with the AI to determine what information to provide the AI will produce the best result.*






