import React, { Component } from 'react'

/* re-export */
export { default as About } from './About'

export { default as App } from './App'

/* export Index component */
export class Index extends Component {
	render() {
		return (
			<div id='indexContainer'>
				<div className='title'>
					Hello, world!
				</div>
				<a href='/about'>－I am Kei-sau, CHING</a>
			</div>
		)
	}
}
