import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import { ProductsWrapper } from '../styles/list';

const Products = ({ products }) => (
	<ProductsWrapper id="products">
		{
		products.map(product => (
			<Product
				key={product.id}
				image={product.thumbnail}
				title={product.title}
				price={product.price}
				currencyId={product.currency_id}
				id={product.id}
			/>
		))
		}
	</ProductsWrapper>
);

Products.propTypes = {
	products: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Products;
