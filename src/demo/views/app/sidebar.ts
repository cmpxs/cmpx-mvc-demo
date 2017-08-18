
import { View, Componet, VMComponet } from 'cmpx-mvc';

@VMComponet({
    name:'sidebar',
    include:[],
    tmplUrl:`sidebar.html`
})
export default class Sidebar extends Componet {

    constructor(){
        super();
    }

    onInit(){
        super.onInit();
    }


}