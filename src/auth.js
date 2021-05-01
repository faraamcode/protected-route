class auth {
  constructor() {
    this.isLoggedIn = false;
  }
  login(cb) {
    this.isLoggedIn = true;
    cb();
  }
  logout(cb) {
    this.isLoggedIn = false;
    cb();
  }
  checkLogged() {
    return this.isLoggedIn;
  }
}

export default new auth();
