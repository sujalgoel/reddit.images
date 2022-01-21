const Functions = require('./function');
const Meme = require('./json/meme.json');
const BaseURL = 'https://api.reddit.com';
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

module.exports = {
	async FetchRandomMeme(options) {
		if (
			options.searchType !== 'hot' &&
			options.searchType !== 'top' &&
			options.searchType !== 'new' &&
			options.searchType !== 'rising'
		) {
			options.searchType = null;
		}

		const meme = Meme[Math.floor(Math.random() * Meme.length)];
		options.searchType = options.searchType ? options.searchType : '';

		const URL = `${BaseURL}/r/${meme}/${options.searchType}`;
		const res = await fetch(URL).then((response) => response.json());

		if (!res && !res.data && !res.data.children) {
			throw new Error('Please try again!');
		} else {
			const num = Math.floor(Math.random() * res.data.children.length);

			const data = res.data.children[num].data;
			let img = await Functions.getImage(res.data.children[num].data);
			if (data.is_gallery) {
				img = [];
				const validPosts = Object.values(data.media_metadata).filter(
					(image) => image.status === 'valid',
				);
				for (let i = 0; i < validPosts.length; i++) {
					img.push(validPosts[i].s.u.replace(/&amp;/g, '&'));
				}
			}
			return Functions.PostFormat(
				res.data.children[num].data,
				options.searchType,
				img,
				data.is_gallery,
			);
		}
	},
	async FetchSubredditPost(options) {
		if (
			options.searchType !== 'hot' &&
			options.searchType !== 'top' &&
			options.searchType !== 'new' &&
			options.searchType !== 'rising'
		) {
			options.searchType = null;
		}
		if (!options.subreddit) {
			throw new Error('Please provide a Subreddit!');
		}

		options.searchType = options.searchType ? options.searchType : '';
		const URL = `${BaseURL}/r/${options.subreddit}/${options.searchType}`;

		const res = await fetch(URL).then((response) => response.json());

		if (!res) {
			throw new Error('Please try again!');
		} else if (!res.data) {
			throw new Error('Private Subreddit!');
		} else if (res.data.dist === 0) {
			throw new Error('Invalid Subreddit!');
		} else {
			const num = Math.floor(Math.random() * res.data.children.length);

			const data = res.data.children[num].data;
			let img = await Functions.getImage(res.data.children[num].data);
			if (data.is_gallery) {
				img = [];
				const validPosts = Object.values(data.media_metadata).filter(
					(image) => image.status === 'valid',
				);
				for (let i = 0; i < validPosts.length; i++) {
					img.push(validPosts[i].s.u.replace(/&amp;/g, '&'));
				}
			}

			return Functions.PostFormat(
				res.data.children[num].data,
				options.searchType,
				img,
				data.is_gallery,
			);
		}
	},
	async FetchPostbyID(id) {
		if (!id) {
			throw new Error('Please provide a Reddit Post ID!');
		}

		const URL = `${BaseURL}/comments/${id}`;
		const res = await fetch(URL).then((response) => response.json());

		if (!res) {
			throw new Error('Please try again!');
		} else if (res.error) {
			throw new Error('Invalid Post ID!');
		} else {
			return Functions.PostFormat(res[0].data.children[0].data, '', '', '');
		}
	},
	async FetchRandomPost(options) {
		if (
			options.searchType !== 'hot' &&
			options.searchType !== 'top' &&
			options.searchType !== 'new' &&
			options.searchType !== 'rising'
		) {
			options.searchType = null;
		}

		options.searchType = options.searchType ? options.searchType : '';

		const URL = `${BaseURL}/r/all/${options.searchType}?limit=100`;
		const res = await fetch(URL).then((response) => response.json());

		const num = Math.floor(Math.random() * res.data.children.length);

		const data = res.data.children[num].data;
		let img = await Functions.getImage(res.data.children[num].data);
		if (data.is_gallery) {
			img = [];
			const validPosts = Object.values(data.media_metadata).filter(
				(image) => image.status === 'valid',
			);
			for (let i = 0; i < validPosts.length; i++) {
				img.push(validPosts[i].s.u.replace(/&amp;/g, '&'));
			}
		}

		if (!res) {
			throw new Error('Please try again!');
		} else {
			return Functions.PostFormat(
				res.data.children[num].data,
				options.searchType,
				img,
				data.is_gallery,
			);
		}
	},
	async FetchPost(options) {
		if (
			options.searchType !== 'hot' &&
			options.searchType !== 'top' &&
			options.searchType !== 'rising' &&
			options.searchType !== 'new'
		) {
			options.searchType = null;
		}

		options.searchType = options.searchType ? options.searchType : '';

		const URL = `${BaseURL}/${options.searchType}?limit=100`;
		const res = await fetch(URL).then((response) => response.json());

		const num = Math.floor(Math.random() * res.data.children.length);

		const data = res.data.children[num].data;
		let img = await Functions.getImage(res.data.children[num].data);

		if (data.is_gallery) {
			img = [];
			const validPosts = Object.values(data.media_metadata).filter(
				(image) => image.status === 'valid',
			);
			for (let i = 0; i < validPosts.length; i++) {
				img.push(validPosts[i].s.u.replace(/&amp;/g, '&'));
			}
		}
		if (!res) {
			throw new Error('Please try again!');
		} else {
			return Functions.PostFormat(
				res.data.children[num].data,
				options.searchType,
				img,
				data.is_gallery,
			);
		}
	},
};
