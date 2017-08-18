
import { VMComponet, Componet, VMWatch } from 'cmpx-mvc';

@VMComponet({
    name: 'selectbox',
    include: [],
    tmpl: `<div class="am-btn-group" data-am-button>
    {{for item in this.datas}}
    <label class="am-btn am-btn-default am-btn-xs{{this.model == item[this.valueName]?' am-active':''}}"
      click="{{@this.model = item[this.valueName];this.$update()}}">
      <input type="radio" name="options">{{:item[this.textName]}}</label>
    {{/for}}
  </div>`
})
export default class SelectBoxComponet extends Componet {

    constructor() {
        super();
    }

    onInit() {
        super.onInit();
    }
    valueName = 'value';
    textName = 'text';

    datas:any[];
    model:any;
    multiple:string = 'false';

    // @VMWatch('this.datas')
    // change(value){
    //     if (!value)
    //         this.model = null;
    //     else {
    //         var len = this.datas.length;
    //         if (len > 0)
    //             this.model = this.datas[0][this.valueName];
    //         else
    //             this.model = null;
    //     }
    //     this.$update();
    // }

}