const {test, expect} = require("@jest/globals");
const Employee = require("../lib/Employee.js");

test("creates an Employee Object", () => {
    const employee = new Employee("jesscia","1", "jess@email.com");
 
    expect(employee.name).toBe("jessica");
    expect(employee.id).toBe("1");
    expect(employee.email).toBe("jess@email.com");
    
});

test("get employee's name", () => {
    const employee = new Employee("jessica", "1" ,"jess@email.com");
    expect(employee.getname()).toEqual(employee.name.toString());

});

test("gets employee's ID", () => {
const employee = new Employee("jessica")

expect(employee.getid()).toEqual(employee.id.toString());
});
test("get employee postion", () => {
    const employee = new Employee("jessica", "1", "jess@gmail.com");
    
    expect(employee.getpostion()).toEqual("Employee");
});