const {test, expect} = require("@jest/globals");
const Employee = require("../lib/Employee.js");

test("creates an Employee Object", () => {
    const employee = new Employee("Dave","1", "dave@email.com");
 
    expect(employee.name).toBe("Dave");
    expect(employee.id).toBe("1");
    expect(employee.email).toBe("dave@email.com");
    
});

test("get employee's name", () => {
    const employee = new Employee("Dave", "1" ,"dave@email.com");
    expect(employee.getname()).toEqual(employee.name.toString());

});

test("gets employee's ID", () => {
const employee = new Employee("Dave")
}) 