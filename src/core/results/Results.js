//  @Flow
import Result from './Result';
import Detail from '../detail/Detail';

export class ErrorResult extends Result {
  constructor(node: HTMLElement, detail: Detail, remediation) {
    super('ERROR', node, detail, remediation);
  }
}

export class WarnResult extends Result {
  constructor(node: HTMLElement, detail: Detail, remediation) {
    super('WARNING', node, detail, remediation);
  }
}

export class InfoResult extends Result {
  constructor(node: HTMLElement, detail: Detail) {
    super('INFO', node, detail);
  }
}

export class SuccessResult extends Result {
  constructor(node: HTMLElement, detail: Detail) {
    super('SUCCESS', node, detail);
  }
}

