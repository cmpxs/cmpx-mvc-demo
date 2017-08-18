import { View, VMView, CmpxLib } from 'cmpx-mvc';

@VMView({
    name: 'e404',
    include: [],
    tmplUrl: `e404.html`
})
export default class E404 extends View {

    constructor() {
        super();
    }

    onInit() {
        super.onInit();
    }
}