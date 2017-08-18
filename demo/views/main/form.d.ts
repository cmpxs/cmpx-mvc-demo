import { View } from 'cmpx-mvc';
export default class Form extends View {
    constructor();
    onInit(): void;
    userList: {
        id: string;
        role: string;
        name: string;
    }[];
    roleList: {
        id: string;
        name: string;
    }[];
    tabIndex: number;
    setTab(index: any): void;
    model: {
        select1: string;
        select2: string;
        mselect1: string;
        date1: string;
        date2: string;
    };
    selectDatas: {
        value: string;
        text: string;
    }[];
    save(): void;
}
