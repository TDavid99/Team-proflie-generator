const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer');

test('creates an engineer', () => {
const engineer = new Engineer('Bobby',"3456", "Bjones@email.com", "bjonesgit");

expect(engineer.name).toBe("Bobby");
expect(engineer.id).toBe("3456");
expect(engineer.email).toBe("Bjones@email.com");
expect(engineer.github).toBe("bjonesgit");
});

test('setup github', () => {
    const engineer = new Engineer("Bobby", "3456", "Bjones@email.com", 'bjonesgit');
    
    expect(engineer.getgithub()).toEqual(engineer.github.toString());
});

test("get role", () => {
    const engineer = new engineer("Bobby","3456", "bjones@email.com", "bjonesgit");

    expect(engineer.getrole()).toEqual("Engineer");
});
