
import { View, VMComponet, Componet, VMWatch, CmpxEvent } from 'cmpx-mvc';

let _takeList = function (list: any[], size, cur) {
    if (!list) return list;
    var index = size * (cur - 1);
    return list.slice(index, index + size);
};

@VMComponet({
    name: 'pagebar',
    include: [],
    tmplUrl: `pagebar.html`
})
export default class PagebarComponet extends Componet {

    constructor() {
        super();
    }

    onInit() {
        super.onInit();
    }

    datas:any[];
    pageSize = 10;
    curPage = 1;
    curDatas:any[];
    totalPage = 0;
    total = 0;
    type = 0;

    setPage(page) {
        this.curPage = page <= 0 ? 1 : (page > this.totalPage ? this.totalPage : page);
        this.$update();
    };

    private takeDatas(cur) {
        var curDatas = this.curDatas = _takeList(this.datas, this.pageSize, cur);
        this.change.trigger([curDatas, this]);
    }

    private calcTotalPage() {
        var length = this.datas ? this.datas.length : 0,
            isAdd = (length % this.pageSize) != 0;
        this.totalPage = parseInt((length / this.pageSize).toString()) + (isAdd ? 1 : 0);
    }
    
    change = new CmpxEvent();

    @VMWatch('this.curPage')
    private changeCurPage(value) {
        this.takeDatas(value || 1);;
        this.$update();
    }

    @VMWatch('this.pageSize')
    private changePageSize() {
        this.calcTotalPage();
        if (this.curPage != 1)
            this.curPage = 1;
        else
            this.takeDatas(1);
        this.$update();
    }

    @VMWatch('this.datas')
    private changeDatas() {
        this.total = this.datas && this.datas.length || 0
        this.calcTotalPage();
        if (this.curPage != 1)
            this.curPage = 1;
        else
            this.takeDatas(1);
    }

    pages:any[];
    @VMWatch('this.totalPage')
    private changeTotalPage(total) {
        var list = [];
        for (var i = 1; i <= total; i++) list.push(i);
        this.pages = list;
        this.$update();
    }

}