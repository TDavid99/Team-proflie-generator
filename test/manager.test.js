const Employee = require ('../lib/employee');
const Manager = require('../lib/manager')

Test("get mangager content", ()=> {
    const manager = new Mangager(David)
})

Test("get office number", ()=> {
    const testValue = 100;
    const e = new Manager("office", balcony, "manager@email.com", testvalue);
    expect(e.officeNumber).toBe(testValue);

});

test("get office number with getofficeNumber() method", () => {
    expect(e.getOfficenumber()).toBe(testValue);
});
test("getRole() return Manager", () => {
const testValue= 'Manager';
const e = new Manager("office", balcony, 'manager@email.com', 100)
expect(e.getrole()).toBe(testValue);
});