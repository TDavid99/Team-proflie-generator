
const Employee = require ('../lib/Employee');
const Manager = require('../lib/Manager');
const {expect} = require("@jest/globals");

test("get mangager content", ()=> {
    const manager = new Manager("David", "1", "David@email.com", "201")
    
    expect(manager.name).toBe("David");
    expect(manager.id).toBe("1");
    expect(manager.getOfficenumber).toBe("201");
    expect(manager.email).toBe("David@gmail.com");
});

test("get managers position", () => {
const manager = new Manager("David", "1", "David@gmail.com", "201")
expect(manager.getPostion()).toEqual("Manager");
});