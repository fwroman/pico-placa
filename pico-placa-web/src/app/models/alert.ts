export class Alert {
    constructor(
        public title: string,
        public message: string,
        public type: number,
        public hidden?: boolean,
    ) { }
}