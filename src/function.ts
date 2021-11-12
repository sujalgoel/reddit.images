import fetch from 'node-fetch';

export default {
	PostFormat: (data: any, type: any, image: any, gallery: any) => {
		return {
			id: typeof data.id !== 'undefined' ? data.id : null,
			type: type,
			title: typeof data.title !== 'undefined' ? data.title : null,
			author: typeof data.author !== 'undefined' ? data.author : null,
			postLink:
				typeof data.id !== 'undefined' ? 'https://redd.it/' + data.id : null,
			image: image,
			gallery: gallery ? true : false,
			text: typeof data.selftext !== 'undefined' ? data.selftext : null,
			thumbnail: typeof data.thumbnail !== 'undefined' ? data.thumbnail : null,
			subreddit: typeof data.subreddit !== 'undefined' ? data.subreddit : null,
			NSFW: typeof data.over_18 !== 'undefined' ? data.over_18 : null,
			spoiler: typeof data.spoiler !== 'undefined' ? data.spoiler : null,
			createdUtc:
				typeof data.created_utc !== 'undefined' ? data.created_utc : null,
			upvotes: typeof data.ups !== 'undefined' ? data.ups : null,
			downvotes: typeof data.downs !== 'undefined' ? data.downs : null,
			upvoteRatio:
				typeof data.upvote_ratio !== 'undefined' ? data.upvote_ratio : null,
		};
	},

	getImage: async  (data: any) => {
		let tries = 0;
		const retry = 50;
		while (tries < retry) {
			tries++;
			const ImageURL = /imgur|gfycat|gif|jpe?g|png|webp/i.test(data.url);
			if (ImageURL) {
				if (data.url.includes('imgur.com/a/')) {
					return null;
				}
				if (
					data.url.includes('imgur') &&
					(!data.url.includes('png') ||
						!data.url.includes('jpg') ||
						!data.url.includes('gif') ||
						!data.url.includes('jpeg') ||
						!data.url.includes('webp') ||
						!data.url.includes('gifv'))
				) {
					return (
						'https://i.imgur.com/' +
						data.url.split('.')[2].split('/')[1] +
						'.png'
					);
				}
				if (data.url.includes('gfycat')) {
					const url = await fetch(data.url.split('/')[3]).then((res) =>
						res.json(),
					);
					if (url) {
						return url.gfyItem.max5mbGif;
					} else {
						return null;
					}
				}
				return data.url;
			}
			if (tries === retry) {
				return null;
			}
		}
		return data.url.replace('gifv', 'gif');
	},
};
