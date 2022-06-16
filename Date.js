class Date {
  #date;

  constructor(date) {
    this.setDate(date);
  }

  #isValidDate(date) {
    let pattern = new RegExp("[0-3][0-9]-(0|1)[0-9]-(19|20)[0-9]{2}");
    return pattern.test(date);
  }

  setDate(date) {
    if (!this.#isValidDate(date)) {
      throw new Error("Invalid Date");
    }
    this.#date = date;
  }

  getDate() {
    return this.#date;
  }
}
export default Date;
