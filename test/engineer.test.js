const Employee = require('../lib/Employee.js');
const Engineer = require('../lib/Engineer.js');

test("creates an engineer object", () => {
const engineer = new Engineer("Bobby","1", "Bjones@email.com", "Bjonesgit");

expect(engineer.name).toEqual("Bobby");
expect(engineer.id).toEqual("1");
expect(engineer.email).toEqual("Bjones@email.com");
expect(engineer.github).toEqual("Bjonesgit");
});

test('setup github', () => {
    const engineer = new Engineer("Bobby", "1", "Bjones@email.com", 'Bjonesgit');
    
    expect(engineer.getGithub()).toEqual(engineer.github.toString());
});

test("get  engineer postion", () => {
    const engineer = new Engineer("Bobby","1", "Bjones@email.com", "Bjonesgit");

    expect(engineer.getPostion()).toEqual("Engineer");
});
