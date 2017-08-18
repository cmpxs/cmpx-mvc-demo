import { View } from 'cmpx-mvc';
export default class Home extends View {
    m: {
        tmpl: string;
    };
    constructor();
    onInit(): void;
    nums: {
        newPage: number;
        order: number;
        visit: number;
        online: number;
    };
    increaseNums(): void;
    tableDatas: any[];
    delItem(item: any): void;
    browserDatas: any;
    increaseBrowse(): void;
    progress: number;
    increaseProgress(): void;
}
