function createPerson(firstName, lastName) {
    let person = {
        firstName,
        lastName,
    }

    Object.defineProperty(person, 'fullName',
        {
            get() {
                return `${this.firstName} ${this.lastName}`
            },
            set(fullNameString) {
                if (typeof fullNameString == 'string') {
                    let [fName, lName] = fullNameString.split(' ');
                    if (fName != undefined && lName != undefined) {
                        this.firstName = fName;
                        this.lastName = lName;
                    }
                }
            },
            enumerable: true,
        });
    return person;
};


let person = createPerson("Albert", "Simpson");
console.log(person.fullName); //Albert Simpson
person.firstName = "Simon";
console.log(person.fullName); //Simon Simpson
person.fullName = "Peter";
console.log(person.firstName);  // Simon
console.log(person.lastName);  // Simpson
