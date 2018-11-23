import React from 'react';
import InlineSVG from 'svg-inline-react';
import {
	ComponentWrapper,
	ComponentBody,
	Title,
	CustomHr
} from './styles';

const data = {
	title: 'Inmobiliaria Diz',
	body: {
		subtitle: 'Propiedades en Villa Gesell',
		logo: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 48 48" height="48px" version="1.1" viewBox="0 0 48 48" width="48px" xml:space="preserve"><g id="Expanded"><g><g><path d="M42,48H28V35h-8v13H6V27c0-0.552,0.447-1,1-1s1,0.448,1,1v19h10V33h12v13h10V28c0-0.552,0.447-1,1-1s1,0.448,1,1V48z"/></g><g><path d="M47,27c-0.249,0-0.497-0.092-0.691-0.277L24,5.384L1.691,26.723c-0.399,0.381-1.032,0.368-1.414-0.031     c-0.382-0.399-0.367-1.032,0.031-1.414L24,2.616l23.691,22.661c0.398,0.382,0.413,1.015,0.031,1.414     C47.526,26.896,47.264,27,47,27z"/></g><g><path d="M39,15c-0.553,0-1-0.448-1-1V8h-6c-0.553,0-1-0.448-1-1s0.447-1,1-1h8v8C40,14.552,39.553,15,39,15z"/></g></g></g></svg>',
		info: [
			'Este proyecto es un demo de una posible página de inmobiliaria. Lo desarrollé con ReactJS y varias de sus dependencias.',
			'Las imágenes y datos de las propiedades provienen de información pública de la API de MercadoLibre (ver www.mercadolibre.com.ar). No guardo ninguna relación comercial con la empresa ni los productos.',
			'Desarrolladores pueden usar el código y modificarlo libremente.'
		],
		code: {
			text: 'Ver código fuente:',
			link: 'https://github.com/DizNicolasAmor/inmobiliaria-diz',
			icon: "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='67px' id='Layer_1' style='enable-background:new 0 0 67 67;' version='1.1' viewBox='0 0 67 67' width='67px' xml:space='preserve'><path d='M20.543,34.568c-0.054,0,0.592,1.367,0.61,1.367  c1.41,2.516,4.128,4.08,8.713,4.514c-0.654,0.488-1.44,1.414-1.549,2.484c-0.823,0.523-2.478,0.696-3.764,0.297  c-1.803-0.559-2.493-4.066-5.192-3.566c-0.584,0.107-0.468,0.486,0.037,0.809c0.823,0.523,1.597,1.178,2.194,2.571  c0.459,1.07,1.423,2.981,4.473,2.981c1.21,0,2.058-0.143,2.058-0.143s0.023,2.731,0.023,3.793c0,1.225-1.682,1.57-1.682,2.159  c0,0.233,0.557,0.255,1.004,0.255c0.884,0,2.723-0.725,2.723-1.998c0-1.011,0.017-4.41,0.017-5.006c0-1.3,0.709-1.712,0.709-1.712  s0.088,6.94-0.169,7.872c-0.302,1.094-0.847,0.939-0.847,1.427c0,0.726,2.214,0.179,2.948-1.416c0.567-1.239,0.319-8.05,0.319-8.05  l0.605-0.012c0,0,0.034,3.117,0.013,4.542c-0.021,1.476-0.123,3.342,0.769,4.222c0.586,0.579,2.484,1.594,2.484,0.666  c0-0.539-1.04-0.982-1.04-2.441v-6.715c0.831,0,0.706,2.208,0.706,2.208l0.061,4.103c0,0-0.184,1.494,1.645,2.119  c0.645,0.223,2.025,0.283,2.09-0.09c0.065-0.373-1.662-0.928-1.678-2.084c-0.01-0.707,0.032-1.119,0.032-4.187  c0-3.068-0.419-4.202-1.88-5.106c4.508-0.455,7.299-1.551,8.658-4.486c0.106,0.003,0.555-1.371,0.496-1.371  c0.305-1.108,0.47-2.419,0.502-3.971c-0.008-4.21-2.058-5.699-2.451-6.398c0.58-3.187-0.098-4.637-0.412-5.135  c-1.162-0.406-4.041,1.045-5.615,2.067c-2.564-0.737-7.986-0.666-10.019,0.19c-3.751-2.639-5.736-2.235-5.736-2.235  s-1.283,2.259-0.339,5.565c-1.234,1.546-2.154,2.64-2.154,5.539C19.906,31.83,20.102,33.292,20.543,34.568z M33,64  C16.432,64,3,50.568,3,34C3,17.431,16.432,4,33,4s30,13.431,30,30C63,50.568,49.568,64,33,64z' style='fill-rule:evenodd;clip-rule:evenodd;fill:#010101;'/></svg>"
		}
	}
};

const Home = () => (
	<ComponentWrapper>
		<Title>{data.title}</Title>
		<CustomHr />
		<ComponentBody>
			<div className="center">
				<Title>{data.body.subtitle}</Title>
				<InlineSVG src={data.body.logo} className="logo" />
			</div>
			<div>
				{data.body.info.map((sentence, ix) => {
					const key = `info-${ix}`;
					return <p key={key}>{sentence}</p>;
				})}
				<p className="home__code">{data.body.code.text}
					<a href={data.body.code.link} target="_blank" rel="noopener noreferrer">
						<InlineSVG src={data.body.code.icon} className="home__code--icon" />
					</a>
				</p>
			</div>
		</ComponentBody>
	</ComponentWrapper>
);

export default Home;
