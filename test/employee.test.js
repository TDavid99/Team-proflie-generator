// const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee.js");

test("creates an Employee Object", () => {
    const employee = new Employee("jessica", 1, "jess@email.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});

// Gets id from getId
test("get employee's name", () => {
    const employee = new Employee("jessica", 1, "jess@email.com");

    expect(employee.getName()).toEqual(expect.any(String));

});
//gets employee ID
test("gets employee's ID", () => {
    const employee = new Employee("jessica", 1, "jess@email.com");

    expect(employee.getId()).toEqual(expect.any(Number));
});

//gets employee postion
test("gets employee postion", () => {
    const employee = new Employee("jessica", 1, "jess@gmail.com");

    expect(employee.getPostion()).toEqual("Employee");

    //gets employee email
});
test("gets employee email", () => {
    const employee = new Employee("jessica", 1, "jess@email.com");

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});