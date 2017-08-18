import { Componet } from 'cmpx-mvc';
import PagebarComponet from './pagebar';
export default class TableComponet extends Componet {
    constructor();
    onInit(): void;
    pagebar: PagebarComponet;
    column: any;
    datas: any;
    pages: any;
    private changeTotalPage(datas);
    onChangeData(): void;
}
