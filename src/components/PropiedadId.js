import React, {Component} from 'react';
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import Location from "./Location";


class PropiedadId extends Component{
  constructor(props) {
	    super(props);
	    this.state = {
	      id: this.props.match.params.propiedadId,
	      url: 'https://api.mercadolibre.com/items/' + this.props.match.params.propiedadId,
	      data: {},
	      pictures: [],
	      location: {}, 
	      attributes: [],
	      modalActivo: false,
	      modalURL: ''
	    };

	    this.getData = this.getData.bind(this);
	    this.abrirModal = this.abrirModal.bind(this);
	    this.cerrarModal = this.cerrarModal.bind(this);
  }

  getData(){
		let self = this;

		axios.get(this.state.url)
		  .then(function (response) {
		    console.log('PROPIEDAD ACTUAL:');
		    console.log(response.data);
		    self.setState({
		    	data: response.data,
		    	pictures: response.data.pictures,
		    	location: response.data.location,
		    	attributes: response.data.attributes
		    });
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
  }

  //modal
  abrirModal(currentPictureURL){
	    if(!this.state.modalActivo){
	      this.setState({
	      	modalActivo: true,
	      	modalURL: currentPictureURL
	      });
	    }
  }
  
  cerrarModal(){
	    if(this.state.modalActivo){
	      this.setState({
	        modalActivo: false,
	      });
	    }
  }

  //start
  componentDidMount(){
    this.getData();
  }

	render(){
	    return (
	        <div id="propiedad-id">
	            <h2>{this.state.data.title}</h2>
	            <h2><hr /></h2>
	            <h2>{this.state.data.currency_id} {this.state.data.price}</h2>

	            <h2 className="pictures-container">
		            {this.state.pictures.map( (eachPicture) => {
		            	return <div className="each-picture-container"
		            				key={eachPicture.secure_url}>
					            	<img	src={eachPicture.secure_url} 
					            			alt={eachPicture.secure_url} 
					            			className="each-picture" 
					            			onClick={this.abrirModal.bind(this, eachPicture.secure_url) } />
			            			</div>
		            })}
	            </h2>

		        <Modal 	show={this.state.modalActivo} 
		        		onHide={this.cerrarModal} >
		          	<h4 className="modal-picture"
		          		onClick={this.cerrarModal} >
			          	<img src={this.state.modalURL} alt={this.state.modalURL} />
		          	</h4>
		        </Modal>

	            <h3>Características: </h3>
	            <div className="attributes-container">
		            <ul>
		            	{this.state.attributes.filter( (eachAttr) => {
					  		return eachAttr.value_name !== 'No'
					  	}).map( (eachAttribute) => {
					  		return <li key={eachAttribute.id}>
					  					{eachAttribute.name}: &nbsp; {eachAttribute.value_name}
					  				</li> 
					  	})}
					 </ul>
				</div>

	            <h3>Dirección: </h3>
	            <h4>{this.state.location.address_line}</h4>
	            
	            <h3 className="margin-top">Mapa: </h3>

	            <br />	{ this.state.location.latitude === '' ? 
							<h4>No se proporcionan datos.</h4>
	            			: 
						    <Location
						      isMarkerShown
						      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCUss9LOymUOjfOZwHmZYWmaUUUExHVe4c&v=3.exp&libraries=geometry,drawing,places"
						      loadingElement={<div style={{ height: `100%` }} />}
						      containerElement={<div style={{ height: `400px` }} />}
						      mapElement={<div style={{ height: `100%` }} />}
						      latitude={this.state.location.latitude}
						      longitude={this.state.location.longitude}
						    />
						}

				<p className="center margin-top">Más información en
					<a 	href={this.state.data.permalink} 
						title="MercadoLibre"
						rel="noopener noreferrer" 
						target="_blank"> MercadoLibre</a>.
				</p>

	        </div>
	    );
	}
}

export default PropiedadId;