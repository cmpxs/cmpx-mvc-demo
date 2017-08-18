import { VMController, VMAction, ActionLocation, ActionResult, ViewResult, Controller } from 'cmpx-mvc';
import Home from '../views/main/home';
import Form from '../views/main/form';
import Table from '../views/main/table';


@VMController({
    include: [],
    index: 'home'
})
export class MainController extends Controller {

    @VMAction()
    home(location: ActionLocation): ActionResult {
        return new ViewResult(Home);
    }

    @VMAction()
    form(location: ActionLocation): ActionResult {
        return new ViewResult(Form);
    }

    @VMAction()
    table(location: ActionLocation): ActionResult {
        return new ViewResult(Table);
    }
}
