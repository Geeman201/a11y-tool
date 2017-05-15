import NodeChecker from '../../../core/checkers/NodeChecker';
import Detail from '../../../core/detail/Detail';
import { ErrorResult, SuccessResult } from '../../../core/results/Results';

class AChecker extends NodeChecker {

  static detail = new Detail(
    { name: 'Valid HREF attribute on <a> tag', helpUrl: 'https://geeman201.github.io/geemans-a11y-guide/#/navigation/links' }
  );

  static expects = (node) => (node.nodeName.toUpperCase() === 'A');

  execute(node) {

    if (!node.hasAttribute('href')) {
      this.detail.moreInfo = 'No HREF present';
      return new ErrorResult(node, this.detail);
    }
    if (node.getAttribute('href') === '' || node.getAttribute('href') === '#') {
      this.detail.moreInfo = 'HREF should go to an anchor on the page. \'#\' is not one of these!';
      return new ErrorResult(node, this.detail);
    }
    if (node.getAttribute('href').indexOf('javascript:') >= 0) {
      this.detail.moreInfo = 'Executing javascript on a HREF is considered bad practice. Consider a button instead.';
      return new ErrorResult(node, this.detail);
    }

    return new SuccessResult(node, this.detail);
  }
}

export default AChecker;
