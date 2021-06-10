<p align="center">
  <a href="https://github.com/sujalgoel/reddit.images" target="_blank"><img src="https://cdn.discordapp.com/attachments/784703575490166794/789723009875312681/icons8-reddit-2048.png" alt="Reddit Image" title="Reddit Image" width="100"></a>
</p>
<h1 align="center">Reddit Images</h1>
<p align="center">
  <a href="https://www.npmjs.com/package/reddit.images" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/reddit.images.svg?style=flat-square">
  </a>
  <a href="https://github.com/sujalgoel/reddit.images/blob/master/LICENSE" target="_blank">
    <img alt="License: GPL-3.0" src="https://img.shields.io/github/license/sujalgoel/reddit.images?style=flat-square" />
  </a>
</p>

## What is this package?

> A npm package for fetching images and userinfo from reddit.

## Install the package 📥

```sh
npm i reddit.images
```

## Example ✏️

<details>
<summary>FetchRandomMeme example</summary>

```js
const { reddit } = require("reddit.images");

reddit.FetchRandomMeme("hot").then((data) => {
  console.log(data);
});
```

### Example Response

```json
{
  "id": "nkbnhb",
  "type": "hot",
  "title": "Invest in Derek Savage",
  "author": "ilovenomar5",
  "postLink": "https://redd.it/nkbnhb",
  "image": "https://www.reddit.com/gallery/nkbnhb",
  "text": "",
  "thumbnail": "https://b.thumbs.redditmedia.com/JmgbVSW4mRAvXyDL6zR4mWsMnvphEweFYm2IsK-1oOQ.jpg",
  "subreddit": "MemeEconomy",
  "NSFW": false,
  "spoiler": false,
  "createdUtc": 1621899556,
  "upvotes": 7,
  "downvotes": 0,
  "upvoteRatio": 0.78
}
```

</details>

<details>
<summary>FetchSubredditPost example</summary>

```js
const { reddit } = require("reddit.images");

reddit.FetchSubredditPost("xkcd", "rising").then((data) => {
  console.log(data);
});
```

### Example Response

```json
{
  "id": "na6f17",
  "type": "rising",
  "title": "Need a help finding xkcd",
  "author": "rtsrp3f",
  "postLink": "https://redd.it/na6f17",
  "image": "https://www.reddit.com/r/xkcd/comments/na6f17/need_a_help_finding_xkcd/",
  "text": "I believe there is an xkcd showing how one guy updating certain program keeps whole internet alive. Is it an xkcd and if it is, can somebody help me find it",
  "thumbnail": "self",
  "subreddit": "xkcd",
  "NSFW": false,
  "spoiler": false,
  "createdUtc": 1620763840,
  "upvotes": 27,
  "downvotes": 0,
  "upvoteRatio": 0.84
}
```

</details>

<details>
<summary>FetchPostbyID example</summary>

```js
const { reddit } = require("reddit.images");

reddit.FetchPostbyID("nwccti").then((data) => {
  console.log(data);
});
```

### Example Response

```json
{
  "id": "nwccti",
  "title": "No mad, I’m quite amazed, actually.",
  "author": "I_Spit_In_Your_Food",
  "postLink": "https://redd.it/nwccti",
  "image": "https://i.redd.it/rm2xzvfuic471.jpg",
  "text": "",
  "thumbnail": "https://b.thumbs.redditmedia.com/6Dlt90LpANPZNnxcmmgp30VEmvxwMuVmODUDXIn7Cro.jpg",
  "subreddit": "memes",
  "NSFW": false,
  "spoiler": false,
  "createdUtc": 1623290595,
  "upvotes": 21771,
  "downvotes": 0,
  "upvoteRatio": 0.93
}
```

</details>

<details>
<summary>FetchRandomPost example</summary>

```js
const { reddit } = require("reddit.images");

reddit.FetchRandomPost("new").then((data) => {
  console.log(data);
});
```

### Example Response

```json
{
  "id": "nwfyhe",
  "type": "new",
  "title": "23[F4M][KIK][emma0y] My very first nudes on Reddit, hope I won't regret, upvt I will 100% send more. Add me on KIK :emma0y",
  "author": "Alternative-Sun5080",
  "postLink": "https://redd.it/nwfyhe",
  "image": "https://www.reddit.com/gallery/nwfyhe",
  "text": "",
  "thumbnail": "nsfw",
  "subreddit": "Ratemypussy",
  "NSFW": true,
  "spoiler": false,
  "createdUtc": 1623303013,
  "upvotes": 1,
  "downvotes": 0,
  "upvoteRatio": 1
}
```

</details>

<details>
<summary>FetchPost example</summary>

```js
const { reddit } = require("reddit.images");

reddit.FetchPost("top").then((data) => {
  console.log(data);
});
```

### Example Response

```json
{
  "id": "nvtw8w",
  "type": "top",
  "title": "Idiot cop flips pregnant woman's car for pulling over too slowly.",
  "author": "Valkie",
  "postLink": "https://redd.it/nvtw8w",
  "image": "https://v.redd.it/8qsrjkpv88471",
  "text": "",
  "thumbnail": "https://b.thumbs.redditmedia.com/FfYFHszBHI1G3-S470CP1BSpELk579uQ1egfquSqsWg.jpg",
  "subreddit": "IdiotsInCars",
  "NSFW": false,
  "spoiler": false,
  "createdUtc": 1623239476,
  "upvotes": 110650,
  "downvotes": 0,
  "upvoteRatio": 0.8
}
```

