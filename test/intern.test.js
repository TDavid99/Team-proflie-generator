const { expect } = require("@jest/globals");
const Employee = require("../lib/employee.js");
const Intern = require("../lib/intern.js");


test("creates intern object", () => {
    const intern = new Intern("Tyrone", "1", "Tyronew@email.com","UNC-Charlotte");

    expect(intern.name).toBe("Tyrone");
    expect(intern.id).toBe("1");
    expect(intern.email).toBe("Tyronew@email.com");
    expect(intern.school).toBe("UNC-Charlotte");
});

test("interns school", () => {
    const intern = new Intern("Tyrone", "1", "Tyronew@email.com", "UNC-Charlotte");

    expect(intern.getSchool()).toEqual(intern.school.toString());
});
test("gets Postion ", () => {
    const intern = new Intern("Tyrone", "1", "Tyronew@email.com",);

    expect(intern.getPostion()).toEqual("Intern");
});