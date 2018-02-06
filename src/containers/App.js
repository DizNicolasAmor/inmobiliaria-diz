import React, { Component } from 'react';
import {connect} from "react-redux";

import { seleccionarPregunta } from "../actions/preguntasActions";

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';

import Inicio from '../components/Inicio.js';
import Institucional from '../components/Institucional.js';
import Propiedades from '../components/Propiedades.js';
import PropiedadId from '../components/PropiedadId.js';
import Preguntas from '../components/Preguntas.js';
import Contacto from '../components/Contacto.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div id="content-wraper">
            <Nav />
            <div>
              <Route exact path="/" component={Inicio} />
              <Route path="/institucional" component={Institucional} />
              <Route path="/propiedades" component={Propiedades} />
              <Route path="/propiedad/:propiedadId" component={PropiedadId} />
              <Route path="/preguntas-frecuentes" component={Preguntas} />
              <Route path="/contacto" component={Contacto} />
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      propiedades: state.propiedades,
      preguntas: state.preguntas
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        seleccionarPregunta: (str) => {
          dispatch(seleccionarPregunta(str));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
