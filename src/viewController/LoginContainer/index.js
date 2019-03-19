import React, { Component } from "react";
import {
	Item, Input, Icon, Form, Toast, Card, View
} from "native-base";
import { observer, inject } from "mobx-react/native";

import Login from "../../view/screens/Login";

@inject("loginForm")
@observer
export default class LoginContainer extends Component {
	emailInput;
	pwdinput;
	login() {
		this.props.loginForm.validateForm();
		if (this.props.loginForm.isValid) {
			this.props.loginForm.clearStore();
			this.props.navigation.navigate("Drawer");
		} else {
			Toast.show({
				text: "Enter Valid Email & password!",
				duration: 2000,
				position: "top",
				textStyle: { textAlign: "center" },
			});
		}
	}
	render() {
		const form = this.props.loginForm;
		const Fields = (
			<Form>
				<Item error={form.emailError ? true : false}
					regular
					style={styles.color}>
					<Icon active name="person" />
					<Input
						placeholder="Email"
						keyboardType="email-address"
						ref={c => (this.emailInput = c)}
						value={form.email}
						onBlur={() => form.validateEmail()}
						onChangeText={e => form.emailOnChange(e)}
					/>
				</Item>
				<Item error={form.passwordError ? true : false}
					regular
					style={styles.color}>
					<Icon active name="unlock" />
					<Input
						placeholder="Password"
						ref={c => (this.pwdinput = c)}
						value={form.password}
						onBlur={() => form.validatePassword()}
						onChangeText={e => form.passwordOnChange(e)}
						secureTextEntry={true}
					/>
				</Item>
			</Form>
		);
		return <Login navigation={this.props.navigation} loginForm={Fields} onLogin={() => this.login()} />;
	}
}

const styles = {
	color: { backgroundColor: "white" }
}