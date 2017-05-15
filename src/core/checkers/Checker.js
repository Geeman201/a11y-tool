class Checker {

  constructor() {
    this.validate(this.constructor.detail);
    this.detail = this.constructor.detail;
  }

  validate(detail, expects) {
    if (!detail) {
      console.log(`${this.constructor.name} | ERROR: No detail given`);
    }
  }

}
export default Checker;
