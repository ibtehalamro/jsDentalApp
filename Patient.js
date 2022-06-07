class Patient {
    static #idCounter = 0;
    #id;
    #name;
    #gender;
    #age;
    #address;
    #email;
    #mobileNumber;

    constructor(name, gender, age, address, mobileNumber, email = "") {
        Patient.#idCounter += 1;
        this.setName(name);
        this.setGender(gender);
        this.setAge(age);
        this.setAddress(address);
        this.setMobileNumber(mobileNumber);
        this.setEmail(email);
        this.setId()
    }

    getId = () => {
        return this.#id;
    };
    setId = () => {
        if (this.#id === undefined)
            this.#id = Patient.#idCounter;
    };

    getName = () => {
        return this.#name;
    };
    setName = (name) => {
        const trimName = name.trim();
        if (typeof name !== 'string' || trimName.length <=0  ) {
            throw new Error('name must be a string and not empty')
        }
        this.#name = trimName;
    };

    getGender = () => {
        return this.#gender;
    };
    setGender = (gender) => {
        const checkGender = gender.toLowerCase().trim();
        if (checkGender !== undefined && !(checkGender === 'male' || checkGender === 'female')) {
            throw new Error('gender must be a string and not empty')
        }
        this.#gender = checkGender;
    };

    getAge = () => {
        return this.#age;
    };
    setAge = (age) => {
        const intAge = parseInt(age, 10);
        if (!(typeof intAge === 'number' && intAge > 0 && intAge !== undefined)) {
            throw new Error('age must be a number and not empty')
        }
        this.#age = intAge;
    };

    getAddress = () => {
        return this.#address;
    };
    setAddress = (address) => {
        const trimAddress = address.trim();
        if (typeof trimAddress !== 'string' && trimAddress == undefined) {
            throw new Error('address must be a string and not empty');
        }
        this.#address = trimAddress;
    };

    getEmail = () => {
        return this.#email;
    };
    setEmail = (email) => {
        if (email !== "") {
            if (!(/.+\@.+\..+/.test(email))) {
                throw new Error('email must be a string and not empty')
            }
        }
        this.#email = email;
    };

    getMobileNumber = () => {
        return this.#mobileNumber;
    };
    setMobileNumber = (mobileNumber) => {
        const trimMobileNumber = mobileNumber.trim();
        if (!(/^[0-9]{10}$/.test(trimMobileNumber))) {
            throw new Error('mobileNumber must be a 10 digits and not empty')
        }
        this.#mobileNumber = trimMobileNumber;
    };
}

export default Patient;