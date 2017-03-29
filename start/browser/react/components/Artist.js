import React, { Component } from 'react';
import { Link } from 'react-router';
import Albums from './Albums';
import Songs from './Songs';

class Artist extends Component {

	constructor(props) {
		super(props)
	}

	 componentDidMount () {
		 console.log(this.props)
		const selectArtist = this.props.selectArtist;
		selectArtist(this.props.params.artistId)
	}

	render() {
		const artist = this.props.selectedArtist
		const currentSong = this.props.currentSong;
		const isPlaying = this.props.isPlaying;
		const toggleOne = this.props.toggleOne;
		return(
			<div>
			  <h3>{artist.name}</h3>

			  <h4>ALBUMS</h4>
			  	<Albums 
				  albums={artist.albums}
				  />

			  <h4>SONGS</h4>
			  <Songs 
				songs={artist.songs}
				currentSong={currentSong}
				isPlaying={isPlaying}
				toggleOne={toggleOne}
			  />
			</div>
			)
	}
}

export default Artist;