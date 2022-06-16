import MobileNumber from './phoneNumber/MobileNumber.js';
import Address from './Address.js';

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
        const patientAddress = new Address(address);
        this.setAddress(patientAddress);

        const number = new MobileNumber(mobileNumber)
        this.setMobileNumber(number);
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
        if (typeof name !== 'string' || trimName.length <= 0) {
            throw new Error('name must be a string and not empty')
        }
        this.#name = trimName;
    };

    #isGenderValid(gender) {
        if (gender === 'male' || gender === 'female') {
            return true;
        }
        return false;
    }
    getGender = () => {
        return this.#gender;
    };
    setGender = (gender) => {
        const checkGender = gender.toLowerCase().trim();
        if (!this.#isGenderValid(checkGender))
            throw new Error('gender must be a string and not empty')
        this.#gender = checkGender;
    };

    #isValidAge = (age) => {
        if ((typeof age === 'number' && age > 0 && age !== undefined)) {
            return true;
        }
        return false;
    }
    getAge = () => {
        return this.#age;
    };
    setAge = (age) => {
        const intAge = parseInt(age, 10);
        if (!this.#isValidAge(intAge)) {
            throw new Error('Age must be a number and not empty')
        }
        this.#age = intAge;
    };

    getAddress = () => {
        return this.#address.getName();
    };
    setAddress = (address) => {
        this.#address = address;
    };

    #isValidEmail = (email) => {
        if ((/.+\@.+\..+/.test(email))) {
            return true;
        }
        return false;
    }
    getEmail = () => {
        return this.#email;
    };
    setEmail = (email) => {
        if (email !== "" && !this.#isValidEmail(email)) {//"" is default value for email
            throw new Error('Email must be a string and not empty.');
        }
        this.#email = email;
    };

    getMobileNumber = () => {
        return this.#mobileNumber.getNumber();;
    };
    setMobileNumber = (mobileNumber) => {
        this.#mobileNumber = mobileNumber;
    };
}

export default Patient;