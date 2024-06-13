# Monetization Strategy 

## Overview
These files shows a research on the monetization strategies of AI-assisted writing platforms, and RS' monetization stragey which refers to those existing platforms.

## Research
List (Click to find details): 
- [AI Dungeon (mainly)](ai-dungeon/ai-dungeon.md)
- [NovelAI](novelai/novelai.md)
- [DreamGen](dreamgen/dreamgen.md)

To sum up, main subscribed services of competitors are:
1. access to more text and image AI models
2. longer token length
3. more AI generation uses
4. more advanced memory functions (AI Dungeon tobe specific)

But the exact ways how they provide these services are different. I left comments below.

| Product      | Subscription Tier | Monthly Price | Features                                                                                         | Comments                                  |
|--------------|-------------------|---------------|-------------------------------------------------------------------------------------------------|-------------------------------------------|
| **AI Dungeon**   | Free              |               | - 2 Story Generators (Up to 2k token context)<br>- 1 Image Generator (cost Credits)<br>- 0 Memories<br>- 0 Monthly Credits | One big difference is that AI dungeon's free users can also have unlimited access to text AI models, as long as they use the **basic text AI models**. <br>Their Credits are used to generate images mainly. <br>Their core paid service for now is their Memory System and token context. |
|              | Adventurer        | $9.99         | - 3 Story Generators (Up to 4k token context)<br>- 2 Image Generators<br>- Memory System<br>- 25 Memories<br>- +480 Monthly Credits |  |
|              | Champion          | $14.99        | - 3 Story Generators (Up to 8k token context)<br>- 2 Image Generators<br>- Memory System<br>- 50 Memories<br>- +760 Monthly Credits |    
|              | Legend            | $29.99        | - 4 Story Generators (Up to 16k token context)<br>- 4 Image Generators<br>- Memory System<br>- 100 Memories<br>- +1650 Monthly Credits |       |
|              | Mythic            | $49.99        | - 4 Story Generators (Up to 32k token context)<br>- 4 Image Generators<br>- Memory System<br>- 200 Memories<br>- +2750 Monthly Credits |       |
| **NovelAI**      | Paper            | Free          | - 100 free text generations<br>- 100 free TTS generations<br>- 6144 tokens of memory                     | Free users have access to all text models, though with limited use.<br> Voice model is available.<br> No access to image models.         |
|              | Tablet            | $10           | - Unlimited text and TTS generations<br>- 3072 tokens of memory<br>- 1000 Anlas (in-game resource) for image generation and custom AI module training |       |
|              | Scroll            | $15           | - Unlimited text and TTS generations<br>- 6144 tokens of memory<br>- 1000 Anlas for image generation and custom AI module training |            |
|              | Opus              | $25           | - Unlimited text and TTS generations<br>- 8192 tokens of memory<br>- Longer output generation<br>- Exclusive access to experimental AI models<br>- Unlimited image generation |  |
| **DreamGen**     | Free              |               | - 100 credits limit per month <br> - 15 extra daily credits generations                                                                            | Credits is calculated into tokens, instead of generation times.<br> Subscription basically means more credits and increase token context limit.           |
|              | Starter          | $7.83         | - 200 credits limit per month<br> - 20 extra daily credits<br> - 4000 tokens context limit                                         |  |
|              | Advanced         | $19.35        | -1500 credits limit per month<br> - 50 extra daily credits<br> - 8000 tokens context limit                  |           |
|              | Pro              | $48.30        | -3500 credits limit per month<br> - 100 extra daily credits<br> - 12000 tokens context limit                | |


## RS Monetization Plan
Since RS is at the beginning stage, let's make it simple and straightforward.
### In-Game Reource
 To simplify, we only have one in-game resource called **Credit**. 
 
 It has several uses:
- text generation uses, or AI actions. Every time user make a choice, do a skill check, or retry cost 1 Credit. 
- image generations. Cost 5 credits per time.
- users roll a dice to determine their character stats or descriptions. Every time users rolling a dice cost 1 Credit.
- tip the creator you like. Users can select how much credits they want to tip. Creator can gain the credits for their own use. 

How to Get it:
- Subscribors will receive their credits at the beginning of every month, 
- Daily Login. 10 credits for free users. Double credits for subscribers.
- Users can purchase additional credits.

In AI Dungeon, 1 Credit cost 0.0125 dollars. One image cost 1 credit.
In NovelAI, 1 Anlas cost 0.0024 dollars, but one image cost 20 anlas. same value equals to 0.048 dollars.
In DreamGen, 1 Credit cost 0.0129 dollars. 

Since our Credit has more uses than AI Dungeon, I think we can set higher prices for credits than AI Dungeon. Increase price by 50%.

| Credits | AI Dungeon Price per month   | RS Price per month  |
|---------|---------           |--------  |
| 80      | $0.99              | $1.49    |
| 500     | $4.99              | $7.49    |
| 1200    | $9.99              | $14.99   |
| 2500    | $19.99             | $29.99   |
| 6500    | $49.99             | $74.99   |
| 14000   | $99.97             | $149.96  |

### Membership

Considering RS provides both gameplay and writing experiences, RS membership can offer advanced gameplay experience and writing experience aside from more credits.

| Tier       | Monthly Price          | Features                                            |
|------------|----------------|----------------------------------------------------|
| Free       | 0              | - 50 free credits for visitors. Extra 50 credits if visitors register accounts. Daily login 10 credits. <br> - Access to GPT 4o and image generator<br> - Writers can create 10 Chapters at most, 10 turns and 10 rules at most per chapter.   |
| Standard       | $10            | - 700 credits per month. Daily login 20 credits. <br> - Access to GPT 4o and image generator<br> - Writers can create 15 Chapters at most, 12 turns and 15 rules at most per chapter.<br>- Writers have access to custom enemies and items.<br> - Players can have extra* level up points for characters.<br> - Players have access to custom weapons and items they want to take.* <br> - Players have access to fancier dice.  |
| Pro       | $15            | - 1000 credits per month. Daily login 20 credits. <br> - Access to GPT 4o and image generator<br> - Writers can create 18 Chapters at most, 16 turns and 18 rules at most per chapter.<br> - Writers have access to custom enemies and items.<br> - Players can have extra* level up points for characters.<br> - Players have access to custom weapons and items they want to take.* <br> - Players have access to fancier dice.|

*Amount to be discussed.

#### Discount
Users who subscribe 6 month altogether can have a 10% discount. 12 month altogether have 15% discount. 

#### Membership Trial   
A one-week trial is offered. If user cancels during the trial period, the premium benefits will end at once.

#### Achievements
*Not going to dig into this part for now, just to write down some ideas for future design.*

First day playing 30 minute, for example, 30 credits.
Play 10 hours in total

Finish 1 story 
Finish 5 stories

Create 1 story

Beat XX Enemies

Share with Friends