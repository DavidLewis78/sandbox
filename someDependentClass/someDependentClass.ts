import { SomeClass } from '../someClass/someClass'

export class SomeDependentClass {
    greeter = new SomeClass('hello');
    method() {
        this.greeter.method()
    }
}