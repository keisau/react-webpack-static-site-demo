if (typeof document !== 'undefined') {
	require('file?name=[name].[ext]!../index.html')
}
require('babel-polyfill')

import React from 'react'
import { render } from 'react-dom'
import { renderToString } from 'react-dom/server'
import { Router, RouterContext, match, browserHistory } from 'react-router'

import history from './history'
import routes from './routes'

if (typeof document !== 'undefined') {
	render(
		<Router history={browserHistory} >
			{routes}
		</Router>
	, document.getElementById('mainSection'))
}

export default (locals, cb) => {
	const location = history.createLocation(locals.path)
	const template = require('ejs!../index.html')

	match({ routes, location }, (err, redirectLocation, renderProps) => {
		cb(err, template({
			text: renderToString(<RouterContext {...renderProps} />)
		}))
	})
}
