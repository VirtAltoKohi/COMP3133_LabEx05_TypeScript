class Customer {
    private firstName: String;
    private lastName: String;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public greeter() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}

// object = instace of class
let customer = new Customer("John","Smith");
customer.greeter();