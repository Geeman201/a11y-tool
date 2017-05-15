import NodeWorker from '../core/workers/NodeWorker';
import AltChecker from '../impl/checkers/dom/AltChecker';
import HrefChecker from '../impl/checkers/dom/HrefChecker';

NodeWorker.register(new AltChecker());
NodeWorker.register(new HrefChecker());
