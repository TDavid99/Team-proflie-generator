const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee.js");

test("creates an Employee Object", () => {
    const employee = new Employee("jessica", "1", "jess@email.com");

    expect(employee.name).toBe("jessica");
    expect(employee.id).toBe("1");
    expect(employee.email).toBe("jess@email.com");

});

test("get employee's name", () => {
    const employee = new Employee("jessica", "1", "jess@email.com");
    expect(employee.getName()).toEqual(employee.name.toString());

});

test("gets employee's ID", () => {
    const employee = new Employee("jessica")

    expect(employee.getId()).toEqual(employee.id.toString());
});
test("gets employee postion", () => {
    const employee = new Employee("jessica", "1", "jess@gmail.com");

    expect(employee.getPostion()).toEqual("Employee");
});
test("gets employee email", () => {
    const employee = new Employee("jessica", "1", "jess@email.com");

    expect(employee.getEmail()).toEqual(employee.email.toString());
});