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
        message:
    }
  ]
};
