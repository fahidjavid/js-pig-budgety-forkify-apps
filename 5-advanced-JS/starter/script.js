function hello_world(name) {
    var text = ' Good Morning!';

    console.log(name + text);

    return function (location) {
        location = ' in ' + location;
        console.log(name + text + location);
    }
}

// var person = hello_world('Fahid');
//
// person('Islamabad!');

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log(
                'Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\m a ' + this.job + ' and I\'m ' + this.age + ' years old.'
            );
        } else if (style === 'friendly') {
            console.log(
                'Hey What\'s up? ! I\'m ' + this.name + ', I\m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.'
            );
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

// john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');

// johnFriendly('morning');


var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];

    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }

    return arrRes;
}

function calculateAge(el) {
    return 2019 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);

console.log(ages);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(fullJapan);

