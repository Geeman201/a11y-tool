import NodeWorker from '../core/workers/NodeWorker';
import ImgChecker from '../impl/checkers/dom/ImgChecker';
import AChecker from '../impl/checkers/dom/AChecker';
import LiChecker from '../impl/checkers/dom/lists/LiChecker';

NodeWorker.register(new ImgChecker());
NodeWorker.register(new AChecker());
NodeWorker.register(new LiChecker());
