const reddit = require('../src/index');

reddit.FetchMeme().then(data => {
	console.log('FetchMeme Example:');
	console.log(data);
});

reddit.FetchSubreddit('xkcd').then(data => {
	console.log('FetchSubreddit Example:');
	console.log(data);
});