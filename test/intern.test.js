const { expect } = require("@jest/globals");
// const Employee = require("../lib/employee.js");
const Intern = require("../lib/intern.js");


test("creates intern object", () => {
    const intern = new Intern("Tyrone", "1", "Tyronew@email.com","UNC-Charlotte");

    expect(intern.school) .toEqual(expect.any(String));
    // expect(intern.name).toEqual("Tyrone");
    // expect(intern.id).toEqual("1");
    // expect(intern.email).toEqual("Tyronew@email.com");
    // expect(intern.school).toEqual("UNC-Charlotte");
});

test("interns school", () => {
    const intern = new Intern("Tyrone", "1", "Tyronew@email.com", "UNC-Charlotte");

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// Gets postion of employee
test("gets Postion ", () => {
    const intern = new Intern("Tyrone", "1", "Tyronew@email.com", "UNC-Charlotte");

    expect(intern.getPostion()).toEqual("Intern");
});