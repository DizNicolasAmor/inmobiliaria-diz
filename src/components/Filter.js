import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

class Filter extends Component {
  render(){
    return (
      <div id="filter">
        <h4>Ordenar por:</h4>
        <h4>
          <Button bsStyle={this.props.criteria === 'relevancia' ? 
                              "success" : "default"} 
                  className="btn-sort"
                  onClick={this.props.sortRelevancia}
                    >Relevancia</Button>
          <Button bsStyle={this.props.criteria === 'menor-precio' ? 
                              "success" : "default"} 
                  className="btn-sort"
                  onClick={this.props.sortMenorPrecio}
                    >Menor precio</Button>
          <Button bsStyle={this.props.criteria === 'mayor-precio' ? 
                              "success" : "default"}
                  className="btn-sort"
                  onClick={this.props.sortMayorPrecio}
                  >Mayor precio</Button>
        </h4>

        <h4 id="filtrar-por">Filtrar por:</h4>

        <br /> <h5 className="filter-text">Palabra clave:</h5>
        <br /> <input type="string" 
                className="form-control" 
                id="palabra-clave"
                onChange={ this.props.filterAll } />

        <br /> <h5 className="filter-text">Precio (en USD): </h5>

        <div className="row">
          <div className="col-md-6">
            <br /> <input type="number" 
                    className="form-control" 
                    placeholder="Mínimo"
                    id="precio-base"
                    onChange={ this.props.filterAll }/>
          <br /> 
          </div>
          <div className="col-md-6">
            <br /> <input type="number" 
                    className="form-control"
                    placeholder="Máximo"
                    id="precio-tope"
                    onChange={ this.props.filterAll } />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <br /> <h5 className="filter-text">Ambientes: </h5>
            <br /> <select id="ambientes" 
                            name="horario" 
                            className="form-control"
                            onChange={ this.props.filterAll } >
                      <option value=""></option>
                      <option value="1">1.</option>
                      <option value="2">2.</option>
                      <option value="3">3.</option>
                      <option value="4">4 o más.</option>
                   </select>
          </div>
          <div className="col-md-6">
            <br /> <h5 className="filter-text">Dormitorios: </h5>
            <br /> <select id="dormitorios" 
                            name="horario" 
                            className="form-control"
                            onChange={ this.props.filterAll } >
                      <option value=""></option>
                      <option value="1">1.</option>
                      <option value="2">2.</option>
                      <option value="3">3.</option>
                      <option value="4">4 o más.</option>
                   </select>
          </div>
        </div>

        <br /> <h5 className="filter-text">Sup. cubierta (en m²): </h5>
        <br /> <select id="superficie-cubierta" 
                        name="horario" 
                        className="form-control"
                        onChange={ this.props.filterAll } >
                  <option value=""></option>
                  <option value="A">Hasta 50.</option>
                  <option value="B">Entre 50 y 100.</option>
                  <option value="C">Más de 100.</option>
               </select>
        <br /> <h5 className="filter-text">Sup. total (en m²): </h5>
        <br /> <select id="superficie-total" 
                        name="horario" 
                        className="form-control"
                        onChange={ this.props.filterAll } >
                  <option value=""></option>
                  <option value="A">Hasta 100.</option>
                  <option value="B">Entre 100 y 400.</option>
                  <option value="C">Más de 400.</option>
               </select>
      </div>
      );
  }
}

export default Filter;