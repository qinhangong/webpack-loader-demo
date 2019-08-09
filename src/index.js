class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log('this.name========', this.name);
        return this.name;
    }
}
const dog = new Animal('wangcai');
dog.printName();
