import Date from './Date.js'
class Appointment {
  static id;
  #patientId;
  #date;
  #time;

  constructor(patientId, date, time) {
    Appointment.id += 1;
    this.setPatientId(patientId);
    this.setDate(date);
    this.setTime(time);
  }

  #isValidTime(time) {
    const result = /^\d{1,2}:\d{2}([ap]m)?$/.test(time); // (eg. 17:31 or 5:31pm)

    if (!result) {
      throw new Error("Invalid Time");
    }
  }

  getPatientId = () => {
    return this.#patientId;
  };
  setPatientId = (patientId) => {
    this.#patientId = patientId;
  };

  getDate = () => {
    return this.#date;
  };
  setDate = (date) => {
    this.#date = date;
  };

  getTime = () => {
    return this.#time;
  };
  setTime = (time) => {
    this.#isValidTime(time);
    this.#time = time;
  };
}

export default Appointment;
