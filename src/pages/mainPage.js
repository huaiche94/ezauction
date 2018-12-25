import React, { Component } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap';
import MainPageTable from "./MainPageTable";
class MainPage extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<React.Fragment>
			<div>
				<Navbar color="light" light expand="md">
					<NavbarBrand href="/">Market</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="/components/">My Items</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/bidding/">My Biddings</NavLink>
							</NavItem>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									Options
                </DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>
										Option 1
                  </DropdownItem>
									<DropdownItem>
										Option 2
                  </DropdownItem>
									<DropdownItem divider />
									<DropdownItem>
										Reset
                  </DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
				<h5>Trending keyword: <span style={{color:'grey'}}>put some of the most used keyword here, and let user search it by click on it</span></h5>
				<h4 className="alert-heading">Current Items:</h4>
			<MainPageTable />
			</React.Fragment>
		);
	}
}

export default MainPage