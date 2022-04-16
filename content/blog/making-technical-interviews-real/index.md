---
title: 'Making Technical Interviews Real'
description: 'Some small rules to make your technical interviews stand out and be enjoyed by everyone involved.'
date: '2021-08-12'
image: ''
isSeries: false
seriesSlug: ''
seriesBlurb: ''
seriesEnded: false
tags: ['management']
---

A few years ago, my team and I were unhappy with the interview process we had for Front End Engineering. There were many steps, each technical interview was essentially the interviewers choice on what to do, and no candidates were impressed with our methods. We all knew it wasn't accessible, inclusive, or fun. So all of us sat down to try and fix this front to back, from the job description all the way to just before the offer. This is what we've been running with for the past three years. We've iterated on it a little, but mostly it's been a resounding success out in the real world.

### Goals

We all sat in a room and asked each other what the goals of our interview should be and we came up with something fairly simple:

- Find out what it's like to work with this person in the shortest time possible.
- Be kind to the people asking to work with us.
- No pass/fail.

All of our decisions went through these steps. Any new idea had to answer to all of the goals. I don't think we could have come up with as good of a system without them.

With this guidance, we quickly came up with a two-part technical interview that is fairly specific to the Front End, however, the general idea behind each interview is applicable to any technical problem if I may be so bold.

The full steps for our interview process are as follows:

1. Recruiting screen / employee referral
2. Hiring manager screen
3. Technical Round
4. Offer

### The Technical Round

Our technical round has two interviews in total. The first is our coding challenge. The coding interview is one of the most rightfully maligned in our industry. Many, I feel, do this completely backward - including the big names. They're typically a pass/fail scenario where if you miss one minor trick question you're out of contention. They're typically a painful process, something to be feared. Even with all that negative, and more that I don't have time to list, this process doesn't find the best writers of code. Instead it finds those that are lucky because they studied that very problem recently, or have studied a particular company's hiring process to game the system.

Our coding challenge is designed with our main goals in mind, but it has its own specific goals as well:

- Find out a candidate's technical seniority.
- Find out what it's like to pair with the candidate on an unfamiliar codebase.

We start by sending a repository over to the candidate ahead of the interview. We do this not to have them work on it, but to have them get it installed and up and running so we don't waste time on that during the interview. The more studious of our candidates pour through the code to get familiar with its structure, and test out the UI to see the experience - this isn't a bug in the system - it's what we want our candidates to do! We don’t want them to do any work outside of the interview, we feel like the hour spent in this interview is enough of an ask of their time, and we don't want them spending a weekend on a coding challenge (or worse).

The day of the interview they are given instructions that this is a true open-book interview, if they want to search for an answer online they're free to do so - as well as ask the interviewers questions about anything they're doing. This is all in keeping with trying to make the interview as real-world as possible (we look up everything all the time), and being kind to our candidates.

There are three phases in this interview:

1. A required task that everyone needs to complete that should take folks about 10-20 minutes to finish.
2. Remaining time to do whatever they want!
3. Time to ask questions of the interviewers, we're being interviewed as much as they are.

We purposefully built this simple app in a way that has quite a few problems. The problems range from styling, poor user experience, no testing, the list goes on. This is so we give folks a place that fits their strengths and give them a chance to shine. We're always surprised by the second half of the interview, and it's one of the best ways we have for placing a candidate on the seniority spectrum.

We have consistency with the required task, we have a place for them to shine with the open time.

The second is a Front End Architecture and Design interview. We also need to place a candidate on a spectrum of seniority on how well they will interact with the representatives of the business as a Front End Engineer: product owners and designers.

There are also three phases in this interview:

1. Show comps of a UI and discuss how they would build it.
2. Throw a curve-ball by giving an iterated UI.
3. Time to ask questions of the interviewers.

We give them a screenshot of a slightly complicated UI and we just talk about it. We ask them to let us know how they'd build it, with what technologies, and why. We have another developer in the interview, but also we have a product manager or designer in as well so we get the full experience. This conversation can sometimes be short if the candidate is more on the junior side of the spectrum, so our interviewers have a list of prodding questions to bring out the knowledge if they're having difficulty.

