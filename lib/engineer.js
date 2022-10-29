const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, email, id, github){
        super(name, id, email);
        this.github = github;
    }

    getgithub(){
        return this.github
    }

    getrole() {
        return "Engineer";
    }
    
}
module.exports = Engineer;

