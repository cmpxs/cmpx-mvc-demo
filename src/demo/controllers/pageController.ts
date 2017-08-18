import { VMController, VMAction, ActionLocation, ActionResult, ViewResult, Controller } from 'cmpx-mvc';
import User from '../views/page/user';
import Gallery from '../views/page/gallery';
import Help from '../views/page/help';
import Log from '../views/page/log';
import E404 from '../views/page/e404';

@VMController({
    include: [],
    index: 'user'
})
export class PageController extends Controller {

    @VMAction()
    user(location: ActionLocation): ActionResult {
        return new ViewResult(User);
    }

    @VMAction()
    gallery(location: ActionLocation): ActionResult {
        return new ViewResult(Gallery);
    }

    @VMAction()
    help(location: ActionLocation): ActionResult {
        return new ViewResult(Help);
    }

    @VMAction()
    log(location: ActionLocation): ActionResult {
        return new ViewResult(Log);
    }

    @VMAction()
    e404(location: ActionLocation): ActionResult {
        return new ViewResult(E404);
    }

}
