module.exports = {
	PostFormat: function(data, type) {
		if (type) {
			return {
				id: typeof data.id !== 'undefined' ? data.id : null,
				type: type,
				title: typeof data.title !== 'undefined' ? data.title : null,
				author: typeof data.author !== 'undefined' ? data.author : null,
				postLink: typeof data.id !== 'undefined' ? 'https://redd.it/' + data.id : null,
				image: typeof data.url !== 'undefined' ? data.url : null,
				text: typeof data.selftext !== 'undefined' ? data.selftext : null,
				thumbnail: typeof data.thumbnail !== 'undefined' ? data.thumbnail : null,
				subreddit: typeof data.subreddit !== 'undefined' ? data.subreddit : null,
				NSFW: typeof data.over_18 !== 'undefined' ? data.over_18 : null,
				spoiler: typeof data.spoiler !== 'undefined' ? data.spoiler : null,
				createdUtc: typeof data.created_utc !== 'undefined' ? data.created_utc : null,
				upvotes: typeof data.ups !== 'undefined' ? data.ups : null,
				downvotes: typeof data.downs !== 'undefined' ? data.downs : null,
				upvoteRatio: typeof data.upvote_ratio !== 'undefined' ? data.upvote_ratio : null,
			};
		} else {
			return {
				id: typeof data.id !== 'undefined' ? data.id : null,
				title: typeof data.title !== 'undefined' ? data.title : null,
				author: typeof data.author !== 'undefined' ? data.author : null,
				postLink: typeof data.id !== 'undefined' ? 'https://redd.it/' + data.id : null,
				image: typeof data.url !== 'undefined' ? data.url : null,
				text: typeof data.selftext !== 'undefined' ? data.selftext : null,
				thumbnail: typeof data.thumbnail !== 'undefined' ? data.thumbnail : null,
				subreddit: typeof data.subreddit !== 'undefined' ? data.subreddit : null,
				NSFW: typeof data.over_18 !== 'undefined' ? data.over_18 : null,
				spoiler: typeof data.spoiler !== 'undefined' ? data.spoiler : null,
				createdUtc: typeof data.created_utc !== 'undefined' ? data.created_utc : null,
				upvotes: typeof data.ups !== 'undefined' ? data.ups : null,
				downvotes: typeof data.downs !== 'undefined' ? data.downs : null,
				upvoteRatio: typeof data.upvote_ratio !== 'undefined' ? data.upvote_ratio : null,
			};
		}
	},

	UserFormat: function(data, comments, submitted) {
		return {
			id: typeof data.id !== 'undefined' ? data.id : null,
			name: typeof data.name !== 'undefined' ? data.name : null,
			title: typeof data.title !== 'undefined' ? data.title : null,
			description: typeof data.description !== 'undefined' ? data.description : null,
			url: typeof data.url !== 'undefined' ? data.url : null,
			karma: typeof data.karma !== 'undefined' ? data.karma : null,
			cakeday: typeof data.cake_day !== 'undefined' ? data.cake_day : null,
			avatar: typeof data.avatar_url !== 'undefined' ? data.avatar_url : null,
			snoovatar: typeof data.snoovatar_url !== 'undefined' ? data.snoovatar_url : null,
			banner: typeof data.banner_url !== 'undefined' ? data.banner_url : null,
			NSFW: typeof data.over_18 !== 'undefined' ? data.over_18 : null,
			verified: typeof data.verified !== 'undefined' ? data.verified : null,
			golduser: typeof data.gold_user !== 'undefined' ? data.gold_user : null,
			moderator: typeof data.moderator !== 'undefined' ? data.moderator : null,
			quarantine: typeof data.quarantine !== 'undefined' ? data.quarantine : null,
			comments: typeof comments !== 'undefined' ? comments : null,
			submitted: typeof submitted !== 'undefined' ? submitted : null,
		};
	},
};