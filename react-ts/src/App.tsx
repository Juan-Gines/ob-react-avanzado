import React from 'react';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Title from './components/Title';

function App(): JSX.Element {
  return (
		<div className='App'>
			<Header name='TypeShopping' />
			<div className='p-4'>
				<Title title='Te doy la bienvenida a tu primera tienda online creada con TypeScript y React ⚛' />
        <ProductList />
			</div>
		</div>
	);
}

export default App;
