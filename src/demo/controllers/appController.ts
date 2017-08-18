import { VMController, VMAction, ActionLocation, ActionResult, ViewResult, AsyncResult, ContorllerResult, Controller, RedirectResult, WebpackLoaderContorllerResult, View, RouterLink } from 'cmpx-mvc';
import App from '../views/app/app';

class MyLocation extends ActionLocation{

    onNavigateBefore(cb){
        let rootView:App = View.RootView as App;
        rootView.startProgress();
        super.onNavigateBefore(cb);
    }

    onNavigate(){
        //console.log('location', this.isForward, this.href);
        let rootView:App = View.RootView as App;
        rootView.endPogress();
        super.onNavigate();
    }
}

@VMController({
    include: [RouterLink],
    index: 'index',
    location:MyLocation
})
export class AppController extends Controller {

    @VMAction()
    main(location: ActionLocation): ActionResult {
        
        return new WebpackLoaderContorllerResult('./mainController', 'MainController');
    }

    @VMAction()
    page(location: ActionLocation): ActionResult {
        
        return new WebpackLoaderContorllerResult('./pageController', 'PageController');
    }
    

}
