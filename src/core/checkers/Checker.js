class Checker {
  constructor() {
    this.validateInstance(this.constructor.detail, this.execute);
    //  Enables instance level use of methods
    this.detail = this.constructor.detail;
  }

  validateInstance(detail, execute) {
    this.validateExists(detail, 'No detail object');
    this.validateExists(execute, 'No execute method');
  }

  validateExists(item, error) {
    if(!item) {
      throw new Error(`${this.constructor.name} | ERROR: ` + error);
    }
  }
}

export default Checker;
