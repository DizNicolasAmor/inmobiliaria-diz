import axios from 'axios';

const listURL = 'https://api.mercadolibre.com/sites/MLA/search?category=MLA401685&city=TUxBQ1ZJTGU4OGM3';

export const getData = () => (
	new Promise((resolve, reject) => {
		axios.get(listURL)
			.then((response) => { resolve(response.data.results); })
			.catch((error) => { reject(error); });
	})
);

export const filter = (arr) => {
	let palabraClave = document.getElementById('palabra-clave').value;
	const precioBase = document.getElementById('precio-base').value;
	const precioTope = document.getElementById('precio-tope').value;
	const ambientes = document.getElementById('ambientes').value;
	const dormitorios = document.getElementById('dormitorios').value;
	const superficieCubierta = document.getElementById('superficie-cubierta').value;
	const superficieTotal = document.getElementById('superficie-total').value;

	const productsBackup = [...arr];
	let updatedProducts = [...productsBackup];

	// filter functions
	const porPalabraClave = product => product.title.toLowerCase()
		.includes(palabraClave.toLowerCase());
	const porPrecioBase = product => product.price > parseFloat(precioBase);
	const porPrecioTope = product => product.price < parseFloat(precioTope);

	const porAmbientes = (product) => {
		let cantidadDeAmbientes = product.attributes[3].value_name;

		if(product.attributes[3].id === 'ROOMS') {
			if(parseFloat(cantidadDeAmbientes) >= 4)
				cantidadDeAmbientes = '4';
			return cantidadDeAmbientes === ambientes;
		}
	};
	const porDormitorios = (product) => {
		let cantidadDeDormitorios = product.attributes[0].value_name;

		if(product.attributes[0].id === 'BEDROOMS') {
			if(parseFloat(cantidadDeDormitorios) >= 4)
				cantidadDeDormitorios = '4';
			return cantidadDeDormitorios === dormitorios;
		}
	};

	const porSupCubierta = (product) => {
		if(product.attributes[1].id === 'COVERED_AREA') {
			const supCubiertaActual = parseFloat(product.attributes[1].value_name.split(' ')[0]);

			switch(superficieCubierta) {
				case 'A':
					return supCubiertaActual <= 50;
				case 'B':
					return supCubiertaActual > 50 && supCubiertaActual <= 100;
				case 'C':
					return supCubiertaActual > 100;
				default:
					return false;
			}
		}
	};

	const porSupTotal = (product) => {
		if(product.attributes[3].id === 'TOTAL_AREA') {
			const supTotalActual = parseFloat(product.attributes[3].value_name.split(' ')[0]);
			switch(superficieTotal) {
				case 'A':
					return supTotalActual <= 100;
				case 'B':
					return supTotalActual > 100 && supTotalActual <= 400;
				case 'C':
					return supTotalActual > 400;
				default:
					return false;
			}
		} else if(product.attributes[4] && product.attributes[4].id === 'TOTAL_AREA') {
			const supTotalActual = parseFloat(product.attributes[4].value_name.split(' ')[0]);
			switch(superficieTotal) {
				case 'A':
					return supTotalActual <= 100;
				case 'B':
					return supTotalActual > 100 && supTotalActual <= 400;
				case 'C':
					return supTotalActual > 400;
				default:
					return false;
			}
		}
	};

	// check and update all filters
	if(palabraClave !== '') {
		// Maybe the user writes more than one word.
		const wordsArr = palabraClave.split(' ');
		const palabraClaveBackup = palabraClave;

		wordsArr.forEach((word) => { // filter all words regardless of the order.
			palabraClave = word;
			updatedProducts = updatedProducts.filter(porPalabraClave);
		});
		palabraClave = palabraClaveBackup;
	}

	if(precioBase !== '')
		updatedProducts = updatedProducts.filter(porPrecioBase);

	if(precioTope !== '')
		updatedProducts = updatedProducts.filter(porPrecioTope);

	if(ambientes !== '')
		updatedProducts = updatedProducts.filter(porAmbientes);

	if(dormitorios !== '')
		updatedProducts = updatedProducts.filter(porDormitorios);

	if(superficieCubierta !== '')
		updatedProducts = updatedProducts.filter(porSupCubierta);

	if(superficieTotal !== '')
		updatedProducts = updatedProducts.filter(porSupTotal);

	return updatedProducts;
};
