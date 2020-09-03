/*  /components/features/movies/movie-detail.jsx  */

import Consumer from 'fusion:consumer';
import React, { Component, useState } from 'react';

const MoviePlot = (props) => {
	const [isPlotShown, setPlotShown] = useState(false);

	return <>
		{isPlotShown && props.plot}
		<button onClick={() => setPlotShown(!isPlotShown)}>
			{isPlotShown ? 'Hide Plot' : 'Show Plot'}
		</button>
	</>;
};


@Consumer
class MovieDetailContent extends Component {

	componentDidMont() {
		fetchContent(
			{}
		);
	}

	render() {

		{/* Here, we extract the data we want from `this.props.globalContent`, which we "short circuit" default to an empty object, just in case it doesn't exist */
		}
		const {Actors, Director, Plot, Poster, Rated, Title, Writer, Year} = this.props.globalContent || {};

		{/* Replace the static values with their dynamic equivalents, first checking if each necessary value exists */
		}
		return (
			<div className='movie-detail col-sm-12 col-md-8'>
				{Title && <h1>{Title}</h1>}
				{Director && <p><strong>Director:</strong> {Director}</p>}
				{Actors && <p><strong>Actors:</strong> {Actors}</p>}
				{Plot && <p><strong>Plot:</strong> <MoviePlot plot={Plot}/></p>}
				{Rated && <p><strong>Rated:</strong> {Rated}</p>}
				{Writer && <p><strong>Writer:</strong> {Writer}</p>}
				{Year && <p><strong>Year:</strong> {Year}</p>}
				{Poster && Title && <img src={Poster} alt={`Poster for ${Title}`}/>}
			</div>
		);
	}
}

export default MovieDetailContent;