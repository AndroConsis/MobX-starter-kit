import React, { Component } from "react";
import { Alert } from "react-native";
import BlankPage from "../../view/screens/BlankPage";
import { inject } from "mobx-react/native";

@inject("mainStore")
export default class BlankPageContainer extends Component {
  deleteFact = item => {
    Alert.alert(
      "Delete",
      "Are you sure you want to delete this item?",
      [
        {
          text: "Delete",
          onPress: () => {
			this.props.mainStore.deleteItem(item);
			this.props.navigation.goBack(null);
          }
        },
        {
          text: "Cancel"
        }
      ],
      { cancelable: false }
    );
  };

  render() {
    return (
      <BlankPage
        navigation={this.props.navigation}
        deleteFact={this.deleteFact}
      />
    );
  }
}
