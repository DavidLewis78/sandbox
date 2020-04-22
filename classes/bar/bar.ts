import { Foo } from '../foo/foo'

export class Bar {
    greeter = new Foo('hello');
    method() {
        this.greeter.method()
    }
}
