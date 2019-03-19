class LoginViewModel {
  constructor(loginStore) {
    this.store = loginStore;
  }

  email() {
    return this.store.email;
  }

  password() {
    return this.store.password;
  }

  isValid() {
    return this.store.isValid;
  }

  emailError() {
    return this.store.emailError;
  }

  passwordError() {
    return this.store.passwordError;
  }

  emailOnChange(val) {
    this.store.emailOnChange(val);
  }

  validateEmail() {
    this.store.validateEmail();
  }

  passwordOnChange(val) {
    this.store.passwordOnChange(val);
  }

  validatePassword() {
    this.store.validatePassword();
  }

  validateForm() {
    this.store.validateForm();
  }

  clearStore() {
    this.store.clearStore();
  }
}

export default LoginViewModel;
