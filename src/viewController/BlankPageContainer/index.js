import React, { Component } from "react";
import BlankPage from "../../view/screens/BlankPage";

export default class BlankPageContainer extends Component {
	render() {
		return <BlankPage navigation={this.props.navigation} />;
	}
}
