import React, { Component } from 'react';
import menu from './utils/menu.json';
import Menu from './components/Menu';

class MenuContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isMenuOpen: false,
			menuSectionActive: window.location.pathname,
			data: { ...menu }
		};
	}

	openMenu = () => {
		this.setState({ isMenuOpen: true });
	}

	closeMenu = () => {
		this.setState({ isMenuOpen: false });
	}

	activeMenuSection = (sectionId) => { // eslint-disable-line
		const { menuSectionActive } = this.state;
		/* eslint-disable no-unused-expressions */
		this.closeMenu();
		if(menuSectionActive !== sectionId) {
			this.setState({ menuSectionActive: sectionId }, () => {
				window.location.pathname = sectionId;
			});
		}
	}

	render() {
		const {
			data,
			isMenuOpen
		} = this.state;

		return (
			<div>
				<Menu
					data={data}
					isMenuOpen={isMenuOpen}
					openMenu={this.openMenu}
					closeMenu={this.closeMenu}
					activeMenuSection={this.activeMenuSection}
				/>
			</div>
		);
	}
}

export default MenuContainer;
