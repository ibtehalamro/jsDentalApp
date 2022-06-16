class Address {
    #name
    constructor(name) {
        this.setName(name);
    }

    #isValid = (name) => {
        if (name.length > 0) {
            return true
        }
        return false;
    }
    getName = () => {
        return this.#name;
    };
    setName = (name) => {
        const addressName = name.trim();
        if (!this.#isValid(addressName)) {
            throw new Error('address must be a string and not empty');
        }
        this.#name = addressName;
    };

}

export default Address;
