export class Customer {
    private firstName: String;
    private lastName: String;
    private age: Number;

    constructor(firstName: string, lastName: string, age: Number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    public greeter() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }

    public getAge() {
        console.log(`Customers age: ${this.age}`);
    }
};