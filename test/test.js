const { reddit } = require('../index');

reddit
	.FetchRandomMeme({
		images: true,
	})
	.then((data) => {
		console.log('FetchRandomMeme Example:');
		console.log(data);
	});

reddit
	.FetchSubredditPost({
		subreddit: 'xkcd',
		images: false,
	})
	.then((data) => {
		console.log('FetchSubredditPost Example:');
		console.log(data);
	});

reddit.FetchPostbyID('nwccti').then((data) => {
	console.log('FetchPostbyID Example:');
	console.log(data);
});

reddit
	.FetchRandomPost({
		searchtype: 'new',
		images: true,
	})
	.then((data) => {
		console.log('FetchRandomPost Example:');
		console.log(data);
	});

reddit
	.FetchPost({
		searchtype: 'top',
		images: true,
	})
	.then((data) => {
		console.log('FetchPost Example:');
		console.log(data);
	});

reddit
	.FetchRedditUserInfo({
		username: 'reddit',
		number: 10,
	})
	.then((data) => {
		console.log('FetchRedditUserInfo Example:');
		console.log(data);
	});
