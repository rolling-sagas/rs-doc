# Upgrade Plan Page Design
![alt text](image-6.png)<br>
![alt text](image-7.png)<br>
![alt text](image-8.png)<br>
![alt text](image-9.png)<br>

<details>
<summary>文字版</summary>

参考 [Vimeo](https://vimeo.com/upgrade-plan)
![alt text](image-4.png)

- 付费方案单独一个网页，撑满当前页面。
- 顶部文字参考vimeo，Upgrade your plan
- Monthly和Annually Save 20%的button按钮效果都按照vimeo的设计来。
- Tier名称目前为Free，Standard和Advanced。<br>
其他参考：<br>
[ChatGPT](https://chatgpt.com/#pricing): Free, Plus<br>
[Midjourney](https://www.midjourney.com/checkout/plans?hash=be96d15e0742cef72e6cc2396a7d108c60349e6c46a425b55aec6c22770db0e9a69126ccef2d2164f1a9ddd1334b37fdPdnDmhUTSN8tFYzWAlVqfywbiPwqugW0YScB2ttUkY7O35aDci8irrv2snvjDmm1Y1fYgjpN604CwI9mqGUiaPvQ24ZXU0AVjU7rpUjfJJV8h2hOVdjQMe0E4vXyz0V9MunYdv6Dz/BGc0XwVf6lpXE7oV2uukjYGbEypcaswP8UebSb%20c3BQNql1X7yf3X9EoPiix2GFeYYutnOyCC3tdnSSGPYvsPuufa0s6LI066loQd3vCxsH4Xbf1TWsEbipb7F/9sDwOIbDWqLG9MErGLnFu0O5T4TwCP2hnscfCs=): Basic (paid), Standard, Pro, Mega<br>  
[Suno](https://suno.com/account)：Basic (free), Pro, Premier<br> 
[Runway](https://app.runwayml.com/video-tools/teams/mandywangwwwe/dashboard)：Free, Standard, Pro, Unlimited, Enterprise<br>

- Tier name下面的宣传语，如果有必要放的话，Standard和Advanced可以分别突出丝滑的play experience和无限制的create experience。<br>
Standard: "Boost your play experience with AI."<br>
Advanced: "Unleash your storytelling potential with infinite AI generations.", "Essential for mastering AI story creation."<br>
- Annual plan的价格，全额显示和月度显示都可以。
- 每列的button，这里涉及到不同tier的用户需要显示不同的button，参考的[Midjourney](https://www.midjourney.com/checkout/plans?hash=be96d15e0742cef72e6cc2396a7d108c60349e6c46a425b55aec6c22770db0e9a69126ccef2d2164f1a9ddd1334b37fdPdnDmhUTSN8tFYzWAlVqfywbiPwqugW0YScB2ttUkY7O35aDci8irrv2snvjDmm1Y1fYgjpN604CwI9mqGUiaPvQ24ZXU0AVjU7rpUjfJJV8h2hOVdjQMe0E4vXyz0V9MunYdv6Dz/BGc0XwVf6lpXE7oV2uukjYGbEypcaswP8UebSb%20c3BQNql1X7yf3X9EoPiix2GFeYYutnOyCC3tdnSSGPYvsPuufa0s6LI066loQd3vCxsH4Xbf1TWsEbipb7F/9sDwOIbDWqLG9MErGLnFu0O5T4TwCP2hnscfCs=)<br>
未订阅用户：free plan显示Play Now，点击跳转至Home，Standard和Advanced列显示Upgrade，点击跳转到支付页面。<br>
Standard用户：当前方案显示Active，不可点击，Advanced列显示Upgrade，Free plan无button。<br>
Advanced用户：当前方案显示Active，不可点击，Standard列显示Change Commitment, Free plan无button。<br>

- Best Value为Advanced plan。
- 目前没有设置trial，考虑到目前没有功能上的区别。
- 权益不用加"Everything in Starter, plus:"，或者将credits单独拿出来，避免歧义。
- 底部的Compare all features不用放，因为我们现在只有credits数量的区别。

- 关于FAQ，在付费方案页面不放FAQ了，拆到各个合适的地方。<br>
1）credits相关解释，使用下图角标的方式来注释，鼠标移上去会显示注释。<br>
![alt text](image-1.png)<br>

![alt text](image-2.png)<br>

文案：<br>
在Free列daily login rewards旁增加角标，内容：Daily login rewards resets daily. Credits that aren't used do not roll over to the next day.<br>

在Standard列的700 credits per month旁增加角标，内容：<br>
Credits reset to 700 every month starting from your subscription date. Credits that aren't used do not roll over to the next month. <br>

在Standard列daily login rewards旁增加角标，内容：<br>
Daily login rewards resets daily. Credits that aren't used do not roll over to the next day. Daily login rewards will be deducted before monthly credits.<br>

2) Cancel和Refund参考vimeo，放在支付页面。文案用我们原来的。[vimeo支付页面](https://vimeo.com/store/seat_subscription?plan=standard&trial=false&period=year)
![cancel and refund](image-3.png)
</details>

# Switch Plan

[Check full workflow here](https://www.figma.com/design/nhUeWK24dm4vYdJoZ36nfS/Subscription-Page?node-id=0-1&t=TE62Dp1PocmNQ0WV-0)

**General Rule**
For upgrade tier, user can choose whether to upgrade immediately with proration or upgrade at the end of the current subscription period.

For downgrade tier, user can only downgrade at the end of current subscription period.  

**Upgrade参考Vimeo和Midjourney**
```mermaid
    flowchart LR
    id1[Upgrade Tier]
    id2a[annual standard to annual adv]
    id2b[monthly standard to monthly adv]
    id2c[monthly standard to annual adv]
    id2d[annual standard to monthly adv]
    id3a[Upgrade immediately: used months will not be refunded, user needs to pay the difference. Once paid, use new plan's valid period.]
    id3b[upgrade at end of current subscription period: deduct the new price at the renewal date]
    id4[Wanna take into effect immediately? Send email*]

    id1-->id2a
    id1-->id2b
    id1-->id2c
    id1-->id2d
    id2a-->id3a
    id2a-->id3b
    id2b-->id3a
    id2b-->id3b
    id2c-->id3a
    id2c-->id3b
    id2d-->id3b
    id2d-.->id4
```
<br>
针对最后一种情况，发邮件过来的处理方式：<br>

![alt text](image-12.png)<br>

**Downgrade参考[Vimeo](https://help.vimeo.com/hc/en-us/articles/12425416895249-Downgrade-your-subscription)，[Midjourney](https://docs.midjourney.com/docs/plans)，[Suno](https://suno-ai.notion.site/Subscriptions-f33c81dcee7a4069986e737b4b0dcc36)，[Runway](https://help.runwayml.com/hc/en-us/articles/21664961171475-Which-plan-is-right-for-me), 一律是当前plan到期后生效。同一等级付款频次的变化，也是在当前plan到期后生效。**
```mermaid
    flowchart LR
    id1[Downgrade Tier]
    id2a[annual adv to annual standard]
    id2b[monthly adv to monthly standard]
    id2c[annual adv to monthly standard]
    id2d[monthly adv to annual standard]
    id3a[downgrade at end of current subscription period: deduct the new price at the renewal date]


    id1-->id2a
    id1-->id2b
    id1-->id2c
    id1-->id2d
    id2a-->id3a
    id2b-->id3a
    id2c-->id3a
    id2d-->id3a
```
```mermaid
    flowchart LR
    id1[Same tier change from monthly to annual or vice verse]
    id2[effective at the end of current subscription period]

    id1-->id2
```

# Refund Policy

![refund](image-13.png)