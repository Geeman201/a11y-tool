//  @Flow
import Detail from '../detail/Detail';

class Result {
  constructor(type: string, node: HTMLElement, detail: Detail) {
    this.type = type;
    this.node = node;
    this.detail = detail;
  }
}

export default Result;
