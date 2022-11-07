const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, email, id, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    // }

    // getOfficeNumber(){
    //     return this.officeNumber
    }

    getPostion() {
        return 'Manager';
    }
    
}
module.exports = Manager;

