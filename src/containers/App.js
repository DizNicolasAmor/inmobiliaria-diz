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
              <Route exact path="/inmobiliaria-diz" component={Inicio} />
              <Route path="/inmobiliaria-diz/institucional" component={Institucional} />
              <Route path="/inmobiliaria-diz/propiedades" component={Propiedades} />
              <Route path="/inmobiliaria-diz/propiedad/:propiedadId" component={PropiedadId} />
              <Route path="/inmobiliaria-diz/preguntas-frecuentes" component={Preguntas} />
              <Route path="/inmobiliaria-diz/contacto" component={Contacto} />
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
