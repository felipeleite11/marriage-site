import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Couple from './pages/Couple'
import Place from './pages/Place'
import Gifts from './pages/Gifts'
import GodParents from './pages/GodParents'
import Demoiselles from './pages/Demoiselles'
import Parents from './pages/Parents'
import Presence from './pages/Presence'
import Scraps from './pages/Scraps'
import Login from './pages/Login'
import Report from './pages/Report'


export default function () {
	return (
		<Switch>
			<Route path="/" component={Home} exact />
			<Route path="/noivos" component={Couple} />
			<Route path="/local" component={Place} />
			<Route path="/presentes" component={Gifts} />
			<Route path="/padrinhos" component={GodParents} />
			<Route path="/demoiselles" component={Demoiselles} />
			<Route path="/pais" component={Parents} />
			<Route path="/presenca" component={Presence} />
			<Route path="/recados" component={Scraps} />
			<Route path="/login" component={Login} />
			<Route path="/informacoes" component={Report} />
		</Switch>
	)
}
