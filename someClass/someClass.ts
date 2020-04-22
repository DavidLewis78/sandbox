export class SomeClass {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    method() {
        return "Hello, " + this.greeting;
    }
}