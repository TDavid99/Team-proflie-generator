module.exports = {
    managerQA: [
        {
            type: "input",
            name: "managerName",
            message: "What is the team manager name?(Required)",
            validate: (managerNameInput) => {
                if (managerNameInput) {
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
            message: "What is the team manager's ID? (Required)",
            validate: (managerIdInput) => {
                if (managerIdInput){
                    return true;
                } else {
                    console.log("please enter the team Manager's ID.");
                }
            }
        }
    ]
}