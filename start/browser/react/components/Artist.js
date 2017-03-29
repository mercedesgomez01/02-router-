import React, { Component } from 'react';
import { Link } from 'react-router';
import Albums from './Albums';
import Songs from './Songs';

class Artist extends Component {

	constructor(props) {
		super(props)
	}

	 componentDidMount () {
		const selectArtist = this.props.selectArtist;
		selectArtist(this.props.params.artistId)
	}

	render() {
		const artist = this.props.selectedArtist
		const currentSong = this.props.currentSong;
		const isPlaying = this.props.isPlaying;
		const toggleOne = this.props.toggleOne;
		const children = this.props.children;
		const propsToPassToChildren = {
			albums: artist.albums,
			songs:artist.songs,
			currentSong:currentSong,
			isPlaying:isPlaying,
			toggleOne:toggleOne,
		}
		return(
			<div>
			  <h3>{artist.name}</h3>
			  <ul className="nav nav-tabs">
			    <li><Link to={`/artists/${artist.id}/albums`}>ALBUMS</Link></li>
			    <li><Link to={`/artists/${artist.id}/songs`}>SONGS</Link></li>
			  </ul>
			{ children && React.cloneElement(children, propsToPassToChildren) }  
			</div>
			)
	}
}

export default Artist;