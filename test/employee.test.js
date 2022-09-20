const {test, expect} = require("@jest/globals");
const Employee = require("../lib/Employee.js");

test("creates an Employee Object", () => {
    const Employee = new Employee("Dave","1", "dave@email.com");
 
    expect(Employee.name).toBe("Dave");
    expect(Employee.id).toBe("1");
    expect(Employee.email).toBe("dave@email.com");
    
});

test("get employee's name", () => {
    const employee = new Employee("Dave", "1" ,"dave@email.com");
    expect(employee.getName()).toEqual(employee.name.tostring());

});