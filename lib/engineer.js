const Employee = require("../lib/employee.js");
const engineer = require("../lib/engineer.js");

Test("creates and engineer", () => {
    const engineer = new engineer("bobby", "1", "bjones@email.com",)
    expect (engineer.name).toBe("Bobby");
    expect (engineer.id).toBe("1");
    expect (engineer.email).toBe("Bjones@email.com");
    expect (engineer.github).toBe("Bobbyjgit");
});

test("get github username", ()=> {
    const engineer = new engineer("Bobby", "1", "Bjones@email.com", "Bobbyjgit");
    expect(engineer.getGithub ()).toEqual(engineer.github.toString());
});

test("gets engineer role",() => {
 const engineer = new Employee("Bobby", "1", "Bjones@email.com","Bobbyjgit");

});
