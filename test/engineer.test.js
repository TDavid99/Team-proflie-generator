const Employee = require('../lib/Employee.js');
const Engineer = require('../lib/Engineer.js');

test("creates an engineer object", () => {
const engineer = new Engineer("Bobby","3", "Bjones@email.com", "Bjonesgit");

expect(engineer.name).toBe("Bobby");
expect(engineer.id).toBe("3");
expect(engineer.email).toBe("Bjones@email.com");
expect(engineer.github).toBe("Bjonesgit");
});

test('setup github', () => {
    const engineer = new Engineer("Bobby", "3", "Bjones@email.com", 'Bjonesgit');
    
    expect(engineer.getgithub()).toEqual(engineer.github.toString());
});

test("get  engineer postion", () => {
    const engineer = new Engineer("Bobby","3", "Bjones@email.com", "Bjonesgit");

    expect(engineer.getpostion()).toEqual("Engineer");
});
