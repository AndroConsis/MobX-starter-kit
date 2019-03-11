import React, { Component } from "react";
import BlankPage from "../../stories/screens/BlankPage";

export default class BlankPageContainer extends Component {
	render() {
		return <BlankPage navigation={this.props.navigation} />;
	}
}
