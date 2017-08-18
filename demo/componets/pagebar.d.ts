import { Componet, CmpxEvent } from 'cmpx-mvc';
export default class PagebarComponet extends Componet {
    constructor();
    onInit(): void;
    datas: any[];
    pageSize: number;
    curPage: number;
    curDatas: any[];
    totalPage: number;
    total: number;
    type: number;
    setPage(page: any): void;
    private takeDatas(cur);
    private calcTotalPage();
    change: CmpxEvent;
    private changeCurPage(value);
    private changePageSize();
    private changeDatas();
    pages: any[];
    private changeTotalPage(total);
}
