import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import StatePage from './pages/home/StatePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/Tasks/TasksPage';
import TaskDetailPage from './pages/Tasks/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';

function AppRoutingOne() {
	let logged;

	let taskList = [
		{
			id: 1,
			name: 'Task 1',
			description: 'My first task',
		},
		{
			id: 2,
			name: 'Task 2',
			description: 'My second task',
		},
	];

	useEffect(() => {
		logged = localStorage.getItem('credentials');
		console.log('User Logged? ', logged);
	}, []);

	return (
		<Router>
			<div>
				<aside>
					<Link to="/">|| HOME |</Link>
					<Link to="/about">| ABOUT |</Link>
					<Link to="/faqs">| FAQS |</Link>
					<Link to="/task/1">| Task 1 |</Link>
					<Link to="/task/2">| Task 2 |</Link>
					<Link to="/una404">| Not Existing Route |</Link>
					<Link to="/login">| LOGIN ||</Link>
				</aside>
			</div>
			<main>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/online-state" component={StatePage} />
					<Route path="/login" component={LoginPage}>
						{logged ? (
							() => {
								alert('You are logged in. Redirect to home...');
								return <Redirect to="/" />;
							}
						) : (
							<LoginPage />
						)}
					</Route>
					<Route path="/(about|faqs)" component={AboutPage} />
					<Route path="/profile" component={ProfilePage}>
						{logged ? (
							<ProfilePage />
						) : (
							() => {
								alert('You must be logged in. Redirect to login ...');
								return <Redirect to="/login" />;
							}
						)}
					</Route>
					<Route path="/tasks" component={TasksPage} />
					<Route
						exact
						path="/task/:id"
						render={({ match }) => <TaskDetailPage task={taskList[match.params.id - 1]} />}
					></Route>
					<Route component={NotFoundPage} />
				</Switch>
			</main>
		</Router>
	);
}

export default AppRoutingOne;

