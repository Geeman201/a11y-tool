import NodeChecker from '../../../core/checkers/NodeChecker';
import Detail from '../../../core/detail/Detail';
import { SuccessResult, WarnResult } from '../../../core/results/Results';

export default class ImgChecker extends NodeChecker {

  static detail = new Detail(
    { name: 'Alt attribute present and correct on IMG\'s' }
  );

  static expects = (node) => (node.nodeName.toUpperCase() === 'IMG');

  execute(node: HTMLElement) {
    const isAltPresent = node.hasAttribute('alt');
    const isPresentationRolePresent = node.hasAttribute('role') && node.getAttribute('role').toLowerCase() === 'presentation';
    if (isAltPresent && !isPresentationRolePresent) {
      return new SuccessResult(node, ImgChecker.detail);
    }
    return new WarnResult(node, ImgChecker.detail);
  }

}
