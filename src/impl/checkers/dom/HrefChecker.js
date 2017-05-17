import NodeChecker from '../../../core/checkers/NodeChecker';
import Detail from '../../../core/detail/Detail';
import { ErrorResult, SuccessResult } from '../../../core/results/Results';

class HrefChecker extends NodeChecker {

  static detail = new Detail(
    {
      name: 'Valid HREF attribute on <a> tag',
      helpUrl: 'https://geeman201.github.io/geemans-a11y-guide/#/navigation/links'
    }
  );

  static expects = (node) => (node.tagName.toUpperCase() === 'A');

  execute(node) {
    if (!node.hasAttribute('href')) {
      this.detail.moreInfo = 'No HREF present';
      return new ErrorResult(node, this.detail, 'Add a href tag to your <a> e.g. <a href="#AboutMe"></a>');
    }
    if (node.getAttribute('href') === '' || node.getAttribute('href') === '#') {
      this.detail.moreInfo = 'HREF should go to an anchor on the page. \'#\' is not one of these!';
      return new ErrorResult(node, this.detail, 'Add a meaningful name after the #. e.g. #AboutMe');
    }
    if (node.getAttribute('href').indexOf('javascript:') >= 0) {
      this.detail.moreInfo = 'Executing javascript through a HREF is considered bad practice';
      return new ErrorResult(node, this.detail, 'Change from using an <a> to a <button>');
    }

    return new SuccessResult(node, this.detail);
  }
}

export default new HrefChecker();
