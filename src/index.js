class Animal {
    constructor(name) {
        this.name = name;
    }
    getName() {
        console.log('this.name========', this.name);
        return this.name;
    }
}
const dog = new Animal('wangcai');
dog.getName();
module.exports = Animal;
