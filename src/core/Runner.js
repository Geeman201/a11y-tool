//  @Flow
import NodeWorker from './workers/NodeWorker';
import JQueryWorker from './workers/JQueryWorker';
import Result from './results/Result';
import uuid from 'uuid/v4';

export default class Runner {

  constructor() {
    this.workers = [
      NodeWorker,
      JQueryWorker
    ];
  }

  run(): Result[] {
    let results = [];
    this.workers.forEach((worker) => {
      results = results.concat(worker.execute());
    });

    return results.map((result) => {
      result.id = uuid();
      return result
    });

  }

}
