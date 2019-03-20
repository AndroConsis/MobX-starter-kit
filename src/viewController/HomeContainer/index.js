import React, { Component } from "react";
import { toJS } from "mobx";
import { observer, inject } from "mobx-react/native";
import { FlatList, LayoutAnimation, UIManager } from "react-native";
import ListItem from "../../view/screens/Home/Components/Listitem";
import Home from "../../view/screens/Home";
import Spinner from "../../view/components/Spinner";
import ErrorMessage from "../../view/components/ErrorMessage";

@inject("mainStore")
@observer
export default class HomeContainer extends Component {
  componentWillMount() {
    this.props.mainStore.fetchItems();
  }

  componentDidMount() {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }

  render() {
    const list = toJS(this.props.mainStore.items);
    const state = this.props.mainStore.state;
    const count = this.props.mainStore.count;

    const Error = <ErrorMessage text={"Failed to load data"} />;
    const Loading = <Spinner />;
    const List = (
      <FlatList
        renderItem={(item, index) => (
          <ListItem
            text={item.item.text}
            key={index}
            onRefresh={this.props.mainStore.fetchItems}
            onPress={() => {
              this.props.navigation.navigate("BlankPage", {
                item
              });
            }}
          />
        )}
        data={list}
        style={{ flex: 1 }}
      />
    );

    return (
      <Home
        navigation={this.props.navigation}
        count={count}
        list={List}
        error={Error}
        loading={Loading}
        showError={state == "error"}
        showLoading={state == "pending"}
      />
    );
  }
}
