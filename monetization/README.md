# Monetization Strategy 

## Overview
These files shows a research on the monetization strategies of AI-assisted story creation platforms, and RS' monetization stragey which refers to those existing platforms.

## Research
**AI Story Creation Platforms (Click to find details):**
- [AI Dungeon (mainly)](ai-dungeon/ai-dungeon.md)
- [NovelAI](novelai/novelai.md)
- [DreamGen](dreamgen/dreamgen.md)

To sum up, main subscribed services of them are:
1. access to more text and image AI models
2. longer token length
3. more AI generation uses
4. more advanced memory functions (AI Dungeon to be specific)

But how they provide these services are different. I left comments below.

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


**Other AI products:**
- [Suno](https://suno.com/account)

| Plan       | Price        | AI Credits | Usage Type       | Generation Queue | Running Jobs | Features                                                                                       |
|------------|--------------|------------|------------------|------------------|--------------|------------------------------------------------------------------------------------------------|
| Free       | $0           | 50/day     | Non-Commercial   | Shared           | 2 at once    | Basic AI interaction, unlimited games, multiplayer access, 1 AI opponent level, access to strategies|
| Pro        | $8/month     | 2.5k/month | General Commercial | Priority         | 10 at once   | Enhanced AI interaction, ad-free experience, 3 AI opponent levels                                 |
| Premier    | $24/year     | 10k/month  | General Commercial | Priority         | 10 at once   | Premium AI engagement, priority support, exclusive avatars, custom game rules, highest priority generations |

- [Midjourney](https://docs.midjourney.com/docs/plans)

| Feature                           | Basic Plan    | Standard Plan   | Pro Plan       | Mega Plan      |
|-----------------------------------|---------------|-----------------|----------------|----------------|
| Monthly Subscription Cost         | $10           | $30             | $60            | $120           |
| Annual Subscription Cost          | $96 ($8/month)| $288 ($24/month)| $576 ($48/month)| $1152 ($96/month) |
| Fast GPU Time                     | 3.3 hr/month  | 15 hr/month     | 30 hr/month    | 60 hr/month    |
| Relax GPU Time                    | -             | Unlimited       | Unlimited      | Unlimited      |
| Purchase Extra GPU Time           | $4/hr         | $4/hr           | $4/hr          | $4/hr          |
| Work Solo In Your Direct Messages | ✓             | ✓               | ✓              | ✓              |
| Stealth Mode                      | -             | -               | ✓              | ✓              |
| Maximum Concurrent Jobs           | 3 Jobs        | 3 Jobs          | 12 Fast Jobs   | 12 Fast Jobs   |
|                                   | 10 Jobs queue | 10 Jobs queue   | 3 Relaxed Jobs | 3 Relaxed Jobs |
|                                   |               |                 | 10 Jobs queue  | 10 Jobs queue  |
| Rate Images to Earn Free GPU Time | ✓             | ✓               | ✓              | ✓              |
| Usage Rights                      | General Commercial Terms* | General Commercial Terms* | General Commercial Terms* | General Commercial Terms* |


- [Luma](https://lumalabs.ai/dream-machine/account)

| Plan      | Price*    | Generations per Month            | Priority Generations    | Commercial Use      | Remove Watermark   |
|-----------|----------|----------------------------------|-------------------------|---------------------|--------------------|
| Free      | Free     | 30 generations per month         | -                       | No                  | No                 |
| Standard  | $29.99   | 120 (+30) generations per month  | High priority           | Yes                 | Yes                |
| Pro       | $99.99   | 400 (+30) generations per month  | Highest priority        | Yes                 | Yes                |
| Premier   | $499.99  | 2,000 (+30) generations per month| Highest priority        | Yes                 | Yes                |

Yearly subscription all get 20% off discount.

## RS Monetization Plan
Since RS is at the beginning stage, let's make it simple and straightforward.
### In-Game Reource
 To simplify, we only have one in-game resource called **Credit**. 
 
 It is consumed in:
- text generation. Every time GPT generate new content(**cache will NOT cost credit**), which is when user make a choice, do a skill check, or regenerate, cost 1 Credit. 

**Error will NOT cost credit (use programme to detect). Players can report bugs if the detection has error.**

- image generations (avatar, background image). Cost 2 credits per time. Video generation, 5 credits.
~~- users roll a dice to determine their character stats or descriptions. Every time users rolling a dice cost 1 Credit.~~
- tip the creator you like. Users can select how much credits they want to tip. Creator can gain the credits for their own use. 

How to Get it:
- VIP users will receive their credits at the beginning of every month. 
- Daily Login. 10 credits for free users. Double credits for subscribers.
~~- Users can purchase additional credits.~~ (Not now)

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
| Free       | 0              | - 50 free credits for visitors. Extra 50 credits if visitors register accounts. Daily login 10 credits. <br> - Access to GPT 4o and image generator (generate avatar, background image) <br> ~~- Writers can create 10 Chapters at most, 10 turns and 10 rules at most per chapter.~~   |
| Standard       | $10            | - 700 credits per month. Daily login 20 credits. <br> - Access to GPT 4o and image generator (generate avatar, background image)<br> ~~- Writers can create 15 Chapters at most, 12 turns and 15 rules at most per chapter.~~<br>- Writers have access to AI generated initial message, chapter rules(skill checks, chapter gending). <br>- Writers have access to create own enemies and items (free accounts can only use templates).<br>  ~~- Players can have extra* level up points for characters. <br> - Players have access to custom weapons and items they want to take.*~~ <br> - Players have access to premium occupations.* <br> - Players have access to fancier dice. <br> - Ads free. |
| Pro       | $15            | ~~- 1000 credits per month. Daily login 20 credits.~~ Unlimited credits. <br> - Access to GPT 4o and image generator (generate avatar, background image)<br> ~~- Writers can create 18 Chapters at most, 16 turns and 18 rules at most per chapter.~~<br>- Writers have access to AI generated initial message, chapter rules(skill checks, chapter gending). <br> - Writers have access to create own enemies and items (free accounts can only use templates). <br> ~~- Players can have extra* level up points for characters. <br>- Players have access to custom weapons and items they want to take.* <br>~~ - Players have access to premium occupations.* <br> - Players have access to fancier dice. <br> - Ads free.|

*To be discussed.

**Every user can use AI to generate initial messages and chapter rules, cost 5 credits.**
**Every user can let AI generate skill checks for them.**
**Every user can create new boss, stats**
**Every user can custom their own character (for now).**
为角色付费 

#### Discount
Users who subscribe 6 month altogether can have a 10% discount. 12 month altogether have 15% discount. 

#### Membership Trial   
A one-week trial is offered. If user cancels during the trial period, the premium benefits will end at once.

#### Membership Exposure
**主动露出 Active:**
##### 1. Home page

Position: at the buttom left, similar to ChatGPT
After user click, directly jump to the monetization webpage.
![home](rs-monetization/home-page.png)

##### 2. Daily Login rewards
Free vs VIP
Daily login will pop up the first time user opens the home page every day. Pro users don't have the pop up cuz they already have unlimited credits. 
![login](rs-monetization/login.jpg)


**被动触发 Passive:**
##### 1. Player runs out of credit while playing in the story

Every time AI generates new content (which is when player make a choice, do a skill check, or player regenerate), cost 1 Credit. 
Position: When player runs out of credit while playing, a window pops up, telling 'You've run out of credits. Upgrade to a Premium account and continue your journey!' A button 'Upgrade to Premium' at the bottom. 
After user click, directly jump to the monetization webpage.

![out-of-credit](rs-monetization/out-of-credit.png)

##### 2. Besides remaining credits 
Position: wherever user can check their remaining credits, e.g. profile page. Besides the remaining credits, there's a 'Unlock unlimited credits' button. After user click, directly jump to the monetization webpage.


##### 3. Ads free
If user click to close the image ads or turn off the video ads, jump to the monetization page. It depends on if it's image ad or video ad.

According to our subscription, membership will also appear where subscribed service are provided: 
##### 4. Creator editing chapter page  

Have an AI generate button/column besides the initial message. The button has a premium logo on it to let users know it's a paid function. After user click, directly jump to the monetization webpage.

![initial-message](rs-monetization/initial=message.png)

![ai-generate](rs-monetization/ai-generate.png)

Besides the chapter rule, there's a button 'Add some skill check by AI'. If user click on, directly jump to the monetization webpage.

![skillcheck](rs-monetization/skillcheck.png)

##### 5. Play mode, select characters. Premium occupations, with a premium logo on it. Player can click to see the occupation, but if player clicks the 'Start' game, jump to the monetization page.
![premium-occupation](rs-monetization/premium-occupation.png)

##### 6. Fancier Dice
On the playing story page, together with the check occupation button, share my adventure button, there's a 'dice' button. Some dice are free, but some are premium.   
![dice](rs-monetization/dice.png)

#### Achievements & Rewards
*Not going to dig into this part for now, just to write down some ideas for future design.*

- First day playing 30 minute, for example, 30 credits.
- Play 10 hours in total

- Finish 1 story 
- Finish 5 stories

- Create 1 story

- Invite friends. After they sign up, both you and your referrals will receive 50 credits. 

- Beat XX Enemies