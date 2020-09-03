const resolve = function resolve(data) {
	const requestUri = `author/v2/author-service?limit=${data.limit}`;
	return `${requestUri}`;
};

export default {
	resolve,
	params: {limit: 'number'},
};
