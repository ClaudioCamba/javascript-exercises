const findTheOldest = function (obj) {

    let age = 0, persons;

    for (const person of obj) {
        if ("yearOfDeath" in person) {
            if ((person.yearOfDeath - person.yearOfBirth) > age) {
                persons = person;
                age = person.yearOfDeath - person.yearOfBirth;
            }
        } else {
            if ((new Date().getFullYear() - person.yearOfBirth) > age) {
                persons = person;
                age = new Date().getFullYear() - person.yearOfBirth;
            }
        }
    }

    return persons;
};

// Do not edit below this line
module.exports = findTheOldest;
