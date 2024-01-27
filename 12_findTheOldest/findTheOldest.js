const findTheOldest = function(people) {
    let oldestPerson = people.reduce( (oldestPerson, currentPerson) => {
        let oldestAge = getAge(oldestPerson.yearOfDeath, oldestPerson.yearOfBirth);
        let currentAge = getAge(currentPerson.yearOfDeath, currentPerson.yearOfBirth);

        return currentAge > oldestAge ? currentPerson : oldestPerson; // reduce returns one accumulated value - oldestPerson
    });

    return oldestPerson;
};

const getAge = function(death, birth) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
