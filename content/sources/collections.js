
/**
 * Makes a call to the url
 * https://api.sandbox.appledaily.arcpublishing.com/content/v4/collections?_id={id}&website={website}

 * @param website String the name of the website (if null uses hk-appledaily)
 * @param id String the id of the collection from websked EX COGFF64NMBEM3HVP3ZOEZHHZVY
 **/
const resolve = function resolve(data) {
	const requestUri = `/content/v4/collections?_id=${data.id || data}&published=true&website=${data.website || 'hk-appledaily'}`;
	return `${requestUri}`;
};

export default {
	resolve,
	params: { id: 'text', website: 'text' },
};
