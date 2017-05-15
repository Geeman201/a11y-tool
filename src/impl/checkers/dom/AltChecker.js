import NodeChecker from '../../../core/checkers/NodeChecker';
import Detail from '../../../core/detail/Detail';
import { SuccessResult, WarnResult } from '../../../core/results/Results';

export default class AltChecker extends NodeChecker {

  static detail = new Detail(
    { name: 'Alt attribute present on IMG\'s' }
  );

  static expects = (node) => (node.nodeName.toUpperCase() === 'IMG');

  execute(node: HTMLElement) {
    const result = node.hasAttribute('alt');
    if (result) {
      return new SuccessResult(node, AltChecker.detail);
    }
    return new WarnResult(node, AltChecker.detail);
  }

}
