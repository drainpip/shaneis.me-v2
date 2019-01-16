---
title: 'Implementation Details: Part One'
description: A multi-part series. Getting set up with Gatsby and hosted on Firebase.
date: '2019-01-16'
image: ''
tags: ['code', 'meta']
---

I tend to learn by doing, like many, so as the winds of change started moving toward a revival of personal websites/blogs I decided to hop on the bandwagon and learn about the new hotness while I was at it. Oh, and I suppose I wanted to write more as a personal goal.

#### Series

- Part One: Getting set up and deployed to Firebase (this page)
- Part Two: Adding a blog (Coming Soon...)
- To be continued...

#### Assumptions:

- You have a cursory understanding of what [Gatsby](https://www.gatsbyjs.org/) is, and by association [React](https://reactjs.org/), and by association JavaScript
- You have worked with modern JavaScript and package managers, and are currently using [Yarn](https://yarnpkg.com)
- You have worked with a blog before, and/or built one
- You are a generally nice person

#### Part One Goals:

- Get Gatsby up and running
- Customize it enough to deploy
- Get it uploaded to Firebase hosting

#### Why Gatsby?

I wanted a place where I could write my thoughts down and share it with whomever came across this website. I might have once-upon-a-time used Wordpress for this. Being a coder that works within the browser, I’ve always liked making my own thing from scratch.

Gatsby has risen in popularity for good reason recently. Out of the box you essentially get a super crazy fast static site that’s the best of both worlds (static assets & snappy client-side JavaScript). This is something that would have taken me hours or days to get up and running, if at all. Now I just run a command and build within the walls Gatsby provides. For me, this was the perfect balance between building something myself and ensuring I was participating in the open web for the whole web without any effort on my part.

I started with the default theme and built my way toward what I wanted from there. The other starters or examples didn’t fit my needs **precisely**. This is the path I followed...

#### Installation & Front End Tour

Install Gatsby CLI & get a new site built:

```bash
yarn add global gatsby-cli

# cd into your chosen parent folder.
# `gatsby new` will create the folder
# “your-site” and install the files
# upon running this command:
gatsby new your-site

cd your-site

gatsby develop
```

You now have an automatically generated dream development environment, and it’s waiting for you at `localhost:8000/`.

You’ll see a “rebeccapurple” header, some text, images, and links. You’ll notice that when clicking on links they’ll navigate instantly.

Unless this was the site you wanted to deploy, you’ll want to take a look inside the `your-site` folder with your text editor of choice.

The `README` actually has a great tour of the files within. We will get into all of them that I edited soon. For now, I’d like to focus on the files within `./src`.

<!-- prettier-ignore-start -->
<!-- CODE BLOCK - START -->
```markdown
.
├── src
    └── components
    └── pages
```
<!-- CODE BLOCK - END -->
<!-- prettier-ignore-end -->

The `src` folder is where the front-end of our website will live. Essentially everything that a visitor will see and click on is going to be inside that folder.

The `components` folder will hold our reusable components. Things we will extend in pages, or elsewhere. Try to mess around with the code in this folder. If you’ve never experienced Hot Module Reloading (HMR), you’re in for a treat — if you blink you’ll miss your changes happening instantly upon save.

The `pages` folder is special. Each file you create in here will set up a new route in your website.

<!-- prettier-ignore-start -->
<!-- CODE BLOCK - START -->
```markdown
.
├── src
    └── components
    └── pages
        └── 404.js
        └── index.js
        └── page-2.js
```
<!-- CODE BLOCK - END -->
<!-- prettier-ignore-end -->

The `index.js` file is the site home, so when you’re at `localhost:8000` that’s the content you’re seeing. If you go to `localhost:8000/page-2` things should start to fit together.

If you create a new file like `about.js` and type up your mini-bio, once that file is saved and compiled successfully your site will now have `localhost:8000/about` ready for you automagically.

#### First Real Edits

You can do anything you’d like for this phase, but I’ll give you the bare minimums so we don’t forget anything.

- `package.json`: Update “name,” “description,” “version,” “author” to whatever you desire.
- `gatsby-config.js`: Under `siteMetadata`:
  - Update “title” to your site title
  - Update “description” to a short blurb about your site (this will be used in the SEO component)
  - Update “author” to your Twitter handle if you have one, this will be used when social sharing.
- Delete `./src/pages/page-2.js`
- Update `./src/pages/index.js` to include a short bit of information about the website, or yourself, in whatever way you want. Remove the links and add something fun — preferably some awesome Geocities “Under Construction” GIFs.
- Update `./src/pages/404.js` to whatever messaging you like. A good 404 page is helpful to some, and in the future we can make it very dynamic.
- Update the CSS however you wish, keep it simple for now. This starter uses inline styles inside JSX as well as `./src/components/layout.css`. You can delete all this and start from scratch, or build off of whichever method you prefer.

This is only the first iteration, it doesn’t need to be anything close to perfect. Primarily we want to get used to building things inside Gatsby.

**Important note:** As you add/remove files, or perhaps some edit you made caused a weird error, sometimes you’ll notice that your changes in the code aren’t being reflected in the browser. This is probably due to Gatsby’s cache. Most of the time, just stopping the `develop` process and restarting it will solve your problem. Every once in a while, you’ll need to stop that process + delete the `.cache` folder in the root of your project, and then restart `develop`. After that a quick refresh of the browser should be all you need.

When you’ve stopped tinkering with these few files, we can move on to deploying!

#### Why Firebase?

First and foremost, they have a free hosting plan that I believe gives plenty of headroom to grow. For strict usage, they give 1GB of storage and 10GB of bandwidth per month. For someone like me just getting up and running that’s way more than I’ll need. Should I randomly need to get more hosting power, they have an option for \$25/mo that provides enough space that I’ll likely never need more.

Firebase hosting is also sitting behind Fastly’s CDN which is just crazy fast and getting faster by the day. Globally repeat hits to this site are normally **sub-20ms** for HTTPS connections. In certain parts of the world where it’s considered “bad” it might be just below 150 ms!

There are many other hosts, including some custom-made for static sites. Those might fit you best, however I wanted some of the fun things that Firebase brings to the table for possible future changes. Things like authentication, Firebase’s famous database, cloud functions, cloud storage, and even things like a test lab for A/B testing if I wanted to go nuts. Just having these options available to me with a click of a button gets my brain tingling with ideas.

#### Our First Deploy

Getting all this set up for the first time has a technical hurdles to overcome. However once we have it set up, pushing a new deploy up to the web is as simple as typing `yarn deploy` in the console!

I sometimes like to make a simple list when I’ve got a bunch of stuff to do. Here’s all we need to do in order:

1. Sign into [Firebase](https://firebase.google.com/)
2. Add a project
3. Add hosting to the new project
4. Get Firebase CLI installed & logged in
5. Initialize the project
6. Add appropriate commands to `package.json`
7. Deploy!

When you sign into the [Firebase Console](https://console.firebase.google.com/) you’ll see a link to “Add project”. You’ll need to name the project, as you type keep an eye on the “Project ID”. You’ll need this for certain things in the future. I tend to work with a name until it no longer has a hash string appended to it — in other words it must be unique to be without that hash! Select the location of your analytics & Cloud Firestore if you don’t want the defaults. Check the boxes as needed at the bottom and “Create Project”.

Once that’s done, go into your project and you’ll be greeted by your project’s dashboard. You’ll see all the fun stuff I mentioned earlier, but for now let’s just click on hosting. Then on to “Get Started” and read through the instructions to get `firebase-tools` installed.

Here it is in one place:

```bash
yarn add global firebase-tools

# Once that’s installed:
firebase login

# login will open a browser tab
# so you can authorize your CLI

# Once you’re logged in:
firebase init
```

This will bring you to a multi-step installation to get things going. For now, we’re only bothering with hosting so arrow down to hosting and press space. Once highlighted you can hit enter.

You’ll then associate the project with your new Firebase project. After that we’ll get a few options to choose from:

```bash
# Keep this public, just hit enter.
# This is the folder Gatsby will build to.
? What do you want to use as your public directory? public

# Gatsby creates index.html files for
# each route, so we don’t need to do this.
? Configure as a single-page app (rewrite all urls to /index.html)? No

# Skip this step
? File public/index.html already exists. Overwrite? No
```

You’re all done setting it up! You can look into your code and see two new files: `.firebaserc` and `firebase.json`. These are used to let the Firebase CLI know what to do when inside this directory. You shouldn’t need to change those files yet — although we will edit them in the future.

Let’s open up your `package.json` file and find `scripts`. We want to add two new commands: `predeploy` and `deploy`. Our goal is to just type a single command to send our code over to Firebase, but we always want to ensure we have the latest build each time we do — that’s what `predeploy` will do.

Each time you type `yarn deploy`, it will ask Gatsby to create a new build off of your current code first so you never have to worry about it.

Here’s approximately what your `scripts` block should look like:

<!-- prettier-ignore-start -->
<!-- CODE BLOCK - START -->
```javascript
// package.json

“scripts”: {
    “build”: “gatsby build”,
    “develop”: “gatsby develop”,
    “start”: “npm run develop”,
    “format”: “prettier --write \”src/**/*.js\””,
    “test”: “echo \”Write tests! -> https://gatsby.app/unit-testing\””,
    “predeploy”: “yarn build”,
    “deploy”: “firebase deploy”
}
```
<!-- CODE BLOCK - END -->
<!-- prettier-ignore-end -->

Line’s 9 & 10 above are the new commands you’ve just added to your project. If you’re currently running develop, cancel out of it now. Now it’s time to `yarn deploy`! You should see the Gatsby build start and complete, then the files get pushed up to Firebase.

You can now view your code by going to:

`your-project-ID.firebaseapp.com`.

Also, if you’re ready, you can [connect a custom domain](https://support.google.com/firebase/answer/9137747?hl=en) by following the instructions at the Firebase Console.

Our next installment will cover building out a working blog!
