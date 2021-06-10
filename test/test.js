const { reddit } = require('../index');

reddit.FetchRandomMeme('hot')
	.then(data => {
		console.log('FetchRandomMeme Example:');
		console.log(data);
	});

reddit.FetchSubredditPost('xkcd', 'rising').then(data => {
	console.log('FetchSubredditPost Example:');
	console.log(data);
});

reddit.FetchPostbyID('nwccti').then(data => {
	console.log('FetchPostbyID Example:');
	console.log(data);
});

reddit.FetchRandomPost('new').then(data => {
	console.log('FetchRandomPost Example:');
	console.log(data);
});

reddit.FetchPost('top').then(data => {
	console.log('FetchPost Example:');
	console.log(data);
});

reddit.FetchRedditUserInfo('reddit', 10).then(data => {
	console.log('FetchRedditUserInfo Example:');
	console.log(data);
});