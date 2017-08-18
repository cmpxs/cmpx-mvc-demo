import { View } from 'cmpx-mvc';
export default class App extends View {
    progress: number;
    constructor();
    onInit(): void;
    private tid;
    private clearTid();
    startProgress(): void;
    endPogress(): void;
}
