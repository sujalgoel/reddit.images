const fetch = require('node-fetch');
const { format } = require('./function');
const base = 'https://api.reddit.com/r';
const search = ['hot', 'top', 'rising'];
const MemeSubreddit = ['memes', 'AdviceAnimals', 'AdviceAnimals+funny+memes', 'funny', 'PrequelMemes', 'SequelMemes', 'MemeEconomy', 'ComedyCemetery', 'PewdiepieSubmissions', 'dankmemes', 'terriblefacebookmemes', 'shittyadviceanimals', 'wholesomememes', 'me_irl', '2meirl4meirl', 'i_irl', 'meirl', 'BikiniBottomTwitter', 'trippinthroughtime', 'boottoobig', 'HistoryMemes', 'fakehistoryporn', 'OTMemes', 'starterpacks', 'gifs', 'rickandmorty', 'FellowKids', 'Memes_Of_The_Dank', 'raimimemes', 'comedyhomicide', 'lotrmemes', 'freefolk', 'GameOfThronesMemes', 'howyoudoin', 'HolUp', 'meme', 'memeswithoutmods', 'dankmeme', 'suicidebywords', 'puns', 'PerfectTiming'];

module.exports = {
	FetchMeme() {
		const link = `${base}/${MemeSubreddit[Math.floor(Math.random() * MemeSubreddit.length)]}/${search[Math.floor(Math.random() * search.length)]}`;
		return fetch(link)
			.then(res => res.json())
			.then(res => {
				if (!res || !res.data || !res.data.dist === 0) {
					return Error('Please try again!');
				}
				const post = res.data.children[Math.floor(Math.random() * res.data.children.length)];
				return format(post.data);
			});
	},

	FetchSubreddit(subreddit) {
		const link = `${base}/${subreddit}/${search[Math.floor(Math.random() * search.length)]}`;
		let data;
		return fetch(link)
			.then(res => res.json())
			.then(res => {
				if (!res) {
					return Error('Please try again!');
				} else if (!res.data) {
					return Error('Private Subreddit!');
				} else if (res.data.dist === 0) {
					return Error('Invalid Subreddit!');
				} else {
					const post = res.data.children[Math.floor(Math.random() * res.data.children.length)];
					data = format(post.data);
				}
				return data;
			});
	},
};
