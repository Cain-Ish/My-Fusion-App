import React, { Component, Fragment } from 'react';
import Consumer from 'fusion:consumer';
import './authorBio.css';
import AuthorBioStories from '../authorBioStories/default';

@Consumer
class AuthorBioList extends Component {

	constructor(props) {
		super(props);
		this.fetchAuthorContent();
	}

	fetchAuthorContent() {
		const limit = this.props.customFields.limit || 10;

		this.fetchContent({
			authorList: {
				source: 'author-List',
				query: {
					limit: limit,
				},
			},
		});
	}

	render() {
		return (
			<Fragment>
				DEFAULT
				{this.state.authorList && this.state.authorList['authors'].map((author) =>
					<div className="author-bio">

						<div className="author-bio-item author-bio_photo">
							{author.image ? <img src={author.image}/> : '(No image)'}
						</div>
						<div className="author-bio-item author-bio_description">
							<div className="author-bio_name">
								<a href={`/pf/author/${author.byline}/?_website=reuterscom`}>{author.byline}</a>
							</div>
							<AuthorBioStories authorName={author.byline} />
						</div>
					</div>
				)}
			</Fragment>
		);
	}
}


export default AuthorBioList;
