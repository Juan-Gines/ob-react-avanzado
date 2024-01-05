import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import LoginUseState from './components/LoginUseState';
import LoginUseReducer from './components/LoginUseReducer';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				{/* <h1>useReducer Examples - Alternative to Redux</h1> */}
				{/* <Counter></Counter> */}
				<h1>useReducer VS useState</h1>
				{/* <LoginUseState></LoginUseState> */}
				<LoginUseReducer></LoginUseReducer>
			</header>
		</div>
	);
}

export default App;

