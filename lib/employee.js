class Employee{
    constructor(name, id , email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getname() {
        console.log("hello world")
        return this.name
    }
    getid() {
        return this.id
    }
    getemail() {
        return this.email;
    }
    getpostion() {
        return "Employee";
    }
}

module.exports = Employee;

