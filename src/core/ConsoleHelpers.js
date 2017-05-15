//  @Flow
import Result from './results/Result';

class ConsoleHelpers {

  static printResult(result: Result) {
    console.group(`${result.detail.name} | ${result.detail.moreInfo}`);
    console.group('Recommended Remediation work');
    console.log(result.remediation);
    console.log(`Further resources can be found at `, result.detail.helpUrl);
    console.groupEnd();
    console.log('Right click node below & \'Reveal in elements pane\' for further context');
    console.log(result.node);
    console.groupEnd();
  }

}

export default ConsoleHelpers;
