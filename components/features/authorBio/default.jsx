import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Consumer from 'fusion:consumer';

@Consumer
class AuthorBio extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const {byline, affiliations, bio, email, role} = this.props.globalContent;
		return (
			<Fragment>
				<div className="author-bio_byline">{byline}</div>
				<div className="author-bio_affiliations">Affiliations: {affiliations || '(No affiliations)'}</div>
				<div className="author-bio_bio">Bio: {bio || '(No bio)'}</div>
				<div className="author-bio_email">Email: {email || '(No Email)'}</div>
				<div className="author-bio_role">Role: {role || '(No Role)'}</div>
			</Fragment>
		);
	}
}

AuthorBio.propTypes = {
	customFields: PropTypes.shape({
		authorID: PropTypes.string.tag({
			label: 'Author ID',
			description: 'Author ID'
		}),
	}),
};

export default AuthorBio;
