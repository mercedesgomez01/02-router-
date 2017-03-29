import React, { Component } from 'react';
import { Link } from 'react-router';

class Artist extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		return(
			<div>
			  <h3>ARTIST NAME</h3>
			  <h4>ALBUMS</h4>
			  <h4>SONGS</h4>
			</div>
			)
	}
}

export default Artist;