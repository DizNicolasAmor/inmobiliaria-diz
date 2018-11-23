import React from 'react';
import {
	GoogleMap,
	Marker,
	withGoogleMap,
	withScriptjs
} from 'react-google-maps';
import PropTypes from 'prop-types';

const {
	MarkerClusterer
} = require('react-google-maps/lib/components/addons/MarkerClusterer');


const Location = ({
	latitude,
	longitude
}) => {
	const coord = {
		lat: parseFloat(latitude),
		lng: parseFloat(longitude)
	};
	return (
		<div>
			<GoogleMap
				defaultZoom={13}
				defaultCenter={{ ...coord }}
			>
				<MarkerClusterer
					onClick={() => null}
					averageCenter
					enableRetinaIcons
					gridSize={60}
				>
					<Marker
						key={latitude}
						position={{ ...coord }}
					/>
				</MarkerClusterer>
			</GoogleMap>
		</div>
	);
};

Location.propTypes = {
	latitude: PropTypes.number,
	longitude: PropTypes.number
};

Location.defaultProps = {
	latitude: undefined,
	longitude: undefined
};

export default withScriptjs(withGoogleMap(Location));
