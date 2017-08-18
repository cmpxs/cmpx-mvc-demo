
import { View, VMView, CmpxLib } from 'cmpx-mvc';

declare let require:any;
let _tableDatas = require('./json/list.json');
let _browserDatas = require('./json/browser.json');

@VMView({
    name: 'home',
    include: [],
    tmplUrl: `home.html`
})
export default class Home extends View {
    m ={
        tmpl:'asfasf'
    };

    constructor() {
        super();
    }

    onInit(){
        super.onInit();
        this.increaseNums();
        this.increaseProgress();
        this.increaseBrowse();
    }

    nums = {
        newPage: 2300,
        order: 308,
        visit: 80082,
        online: 1300
    };

    increaseNums() {
        this.nums.newPage += parseInt((3 + Math.random() * 300).toString());
        this.nums.order += parseInt((1 + Math.random() * 100).toString());
        this.nums.visit += parseInt((10 + Math.random() * 1000).toString());
        this.nums.online += parseInt((2 + Math.random() * 100).toString());
        this.$update();
        setTimeout(() => {
            this.$isDisposed || this.increaseNums();
        }, 500);
    }

    tableDatas:any[] = _tableDatas;
    delItem(item){
        let index = this.tableDatas.indexOf(item);
        if (index >= 0){
            this.tableDatas.splice(index, 1);
            this.$update();
        }
        console.log(item);
    }

    browserDatas = _browserDatas;
    increaseBrowse(){
        CmpxLib.each(this.browserDatas, function(item){
            item.count += parseInt((3 + Math.random()*30).toString());
        });
        setTimeout(()=>{
            this.$isDisposed || this.increaseBrowse()
        }, 500);
        
    }

    progress = 0;
    increaseProgress(){
        this.progress += parseInt((1 + Math.random()*10).toString());
        this.progress %= 100;
        setTimeout(()=>{
            this.$isDisposed || this.increaseProgress()
        }, 500);
    }
}