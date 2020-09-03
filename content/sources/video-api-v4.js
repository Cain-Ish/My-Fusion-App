/**
 * Makes a call to the url
 * https://api.sandbox.{ORG}.arcpublishing.com/content/v4/videos?_id=${id}&website=${website_url

 * @param website_url String the name of the website (if null uses hk-appledaily)
 * @param id String the id of the video EX 42812c27-f9e3-45a3-96ad-e84861e8d3f8
 **/

const resolve = function resolve(data) {
	const requestUri = `/content/v4/videos?_id=${data.id || data}&website=${data.website_url ||
	'hk-appledaily'}`;
	return `${requestUri}`;
};

export default {
	resolve,
	params: { id: 'text', website_url: 'text' }
};
