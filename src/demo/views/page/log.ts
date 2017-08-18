import { View, VMView, CmpxLib } from 'cmpx-mvc';

@VMView({
    name: 'log',
    include: [],
    tmplUrl: `log.html`
})
export default class Log extends View {

    constructor() {
        super();
    }

    onInit() {
        super.onInit();
        for (var i = 0; i < 20; i++)
            this.list.push(i);
        this.$update();
    }
    list = [];
}