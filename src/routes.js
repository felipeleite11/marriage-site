import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Engaged from './pages/Engaged'

export default function () {
	return (
		<Switch>
			<Route path="/" component={Home} exact />
			<Route path="/noivos" component={Engaged} />
		</Switch>
	)
}
