import React, { Component } from "react";
import { Image, Platform } from "react-native";
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Footer, H2 } from "native-base";

class Login extends Component {
	render() {
		return (
			<Container>
				<Header style={{ height: 200 }}>
					<Body style={{ alignItems: "center" }}>
						<Icon name="ios-cloud-outline" style={{ fontSize: 70 }} />
						<H2>React-Native & MobX</H2>
					</Body>
				</Header>
				<Content padder>
					{this.props.loginForm}
					<View padder/>
					<View>
						<Button block onPress={() => this.props.onLogin()}>
							<Text>Login</Text>
						</Button>
					</View>
				</Content>
				<Footer style={{ backgroundColor: "#F8F8F8" }}>
					<View style={{ alignItems: "center", opacity: 0.5, flexDirection: "row" }}>
						<Image
							source={require('./../../../../assets/FIGmd.png')}
							style={{ width: 422 / 4, height: 86 / 4 }}
						/>
					</View>
				</Footer>
			</Container>
		);
	}
}

export default Login;
