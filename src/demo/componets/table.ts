
import { VMComponet, Componet, VMWatch, CmpxEvent, VMVar } from 'cmpx-mvc';
import PagebarComponet from './pagebar';
import TextFilter from '../filters/textFilter';

@VMComponet({
    name: 'table',
    include: [TextFilter, PagebarComponet],
    tmplUrl: `table.html`
})
export default class TableComponet extends Componet {

    constructor() {
        super();
    }

    onInit() {
        super.onInit();
    }

    @VMVar()
    pagebar:PagebarComponet;

    column = null;
    datas = null;

    pages = null;
    @VMWatch('this.datas')
    private changeTotalPage(datas) {
        this.pagebar.datas = datas;
        this.pagebar.$update();
    }

    onChangeData(){
        this.$update();
    }

}