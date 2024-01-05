import React from 'react';

interface ProductProps {
	title: string;
	description: string;
	image: string;
	price: number;
}

const Product = ({ title, description, image, price}: ProductProps) => {
	return (
		<div className='flex flex-col justify-between gap-2 p-4 border rounded-xl shadow-md'>
			<img className='w-52'
				src={image}
				alt={description}
			/>
			<h2 className='font-semibold text-lg text-slate-700'>{title}</h2>
			<p className='text-right justify-self-end'>{price} €</p>
		</div>
	);
};

export default Product;
