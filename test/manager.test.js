const Manager = require("../lib/Manager");
// const {expect} = require("@jest/globals");

test("get mangager content", () => {
  const manager = new Manager("David", 1, "David@email.com", "201");

  expect(manager.officeNumber).toEqual(expect.any(Number));
});
//     expect(manager.name).toEqual("David");
//     expect(manager.id).toEqual("1");
//     expect(manager.getOfficenumber).toEqual("201");
//     expect(manager.email).toEqual("David@gmail.com");
// });

test("get managers position", () => {
  const manager = new Manager("David", 1, "David@gmail.com", "201");

  expect(manager.getPostion()).toEqual("Manager");
});
