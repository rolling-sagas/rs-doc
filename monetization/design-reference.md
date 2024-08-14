# Subscription Plan Page Design
![alt text](rs-monetization/image-6.png)<br>
![alt text](rs-monetization/image-7.png)<br>
![alt text](rs-monetization/image-8.png)<br>
![alt text](rs-monetization/image-9.png)<br>

<details>
<summary>文字备份</summary>

参考 [Vimeo](https://vimeo.com/upgrade-plan)
- Tier名称目前为Free，Standard和Advanced。<br>
其他参考：<br>
[ChatGPT](https://chatgpt.com/#pricing): Free, Plus<br>
[Midjourney](https://www.midjourney.com/checkout/plans?hash=be96d15e0742cef72e6cc2396a7d108c60349e6c46a425b55aec6c22770db0e9a69126ccef2d2164f1a9ddd1334b37fdPdnDmhUTSN8tFYzWAlVqfywbiPwqugW0YScB2ttUkY7O35aDci8irrv2snvjDmm1Y1fYgjpN604CwI9mqGUiaPvQ24ZXU0AVjU7rpUjfJJV8h2hOVdjQMe0E4vXyz0V9MunYdv6Dz/BGc0XwVf6lpXE7oV2uukjYGbEypcaswP8UebSb%20c3BQNql1X7yf3X9EoPiix2GFeYYutnOyCC3tdnSSGPYvsPuufa0s6LI066loQd3vCxsH4Xbf1TWsEbipb7F/9sDwOIbDWqLG9MErGLnFu0O5T4TwCP2hnscfCs=): Basic (paid), Standard, Pro, Mega<br>  
[Suno](https://suno.com/account)：Basic (free), Pro, Premier<br> 
[Runway](https://app.runwayml.com/video-tools/teams/mandywangwwwe/dashboard)：Free, Standard, Pro, Unlimited, Enterprise<br>

- 在这个页面不放FAQ了，拆到各个合适的地方。<br>
1. credits相关解释，用角标注释的方式，鼠标移上去会显示注释。<br>
2. Cancel和Refund参考vimeo，放在支付页面。文案用我们原来的。[vimeo支付页面](https://vimeo.com/store/seat_subscription?plan=standard&trial=false&period=year)
![cancel and refund](rs-monetization/image-3.png)<br>
3. Switch plan的阐述，放到user实际点击button时，见下。
</details>

# Switch Plan

[Check design and full workflow here](https://www.figma.com/design/nhUeWK24dm4vYdJoZ36nfS/Subscription-Page?node-id=0-1&t=TE62Dp1PocmNQ0WV-0)

**General Rule**<br>
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
最后一种情况比较特殊，网页上没有立即生效的选项，只有下个周期生效。User如果想要立即生效，需要发邮件特殊处理：<br>

![special case](rs-monetization/special-case.png)<br>

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

![refund](rs-monetization/image-13.png)