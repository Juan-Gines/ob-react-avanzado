import logo from './logo.svg';
import './App.css';
import TaskList from './components/lists/TaskList';
import Counter from './components/counter/Counter';

function App() {
  return (
    <div>
      <TaskList />
      <Counter />
    </div>
  );
}

export default App;
