const { expect } = require("@jest/globals");
const Employee = require("../lib/employee.js");
const intern = require("../lib/intern.js");

test("creates intern object", () => {
    const intern = new intern("TyroneWallace","4624", "Tyronew@email.com",);
    expect(intern.name).toBe("TyroneWallace");
    expect(intern.id).toBe("4624");
    expect(intern.email).toBe("Tyronew@email.com");
    expect(intern.school).toBe("UNC-Charlotte");
});

test("interns school", () => {
    const intern = new intern ("TyroneWallace", "4624","Tyronew@email.com","UNC-Charlotte");

    expect(intern.getSchool()).toEqual(intern.school.toString());
});
test("gets role", () => {
    const intern = new intern("TyroneWallace", "4624", "Tyronew@email.com",);

    expect(intern.getRole()).toEqual("intern");
});