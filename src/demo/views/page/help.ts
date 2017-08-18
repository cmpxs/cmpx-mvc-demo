import { View, VMView, CmpxLib } from 'cmpx-mvc';

@VMView({
    name: 'help',
    include: [],
    tmplUrl: `help.html`
})
export default class Help extends View {

    constructor() {
        super();
    }

    onInit() {
        super.onInit();
    }
}