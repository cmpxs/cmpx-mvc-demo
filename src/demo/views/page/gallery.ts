import { View, VMView, CmpxLib } from 'cmpx-mvc';

let _galleryDatas:any[] = require('../main/json/gallery.json');

@VMView({
    name: 'gallery',
    include: [],
    tmplUrl: `gallery.html`
})
export default class Gallery extends View {

    constructor() {
        super();
    }

    onInit() {
        super.onInit();
    }
    list = _galleryDatas;
}