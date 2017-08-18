import { View } from 'cmpx-mvc';
export default class User extends View {
    constructor();
    onInit(): void;
    model: {
        intro: string;
    };
    save(): void;
    progress: number;
    progress1: number;
    increaseProgress(): void;
}
