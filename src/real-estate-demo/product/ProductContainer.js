import React from 'react';
import axios from 'axios';
import Product from './components/Product';

const id = window.location.pathname.replace('/propiedad/', '');

class ProductContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			url: `https://api.mercadolibre.com/items/${id}`,
			data: {},
			pictures: [],
			location: {},
			attributes: [],
			isModalActive: false,
			modalURL: ''
		};
	}

	componentDidMount() {
		this.getData();
	}

	getData = () => {
		const self = this;
		const { url } = this.state;
		axios.get(url)
			.then((response) => {
				self.setState({
					data: response.data,
					pictures: response.data.pictures,
					location: response.data.location,
					attributes: response.data.attributes
				});
			})
			.catch((err) => {
				console.error(err);
			});
	}

	openModal = (currentPictureURL) => {
		this.setState({
			isModalActive: true,
			modalURL: currentPictureURL
		});
	}

	closeModal = () => {
		this.setState({ isModalActive: false });
	}

	render() {
		const {
			data,
			pictures,
			isModalActive,
			location,
			modalURL,
			attributes
		} = this.state;

		return (
			<Product
				data={data}
				pictures={pictures}
				isModalActive={isModalActive}
				location={location}
				modalURL={modalURL}
				attributes={attributes}
				openModal={this.openModal}
				closeModal={this.closeModal}
			/>
		);
	}
}

export default ProductContainer;
