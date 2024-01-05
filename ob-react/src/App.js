// import logo from './logo.svg';
import './App.css';
import Todo from './testcomponents/Todo';
// import Greeting from './components/pure/greeting';
// import Greetingf from './components/pure/greetingF';
// import TaskListComponent from './components/container/task_list';
// import Ejemplo1 from './hooks/Ejemplo1';
// import Ejemplo2 from './hooks/Ejemplo2';
// import MiComponenteConContexto from './hooks/Ejemplo3';
// import Ejemplo4 from './hooks/Ejemplo4';
// import GreetingStyled from './components/pure/greetingStyled';
// import Father from './components/container/father';
// import OptionalRender from './components/pure/optionalRender';
// import LoginFormik from './components/pure/forms/loginFormik';
// import RegisterFormik from './components/pure/forms/registerFormik';
// import AsyncExample from './components/pure/AsyncExample';
// import ObservableExample from './components/pure/ObservableExample';
// import FetchExample from './components/pure/FetchExample';
// import AxiosExample from './components/pure/AxiosExample';
// import AxiosCRUDExample from './components/pure/AxiosCRUDExample';
// import UpdateServiceWorker from './components/pure/UpdateServiceWorker';
// import NotificationManager from './components/container/NotificationManager';

function App() {
	return (
		<div className='App'>
			{/* <header className="App-header"> */}
			{/* <img src={logo} className="App-logo" alt="logo" /> */}
			{/* Componente propio Greeting.jsx */}
			{/* <Greeting name={"Martín"}></Greeting> */}
			{/* Componente de ejemplo funcional */}
			{/* <Greetingf name="Martín"></Greetingf> */}
			{/* Componente de Listado de Tareas */}
			{/* <TaskListComponent></TaskListComponent> */}
			{/* Ejemplos de uso de HOOKS */}
			{/* <Ejemplo1></Ejemplo1> */}
			{/* <Ejemplo2></Ejemplo2> */}
			{/* <MiComponenteConContexto></MiComponenteConContexto> */}
			{/* <Ejemplo4 nombre="Juan Ginés"> */}
			{/* lo que hay aquí, es tratado como props.children */}
			{/* <h3>Contenido del props.children</h3>
				</Ejemplo4> */}
			{/* <GreetingStyled name="Juan Ginés"></GreetingStyled> */}
			{/* </header> */}
			{/* Gestión de eventos */}
			{/* <Father></Father> */}
			{/* Ejemplos de Renderizado condicional */}
			{/* <OptionalRender></OptionalRender> */}
			{/* Ejemplos de uso de Formik y Yup*/}
			{/* <LoginFormik></LoginFormik> */}
			{/* <RegisterFormik></RegisterFormik> */}
			{/* Ejemplos de funciones asincronas */}
			{/* <AsyncExample></AsyncExample> */}
			{/* <ObservableExample></ObservableExample> */}
			{/* <FetchExample></FetchExample> */}
			{/* <AxiosExample></AxiosExample> */}
			{/* <AxiosCRUDExample></AxiosCRUDExample> */}
			{/* Ejemplo de PWA y notificaciones */}
			{/* <UpdateServiceWorker /> */}
			{/* <NotificationManager /> */}
			<h1>Bienvenid@</h1>
			<Todo todo={{ id: 1, text: 'Hacer la cama', completed: true }} />
			{/* PROYECTO FINAL */}
			{/* <TaskListComponent></TaskListComponent> */}
		</div>
	);
}

export default App;
