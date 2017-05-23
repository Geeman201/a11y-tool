import NodeChecker from '../../../core/checkers/NodeChecker';
import Detail from '../../../core/detail/Detail';
import { SuccessResult, WarnResult } from '../../../core/results/Results';

class ButtonChecker extends NodeChecker {

  static detail = new Detail(
    {
      name: 'Buttons should have clear action text',
      moreInfo: 'Buttons should not start with words like "here", "go", "next" or "prev"',
      helpUrl: 'https://geeman201.github.io/geemans-a11y-guide/#/content/forms'
    }
  );

  static expects = (node) => (node.tagName.toUpperCase() === 'BUTTON');

  static buzzwords = ['', 'HERE', 'GO', 'NEXT', 'PREV'];

  execute(node: HTMLElement) {
    if (node.innerText) {
      const text = node.innerText.toUpperCase();
      for (var i = 0; i < ButtonChecker.buzzwords.length; i++) {
        const buzzword = ButtonChecker.buzzwords[i];
        if (text.indexOf(buzzword) === 0) {
          return new WarnResult(node, ButtonChecker.detail, 'Use a descriptive verb to describe what action will '
                                                            + 'occur on click');
        }
      }
    }
    return new SuccessResult(node, ButtonChecker.detail);
  }

}

export default new ButtonChecker();
