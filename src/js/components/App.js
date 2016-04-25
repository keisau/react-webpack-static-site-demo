require('../../styles/stylesheet.scss')

import React, { Component, PropTypes } from 'react'

export default class extends Component {
	render() {
		return (
			<div id='appContainer'>
				{ React.Children.only(this.props.children) }
			</div>
		)
	}
}
