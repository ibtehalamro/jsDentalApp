import PhoneNumber from "./PhoneNumber.js";

class MobileNumber extends PhoneNumber {
    #number;
    constructor(number) {
        super();
        this.setNumber(number);
    }

    isValid = (number) => {
        if (!(/^[0-9]{10}$/.test(number))) {
            return false;
        }
        return true;
    }

    getNumber = () => {
        return this.#number;
    };
    setNumber = (number) => {
        const num = number.trim();

        if (this.isValid(num)) {
            this.#number = num;
        } else {
            throw new Error('Mobile Number must be a 10 digits and not empty')
        }
    };
}

export default MobileNumber;