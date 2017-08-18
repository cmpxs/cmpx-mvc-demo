
import { View, Componet, VMComponet } from 'cmpx-mvc';

@VMComponet({
    name:'topbar',
    include:[],
    tmplUrl:`topbar.html`
})
export default class Topbar extends Componet {

    constructor(){
        super();
    }

    onInit(){
        super.onInit();
    }


}