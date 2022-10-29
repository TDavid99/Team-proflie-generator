const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name, email, id, school){
        super(name, id, email);
        this.school = school;
    }

    getschool(){
        return this.school
    }

    getpostion() {
        return "Intern";
    }
    
}
module.exports = Intern;

