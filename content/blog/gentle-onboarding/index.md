---
title: 'Gentle Onboarding'
description: 'A few things I like to do for new team members.'
date: '2021-09-23'
image: ''
isSeries: false
seriesSlug: ''
seriesBlurb: ''
seriesEnded: false
tags: ['management']
---

Joining a new company, a new team, a new code base, and a new way of doing things is quite a lot to ask of people that write software. Generally, you'll go from being a respected member of a company who knows the answers to all the questions, to someone that literally knows nothing about anything. It's a humbling experience, even for those of us that have many years of experience. Some will live with a job they don't enjoy so they don't have to experience the pain of the [technical interview](/making-technical-interviews-real), as well as to avoid this feeling of confusion and helplessness that comes with starting a new job as a developer. This will likely be the same for any complicated job, but writing software is what I know.

### What are we optimizing for?

Each time someone new comes into the team, we have a new team. This means that we can't expect the things out of this new team that we had in our previous team - at least not yet. Something that's important to understand is velocity tends to actually get worse for a bit when new folks are added, this is normal in my experience and nothing to be worried about. So we're not optimizing for team velocity.

If you're familiar with [Tuckman's stages of group development](https://en.wikipedia.org/wiki/Tuckman%27s_stages_of_group_development), I've found them to be fairly accurate. The forming / storming phases are what I'm talking about here. The more established a team was before the new person joins, if you were rocking in the performing phase for a while, the shorter the forming and storming phases typically are. The opposite is true though, if your team was not functioning at its peak, or you've been in a constant forming/storming phase for a long time due to growth expect things to go much slower without direct action to help from you.

What we're optimizing is to get our new team member ramped up so they can be a contributing member of the team. This means taking time away from everyone else on the team that would otherwise be spent writing software. This needs to be efficient, but it might not be fast. We make things efficient by focusing on documentation, pairing on problems, and allowing them to select the pace and process to which they will learn.

### Customized learning

Over the years our onboarding documentation survived in various random places, or were hidden away in docs that disappeared when someone left the company. At a certain point we realized this was untenable, so we started a project to centralize onboarding documentation and make it editable by anyone at the company. We also formalized the process with which it was organized and the tasks within it were ordered, including what roles were required at each step. We nicknamed this processes "doing the badges" a long time ago and the name stuck. This part, the getting documentation up and running and centralized was hard, and I wanted to highlight it just in case you haven't gotten this far. If you have any documentation, you're doing well - now it's time to make sure they're public and editable by anyone in the company in order for this to work.

Not only do we have this documentation set up for each person to spend their first 1-2 weeks on in between company onboarding meetings, but we give each person a mandate to improve the docs as they go. If they find something incorrect or confusing, they should fix it after they know the solution. We're now growing fairly heavily at the moment, so people are constantly going through the badges. I'm confident that our documentation will be up to date and accurate simply because so many people have just gone through the process. It wasn't always like this and it took a long time, but we always encouraged each person to improve things as they went.

We even make these badges tickets in Jira so folks can get on the board and talk about how they're doing, including any blockers they might have, during standup. It makes them feel instantly part of the team, and that they're accomplishing something. Not isolated just setting up docker on their laptop.

We have a formalized buddy system. People that have been through onboarding recently will be tasked with being the new person's first stop for questions. Anything else, they are encouraged to begin communicating with the whole team in whatever channels the team is used to. This has two benefits: 1) they have a direct line of communication with someone that has intimate knowledge of what they're doing, 2) we set the stage for maintaining a team culture asking for help no matter the problem.

Each person learns differently, or will fall on the seniority spectrum in different places, so it's very important to not have blanket expectations on how quickly people will get through onboarding. I regularly tell people that things take a wide range of time, eg. 1-4 weeks, to ensure that there isn't pressure on them to move quickly. I don't want them to rush, I want them to do things correctly. Setting the stage for this immediately upon joining the team will help maintain this culture throughout their careers with you. This also means you need to be prepared for people to move through quickly and get pushed out of the nest in their first week, or someone needing several sprints of pairing with various team members to get up to speed.

Some will tell you when things are moving too quickly, or too slow. Others you'll need to rely upon the rest of the team, especially those that are pairing with them, to inform you how things are going and to adjust things accordingly. Apply more pressure, or less. Set up more formal pairing, or jump right into their first solo. This is an individual that will require individual care.

### Gentle, exactly

That sounds good, in theory, but let's talk about how we do it in practice. Each person will go through these steps, although the length of each varies greatly per person:

1. Badges
1. Pairing
1. First solo
1. Ramping up alone time
1. Ramping down alone time

We've talked about badges above, this is whatever onboarding documentation you have right now. Let them add to it and improve it. Someday you'll have something to be proud of. But the goal here is to get all that institutional knowledge out of your top people's heads and on paper.

Pair programming is great for a lot of reasons. It's most effective when both people don't know what they're doing. However, in an onboarding scenario, it can be an effective teacher / student relationship when someone with a lot of tenure explains how things are done and what all this mess of code means really. It's critically important not just a single person does this job. It's exhausting and difficult, yes, but mostly that limits the exposure of our new team member. We want more coding styles and techniques than they know what to do with rattling around in their heads. So we will set up a pairing partner each sprint (sometimes each week) where they'll both be attached at the hip. The new person will mostly observe and ask questions, and your pairing driver is showing them the ropes. Some drivers will be totally hands on, others will give the new person small tasks to complete on their own during downtime. All of this variation is fantastic and should be encouraged. Double bonus: teaching is one of the best ways of learning!

Their first solo is a balancing act. I'll typically find a difficult ticket that will touch the most systems and isn't in a rush. If your backlog is anything like mine, you should have plenty of those to choose from. Again, we're not optimizing on them completing the task in time, we want them to learn for real how all this works together and how to get through a code review. These are valuable lessons, and should be done in a stress-free environment.

At this stage, we ask them to extend the time they're stuck before asking questions so they are forced to find the answer themselves. I like to ramp up this alone time over their first few weeks. Eventually I'll ask them to wait until they're literally reaching frustration and then ask for help. For some that's all day, others it's a few hours. When they can consistently deliver tickets in that mode, I will reverse the trend back down to where I always tell my team to ask for help: after they're stuck for 30 minutes. Try digging around, but if you're stuck and spinning your wheels, the team should immediately unblock you under normal day-to-day circumstances.

A lot of people like to talk the first 30/60/90 days and their expectations, here are mine:

- 30: Get to know the company and its processes
- 60: Get to know your team, how they work together; complete your first solo
- 90: Ramping down alone time; becoming an effective teammate; maintaining a learning environment

This might seem a little too gentle to you. If you’re thinking that, my question is why? Although I can understand wanting them to close a bug on their first day, I’ve never liked introducing any sort of stress into our normal day-to-day work life. There’s no end in sight, and our work will never be done, let’s just relax a bit and maintain long-term relationships with our team rather than burn them out down to the nub so there’s nothing left but an empty seat because they came and worked for someone like me.

Essentially that's it. Recalibrate your expectations, focus on the right things, increase your documentation, and you'll make it through this.

---

Edits:

2022/04/27 - Added link to interview blog, minor grammatical improvements.

2021/12/01 - Adjusted wording for institutional knowledge

2021/10/07 - Added flip side of the coin about Tuckman's group development and how things can go much more slowly without help.
