import Checker from './Checker';
import NodeWorker from '../workers/NodeWorker';

export default class NodeChecker extends Checker {

  constructor() {
    super();
    this.validateExists(this.constructor.expects, 'No expects method');
    this.expects = this.constructor.expects;
    NodeWorker.register(this);
  }

}
