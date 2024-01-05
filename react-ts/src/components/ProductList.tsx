import React, { useState, useEffect } from 'react';
import { getProducts } from '../controllers/productController';
import Product from './Product';

interface Product {
	id: number;
	category: string;
	description: string;
	image: string;
	price: number;
	rating: object;
	title: string;
}

const ProductList = (): JSX.Element => {
	const [productList, setProductList] = useState<Product[]>([]);

	useEffect(() => {
		getProducts()
			.then((r) => setProductList(r.data))
			.catch((e) => console.error(e));
	}, []);

	return (
		<>{productList.length === 0 
      ? 'No hay productos' 
      : 
      (
        <div className='grid grid-cols-3 gap-2 mt-4'>
          {productList.map((item:Product) =>
            (
              <Product
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                price={item.price}
                />
            ))}          
        </div>
      )
      }</>
	);
};

export default ProductList;
