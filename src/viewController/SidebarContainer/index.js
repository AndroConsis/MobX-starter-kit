import React, { Component } from "react";
import Sidebar from "../../view/screens/Sidebar";

export default class SidebarContainer extends Component {
	render() {
		return <Sidebar navigation={this.props.navigation} />;
	}
}
