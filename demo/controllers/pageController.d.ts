import { ActionLocation, ActionResult, Controller } from 'cmpx-mvc';
export declare class PageController extends Controller {
    user(location: ActionLocation): ActionResult;
    gallery(location: ActionLocation): ActionResult;
    help(location: ActionLocation): ActionResult;
    log(location: ActionLocation): ActionResult;
    e404(location: ActionLocation): ActionResult;
}
