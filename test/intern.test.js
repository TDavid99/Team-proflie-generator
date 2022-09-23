const { expect } = require("@jest/globals");
const Employee = require("../lib/employee.js");
const Intern = require("../lib/intern.js");

test("creates intern object", () => {
    const intern = new Intern("TyroneWallace","23", "Tyronew@email.com",);
    expect(intern.name).toBe("TyroneWallace");
    expect(intern.id).toBe(24);
    expect(intern.email).toBe("Tyronew@email.com");
    expect(intern.school).toBe("UNC-Charlotte");
});

test("interns school", () =>{
    const intern = new Intern ("TyroneWallace", "24","Tyronew@email.com","UNC-Charlotte");

    expect(intern.getSchool()).toEqual(intern.school.toString());
});
test("gets role", () => {
    const intern = new Intern("TyroneWallace", "24", "Tyronew@email.com",);

    expexct(intern.getRole()).toEqual("Intern");
});