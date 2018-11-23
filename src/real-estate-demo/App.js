import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Menu from './menu/MenuContainer';
import Footer from './footer/Footer';
import Home from './components/Home';
import List from './list/ListContainer';
import Product from './product/ProductContainer';
import Institutional from './components/Institutional';
import Faq from './faq/FaqContainer';
import Contact from './components/Contact';

const App = () => (
	<Router>
		<div>
			<Menu />
			<div>
				<Route exact path="/" component={Home} />
				<Route path="/institucional" component={Institutional} />
				<Route path="/propiedades" component={List} />
				<Route path="/propiedad/:propiedadId" component={Product} />
				<Route path="/preguntas-frecuentes" component={Faq} />
				<Route path="/contacto" component={Contact} />
			</div>
			<Footer />
		</div>
	</Router>
);

export default App;
