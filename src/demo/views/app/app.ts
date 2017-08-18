
import { View, VMView } from 'cmpx-mvc';
import Topbar from './topbar';
import Footer from './footer';
import Sidebar from './sidebar';

@VMView({
    name: 'app',
    include: [Topbar, Footer, Sidebar],
    tmplUrl: `app.html`
})
export default class App extends View {
    progress = 0;

    constructor() {
        super();
    }


    onInit() {
        super.onInit();
    }


    private tid: any;
    private clearTid() {
        this.tid && window.clearInterval(this.tid);
        this.tid = null;
    }

    startProgress() {
        if (this.tid) {
            this.clearTid();
            this.progress = 0;
            this.$update();
        }
        this.tid = window.setInterval(() => {
            if (this.$isDisposed) {
                this.clearTid();
            } else {
                this.progress += (1 + Math.random() * 3);
                if (this.progress > 100) {
                    this.progress = 100;
                    this.clearTid();
                }
                this.$update();
            }

        }, 100);
    }

    endPogress() {
        this.clearTid();
        this.progress = 100;
        this.$update();
        //200ms后，隐藏进度
        this.tid = window.setTimeout(() => {
            if (this.$isDisposed) return;
            this.progress = 0;
            this.$update();
        }, 200);
    }

}