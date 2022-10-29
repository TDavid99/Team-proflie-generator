const { expect } = require("@jest/globals");
const Employee = require("../lib/employee.js");
const intern = require("../lib/intern.js");


test("creates intern object", () => {
    const intern = new intern("TyroneWallace", "2", "Tyronew@email.com",);

    expect(intern.name).toBe("TyroneWallace");
    expect(intern.id).toBe("2");
    expect(intern.email).toBe("Tyronew@email.com");
    expect(intern.school).toBe("UNC-Charlotte");
});

test("interns school", () => {
    const intern = new intern("TyroneWallace", "2", "Tyronew@email.com", "UNC-Charlotte");

    expect(intern.getSchool()).toEqual(intern.school.toString());
});
test("gets Postion ", () => {
    const intern = new intern("TyroneWallace", "2", "Tyronew@email.com",);

    expect(intern.getpostion()).toEqual("Intern");
});