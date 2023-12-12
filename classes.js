class Person {

    constructor(name) {
        this.name = name
    }

    walk() {
        console.log("walk")
    }
}

const person = new Person("athos")
person.walk()
console.log(person);