class PhoneNumber {
    constructor() {
        if (this.target == PhoneNumber) {
            throw new Error(" Object of Abstract Class cannot be created");
        }
    }
    getNumber() { }
    setNumber(number) { }
    isValid(number) { }
    
}

export default PhoneNumber;