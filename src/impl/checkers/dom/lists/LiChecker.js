import NodeChecker from '../../../../core/checkers/NodeChecker';
import Detail from '../../../../core/detail/Detail';
import { ErrorResult, SuccessResult } from '../../../../core/results/Results';

class LiChecker extends NodeChecker {

  static detail = new Detail(
    {
      name: 'LI Tags should be children of a list',
      helpUrl: 'https://geeman201.github.io/geemans-a11y-guide/#/content/lists'
    }
  );

  static expects = (node) => (node.tagName.toUpperCase() === 'LI');

  execute(node: HTMLElement) {
    if (this.hasNoParentUlOrOl(node) || !node.parentNode.getAttribute('role') === 'list') {
      return new ErrorResult(node, LiChecker.detail,
                             'Put the <li> element inside of a <ul> or <ol>. Alternatively add ' +
                             'a role="list" to the parent element')
    }
    return new SuccessResult(node, LiChecker.detail);
  }

  hasNoParentUlOrOl(node) {
    return ['UL', 'OL'].indexOf(node.parentNode.nodeName.toUpperCase()) === -1;
  }

}

export default new LiChecker();
