/**
 * Makes a call to the url
 * https://api.sandbox.ORG.arcpublishing.com/author/v1/author-service?_id={id}
 * sample: https://api.sandbox.ORG.arcpublishing.com/author/v1/author-service?_id={id}
 * @param id String the id of the author //EX:jschmittler
 **/

const resolve = function resolve(data) {
	const requestUri = `author/v1/author-service?_id=${data.id}`;
	return `${requestUri}`;
};

export default {
	resolve,
	params: { id: 'text' },
};
