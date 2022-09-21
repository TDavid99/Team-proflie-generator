const Employee = require('./employee');

class Manager extends Employee{
    constructor(name, email, id, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getofficeNumber(){
        return this.officeNumber
    }

    getrole() {
        return 'manager';
    }
    
}
module.exports = Manager;

