import NodeChecker from '../../../core/checkers/NodeChecker';
import Detail from '../../../core/detail/Detail';
import { SuccessResult, WarnResult } from '../../../core/results/Results';

class ImgChecker extends NodeChecker {

  static detail = new Detail(
    {
      name: 'Alt attribute present and correct on IMG\'s',
      helpUrl: 'https://geeman201.github.io/geemans-a11y-guide/#/content/images'
    }
  );

  static expects = (node) => (node.tagName.toUpperCase() === 'IMG');

  execute(node: HTMLElement) {
    const isAltPresent = node.hasAttribute('alt');
    const isPresentationRolePresent = node.hasAttribute('role') && node.getAttribute('role').toLowerCase()
                                                                   === 'presentation';

    if (!isAltPresent) {
      return new WarnResult(node, ImgChecker.detail, 'Add a suitable alt attribute to the image');
    }

    if (isAltPresent && !isPresentationRolePresent) {
      return new WarnResult(node, ImgChecker.detail,
                            'If the image is for presentation only. Remove the alt attribute\n' +
                            'If the image is used to give meaning. Remove the role attribute')
    }

    return new SuccessResult(node, ImgChecker.detail);
  }

}

export default new ImgChecker();
