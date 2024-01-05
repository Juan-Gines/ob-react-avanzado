import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import LoginPage from './pages/auth/LoginPage';
import NotFoundPage from './pages/404/NotFoundPage';
import DashboardPage from './pages/dashboard/DashboardPage';

function AppRoutingFinal() {
	//  TODO: Change to value from sessionStorage
	let loggedIn = true;
	return (
		<Router>
			<Switch>
				{/* Redirectio to protect our routes */}
				<Route exact path="/">
					{loggedIn ? <Redirect from="/" to="/dashboard" /> : <Redirect from="/" to="/login" />}
				</Route>
				{/* Login Route */}
				<Route exact path="/login" component={LoginPage} />
				{/* Dashboard Route */}
				<Route exact path="/dashboard">
					{loggedIn ? <DashboardPage /> : <Redirect from="/" to="/login" />}
				</Route>
				<Route component={NotFoundPage} />
			</Switch>
		</Router>
	);
}

export default AppRoutingFinal;

