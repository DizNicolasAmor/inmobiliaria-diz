import React from 'react';
import PropTypes from 'prop-types';
import { ProductWrapper } from '../styles/list';

const Product = ({
	id,
	image,
	currencyId,
	price,
	title
}) => (
	<ProductWrapper href={`/propiedad/${id}`}>
		<div className="product__image">
			<img src={image} alt={id} />
		</div>
		<div className="product__hr" />
		<div className="product__price">{currencyId} {price}</div>
		<div className="product__title">{title}</div>
	</ProductWrapper>
);

Product.propTypes = {
	id: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	currencyId: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired
};

export default Product;
