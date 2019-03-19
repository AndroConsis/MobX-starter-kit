import MainStore from "../model/DomainStore/HomeStore";
import LoginStore from "../model/ViewStore/LoginViewStore";

export default function () {
	const mainStore = new MainStore();
	const loginForm = new LoginStore();

	return {
		loginForm,
		mainStore,
	};
}
