import UserInput from './UserInput.js';
import Appointment from './Appointment.js';
import Patient from './Patient.js';
import Treatment from './Treatment.js';


class DentalManager {
    #options = [
        'add appointment',
        'add patient',
        'add treatment',
        'list patients',
        'list appointments',
        'list treatments'
    ];
    #appointments;
    #patients;
    #treatments;

    constructor() {
        this.setAppointments();
        this.setPatients();
        this.setTreatments();
    }

    setAppointments = (appointments) => {
        if (this.#appointments === undefined) {
            const app1 = new Appointment(1, '01-01-1999', '12:12am');
            const app2 = new Appointment(2, '07-01-1999', '02:02am');
            const app3 = new Appointment(3, '01-02-2000', '12:12pm');
            const app4 = new Appointment(4, '01-01-2010', '01:12am');
            this.#appointments = [app1, app2, app3, app4];
        }
    }

    getAppointments = () => {
        return this.#appointments;
    }

    addAppointment = (appointment) => {
        this.#appointments.push(appointment);
    }

    setPatients = () => {
        if (this.#patients === undefined) {
            const p1 = new Patient('p1', 'male', 12, 'hebron', '0123456789', 'ghfh@kkkh.jjj');
            const p2 = new Patient('p2', 'female', 1, 'city', '0585214785');
            const p3 = new Patient('p3', 'female', 14, 'Ramallah', '0581232134');
            const p4 = new Patient('p4', 'female', 21, 'nables', '0581234423');
            this.#patients = [p1, p2, p3, p4];
        }
    }

    getPatients = () => {
        return this.#patients;
    }

    addPatient = (patient) => {
        this.#patients.push(patient);
    }

    setTreatments = (treatments) => {
        if (this.#treatments === undefined) {
            this.#treatments = [];
        }
    }

    getTreatments = () => {
        return this.#treatments;
    }

    addTreatment = (treatment) => {
        this.#treatments.push(treatment);
    }

    getOptions() {
        let count = 1;
        console.log('****************************')
        for (let option of this.#options) {
            console.log(`${count++}  ${option}`)
        }
        console.log('****************************')
    }

    #isValidPatientId = (patientId) => {
        const pattern = new RegExp('^[0-9]+$')
        if (!(pattern.test(patientId) && parseInt(patientId) > 0)) {
            throw new Error('patientId must be a number and greater than zero')
        }
        const patient = this.getPatients().filter(p => p.getId() == patientId)
        if (patient.length === 0) throw new Error('patient is not found')
    }

    addAppointmentFromUser() {
        const input = UserInput.readUserLine;
        const patientId = input("Enter patient id ");
        const date = input("Enter appointment date (DD-MM-YYYY):");
        const time = input("Enter appointment time (hh:mmam/pm):");

        this.#isValidPatientId(patientId);

        const appointment = new Appointment(patientId, date, time);
        this.addAppointment(appointment);
    }

    addPatientFromUser() {
        const input = UserInput.readUserLine;
        const name = input("Enter patient name ");
        const gender = input("Enter patient gender ");
        const age = input("Enter patient age");
        const address = input("Enter patient address");
        const email = input("Enter patient email");
        const mobile = input("Enter patient mobile");

        const patient = new Patient(name, gender, age, address, mobile, email);

        this.addPatient(patient);
    }

    addTreatmentFromUser() {
        const input = UserInput.readUserLine;
        const appointmentId = input("Enter appointment  id ");
        const teethNumber = input("Enter tooth number");
        const teethPlan = input("Enter  tooth plan");

        const treatment = new Treatment(appointmentId);

        treatment.addTeethTreatment(teethNumber, teethPlan);
        this.addTreatment(treatment);
    }

    listPatients = () => {
        const patients = this.getPatients();
        for (let patient of patients) {
            const email = patient.getEmail() !== "" ? `email: ${patient.getEmail()}` : "";
            console.log(`id: ${patient.getId()} - name: ${patient.getName()} - age: ${patient.getAge()} - gender: ${patient.getGender()} - address: ${patient.getAddress()} - mobile number: ${patient.getMobileNumber()} - ${email}`);
        }
    }
    listAppointments = () => {
        const appointments = this.getAppointments();
        for (let appointment of appointments) {
            console.log(`Appointment ID: ${appointment.getPatientId()} - Date: ${appointment.getDate()} - Time: ${appointment.getTime()}`);
        }
    }
    listTreatments = () => {
        const treatments = this.getTreatments();
        for (let treatment of treatments) {
            console.log(`Appointment ID: ${treatment.getAppointmentId()} `);
            treatment.getTreatmentPlan().forEach((value, key) => {
            console.log ( `Teeth Number: ${key} - Treatment: ${value}`);
           } )
        }
    }

    userOption = (option) => {
        const index = option - 1;
        switch (option) {
            case 1:
                this.addAppointmentFromUser();
                break
            case 2:
                this.addPatientFromUser();
                break;
            case 3:
                this.addTreatmentFromUser();
                break;
            case 4:
                this.listPatients();
                break;
            case 5:
                this.listAppointments();
                break;
            case 6:
                this.listTreatments();
                break;
            default:
                console.log("your input in not supported")
        }
    }
}
export default DentalManager;
