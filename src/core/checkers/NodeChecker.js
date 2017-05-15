import Checker from './Checker';

export default class NodeChecker extends Checker {
  constructor() {
    super();
    this.expects = this.constructor.expects;
  }

}
