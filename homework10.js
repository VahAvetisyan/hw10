// 1. Create an Author class and a Book class.
// Author should have: name, email, gender.
// It should have appropriate getters and setters.
// It should have a toString method.
// Book should have: title, author(Author), price, quantity.
// It should have appropriate getters and setters.
// It should have a method: getProfit(), which calculates the profit from the book based on
// the price and quantity.
// It should have a toString method.

class Author {
    constructor(name, email, gender) {
        this._name = name;
        this._email = email;
        this._gender = gender;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        this._gender = value;
    }

    toString() {
        return `Author:${this._name}, email:${this._email}, gender:${this._gender}`;
    }
}

class Book {
    constructor(title, author, price, quantity) {
        this._title = title;
        this._author = author;
        this._price = price;
        this._quantity = quantity;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        this._author = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(value) {
        this._quantity = value;
    }

    getProfit() {
        return this._price * this._quantity;
    }

    toString() {
        return `Book:${this._title}, Author:${this._author}, price:${this._price}, quantity:${this._quantity}`;
    }
};


// 2. Create an Account class. Account should have: id, name, balance.
// It should have setters for name and balance, and getters for all fields.
// It should have a method: credit(amount), which should add amount to balance and
// return the updated balance.
// It should have a method: debit(amount), which should subtract the amount from the
// balance, if amount is less than the balance, otherwise output “Amount exceeded
// balance.”
// It should have a method: transferTo(anotherAccount, amount): which should subtract the
// amount from the account balance and add it to the given anotherAccount and return the
// updated balance, if amount is less than the balance, otherwise output “Amount
// exceeded balance.”
// It should have a static method: identifyAccounts(accountFirst, accountSecond) which
// gets two accounts and identifies if they are the same or not comparing all fields.
// It should have toString method.

class Account {
    constructor(name, balance) {
        this._name = name;
        this._balance = balance;
        this._id = Date.now();
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get balance() {
        return this._balance;
    }

    set balance(value) {
        this._balance = value;
    }

    credit(amount) {
        this._balance += amount;
        return this._balance;
    }

    debit(amount) {
        if (this._balance >= amount) {
            this._balance -= amount;
            return this._balance;
        } else {
            console.log("Amount exceeded balance.");
        }
    }

    transferTo(anotherAccount, amount) {
        if (this._balance >= amount) {
            this._balance -= amount;
            anotherAccount.balance += amount;
            return this._balance;
        } else {
            console.log("Amount exceeded balance.");
        }
    }

    static identifyAccounts(accountFirst, accountSecond) {
        return accountFirst.id === accountSecond.id &&
            accountFirst.name === accountSecond.name &&
            accountFirst.balance === accountSecond.balance;
    }

    toString() {
        return `Account(id:${this._id}, name:${this._name}, balance:${this._balance})`;
    }
};


// 3. Write classes: Person, Student, Staff.
// Person should have: firstName, lastName, gender, age.
// It should have appropriate getters and setters.
// It should have a method: toString().
// Student is inherited from Person. It should have program(array of strings), year, fee.
// It should have appropriate getters and setters.
// It should have method: passExam(program, grade). Student should contain the data
// about its programs and exams. passExam will update that data, so if student passed all
// the exams(grade is great or equal to 50), its year should be increased by one.
// It should have a toString method.
// Teacher is inherited from Person. It should have program(string), pay.
// It should have appropriate getters and setters.
// It should have a toString method.


class Person {
  constructor(firstName, lastName, gender, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._gender = gender;
    this._age = age;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = value;
  }

  get gender() {
    return this._gender;
  }

  set gender(value) {
    this._gender = value;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value;
  }

  toString() {
    return `Person(firstName=${this._firstName}, lastName=${this._lastName}, gender=${this._gender}, age=${this._age})`;
  }
}

class Student extends Person {
  constructor(firstName, lastName, gender, age, program, year, fee) {
    super(firstName, lastName, gender, age);
    this._program = program;
    this._year = year;
    this._fee = fee;
    this._exams = {};
  }

  get program() {
    return this._program;
  }

  set program(value) {
    this._program = value;
  }

  get year() {
    return this._year;
  }

  set year(value) {
    this._year = value;
  }

  get fee() {
    return this._fee;
  }

  set fee(value) {
    this._fee = value;
  }

  passExam(program, grade) {
    onsole.log(this._program.length)
    this._exams[program] = grade;
    let allProgramsPassed = true;
    for (let i = 0; i < this._program.length; i++) {
      let currentProgram = this._program[i];
      if (!this._exams[currentProgram] || this._exams[currentProgram] < 50) {
        allProgramsPassed = false;
        break;
      }
    }
    if (allProgramsPassed) {
      this._year++;
    }
  }

  toString() {
    return `Student(firstName:${this._firstName}, lastName:${this._lastName}, gender:${this._gender}, age:${this._age}, program:${this._program}, year:${this._year}, fee:${this._fee})`;
  }
}

class Teacher extends Person {
  constructor(firstName, lastName, gender, age, program, pay) {
    super(firstName, lastName, gender, age);
    this._program = program;
    this._pay = pay;
  }

  get program() {
    return this._program;
  }

  set program(program) {
    this._program = program;
  }

  get pay() {
    return this._pay;
  }

  set pay(pay) {
    this._pay = pay;
  }

  toString() {
    return `Teacher: ${this.fullName}, gender: ${this.gender}, age: ${this.age}, program: ${this.program}, pay: ${this.pay}`;
  }
}
