// ES6
const question = new Map();

question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correction answer :D');
question.set(false, 'Wrong, please try again!');

// console.log(question.get('question'));
// console.log(question.size);

// question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

for (let [key, value] of question.entries()) {
    // console.log(`This is ${key}, and it's set to ${value}`)
}


// ES5
var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
};

var Athlete5 = function (name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
};

Athlete5.prototype = Object.create(Person5.prototype);

var johnAthlete5 = new Athlete5('John', 1992, 'swimmer', 3, 10);

// johnAthlete5.calculateAge();

// ES6

class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    };

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('John', 1992, 'swimmer', 3, 10);

// johnAthlete6.wonMedal();
// johnAthlete6.calculateAge();