import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import Login from "./viewController/LoginContainer";
import Home from "./viewController/HomeContainer";
import BlankPage from "./viewController/BlankPageContainer";
import Sidebar from "./viewController/SidebarContainer";

const Drawer = DrawerNavigator(
	{
		Home: { screen: Home },
	},
	{
		initialRouteName: "Home",
		contentComponent: props => <Sidebar {...props} />,
	}
);

const App = StackNavigator(
	{
		Login: { screen: Login },
		BlankPage: { screen: BlankPage },
		Drawer: { screen: Drawer },
	},
	{
		initialRouteName: "Login",
		headerMode: "none",
	}
);

export default () => (
	<Root>
		<App />
	</Root>
);
