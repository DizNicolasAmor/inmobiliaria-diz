import React from "react";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs
} from "react-google-maps";


const {
  MarkerClusterer
} = require("react-google-maps/lib/components/addons/MarkerClusterer");


class Location extends React.Component {
  constructor(props) {
	    super(props);
	    this.state = {
			lat: -37.27,
			long: -56.97,
			id: -94.27
	    };
  }

  updateLatAndLng(){
	this.setState({
		lat: parseFloat(this.props.latitude),
		long: parseFloat(this.props.longitude),
		id: parseFloat(this.props.latitude) + parseFloat(this.props.longitude)
	});
  }

  componentDidMount(){
  	this.updateLatAndLng();
  }

  render() {
    return (
      <div>
	      <GoogleMap
	        defaultZoom={13}
	        defaultCenter={{ lat: this.state.lat, lng: this.state.long }}
	      >

	        <MarkerClusterer
	          onClick={() => null}
	          averageCenter
	          enableRetinaIcons
	          gridSize={60}
	        >
		        <Marker
		          key={this.state.id}
		          position={{ lat: parseFloat(this.props.latitude), lng: parseFloat(this.props.longitude) }}
		        />

	        </MarkerClusterer>
	      </GoogleMap>
      </div>
    );
  }
}

export default withScriptjs(withGoogleMap(Location));