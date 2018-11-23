import React from 'react';
import MediaQuery from 'react-responsive';
import InlineSVG from 'svg-inline-react';
import PropTypes from 'prop-types';
import {
	GlobalStyle,
	MenuWrapper,
	Backdrop,
	MenuMobile
} from '../styles/menu';

const iconMenuOpen = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="32px" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>';
const iconMenuClose = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="512px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve"><path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"/></svg>';

const Menu = ({
	data,
	isMenuOpen,
	openMenu,
	closeMenu,
	activeMenuSection
}) => (
	<div id="header">
		<GlobalStyle />
		<MediaQuery query="(max-width: 750px)">
			<MenuWrapper isMobile>
				<InlineSVG
					src={isMenuOpen ? iconMenuClose : iconMenuOpen}
					/* eslint-disable no-unused-expressions */
					onClick={() => { isMenuOpen ? closeMenu() : openMenu(); }}
					className={`icon-menu ${isMenuOpen ? 'open' : 'close'}`}
				/>
				<Backdrop className={isMenuOpen ? 'active' : 'inactive'} />
				<MenuMobile className={isMenuOpen ? 'active' : 'inactive'}>
					{ data.sections.map(section => (
						<button
							type="button"
							key={section.sectionId}
							className="button-mobile"
							onClick={() => { activeMenuSection(section.link); }}
						>
							{section.name}
						</button>
					))}
				</MenuMobile>
			</MenuWrapper>
		</MediaQuery>

		<MediaQuery query="(min-width: 750px)">
			<MenuWrapper>
				<div className="brand">{data.brand}</div>
				<div>
					{ data.sections.map(section => (
						<button
							type="button"
							key={section.sectionId}
							onClick={() => { activeMenuSection(section.link); }}
						>
							{section.name}
						</button>
					))}
				</div>
			</MenuWrapper>
		</MediaQuery>
	</div>
);

Menu.propTypes = {
	data: PropTypes.shape({
		brand: PropTypes.string.isRequired,
		sections: PropTypes.arrayOf(PropTypes.object)
	}).isRequired,
	isMenuOpen: PropTypes.bool.isRequired,
	openMenu: PropTypes.func.isRequired,
	closeMenu: PropTypes.func.isRequired,
	activeMenuSection: PropTypes.func.isRequired
};

export default Menu;
