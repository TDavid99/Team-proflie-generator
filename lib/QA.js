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
      name: "managerId",
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
      name: "managerOfficeNumber",
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
    name: "engineerName",
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
    validate: (enginerEmailData) =>{
    if (enginerEmailData) {
        return true;
    } else {
        console.log("Enter engineer's email address.");
        return false;
    } 
    },
    },
    {
        type: "input",
        name: "EngineerGithub",
        message: "What is the engineer's GitHub username? (Please)",
        validate:(engineerGithubData) => {
            if (engineerGithubData) {
                return true;
            } else {
                console.log("Enter the engineer's GitHub username!");
                return false;
            }
        },
    },
        ],
    addInternQA: [
        {
            type: "input",
            name: "internName",
            message: "What is the intern's name? (Please)",
            validate: (internNameData)=> {
                if (internNameData) {
                    return true;
                } else {
                    console.log("Enter the intern's name.");
                    return false;
                }
            },
        },
        {
            type: "input",
            name: "internId",
            message: "What is the intern's ID? (Please)",
            validate: (internIdData) => {
                if (internIdData) {
                    return true;
                } else {
                    console.log("Enter the intern ID.");
                    return false;
                }
            },
        },
        {
            type: "input",
            name: "internEmail",
            message:"What is the intern's email address? (Please)",
            validate: (internEmailData) => {
                if (internEmailData) {
                    return true;
                } else {
                    console.log("Enter the intern's email address.");
                    return false;
                }
            },
        },
        {
            type: "input",
            name: "internSchool",
            message: "Where does the intern attend school?(Please)",
            validate: (internSchoolData) => {
                if (internSchoolData) {
                    return true;
                } else {
                    console.log("Enter the intern's school.");
                    return false;
                }
            },
        },
    ],
  
    addAnotherEmployeeQAA: [
        {
            type: "confirm",
            name: "confirmNewEmployee",
            message: "Would you like to insert another employee?",
        },
    ],
};
