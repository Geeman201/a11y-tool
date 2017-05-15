
export default class GenericWorker {

  constructor(type) {
    if(!type) {
      throw new Error('Type must be specified when creating an instance of GenericWorker')
    }
    this.type = type;
    this.checkers = [];
  }

  register(checker) {
    if(checker instanceof this.type) {
      this.checkers.push(checker);
    } else {
      console.log(`${this.constructor.name} | ERROR | Failed to register as checker is of unknown type` , checker);
      throw new Error('Failed to register checker as type was not expected');
    }
  }

  execute() {
    const results = [];
    this.checkers.forEach((check) => {
      results.push(check.execute());
    });
    return results;
  }

}
