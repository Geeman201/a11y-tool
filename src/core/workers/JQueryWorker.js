import GenericWorker from './GenericWorker';
import JQueryChecker from '../checkers/JQueryChecker';

class JQueryWorker extends GenericWorker {
  constructor() {
    super(JQueryChecker)
  }
}

export default new JQueryWorker();
