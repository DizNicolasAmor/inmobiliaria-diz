import React from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import {
	ComponentWrapper,
	Title,
	CustomHr,
	Modal,
	Backdrop
} from '../styles/product';

const Product = ({
	data,
	pictures,
	isModalActive,
	location,
	modalURL,
	attributes,
	openModal,
	closeModal
}) => (
	<ComponentWrapper id="propiedad-id">
		<Title>{data.title}</Title>
		<CustomHr />
		<Title>{data.currency_id} {data.price}</Title>

		<div className="pictures__wrapper">
			{pictures.map(picture => (
				<button
					key={picture.secure_url}
					type="button"
					onClick={() => { openModal(picture.secure_url); }}
				>
					<img src={picture.secure_url} alt={picture.secure_url} />
				</button>
			))}
		</div>

		{isModalActive && (
		<Modal>
			<Backdrop />
			<button
				type="button"
				className="modal__picture"
				onClick={() => { closeModal(); }}
			>
				<img src={modalURL} alt={modalURL} />
			</button>
		</Modal>
		)
		}

		<div className="subtitle">Características: </div>
		<div className="attributes-container">
			<ul>
				{attributes.filter(att => att.value_name !== 'No')
					.map(eachAttribute => (
						<li key={eachAttribute.id}>
							{eachAttribute.name}: &nbsp; {eachAttribute.value_name}
						</li>
					))
				}
			</ul>
		</div>

		<div className="subtitle">Dirección: </div>
		<p>{location.address_line}</p>

		<div className="subtitle">Mapa: </div>
		{
		location.latitude === ''
			? <p>No se proporcionan datos.</p>
			: (
				<Location
					isMarkerShown
					googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCUss9LOymUOjfOZwHmZYWmaUUUExHVe4c&v=3.exp&libraries=geometry,drawing,places"
					loadingElement={<div style={{ height: '100%' }} />}
					containerElement={<div style={{ height: '400px' }} />}
					mapElement={<div style={{ height: '100%' }} />}
					latitude={location.latitude}
					longitude={location.longitude}
				/>
			)
		}

		<p className="center">Más información en
			<a
				href={data.permalink}
				title="MercadoLibre"
				rel="noopener noreferrer"
				target="_blank"
			>
				MercadoLibre
			</a>.
		</p>
	</ComponentWrapper>
);

Product.propTypes = {
	data: PropTypes.objectOf(PropTypes.any).isRequired,
	pictures: PropTypes.arrayOf(PropTypes.object).isRequired,
	isModalActive: PropTypes.bool.isRequired,
	location: PropTypes.objectOf(PropTypes.any).isRequired,
	modalURL: PropTypes.string.isRequired,
	attributes: PropTypes.arrayOf(PropTypes.any).isRequired,
	openModal: PropTypes.func.isRequired,
	closeModal: PropTypes.func.isRequired
};

export default Product;
