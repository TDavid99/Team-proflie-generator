const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, email, id, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getofficeNumber(){
        return this.officeNumber
    }

    getpostion() {
        return 'Manager';
    }
    
}
module.exports = Manager;

