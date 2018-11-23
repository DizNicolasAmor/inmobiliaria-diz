import React from 'react';
import MediaQuery from 'react-responsive';
import InlineSVG from 'svg-inline-react';
import {
	FooterWrapper
} from './footer-styles';

const data = {
	copyright: '© Coded by Nico Diz',
	social: [
		{
			title: 'GitHub',
			link: 'https://github.com/DizNicolasAmor',
			src: "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='67px' id='Layer_1' style='enable-background:new 0 0 67 67;' version='1.1' viewBox='0 0 67 67' width='67px' xml:space='preserve'><path d='M20.543,34.568c-0.054,0,0.592,1.367,0.61,1.367  c1.41,2.516,4.128,4.08,8.713,4.514c-0.654,0.488-1.44,1.414-1.549,2.484c-0.823,0.523-2.478,0.696-3.764,0.297  c-1.803-0.559-2.493-4.066-5.192-3.566c-0.584,0.107-0.468,0.486,0.037,0.809c0.823,0.523,1.597,1.178,2.194,2.571  c0.459,1.07,1.423,2.981,4.473,2.981c1.21,0,2.058-0.143,2.058-0.143s0.023,2.731,0.023,3.793c0,1.225-1.682,1.57-1.682,2.159  c0,0.233,0.557,0.255,1.004,0.255c0.884,0,2.723-0.725,2.723-1.998c0-1.011,0.017-4.41,0.017-5.006c0-1.3,0.709-1.712,0.709-1.712  s0.088,6.94-0.169,7.872c-0.302,1.094-0.847,0.939-0.847,1.427c0,0.726,2.214,0.179,2.948-1.416c0.567-1.239,0.319-8.05,0.319-8.05  l0.605-0.012c0,0,0.034,3.117,0.013,4.542c-0.021,1.476-0.123,3.342,0.769,4.222c0.586,0.579,2.484,1.594,2.484,0.666  c0-0.539-1.04-0.982-1.04-2.441v-6.715c0.831,0,0.706,2.208,0.706,2.208l0.061,4.103c0,0-0.184,1.494,1.645,2.119  c0.645,0.223,2.025,0.283,2.09-0.09c0.065-0.373-1.662-0.928-1.678-2.084c-0.01-0.707,0.032-1.119,0.032-4.187  c0-3.068-0.419-4.202-1.88-5.106c4.508-0.455,7.299-1.551,8.658-4.486c0.106,0.003,0.555-1.371,0.496-1.371  c0.305-1.108,0.47-2.419,0.502-3.971c-0.008-4.21-2.058-5.699-2.451-6.398c0.58-3.187-0.098-4.637-0.412-5.135  c-1.162-0.406-4.041,1.045-5.615,2.067c-2.564-0.737-7.986-0.666-10.019,0.19c-3.751-2.639-5.736-2.235-5.736-2.235  s-1.283,2.259-0.339,5.565c-1.234,1.546-2.154,2.64-2.154,5.539C19.906,31.83,20.102,33.292,20.543,34.568z M33,64  C16.432,64,3,50.568,3,34C3,17.431,16.432,4,33,4s30,13.431,30,30C63,50.568,49.568,64,33,64z' style='fill-rule:evenodd;clip-rule:evenodd;fill:#010101;'/></svg>"
		},
		{
			title: 'LinkedIn',
			link: 'https://www.linkedin.com/in/nicol%C3%A1s-diz-0b51ba142/',
			src: "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='67px' id='Layer_1' style='enable-background:new 0 0 67 67;' version='1.1' viewBox='0 0 67 67' width='67px' xml:space='preserve'><path d='M50.837,48.137V36.425c0-6.275-3.35-9.195-7.816-9.195  c-3.604,0-5.219,1.983-6.119,3.374V27.71h-6.79c0.09,1.917,0,20.427,0,20.427h6.79V36.729c0-0.609,0.044-1.219,0.224-1.655  c0.49-1.22,1.607-2.483,3.482-2.483c2.458,0,3.44,1.873,3.44,4.618v10.929H50.837z M22.959,24.922c2.367,0,3.842-1.57,3.842-3.531  c-0.044-2.003-1.475-3.528-3.797-3.528s-3.841,1.524-3.841,3.528c0,1.961,1.474,3.531,3.753,3.531H22.959z M34,64  C17.432,64,4,50.568,4,34C4,17.431,17.432,4,34,4s30,13.431,30,30C64,50.568,50.568,64,34,64z M26.354,48.137V27.71h-6.789v20.427  H26.354z' style='fill-rule:evenodd;clip-rule:evenodd;fill:#010101;'/></svg>"
		}
	],
	trivial: 'This is a trivial text',
	email: 'user@email.com'
};

const Footer = () => (
	<div>
		<MediaQuery query="(max-width: 750px)">
			<FooterWrapper isMobile>
				<div className="footer__text">
					<div>{data.copyright}</div>
					{
					data.social.map(eachSocial => (
						<a
							key={eachSocial.title}
							href={eachSocial.link}
							title={eachSocial.title}
							target="_blank"
							rel="noreferrer noopener"
						>
							<InlineSVG src={eachSocial.src} className="footer__icon" />
						</a>
					))}
				</div>
			</FooterWrapper>
		</MediaQuery>

		<MediaQuery query="(min-width: 750px)">
			<FooterWrapper>
				<div className="footer__text">{data.trivial}</div>
				<div className="footer__text">
					<div>{data.copyright}</div>
					{
					data.social.map(eachSocial => (
						<a
							key={eachSocial.title}
							href={eachSocial.link}
							title={eachSocial.title}
							target="_blank"
							rel="noreferrer noopener"
						>
							<InlineSVG src={eachSocial.src} className="footer__icon" />
						</a>
					))}
				</div>
				<div className="footer__text">{data.email}</div>
			</FooterWrapper>
		</MediaQuery>

	</div>
);

export default Footer;
