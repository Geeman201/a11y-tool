import NodeWorker from '../core/workers/NodeWorker';
import ImgChecker from '../impl/checkers/dom/ImgChecker';
import AChecker from '../impl/checkers/dom/AChecker';

NodeWorker.register(new ImgChecker());
NodeWorker.register(new AChecker());
