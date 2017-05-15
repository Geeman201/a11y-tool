//  @Flow
import GenericWorker from './GenericWorker';
import NodeChecker from '../checkers/NodeChecker';

class NodeWorker extends GenericWorker {
  constructor() {
    super(NodeChecker);
    this.checkers = [];
  }

  execute() {
    const nodes = document.createNodeIterator(document.body, NodeFilter.SHOW_ELEMENT, () => (true));
    const results = [];
    let node;
    while (node = nodes.nextNode()) {
      this.checkers.forEach((check) => {
        if (check.expects(node)) {
          results.push(check.execute(node));
        }
      })
    }
    return results;
  }
}

export default new NodeWorker();
