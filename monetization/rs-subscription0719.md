# Current Subscription Plan (based on current features)

Category:
- [Subscription tier](#subscription-page)
- [FAQ](#frequently-asked-questions)
- [Ways to enter subscription page](#ways-to-enter-subscription-page) 
- [Additional Notes to programmers](#notes-to-programmers)

## Subscription Tier
目前的subscription tier是基于截至7/19产品现有功能做的，现阶段三个等级主要还是在于credit数量的差别。（check [Full subscription plan](README.md/#rs-monetization-plan) here）

Subscription Tier有三个等级：Free, Standard, Pro. 三个等级的权益如下：

| Free                                 | Standard                                | Advanced                                 |
|--------------------------------------|-----------------------------------------|-------------------------------------|
| $0                                 | $10 per month (20% off annually)        | $15 per month (20% off annually)    |
| - 30 credits daily login rewards (resets daily) | - 700 credits per month. | - Unlimited credits during billing period.                |
| - Access to advanced AI language model        | - 60 credits daily login rewards(resets daily)                | - Access to advanced AI language model       |
|                                      | - Access to advanced AI language model           | ~~- Early access to upcoming functions~~|
|                                      | ~~- Early access to upcoming functions~~    |                                     |

Daily login rewards reset every day. Monthly credits do not roll over to next month.


样式参考:
![annually](rs-monetization/yearly.png)

文案：
- 顶部：Choose Your Subscription Plan
- Annually和Monthly: Annually在前 Save 20%，Monthly在后，打开Subscription网页时默认在Annually。
Annually页签里可以做成图中原价划掉打折的效果,价格对照如下。
![discount](rs-monetization/discount.jpg)

- Free, Standard, Advanced每列除了包含图表里的Tier名称，价格和权益外，分别加button: Free 'Play now', Standard 'Subscribe', Advanced 'Subcribe'。
'Play now'点击后跳转到Home页面，开始选故事play。
两个'Subcribe'跳转到支付页面，如果检测到该user没有登录，需要先让TA先登录。
PS. 最好button上的文案能根据用户当前等级显示，上面是免费用户显示的3个button，那如果用户当前是standard等级，Standard列的button显示为Active（不可点击跳转），Advanced列button为'Subscribe'，Free不给button？可能要多找些UX参考。

- 在Advaned列加类似参考图里的Recommended边框，引导user选这个等级，文案使用'Best Value'。

*由于现阶段只是credit数量的差别，不涉及功能上的区别，所以先不设置one-week free trial*

## Frequently Asked Questions

目前先在Subscription tier下面放FAQ，以后guide网页上线了，会放链接跳转到guide的地址，和ChatGPT一样。

样式参考下图，每个question右侧有个按钮，点击直接可看到answer，不用跳转至新网页 https://mobbin.com/pricing

![faq](rs-monetization/pay_faq.png)

FAQ list：
- What is Credit?<br>

Credit is an in-game resource in Rolling Sagas used for generating new text during gameplay. Each generation costs 1 credit.

- When do I receive Credits?<br>

Daily login rewards will be issued every day to your account. Please note that daily login rewards included in subscriptions do not carry over from day to day, so take use of your daily rewards!

For monthly Standard subscribers, 700 credits are granted at once after successful payment of your chosen subscription. Please note that those unused credits will be reset to 0 after your subscription expires.

For annually Standard users, credits reset to 700 credits every month starting from your subscription date. Please note that unused credits will not roll over to next month, so make sure you take full use of your credits each month.

For Advaned users, unlimited credits will take into effort immediately after successful payment until your subscription expires.

You can always check your remaining and credits renewal time in your Profile(链接).

- What is the prority of daily rewards credits and monthly credits for a Standard plan?

Daily login rewards will be deducted before your monthly credits. You can always check your daily rewards credits and monthly credits in your Profile(链接).

- How can I get more Credits? 

You can upgrade to Standard plan for 700 credits per month and double daily login credit rewards or upgrade to Advanced plan for unlimited credits. Benefits will take into effort immediately after successful payment. 

We'll have additional credit purchase soon.

- Can I switch plans?<br>

You can upgrade your plan at any time. When upgrading, you may choose whether the upgrade should be effective immediately or at the end of the current billing cycle. If you choose to upgrade immediately, you will be offered a prorated price based on the usage of the plan you are upgrading from. The next billing date will be based on the expiration date of the new plan.

Downgrades are always effective at the end of the current billing cycle.

- How to cancel my subscription?<br>

Automatic subscription renewal is enabled when you purchase a subscription plan. To cancel, go to your Profile page. Your cancellation will take effect at the end of the current subscription period.

- How do I request a refund?<br>

Refunds are available only for annual subscriptions. You can receive a refund for the remaining months of your subscription. Credits issued for the current month are non-refundable. Fees for used months are charged at full price. Send an email with your login email address to support@rollingsagas.com.

More questions? Contact us at support@rollingsagas.com

## Ways to enter subscription page
subscription的露出
先做[full membership exposure](README.md/#membership-exposure)里的1-4: Home Page, daily login rewards, play story过程中credit花完，和profile查看credit余额这4种情况  

## Additional Notes to Programmers
- 关于Credits：
1. 使用规则：每次gpt生成新内容时，扣1个credit，cache不扣credits。
如果GPT生成内容出错，比如断句的情况，此时user的regenerate不扣credit，可以由程序自动监测？。如果程序没有监测到的错误，但扣了credit，留一个通道给user report error。

2. 需要在Profile页面显示user当前的plan，以及credit余额情况。

Free user<br>
Your current plan: Free<br>
Your remaining daily credit rewards: X/30. Need more credits? Upgrade your plan(链接到subscription page)

Standard user<br>
Your current plan: Standard Monthly<br>
Your remaining daily credit rewards: X/60.<br>
Your remaining monthly credits: X/700. Next billing date: XX（自动续订时间）Cancel automatic renewal?(取消自动续费的入口)

Standard user<br>
Your current plan: Standard Annually<br>
Your remaining daily credit rewards: X/60.<br>
Your remaining monthly credits: X/700. Credit renewal date: 下个月X号 <br>
Next billing date：XX （自动续订时间）Cancel automatic renewal?(取消自动续费的入口)

Advanced user<br>
Your current plan: Advanced Monthly<br>
Credits: Unlimited<br>
Next billing date：XX（自动续订时间）Cancel automatic renewal?(取消自动续费的入口)

Luma和Midjourney参考：
![monthyl credits](rs-monetization/monthly%20renew.png)
![monthyl credits](rs-monetization/currentplan.png)

3. 作为产品里的货币，Credit需要有一个icon，显示在credit出现的地方。

~~- 关于Daily login rewards：~~
~~在Free user和Standard user每天第一次登录时弹窗让TA领取每日奖励，advanced user因为unlimited credit就不用了~~

- 关于switch plans：
主要参考Midjourney，[Aspirin's MJ subscription page](https://www.midjourney.com/checkout/plans?hash=f197d2f6df68a9ee53c347d05c0c8f50308eba0d15e8e5fc92e5a08dc7bbeb9fc7ded41982fb2166bd6dbce038ceffee4mYWoG/vsHozZBsXs5PFpqnTpwpUXYDIBnX6s67K4Irkp99UAjiKrFDnVCEIjH3A/jM01nuSfMnw1gV2kofGGXF7WLt%20e98%200Xx9I16zs/8%20H3J97NhCPqnonBNE9iSDt/R9JL9GZ%20HvCJUImn3Ri%205IXGnV0b28k1v1SKiI2L0BNAstcKoT6x1U3TEpZ8Wf7TU4U7/MqeUppUFdw/dnKE4Ng8lYXJAZ9U19JgUfDt9ZzuY/yf6keULGa8fE4ViKcP/Jh7dr5Tc%203J6N40e07BiOV%202f3NpH05TtoRGjvNc=)
user要升级plan时，可以选择立即升级或是在下一次扣费时升级。
![upgrade time](rs-monetization/upgrade_time.png)

点击立即升级后，会跳出结算页面，给TA自动计算差价，让user明确知道要补多少钱，见下图。

![upgrade now](rs-monetization/upgrade.png)

点击下个付款周期升级，也会告知价格的变化，并让user confirm。

![upgrade next billing date](rs-monetization/upgrade_end_of_due_day.png)

Annual plan变更为monthly plan都是在下个付款周期时更改，不能在当前周期内更改。
![annual to monthly](rs-monetization/annual_to_monthly.png)

- 支付页面记得加 条款和隐私政策，以及自动续费的告知，参考图中GPT的设计。
You'll be charged the amount and at the frequency listed above until you cancel. We may change our price as described in our Terms of Use. You can cancel any time（链接到取消自动续费）. By subscribing you agree to our Terms of Service（链接） and Privacy Policy（链接）.

![upgrade](rs-monetization/terms.png)

- 需要一个做取消自动续订的功能