The curve-ball comes at the end of the first phase as things start to wind down, this typically takes anywhere from 10-30 minutes to get to. We provide an updated image of the UI which has been iterated on by design based on feedback from both customers and user data. We provide the feedback and data, then go right back into have the same discussion with these new points.

We're particularly looking out for what questions the candidate has about the UI and the design in general. What are the red flags they see, or don't see? Can they confidently answer questions from a product manager or designer based on what little they know? This is all something we do on a day-to-day basis, especially the more senior your title.

### Documentation

One thing I can say with my 20+ years of experience in tech: we don’t write things down enough. We consistently rely upon institutional knowledge, or walking-talking-SPOFs that are our most senior employees. If documentation for the most critical systems at a company can be sparse, it’s doubly so for hiring and onboarding.

Arguably one of the best ways of solving the problems of truly scaling a group of people up in number is through asynchronous communication. Publicly available documentation that is freely editable, eg. in a wiki, seems to be the best way of doing it. When we started the enterprise of revamping our interview process, we wanted to make sure that it wouldn’t be lost when people inevitably changed roles, or leave the company.

Our company uses a wiki platform for all of its documentation. It’s something that is searchable, public, and editable by definition. Since we had the platform already, we skipped over the difficult part of finding that place. If you are in a position without such a thing, I can simply say to write your documentation wherever you can. Don’t let perfect be the enemy of good. Ensure it’s publicly available to anyone in the company and share as much as possible.

Our documentation needed to do the following:

- Explain in detail what the goals of the interview are.
- Let the interviewer know what their responsibilities are within the interview.
- Show in detail the objectives of the candidate.

Our coding challenge documentation has instructions for sharing the repository, what to do during introductions, general tips on running a good interview, ways they can help someone that doesn’t vocalize while they are coding, and finally detailed objectives on what each phase of the interview will be for the candidate. It instructs how to communicate these objectives, letting them know about the problems built into the codebase, and any other details we felt were helpful.

This documentation can be edited by anyone, but especially by the people doing the interviewing as they learn new things about the objectives, or come up with new ways of helping future interviewers.

Now anyone that’s interested in joining the interview rotation knows what this interview is like, and what its objectives are. Now anyone can do it, and it isn’t a secret project that is done behind closed doors by the chosen few.

### A Real Interview

When I interview folks before their technical interview, I tend to give them a shortened version of this post. But I end with saying we try to make our interview process as “real as possible”. I mean that our goal is to make this as close to what candidates can expect to be doing on a day-to-day basis on the job.

No one I know writes code on a white board. Candidates aren’t going to be writing sorting algorithms from memory. There are no trick questions that we can feel superior about knowing. We’re just going to sit down and try to solve some complicated problems with patterns and APIs all while being human, so there’s no reason to expect perfect memorization or creation.

This goes straight back to our goals: what will it be like to work with this person? Can we answer that by tricking people or asking them to solve a problem they’ll never do even if they code for 20+ years? Is it kind to create a purposefully difficult routine for people to jump through? Does that reveal the best people for writing software? Of course not, we need to strip all the artifice away and just ask the candidate to do what we actually do.

We now have a well-documented, consistent, interview process that is kind, gives people a place to shine, and still tests people very directly on how well they will do in our day-to-day work environment. Although the process I laid out sounds easy compared to some nefarious companies, there is nowhere to hide if you don’t actually have the skills necessary to work on our team.

Additionally, as a hiring manager you have a choice between two conversations:

1. They didn’t pass the arbitrary coding challenge that has nothing to do with the job.
2. I think they’re more on the junior side of things, but they really took my feedback positively and jumped right back in when they were lost for a minute.

Which would you like?

---

Edits:

2022/04/16 - Adjusted wording for institutional knowledge

2022/03/01 - removed the "company pitch" from the interview process, we're no longer required to do it, but it remains an option should the candidate want it

2021/08/20 - minor grammatical improvements, additional “We now have a well-documented” paragraph summary I felt was missing.

2021/09/01 - minor grammatical improvements

2021/09/09 - minor grammatical improvements
