
import { Filter, VMFilter, CmpxLib } from 'cmpx-mvc';

@VMFilter({
    name: 'text',
    alway: false
})
export default class TextFilter extends Filter {

    constructor() {
        super();
    }

    onFilter(value:any, params:any, cb) {
        cb(CmpxLib.isString(value) ? CmpxLib.encodeHtml(value) : value);
    }

}