</details>

<details>
<summary>FetchRedditUserInfo example</summary>

```js
const { reddit } = require("reddit.images");

reddit.FetchRedditUserInfo("reddit", 10).then((data) => {
  console.log(data);
});
```

### Example Response

```json
{
   "id":"1qwk",
   "name":"reddit",
   "title":"",
   "description":"",
   "url":"https://reddit/user/reddit/",
   "karma":6304377,
   "cakeday":"Fri Dec 09 2005 10:30:00 GMT+0530 (India Standard Time)",
   "avatar":"https://styles.redditmedia.com/t5_hv5dz/styles/profileIcon_snoo8658e16c-55fa-486f-b7c7-00726de2e742-headshot.png?width=256&height=256&crop=256:256,smart&s=f61c0e3ac1a1d9357c21086feb78943c31d19d37",
   "snoovatar":"https://i.redd.it/snoovatar/snoovatars/8658e16c-55fa-486f-b7c7-00726de2e742.png",
   "banner":null,
   "NSFW":false,
   "verified":true,
   "golduser":true,
   "moderator":true,
   "quarantine":false,
   "comments":[
      {
         "comment":"oh my gosh, adorable. this is why I love reddit! &lt;3",
         "post":"https://www.reddit.com/r/trendingsubreddits/comments/nvmqad/trending_subreddits_for_20210609_rblop/"
      },
      {
         "comment":"Y'all ready for this? We’re live!",
         "post":"https://www.reddit.com/r/XboxSeriesX/comments/nwdd4e/will_an_automobile_be_brought_on_stage_during_the/"
      },
      {
         "comment":"\r\n""+""Verily, it has come to pass.  The humble server known as one of our servers is now named KronkStonks.\r\n""+""\r\n",
         "post":"https://www.reddit.com/r/nameaserver/comments/nvidvd/mon_20210607/"
      },
      {
         "comment":"I am the walrus",
         "post":"https://www.reddit.com/r/trendingsubreddits/comments/nvmqad/trending_subreddits_for_20210609_rblop/"
      },
      {
         "comment":"Pepperidge Farm remembers",
         "post":"https://www.reddit.com/r/trendingsubreddits/comments/nvmqad/trending_subreddits_for_20210609_rblop/"
      },
      {
         "comment":"thank you, puppies are forever.",
         "post":"https://www.reddit.com/r/trendingsubreddits/comments/nvmqad/trending_subreddits_for_20210609_rblop/"
      },
      {
         "comment":"sploot!",
         "post":"https://www.reddit.com/r/trendingsubreddits/comments/nvmqad/trending_subreddits_for_20210609_rblop/"
      },
      {
         "comment":"Redditors, I think this is the beginning of a beautiful prediction",
         "post":"https://www.reddit.com/r/pennystocks/comments/nw6fei/which_of_these_otcs_will_have_the_highest_gain_by/"
      },
      {
         "comment":"Whoomp! There it is! Play has begun.",
         "post":"https://www.reddit.com/r/pennystocks/comments/nw68ut/which_of_these_otcs_will_have_the_highest_gain/"
      },
      {
         "comment":"Whoomp! There it is! Play has begun.",
         "post":"https://www.reddit.com/r/ufc/comments/nw5zoh/winner_of/"
      }
   ],
   "submitted":[
      {
         "post":"https://reddit.com/r/trendingsubreddits/comments/nweils/trending_subreddits_for_20210610_rspreadytoes/"
      },
      {
         "post":"https://reddit.com/r/nameaserver/comments/nwa19n/tue_20210608/"
      },
      {
         "post":"https://reddit.com/r/trendingsubreddits/comments/nvmqad/trending_subreddits_for_20210609_rblop/"
      },
      {
         "post":"https://reddit.com/r/trendingsubreddits/comments/nuvogj/trending_subreddits_for_20210607_rnotinteresting/"
      },
      {
         "post":"https://reddit.com/r/nameaserver/comments/nvidvd/mon_20210607/"
      },
      {
         "post":"https://reddit.com/r/trendingsubreddits/comments/nu3fsm/trending_subreddits_for_20210607_rlagerfeuer/"
      },
      {
         "post":"https://reddit.com/r/trendingsubreddits/comments/ntd22v/trending_subreddits_for_20210606_rmahlzeitvideos/"
      },
      {
         "post":"https://reddit.com/r/trendingsubreddits/comments/nsn61c/trending_subreddits_for_20210605_rpcbaumeister/"
      },
      {
         "post":"https://reddit.com/r/nameaserver/comments/nsj19n/thu_20210603/"
      },
      {
         "post":"https://reddit.com/r/trendingsubreddits/comments/nrw5hs/trending_subreddits_for_20210604_rfussball/"
      }
   ]
}
```

</details>

## Contributing 🤝

- **Contributions, issues and feature requests are welcome!**
- **Feel free to check <a id="href" href="https://github.com/sujalgoel/reddit.images/issues" target="_blank">issues page</a>.**

## Author 💖

#### **Copyright © 2021 Sujal Goel** 👤

- **Github:** [@Sujal Goel](https://github.com/sujalgoel)
- **Website:** [@Sujal Goel](https://sujalgoel.ml)
