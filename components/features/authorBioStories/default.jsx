import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Consumer from 'fusion:consumer';

@Consumer
class AuthorBioStories extends Component {

	constructor(props) {
		super(props);
		this.fetchAuthorContent();
	}

	fetchAuthorContent() {
		this.fetchContent({
			authorStories: {
				source: 'content',
				query: {
					website: 'reuterscom',
					authorName: this.props.authorName,
				},
			},
		});
	}

	render() {
		return (
			<Fragment>
				{(this.state.authorStories && this.state.authorStories['content_elements'].length) ? this.state.authorStories['content_elements'].map(story =>
					<div className="author-bio_story">{story.headlines.basic}</div>) : 'No stories'}
			</Fragment>
		);
	}
}

AuthorBioStories.propTypes = {
	customFields: PropTypes.shape({
		authorName: PropTypes.string.tag({
			label: 'Author Name',
			description: 'Author Name'
		}),
	}),
};

export default AuthorBioStories;
