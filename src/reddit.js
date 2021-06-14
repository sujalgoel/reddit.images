const fetch = require('node-fetch');
const BaseURL = 'https://api.reddit.com';
const search = ['hot', 'top', 'rising', 'new'];
const { PostFormat, UserFormat } = require('./function');
const MemeSubreddit = ['memes', 'AdviceAnimals', 'AdviceAnimals+funny+memes', 'funny', 'PrequelMemes', 'SequelMemes', 'MemeEconomy', 'ComedyCemetery', 'PewdiepieSubmissions', 'dankmemes', 'terriblefacebookmemes', 'shittyadviceanimals', 'wholesomememes', 'me_irl', '2meirl4meirl', 'i_irl', 'meirl', 'BikiniBottomTwitter', 'trippinthroughtime', 'boottoobig', 'HistoryMemes', 'fakehistoryporn', 'OTMemes', 'starterpacks', 'gifs', 'rickandmorty', 'FellowKids', 'Memes_Of_The_Dank', 'raimimemes', 'comedyhomicide', 'lotrmemes', 'freefolk', 'GameOfThronesMemes', 'howyoudoin', 'HolUp', 'meme', 'memeswithoutmods', 'dankmeme', 'suicidebywords', 'puns', 'PerfectTiming'];

module.exports = {

	/**
	  * @param {"hot"|"top"|"rising"|"new"} SearchType
	  */
	FetchRandomMeme(SearchType) {
		if (SearchType !== 'hot' && SearchType !== 'top' && SearchType !== 'rising' && SearchType !== 'new') {
			SearchType = search[Math.floor(Math.random() * search.length)];
		}
		const URL = `${BaseURL}/r/${MemeSubreddit[Math.floor(Math.random() * MemeSubreddit.length)]}/${SearchType}`;
		return fetch(URL)
			.then(res => res.json())
			.then(res => {
				return !res && !res.data && res.data.dist === 0 ? new Error('Please try again!') : PostFormat(res.data.children[Math.floor(Math.random() * res.data.children.length)].data, SearchType);
			});
	},

	/**
	  * @param {string} Subreddit - A subreddit from https://reddit.com/
	  * @param {"hot"|"top"|"rising"|"new"} SearchType
	  */
	FetchSubredditPost(Subreddit, SearchType) {
		if (SearchType !== 'hot' && SearchType !== 'top' && SearchType !== 'rising' && SearchType !== 'new') {
			SearchType = search[Math.floor(Math.random() * search.length)];
		}
		if (!Subreddit) {
			throw new Error('Please provide a Subreddit!');
		}
		const URL = `${BaseURL}/r/${Subreddit}/${SearchType}`;
		let data;
		return fetch(URL)
			.then(res => res.json())
			.then(res => {
				if (!res) {
					throw new Error('Please try again!');
				} else if (!res.data) {
					throw new Error('Private Subreddit!');
				} else if (res.data.dist === 0) {
					throw new Error('Invalid Subreddit!');
				} else {
					data = PostFormat(res.data.children[Math.floor(Math.random() * res.data.children.length)].data, SearchType);
				}
				return data;
			});
	},

	/**
	  * @param {string} id - A post id from https://reddit.com/
	  */
	FetchPostbyID(id) {
		if (!id) {
			throw new Error('Please provide a Reddit Post ID!');
		}
		const URL = `${BaseURL}/comments/${id}`;
		let data;
		return fetch(URL)
			.then(res => res.json())
			.then(res => {
				if (!res) {
					throw new Error('Please try again!');
				} else if (res.error) {
					throw new Error('Invalid Post ID!');
				} else {
					data = PostFormat(res[0].data.children[0].data);
				}
				return data;
			});
	},


	/**
	  * @param {"hot"|"top"|"rising"|"new"} SearchType
	  */
	FetchRandomPost(SearchType) {
		if (SearchType !== 'hot' && SearchType !== 'top' && SearchType !== 'rising' && SearchType !== 'new') {
			SearchType = search[Math.floor(Math.random() * search.length)];
		}
		const URL = `${BaseURL}/r/all/${SearchType}`;
		return fetch(URL)
			.then(res => res.json())
			.then(res => {
				return !res && !res.data && res.data.dist === 0 ? new Error('Please try again!') : PostFormat(res.data.children[Math.floor(Math.random() * res.data.children.length)].data, SearchType);
			});
	},


	/**
	  * @param {"hot"|"top"|"rising"|"new"} SearchType
	  */
	FetchPost(SearchType) {
		if (SearchType !== 'hot' && SearchType !== 'top' && SearchType !== 'rising' && SearchType !== 'new') {
			SearchType = search[Math.floor(Math.random() * search.length)];
		}
		const URL = `${BaseURL}/${SearchType}`;
		return fetch(URL)
			.then(res => res.json())
			.then(res => {
				return !res && !res.data && res.data.dist === 0 ? new Error('Please try again!') : PostFormat(res.data.children[Math.floor(Math.random() * res.data.children.length)].data, SearchType);
			});
	},

	/**
	  * @param {string} Username - A username from https://reddit.com/
	  * @param {string} Number - Number of comments and submitted post on https://reddit.com/ by the submitted Username
	  */
	async FetchRedditUserInfo(Username, Number) {
		if (!Username) {
			throw new Error('Please provide a Reddit Post ID!');
		}
		if (!Number) {
			Number = Math.floor(Math.random() * 100) + 1;
		}
		const URL = `${BaseURL}/user/${Username}`;
		let data;
		await fetch(`${URL}/about`)
			.then(res => res.json())
			.then(res => {
				if (!res) {
					throw new Error('Please try again!');
				} else if (res.error) {
					throw new Error('Invalid Username!');
				} else {
					data = {
						id: res.data.id,
						name: res.data.name,
						karma: res.data.total_karma,
						moderator: res.data.is_mod,
						verified: res.data.verified,
						gold_user: res.data.is_gold,
						url: 'https://reddit' + res.data.subreddit.url,
						title: res.data.subreddit.title,
						over_18: res.data.subreddit.over_18,
						quarantine: res.data.subreddit.quarantine,
						description: res.data.subreddit.description,
						avatar_url: res.data.icon_img.replace(/&amp;/g, '&'),
						cake_day: new Date(res.data.created_utc * 1000).toString(),
						snoovatar_url: !res.data.snoovatar_size ? null : res.data.snoovatar_img,
						banner_url: !res.data.subreddit.banner_img ? null : res.data.subreddit.banner_img.replace(/&amp;/g, '&'),
					};
				}
			});

		const comments = await fetch(`${URL}/comments?limit=${Number}`)
			.then(res => res.json())
			.then(res => {
				return !res && res.error && res.data.dist === 0 ? [] : res.data.children.map(m => ({ comment: m.data.body, post: m.data.link_permalink }));
			});

		const submitted = await fetch(`${URL}/submitted?limit=${Number}`)
			.then(res => res.json())
			.then(res => {
				return !res && res.error && res.data.dist === 0 ? [] : res.data.children.map(m => ({ post: `https://reddit.com${m.data.permalink}` }));
			});

		return UserFormat(data, comments, submitted);
	},
};