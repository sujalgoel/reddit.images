const reddit = require('../src/reddit');

reddit.FetchRandomMeme({}).then((data) => {
	console.log('FetchRandomMeme Example:');
	console.log(data);
});

reddit.FetchSubredditPost({ subreddit: 'xkcd' }).then((data) => {
	console.log('FetchSubredditPost Example:');
	console.log(data);
});

reddit.FetchPostbyID('nwccti').then((data) => {
	console.log('FetchPostbyID Example:');
	console.log(data);
});

reddit.FetchRandomPost({}).then((data) => {
	console.log('FetchRandomPost Example:');
	console.log(data);
});

reddit.FetchPost({ searchType: 'top' }).then((data) => {
	console.log('FetchPost Example:');
	console.log(data);
});
