
import { View, VMView, CmpxLib } from 'cmpx-mvc';
import SelectBoxComponet from '../../componets/selectbox';

declare let require: any;

@VMView({
    name: 'fromdemo',
    include: [SelectBoxComponet],
    tmplUrl: `form.html`
})
export default class Form extends View {

    constructor() {
        super();
    }

    onInit() {
        super.onInit();
    }

    userList = [{ id: '1', role: "1", name: "admin" }, { id: '2', role: "2", name: "小李" }];
    roleList = [{ id: '1', name: "管理员" }, { id: '2', name: "测试员" }];

    tabIndex = 0;
    setTab(index){
        this.tabIndex = index;
        this.$update();
    }

    model = {
        select1: 'option2',
        select2: '2',
        mselect1: '3',
        date1: '2017-08-09',
        date2: '2017-08-09T00:01'
    };

    selectDatas = [{value:'1', text:'正常'},{value:'2', text:'待审核'},{value:'3', text:'不显示'}];

    save() {
        alert(JSON.stringify(this.model));
    }
}