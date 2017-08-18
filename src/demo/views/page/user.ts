import { View, VMView, CmpxLib } from 'cmpx-mvc';

declare let require: any;

@VMView({
    name: 'user',
    include: [],
    tmplUrl: `user.html`
})
export default class User extends View {

    constructor() {
        super();
    }

    onInit() {
        super.onInit();
        this.increaseProgress();
    }
    model = {
        intro: '测试描述'
    };

    save() {
        alert(JSON.stringify(this.model));
    }

    progress = 0;
    progress1 = 0;

    increaseProgress() {
        this.progress += parseInt((1 + Math.random() * 10).toString());
        this.progress %= 100;
        this.progress1 += parseInt((1 + Math.random() * 10).toString());
        this.progress1 %= 100;
        this.$update();
        setTimeout(() => {
            this.$isDisposed || this.increaseProgress();
        }, parseInt((10 + Math.random() * 1000).toString()));
    }
}