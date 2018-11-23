import React from 'react';
import Filter from './components/Filter';
import Products from './components/Products';
import {
	getData,
	filter
} from './utils/listHelpers';
import {
	ListWrapper,
	Title,
	CustomHr,
} from './styles/list';


class ListContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			productsBackup: [],
			productsBackupPorRelevancia: [],
			criteria: 'relevancia'
		};
	}

	componentDidMount = () => {
		this.setProducts();
	}

	setProducts = () => {
		getData().then((response) => {
			this.setState({
				products: response,
				productsBackup: response,
				productsBackupPorRelevancia: response,
				criteria: 'relevancia'
			});
		}).catch((err) => {
			console.error(err);
		});
	}

	sort = (type) => {
		const {
			productsBackup,
			productsBackupPorRelevancia,
			products
		} = this.state;
		let productsBackupAux = [];
		const productsAux = [...products];
		const currentProductsIds = productsAux.map(p => p.id);

		const porRelevancia = product => currentProductsIds.indexOf(product.id) !== -1;
		const porMenorPrecio = (a, b) => {
			if(a.price < b.price)
				return -1;
			if(a.price > b.price)
				return 1;
			return 0;
		};
		const porMayorPrecio = (a, b) => {
			if(a.price > b.price)
				return -1;
			if(a.price < b.price)
				return 1;
			return 0;
		};

		switch(type) {
			case 'relevancia':
				productsBackupAux = [...productsBackupPorRelevancia];
				productsBackupAux = productsBackupAux.filter(porRelevancia);
				this.setState({
					products: [...productsBackupAux],
					productsBackup: [...productsBackupPorRelevancia],
					criteria: 'relevancia'
				});
				break;
			case 'menor-precio':
				productsBackupAux = [...productsBackup];
				productsBackupAux.sort(porMenorPrecio);
				productsAux.sort(porMenorPrecio);

				this.setState({
					products: [...productsAux],
					productsBackup: [...productsBackupAux],
					criteria: 'menor-precio'
				});
				break;
			case 'mayor-precio':
				productsBackupAux = [...productsBackup];
				productsBackupAux.sort(porMayorPrecio);
				productsAux.sort(porMayorPrecio);

				this.setState({
					products: productsAux,
					productsBackup: productsBackupAux,
					criteria: 'mayor-precio'
				});
				break;
			default:
				break;
		}
	}

	filterAll = () => {
		const { productsBackup } = this.state;
		this.setState({ products: filter(productsBackup) });
	}

	render() {
		const {
			criteria,
			nuevoVsUsado,
			products
		} = this.state;

		return (
			<ListWrapper>
				<Title>Propiedades</Title>
				<CustomHr />
				<div className="grid">
					<Filter
						criteria={criteria}
						sort={this.sort}
						filterAll={this.filterAll}
						nuevoVsUsado={nuevoVsUsado}
						clickNuevo={this.clickNuevo}
						clickUsado={this.clickUsado}
					/>
					<Products products={products} />
				</div>
			</ListWrapper>
		);
	}
}

export default ListContainer;
