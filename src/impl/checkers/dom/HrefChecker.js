import NodeChecker from '../../../core/checkers/NodeChecker';
import Detail from '../../../core/detail/Detail';
import { ErrorResult, SuccessResult } from '../../../core/results/Results';

class HrefChecker extends NodeChecker {

  static detail = new Detail(
    { name: 'HREF attribute on A tags' }
  );

  static expects = (node) => (node.nodeName.toUpperCase() === 'A');

  execute(node) {
    return node.hasAttribute('href') ? new SuccessResult(node, this.detail) : new ErrorResult(node, this.detail);
  }
}

export default HrefChecker;
