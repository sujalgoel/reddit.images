module.exports = {
	format: function(post) {
		return {
			id: typeof post.id !== 'undefined' ? post.id : null,
			title: typeof post.title !== 'undefined' ? post.title : null,
			author: typeof post.author !== 'undefined' ? post.author : null,
			postLink: typeof post.id !== 'undefined' ? 'https://redd.it/' + post.id : null,
			image: typeof post.url !== 'undefined' ? post.url : null,
			text: typeof post.selftext !== 'undefined' ? post.selftext : null,
			thumbnail: typeof post.thumbnail !== 'undefined' ? post.thumbnail : null,
			subreddit: typeof post.subreddit !== 'undefined' ? post.subreddit : null,
			NSFW: typeof post.over_18 !== 'undefined' ? post.over_18 : null,
			spoiler: typeof post.spoiler !== 'undefined' ? post.spoiler : null,
			createdUtc: typeof post.created_utc !== 'undefined' ? post.created_utc : null,
			upvotes: typeof post.ups !== 'undefined' ? post.ups : null,
			downvotes: typeof post.downs !== 'undefined' ? post.downs : null,
			upvoteRatio: typeof post.upvote_ratio !== 'undefined' ? post.upvote_ratio : null,
		};
	},
};