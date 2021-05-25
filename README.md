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

> A npm package for fetching images from reddit.

## Install the package 📥

```
npm i reddit.images
```

## Example ✏️

<details>
<summary>FetchMeme example</summary>

```js
const reddit = require("reddit.images");

reddit.FetchMeme().then((data) => {
  console.log(data);
});
```

### Example Response

```sh
{
  id: 'nkbnhb',
  title: 'Invest in Derek Savage',
  author: 'ilovenomar5',
  postLink: 'https://redd.it/nkbnhb',
  image: 'https://www.reddit.com/gallery/nkbnhb',
  text: '',
  thumbnail: 'https://b.thumbs.redditmedia.com/JmgbVSW4mRAvXyDL6zR4mWsMnvphEweFYm2IsK-1oOQ.jpg',
  subreddit: 'MemeEconomy',
  NSFW: false,
  spoiler: false,
  createdUtc: 1621899556,
  upvotes: 7,
  downvotes: 0,
  upvoteRatio: 0.78
}
```

</details>

<details>
<summary>FetchSubreddit example</summary>

```js
const reddit = require("reddit.images");

reddit.FetchSubreddit("xkcd").then((data) => {
  console.log(data);
});
```

### Example Response

```sh
{
  id: 'na6f17',
  title: 'Need a help finding xkcd',
  author: 'rtsrp3f',
  postLink: 'https://redd.it/na6f17',
  image: 'https://www.reddit.com/r/xkcd/comments/na6f17/need_a_help_finding_xkcd/',
  text: 'I believe there is an xkcd showing how one guy updating certain program keeps whole internet alive. Is it an xkcd and if it is, can somebody help me find it',
  thumbnail: 'self',
  subreddit: 'xkcd',
  NSFW: false,
  spoiler: false,
  createdUtc: 1620763840,
  upvotes: 27,
  downvotes: 0,
  upvoteRatio: 0.84
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
