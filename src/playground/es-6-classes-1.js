class Person {
    constructor(name='Anonymous',age) {
        this.name = name;
        this.age=age;
        super.x="";
    }

    getGreeting() {
        return `Hi! I am ${this.name}`;
    }

}


class Student extends Person {
    constructor(name,age,major) {
        super(name,age);
        this.major=major;
    }

}

const me = new Student('Saaarthak');
console.log(me);

const other = new Person();
console.log(other);

console.log(other.getGreeting());
