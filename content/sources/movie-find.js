/*    /content/sources/movie-find.js    */

import { OMDB_API_KEY } from 'fusion:environment'

const resolve = (query) => {
	const requestUri = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&plot=full`
	console.log("Move Find: ", `${requestUri}&t=${query.movieTitle}`)

	if (query.hasOwnProperty('movieTitle')) return `${requestUri}&t=${query.movieTitle}`

	throw new Error('movie-find content source requires a movieTitle')
}

export default {
	resolve,
	params: {
		movieTitle: 'text'
	}
}
