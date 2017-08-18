
import { View, VMComponet, Componet } from 'cmpx-mvc';

@VMComponet({
    name:'footer',
    include:[],
    tmplUrl:`footer.html`
})
export default class Footer extends Componet {

    constructor(){
        super();
    }

    onInit(){
        super.onInit();
    }


}