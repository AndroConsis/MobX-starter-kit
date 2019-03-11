import React, { Component } from "react";
import { Provider } from "mobx-react/native";
import { StyleProvider } from "native-base";

import App from "../App";
import getTheme from "../theme/components";
import variables from "../theme/variables/platform";
export default function(stores) {
  return class Setup extends Component {
    render() {
      return (
        <StyleProvider style={getTheme(variables)}>
          <Provider {...stores}>
            <App />
          </Provider>
        </StyleProvider>
      );
    }
  };
}
