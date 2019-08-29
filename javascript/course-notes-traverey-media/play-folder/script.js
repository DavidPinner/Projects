//////////////////////// constructor functions ///////////////////////////////////


//  function Person(name, dob) {
//      this.name = name;
//      this.birthday = new Date(dob);
//      this.calcAge = function() {
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//      }
     
     //console.log(this); // this is function scoped
//  }

//console.log(this);// this is global scope brings up window object

 // instantiate an object
//  const dave = new Person('Dave', 30, 'Paul');
//  const john = new Person('John', 15, 'Karen');
//  console.log(john, dave);

// date is written yyyy-mm-dd
// const dave = new Person('dave', '1981-11-06');

// console.log(dave.calcAge());


//////////////////////// built in constructor ///////////////////////////////////


// string

// const name1 = 'Dave'; 
// const name2 = new String('Dave'); 
//name2.foo = 'bar';


// console.log(typeof name1); // string
// console.log(typeof name2); // object


/////////////////////////////////// prototypes ///////////////////////////////////


// object.prototype
// person.prototype

//  function Person(firstName, lastName, dob) {
//      this.firstName = firstName;
//      this.lastName = lastName;
//      this.birthday = new Date(dob);
    //  this.calcAge = function() {
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    //  }
//  }

 // calculate age prototype

//  Person.prototype.calcAge = function() {
//                             const diff = Date.now() - this.birthday.getTime();
//                             const ageDate = new Date(diff);
//                             return Math.abs(ageDate.getUTCFullYear() - 1970);
//                         };
 
// // get full name                        
// Person.prototype.getFullName = function() {
//                                 return this.firstName + ' ' + this.lastName
//                             };                       


// // get married
// Person.prototype.getsMarried = function(newLastName) {
//                                 this.lastName = newLastName;
//                                 };



// the date needs to be stored as a string
// const john = new Person('John', 'Smith', '1955-12-25');
// const karen = new Person('Karen', 'Jones', '1990-06-15');

// // console.log(john, karen);
// console.log(john.getFullName());
// console.log(karen.getFullName());

// karen.getsMarried('smith')
// console.log(karen.getFullName());

// console.log(karen.hasOwnProperty('firstName'));


/////////////////////////////////// prototypal inheritance ///////////////////////////////////


// person constructor

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// // greeting prototype
// Person.prototype.greeting = function() {
//     return `${this.firstName} ${this.lastName}`
// }

// const person1 = new Person('Dave', 'Pinner');

// console.log(person1.greeting());

// // customer function constructor 
// function Customer(firstName, lastName, phone, membership) {
//     // this will get the objects via the person constructor
//     Person.call(this, firstName, lastName);
//     // call the rest as normal
//     this.phone = phone;
//     this.membership = membership;
// }  

// // inherit the person prototype, object starts with a capital letter
// Customer.prototype = Object.create(Person.prototype);

// // make customer.prototype return customer();
// Customer.prototype.constructor = Customer;

// // create customer
// const customer1 = new Customer('Dave', 'Pinner', 12345, true);

// console.log(customer1);

// // customer greeting
// Customer.prototype.greeting = function() {
//     return `Hello there ${this.firstName} ${this.lastName} welcome to my world as crazy as it may be`;
// }

// console.log(customer1.greeting());


/////////////////////////////////// Object.create ///////////////////////////////////
