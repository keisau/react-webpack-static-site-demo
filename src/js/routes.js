import React from 'react'
import { IndexRoute, Route } from 'react-router'

import { About, App, Index } from './components'

export default (
	<Route path='/' component={App} >
		<IndexRoute component={Index} />
		<Route path='about' component={About} />
	</Route>
)
