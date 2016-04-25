import React, { Component } from 'react'

const interestedAreas = [
	{ name: 'Web Frontend Development' },
	{ name: 'Backend Development' },
	{ name: 'Cloud Architectures' },
	{ name: 'Software Development Methodologies' },
	{ name: 'Development Environment & Tools' },
	{ name: 'Linux and OS X internals (kernel)' },
	{ name: 'Graph Theory and Algorithms' },
	{ name: 'Number Theory and Algorithms' },
	{ name: 'Cryptography and Security Protocols' }
]
const focusedAreas = [
	{ name: 'Web Frontend Development' },
	{ name: 'Backend Development' },
	{ name: 'Cloud Architectures' },
	{ name: 'Software Development Methodologies' },
	{ name: 'Development Environment & Tools' },
]
export default class extends Component {
	render() {
		return (
			<div id='about'>
				Hello!
				<p>I am a software geek. I have a number of interested areas:</p>
				<ol>
					{
						interestedAreas.map ((area, index) => {
							return <li key={index}>{area.name}</li>
						})
					}
				</ol>
				<p>For contact methods, please visit <a href='http://pierresaux.github.io'>my homepage</a> </p>
			</div>
		)
	}
}
