const resolve = function resolve(data) {
	const requestUri = `/content/v4/search/published?website=${data.website}&q=type:"story" AND credits.by.name:"${data.authorName}"&sort=display_date:desc&size=3`;
	return `${requestUri}`;
};

export default {
	resolve,
	params: {website: 'text', authorName: 'text'},
};
