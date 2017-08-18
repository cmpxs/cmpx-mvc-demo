import { View, VMView, CmpxLib, VMVar } from 'cmpx-mvc';
import TableComponet from '../../componets/table';

@VMView({
    name: 'tableview',
    include: [TableComponet],
    tmplUrl: `table.html`
})
export default class Table extends View {
    @VMVar()
    table1: TableComponet;

    constructor() {
        super();
    }

    onInit() {
        super.onInit();
        var table1 = this.table1;
        table1.column = [{
            name: 'id',
            title: 'ID',
            width: 50
        }, {
            name: 'title',
            title: '标题',
            template:  'table_title'
        }, {
            name: 'type',
            title: '类别',
            width: 70
        }, {
            name: 'user',
            title: '作者',
            width: 80
        }, {
            name: 'date',
            title: '修改日期',
            width: 180
        }, {
            name: '',
            title: '操作',
            width: 230,
            template:  'table_opt'
        }];
        var model = {
            id: '',
            title: 'Business management',
            type: 'default',
            user: '测试1号',
            date: '2014年9月4日 7:28:47'
        };
        var datas = [];
        for (var i = 1; i <= 35; i++) {
            datas.push(CmpxLib.extend({}, model, { id: i }));
        }
        table1.pagebar.type = 1;
        table1.pagebar.pageSize = 10;
        table1.datas = datas;
        table1.$update();
    }

    edit(item){
        console.log('edit', item);
    }
}