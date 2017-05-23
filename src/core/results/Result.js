//  @Flow
import Detail from '../detail/Detail';

class Result {
  constructor(type: string, node: HTMLElement, detail: Detail, remediation: string = 'None necessary') {
    this.type = type;
    this.node = node;
    this.detail = detail;
    this.remediation = remediation;
  }
}

export default Result;
