class Customer {
    firstName: String;
    lastName: String;

    public greeter() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}

// object = instace of class
let customer = new Customer();
customer.firstName = "John";
customer.lastName = "Smith";
customer.greeter();