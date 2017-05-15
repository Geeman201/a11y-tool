import NodeWorker from '../core/workers/NodeWorker';
import ImgChecker from '../impl/checkers/dom/ImgChecker';
import HrefChecker from '../impl/checkers/dom/HrefChecker';
import LiChecker from '../impl/checkers/dom/lists/LiChecker';

NodeWorker.register(new ImgChecker());
NodeWorker.register(new HrefChecker());
NodeWorker.register(new LiChecker());
