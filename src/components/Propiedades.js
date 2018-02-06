import React, {Component} from 'react';
import Filter from './Filter.js';
import Products from './Products.js';
import axios from 'axios';

//import {connect} from "react-redux";
//import { getData } from "../actions/propiedadesActions";


class Propiedades extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [], 
      productsBackup: [],
      productsBackupPorRelevancia: [],
      criteria: 'relevancia'
    };

    this.getData = this.getData.bind(this);
    this.sortRelevancia = this.sortRelevancia.bind(this);
    this.sortMenorPrecio = this.sortMenorPrecio.bind(this);
    this.sortMayorPrecio = this.sortMayorPrecio.bind(this);
    this.filterAll = this.filterAll.bind(this);
  }

  getData(){
    let self = this;

    axios.get('https://api.mercadolibre.com/sites/MLA/search?category=MLA401685&city=TUxBQ1ZJTGU4OGM3')
      .then(function (response) {
        console.log('PRODUCTS:');
        console.log(response.data.results);
        self.setState({
          products: response.data.results,
          productsBackup: response.data.results,
          productsBackupPorRelevancia: response.data.results,
          criteria: 'relevancia'
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //sort products
  sortRelevancia(){
    //NOTE: 
      //There is no prop in 'products' that allows me to sort by Relevancia.
      //The array comes with that order from the first axios call. 
      //So this is what I do: 
      //  I filter the original array with the current products (I use the property 'id'). 

    let productsBackupAux = JSON.parse(JSON.stringify(this.state.productsBackupPorRelevancia)),
        productsAux = JSON.parse(JSON.stringify(this.state.products));

    let currentProductsIds = [];

    productsAux.forEach( (product) => {
      currentProductsIds.push(product.id);
    });

    let porRelevancia = function(product){
      return currentProductsIds.indexOf(product.id) !== -1;
    };

    productsBackupAux = productsBackupAux.filter(porRelevancia);

    this.setState({
      products: productsBackupAux,
      productsBackup: JSON.parse(JSON.stringify(this.state.productsBackupPorRelevancia)),
      criteria: 'relevancia'
    });
  }

  sortMenorPrecio(){
    let menorPrecio = function(a,b) {
      if (a.price < b.price)  return -1;
      if (a.price > b.price)  return 1;
      return 0;
    }
    let productsBackupAux = JSON.parse(JSON.stringify(this.state.productsBackup)),
        productsAux = JSON.parse(JSON.stringify(this.state.products));

    productsBackupAux.sort(menorPrecio);
    productsAux.sort(menorPrecio);

    this.setState({
      products: productsAux,
      productsBackup: productsBackupAux,
      criteria: 'menor-precio'
    });
  }

  sortMayorPrecio(){
    let mayorPrecio = function(a,b) {
      if (a.price > b.price)  return -1;
      if (a.price < b.price)  return 1;
      return 0;
    }
    let productsBackupAux = JSON.parse(JSON.stringify(this.state.productsBackup)),
        productsAux = JSON.parse(JSON.stringify(this.state.products));

    productsBackupAux.sort(mayorPrecio);
    productsAux.sort(mayorPrecio);

    this.setState({
      products: productsAux,
      productsBackup: productsBackupAux,
      criteria: 'mayor-precio'
    });
  }

  //filter
  filterAll(){
    let palabraClave = document.getElementById('palabra-clave').value,
        precioBase = document.getElementById('precio-base').value,
        precioTope = document.getElementById('precio-tope').value, 
        ambientes = document.getElementById('ambientes').value,
        dormitorios = document.getElementById('dormitorios').value,
        superficieCubierta = document.getElementById('superficie-cubierta').value,
        superficieTotal = document.getElementById('superficie-total').value,

        updatedProducts = JSON.parse(JSON.stringify(this.state.productsBackup));

    //filter functions
    let porPalabraClave = (product) => {
          return product.title.toLowerCase()
                  .search( palabraClave.toLowerCase() ) !== -1;
        },
        porPrecioBase = (product) => {
          return product.price > parseFloat(precioBase);   //remember that precioBase is a string
        }, 
        porPrecioTope = (product) => {
          return product.price < parseFloat(precioTope);   //remember that precioTope is a string
        }, 
        porAmbientes = (product) => {
          let cantidadDeAmbientes = product.attributes[3].value_name;

          if ( product.attributes[3].id === 'ROOMS' ){
            if( parseFloat( cantidadDeAmbientes ) >= 4 ){
              cantidadDeAmbientes = '4';  //in case of more than 4 rooms. 
            }
            return cantidadDeAmbientes === ambientes;
          }
        },
        porDormitorios = (product) => {
          let cantidadDeDormitorios = product.attributes[0].value_name;

          if ( product.attributes[0].id === 'BEDROOMS' ){
            if( parseFloat( cantidadDeDormitorios ) >= 4 ){
              cantidadDeDormitorios = '4';  //in case of more than 4 rooms. 
            }
            return cantidadDeDormitorios === dormitorios;
          }
        },
        porSupCubierta = (product) => {
          if ( product.attributes[1].id === "COVERED_AREA" ){
            let supCubiertaActual = parseFloat(product.attributes[1].value_name.split(' ')[0]);

            switch(superficieCubierta){
              case "A":
                return supCubiertaActual <= 50;
              case "B":
                return supCubiertaActual > 50 && supCubiertaActual <= 100;
              case "C":
                return supCubiertaActual > 100;
              default:
                return false;
            }
          }
        },
        porSupTotal = (product) => {
          if ( product.attributes[3].id === "TOTAL_AREA" ){
            let supTotalActual = parseFloat(product.attributes[3].value_name.split(' ')[0]);
            switch(superficieTotal){
              case "A":
                return supTotalActual <= 100;
              case "B":
                return supTotalActual > 100 && supTotalActual <= 400;
              case "C":
                return supTotalActual > 400;
              default:
                return false;
            }
          }
          else if ( product.attributes[4].id === "TOTAL_AREA" ){
            let supTotalActual = parseFloat(product.attributes[4].value_name.split(' ')[0]);
            switch(superficieTotal){
              case "A":
                return supTotalActual <= 100;
              case "B":
                return supTotalActual > 100 && supTotalActual <= 400;
              case "C":
                return supTotalActual > 400;
              default:
                return false;
            }
          }
        };

    //check and update all filters
    if(palabraClave !== ''){
      //Maybe the user writes more than one word. 
      let cadaPalabraClave = palabraClave.split(' '), 
          palabraClaveBackup = palabraClave;

      //I want to filter each of the words regardless of the order. 
      cadaPalabraClave.forEach( (cadaPalabra) => {
        palabraClave = cadaPalabra;
        updatedProducts = updatedProducts.filter( porPalabraClave );
      });

      palabraClave = palabraClaveBackup;
    }

    if(precioBase !== ''){
        updatedProducts = updatedProducts.filter( porPrecioBase );
    }

    if(precioTope !== ''){
        updatedProducts = updatedProducts.filter( porPrecioTope );
    }

    if(ambientes !== ''){
        updatedProducts = updatedProducts.filter( porAmbientes );
    }

    if(dormitorios !== ''){
        updatedProducts = updatedProducts.filter( porDormitorios );
    }

    if(superficieCubierta !== ''){
        updatedProducts = updatedProducts.filter( porSupCubierta );
    }

    if(superficieTotal !== ''){
        updatedProducts = updatedProducts.filter( porSupTotal );
    }

    this.setState({
      products: updatedProducts
    });
  }


  //start
  componentDidMount(){
    this.getData();       //you can do   this.props.getData()   if you want to use redux
  }

  render() {
    return (
        <div id="propiedades">
            <h2>Propiedades</h2>
            <h2><hr /></h2>
            <div className="grid">
  		        <Filter criteria={this.state.criteria}
  	                  sortRelevancia={this.sortRelevancia}
  	                  sortMenorPrecio={this.sortMenorPrecio}
  	                  sortMayorPrecio={this.sortMayorPrecio}
  	                  filterAll={this.filterAll}
  	                  nuevoVsUsado={this.state.nuevoVsUsado}
  	                  clickNuevo={this.clickNuevo}
  	                  clickUsado={this.clickUsado}
  	                  />
  	          <Products products={this.state.products} />    
            </div>
        </div>
    );
  }
}

/*  redux 


//línea 268    {this.props.propiedades.propiedades.propiedades}  


const mapStateToProps = (state) => {
  return {
      propiedades: state.propiedades
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => {
          dispatch(getData());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Propiedades);
*/

export default Propiedades;