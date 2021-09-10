const fetch = require('node-fetch');
const BaseURL = 'https://api.reddit.com';
const functions = require('./function');
const MemeSubreddit = [
	'memes',
	'AdviceAnimals',
	'AdviceAnimals+funny+memes',
	'funny',
	'PrequelMemes',
	'SequelMemes',
	'MemeEconomy',
	'ComedyCemetery',
	'PewdiepieSubmissions',
	'dankmemes',
	'terriblefacebookmemes',
	'shittyadviceanimals',
	'wholesomememes',
	'me_irl',
	'2meirl4meirl',
	'i_irl',
	'meirl',
	'BikiniBottomTwitter',
	'trippinthroughtime',
	'boottoobig',
	'HistoryMemes',
	'fakehistoryporn',
	'OTMemes',
	'starterpacks',
	'gifs',
	'rickandmorty',
	'FellowKids',
	'Memes_Of_The_Dank',
	'raimimemes',
	'comedyhomicide',
	'lotrmemes',
	'freefolk',
	'GameOfThronesMemes',
	'howyoudoin',
	'HolUp',
	'meme',
	'memeswithoutmods',
	'dankmeme',
	'suicidebywords',
	'puns',
	'PerfectTiming',
];

module.exports = {
	/**
	 * @param {"hot"|"top"|"rising"|"new"} searchtype
	 * @param {boolean} images - You want images with the post?
	 */
	async FetchRandomMeme(options) {
		if (
			options.searchtype !== 'hot' &&
			options.searchtype !== 'top' &&
			options.searchtype !== 'rising' &&
			options.searchtype !== 'new'
		) {
			options.searchtype = null;
		}
		if (!options.images && typeof options.images !== 'boolean') {
			options.images = false;
		}

		const URL = `${BaseURL}/r/${
			MemeSubreddit[Math.floor(Math.random() * MemeSubreddit.length)]
		}/${options.searchtype ? options.searchtype : ''}`;
		const res = await fetch(URL).then((response) => response.json());

		if (options.images) {
			const num = Math.floor(Math.random() * res.data.children.length);
			return !res && !res.data && res.data.dist === 0
				? new Error('Please try again!')
				: functions.PostFormat(
					res.data.children[
						Math.floor(Math.random() * res.data.children.length)
					].data,
					options.searchtype ? options.searchtype : '',
					functions.getImage(res.data.children[num].data),
				);
		} else {
			return !res && !res.data && res.data.dist === 0
				? new Error('Please try again!')
				: functions.PostFormat(
					res.data.children[
						Math.floor(Math.random() * res.data.children.length)
					].data,
					options.searchtype ? options.searchtype : '',
				);
		}
	},

	/**
	 * @param {"hot"|"top"|"rising"|"new"} searchtype
	 * @param {string} subreddit - A subreddit from https://reddit.com/
	 * @param {boolean} images - You want images with the post?
	 */
	async FetchSubredditPost(options) {
		if (
			options.searchtype !== 'hot' &&
			options.searchtype !== 'top' &&
			options.searchtype !== 'rising' &&
			options.searchtype !== 'new'
		) {
			options.searchtype = null;
		}
		if (!options.subreddit) {
			throw new Error('Please provide a Subreddit!');
		}
		if (!options.images && typeof options.images !== 'boolean') {
			options.images = false;
		}

		let data;
		const URL = `${BaseURL}/r/${options.subreddit}/${
			options.searchtype ? options.searchtype : ''
		}`;
		const res = await fetch(URL).then((response) => response.json());

		if (options.images) {
			if (!res) {
				throw new Error('Please try again!');
			} else if (!res.data) {
				throw new Error('Private Subreddit!');
			} else if (res.data.dist === 0) {
				throw new Error('Invalid Subreddit!');
			} else {
				const num = Math.floor(Math.random() * res.data.children.length);
				data = functions.PostFormat(
					res.data.children[num].data,
					options.searchtype ? options.searchtype : '',
					functions.getImage(res.data.children[num].data),
				);
			}
			return data;
		} else {
			if (!res) {
				throw new Error('Please try again!');
			} else if (!res.data) {
				throw new Error('Private Subreddit!');
			} else if (res.data.dist === 0) {
				throw new Error('Invalid Subreddit!');
			} else {
				data = functions.PostFormat(
					res.data.children[
						Math.floor(Math.random() * res.data.children.length)
					].data,
					options.searchtype ? options.searchtype : '',
				);
			}
			return data;
		}
	},

	/**
	 * @param {string} id - A post id from https://reddit.com/
	 */
	async FetchPostbyID(id) {
		if (!id) {
			throw new Error('Please provide a Reddit Post ID!');
		}

		let data;
		const URL = `${BaseURL}/comments/${id}`;

		const res = await fetch(URL).then((response) => response.json());

		if (!res) {
			throw new Error('Please try again!');
		} else if (res.error) {
			throw new Error('Invalid Post ID!');
		} else {
			data = functions.PostFormat(res[0].data.children[0].data, '');
		}
		return data;
	},

	/**
	 * @param {"hot"|"top"|"rising"|"new"} searchtype - Type of search you want to do
	 * @param {boolean} images - You want images with the post?
	 */
	async FetchRandomPost(options = {}) {
		if (
			options.searchtype !== 'hot' &&
			options.searchtype !== 'top' &&
			options.searchtype !== 'rising' &&
			options.searchtype !== 'new'
		) {
			options.searchtype = null;
		}
		if (!options.images && typeof options.images !== 'boolean') {
			options.images = false;
		}

		const URL = `${BaseURL}/r/all/${
			options.searchtype ? options.searchtype : ''
		}?limit=100`;
		const res = await fetch(URL).then((response) => response.json());

		if (options.images) {
			const num = Math.floor(Math.random() * res.data.children.length);
			return !res && !res.data && res.data.dist === 0
				? new Error('Please try again!')
				: functions.PostFormat(
					res.data.children[num].data,
					options.searchtype ? options.searchtype : '',
					functions.getImage(res.data.children[num].data),
				);
		} else {
			return !res && !res.data && res.data.dist === 0
				? new Error('Please try again!')
				: functions.PostFormat(
					res.data.children[
						Math.floor(Math.random() * res.data.children.length)
					].data,
					options.searchtype ? options.searchtype : '',
				);
		}
	},

	/**
	 * @param {"hot"|"top"|"rising"|"new"} searchtype - Type of search you want to do
	 * @param {boolean} images - You want images with the post?
	 */
	async FetchPost(options = {}) {
		if (
			options.searchtype !== 'hot' &&
			options.searchtype !== 'top' &&
			options.searchtype !== 'rising' &&
			options.searchtype !== 'new'
		) {
			options.searchtype = null;
		}
		if (!options.images && typeof options.images !== 'boolean') {
			options.images = false;
		}

		const URL = `${BaseURL}/${
			options.searchtype ? options.searchtype : ''
		}?limit=100`;
		const res = await fetch(URL).then((response) => response.json());

		if (options.images) {
			const num = Math.floor(Math.random() * res.data.children.length);
			return !res && !res.data && res.data.dist === 0
				? new Error('Please try again!')
				: functions.PostFormat(
					res.data.children[num].data,
					options.searchtype ? options.searchtype : '',
					functions.getImage(res.data.children[num].data),
				);
		} else {
			return !res && !res.data && res.data.dist === 0
				? new Error('Please try again!')
				: functions.PostFormat(
					res.data.children[
						Math.floor(Math.random() * res.data.children.length)
					].data,
					options.searchtype ? options.searchtype : '',
				);
		}
	},

	/**
	 * @param {string} username - A username from https://reddit.com/
	 * @param {number} number - Number of comments and submitted post on https://reddit.com/ by the given username
	 */
	async FetchRedditUserInfo(options = {}) {
		if (!options.username) {
			throw new Error('Please provide a Reddit Post ID!');
		}
		if (!options.number && typeof options.number !== 'number') {
			options.number = Math.floor(Math.random() * 100) + 1;
		}

		let data;
		const URL = `${BaseURL}/user/${options.username}`;

		const res = await fetch(`${URL}/about`).then((response) => response.json());

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
				url: 'https://reddit.com' + res.data.subreddit.url,
				title: res.data.subreddit.title,
				over_18: res.data.subreddit.over_18,
				quarantine: res.data.subreddit.quarantine,
				description: res.data.subreddit.description,
				avatar_url: res.data.icon_img.replace(/&amp;/g, '&'),
				cake_day: new Date(res.data.created_utc * 1000).toString(),
				snoovatar_url: !res.data.snoovatar_size ? null : res.data.snoovatar_img,
				banner_url: !res.data.subreddit.banner_img
					? null
					: res.data.subreddit.banner_img.replace(/&amp;/g, '&'),
			};
		}

		const comments = await fetch(`${URL}/comments?limit=${options.number}`)
			.then((response) => response.json())
			.then((response) => {
				return !response && response.error && response.data.dist === 0
					? []
					: response.data.children.map((m) => ({
						comment: m.data.body,
						post: m.data.link_permalink,
					}));
			});

		const submitted = await fetch(`${URL}/submitted?limit=${options.number}`)
			.then((response) => response.json())
			.then((response) => {
				return !response && response.error && response.data.dist === 0
					? []
					: response.data.children.map((m) => ({
						post: `https://reddit.com${m.data.permalink}`,
					}));
			});

		return functions.UserFormat(data, comments, submitted);
	},
};
