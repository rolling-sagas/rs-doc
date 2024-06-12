# Competitors' Monetization Strategy

## AI Dungeon
Catelogue:
- [In-Game Resources, Function and How to Get Them](#in-game-resources)
        [Credits](#1-credits)
        [Scales](#2-scales)
        [Energy](#3-energy)

- [Tiers of Memership](#tiers-of-membership)
        [Text AI Model](#text-ai-model-difference)
        [Image AI Model](#image-ai-model)
        [Memory (paid service)](#memory)
        [Monthly Credits](#monthly-credits)
        [Membership Trial](#membership-trial)

### In-Game Resources 

Mandy's point of view: unnecessary to have so many different resources while their functions are few. We can combine them into only one resource. 

#### 1. Credits 
[AI Dungeon 'Credit' Link](https://help.aidungeon.com/faq/what-are-image-credits)
Function: 
1. generate images  
2. purchase [Scales](#2-scales)
3. Top 2 members (Legend and Mythic) can also use Credits on larger GPT-4 Turbo context. 
*Legend and Mythic players can spend 1 Credit per action for every 250 tokens of GPT-4 Turbo context up to 128k tokens. Mythic includes unlimited actions on GPT-4 Turbo with 1k tokens as part of the subscription and will only be charged Credits for context used beyond 1k.*

How to get Credits: 
1. Membership gives [monthly credits](#monthly-credits). 
2. Users can purchase credits alone. See prices below. 

![credit](/rs-doc/monetization/ai-dungeon/credit-price.png)

#### 2. Scales
[Scales Link](https://help.aidungeon.com/faq/how-can-players-spend-scales)
Function: 
1. Speed Boost Basic AI Models, including MythoMax, Tiefighter, Griffin (Deprecated), Stable Diffusion 1.5.
2. Tip the creators you like.

How to Get Scales: 
1. Daily Rewards
![daily scales](/rs-doc/monetization/ai-dungeon/scales-daily.png)

2. use credits to purchse scales
![scales](/rs-doc/monetization/ai-dungeon/purchase-scales.png)

#### 3. Energy: 
Function: Energy is now used for free users to enjoy free actions for the Paid Model Mixtral. 

**Free models like MythoMax and Tiefighter have no limit, thus no energy button is shown when choosing free models. Paid users have unlimited use of models, thus no energy concept for paid users either.*

![energy](/rs-doc/monetization/ai-dungeon/energy-cost.png)

How to Get: It started at 100 and once it reaches below 20, it will recharge to a max of 20 each day. 

**The recovery time varies. It recovers more quickly for new players. 8 hours-20 hours.*  

![energy recover](/rs-doc/monetization/ai-dungeon/energy-recover.png)

### Tiers of membership
Short conclusion - main advantages for paid memebers:
1. More context for AI to remember, and access to more AI models.
2. More Memory functions to keep stories cohensive
3. More credits

AI Dungeon's membership seems to focus on how to making stories more cohesive, rather than the use limit of AI actions. Free users now can also have unlimited access to AI actions as long as they use basic models. And according to their website, they hope to make premium only features available to all players in the future.

![hope](/rs-doc/monetization/ai-dungeon/hope.png)

#### Text AI Model Difference

Core Difference：
1. token length difference (from 2k tokens to 32k tokens, 1 token equal to 4 characters)
2. access to more AI models (free users have unlimited use of MythoMax and Tiefighter, and limited use of Mixtral, a premium model but can use ['Energy'](#3-energy) to try it.)

[Click to see AI Dungeon Models introductions](https://help.aidungeon.com/faq/what-are-the-different-ai-language-models)

![model](/rs-doc/monetization/ai-dungeon/models.png)


#### Image AI Model
Core Difference:
1. access to more AI models, response time and steps are different.
2. different credits cost 

![image](/rs-doc/monetization/ai-dungeon/images.png)

| **TIER**       | **STABLE DIFFUSION** | **STABLE DIFFUSION XL** | **DALLE-3** | **DALLE-3 HD** |
|----------------|-----------------------|-------------------------|-------------|----------------|
| **Free**   | 1 credit per image    | –                       | –           | –              |
| ~~**Traveler**~~ | ~~1 credit per image~~    | –                       | –           | –             |
| **Adventurer** | Unlimited             | 2 credits per image     | –           | –              |
| **Champion**   | Unlimited             | 1 credit per image      | –           | –              |
| **Legend**     | Unlimited             | Unlimited               | 15 credits per image | 15 credits per image |
| **Mythic**     | Unlimited             | Unlimited               | 30 credits per image | 30 credits per image |


#### New Memory  System
AI Dungeon's new memory system, made up of [Memory Bank](#memory-bank) and [Auto Summarization](#auto-summarization-updated-in-apr-2024-exprimental), is a new, premium feature that automatically stores and retrieves key information from your Adventure, helping keep the AI on track. 

[See how it works, from AI Dungeon](https://help.aidungeon.com/faq/the-memory-system)


##### Auto Summarization (updated in Apr, 2024, exprimental)

AI Dungeon automatically summarize sections of player's adventure (every 4 actions), and add new memories to Story Summary Component(a new Plot Component released in April). 
Once Story Summary get long enough, AI Dungeon will re-summarize and compresses summaries by sending it to summarization AI model.

This auto summarization is now accessible to **premium users only**. Creator can also write story summary manually.

In the Content Viewer, users can check the memories.
![memory bank](/rs-doc/monetization/ai-dungeon/memory-system.jpg)

##### Memory Bank (updated in Apr, 2024, exprimental)
Memory Bank dynamically stores and retrieves relevant key information from player's adventure in order to improve the AI's ability to recall important story details. 
It's using an embedding model to rank all of player's memories by relevance to your current story. 

AI Dungeon takes the most relevant memories and send them to AI. Used memories can be viewed in the Content Viewer.
![memory bank](/rs-doc/monetization/ai-dungeon/memory-bank.jpg)

Capacity of Memory Bank varies depending on your memebership tiers.
| Membership Tier | Memory Bank |
|-----------------|-------------|
| Adventurer      | 25          |
| Champion        | 50          |
| Legend          | 100         |
| Mythic          | 200         |

#### Monthly Credits
Amount of free monthly credits are different:

| **TIER**       | **Monthly Credits** |
|----------------|-----------------------|
| **Free**   | 0    |
| **Adventurer** | +480             |
| **Champion**   | +760             | 
| **Legend**     | +1650             |
| **Mythic**     | +2750             |

Check the function of Credits [here](#1-credits)

### Membership Trial
AI Dungeon offers a one-week trial for Adventurer and Champion tier.

What's different is, if user cancels during the trial period, the premium benefits will end at once.

### Discount
Users purchasing for 6 months altogether can have a about 10% off discount. 25% off discount for 12 months. 