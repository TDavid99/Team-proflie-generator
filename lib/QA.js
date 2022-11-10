module.exports = {
  managerQA: [
    {
      type: "input",
      name: "managerName",
      message: "What is the team manager name?(Please)",
      validate: (managerNameData) => {
        if (managerNameData) {
          return true;
        } else {
          console.log("Please enter the team manager's name.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "ManagerId",
      message: "What is the team manager's ID? (Please)",
      validate: (managerIdData) => {
        if (managerIdData) {
          return true;
        } else {
          console.log("Enter the team Manager's ID.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is the team manager's email address? (Please)",
      validate: (managerEmailData) => {
        if (managerEmailData) {
          return true;
        } else {
          console.log("Enter the team manager's email address.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "ManagerOfficeNumber",
      message: "What is the team manager's office number? (Please)",
      validate: (managerOfficeNumberData) => {
        if (managerOfficeNumberData) {
          return true;
        } else {
          console.log("Enter the team manager's office number.");
          return false;
        }
      },
    },
  ],

  chooseEngineerOrIntern: [
    {
        type: "list",
        name: "addEmployee",
        message: "Add engineer or an intern?",
        choices: ["Engineer", "Intern"],
    },
  ],

  addEngineerQA: [
  {
    type: "input",
    name: "EngineerName",
    message: "What is the engineer's name? (Please)",
    validate: (engineerNameData) => {
        if (engineerNameData) {
            return true;
        } else {
            console.log("Enter the engineer's name.");
            return false;
        }
    },
  },
  {
    type: "input",
    name: "engineerId",
    message: "Engineer ID please. (Require)",
    validate: (engineerIdData) => {
        if (engineerIdData) {
            return true;
        } else {
            console.log("Enter the engineer ID.");
            return false;
        }
    },
  },
  {
    type: "input",
    name: "EngineerEmail",
    message: "What is the engineer email address? (Please)",
    validate: (EnginerEmailData) =>{
    if (EnginerEmailData) {
        return true;
    } else {
        console.log("Enter engineer's email address.");
        return false;
    } 
    },
    },
    {
        type
    }
  ]
};
