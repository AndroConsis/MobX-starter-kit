import React, { Component } from "react";
import { observer, inject } from "mobx-react/native";

import Home from "../../view/screens/Home";
import data from "./data";

@inject("mainStore")
@observer
export default class HomeContainer extends Component {
	componentWillMount() {
		this.props.mainStore.fetchItems(data);
	}
	render() {
		const list = this.props.mainStore.items.toJS();
		return <Home navigation={this.props.navigation} list={list} />;
	}
}
