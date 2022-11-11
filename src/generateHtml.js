const Manager = require("../lib/Manager");

// generates html with team profile
const generateHtml = (teamManager, allEngineers, allInterns) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        </head>
        <body class="min-100-vh">
        <header>
        <h1 class ="bg-danger text -light mb-3 p-3 text-center"> My Team</h1>
        <header>
        <main>
        <div class="contanier">

        ${teamManager.map(
            (manager) =>
            `<div class="row justify-content-center">
            <div class="col-4 m-2">
            <div class="card">
            <div class="card-body">
            <h5 class="card-title">Manager</h5>
            <p class="card-text"> Name: ${manager.name}</p>
            <p class="card-text"> Employee ID: ${manager.id}</p>
            <p class="card-text"> Email address: <a herf ="mailto:${manager.email}">${manager.email}">${manager.email}</a></p>
            <p class="card-text"> Office number: ${manager.officeNumber}</p>
        </div>
     </div>
     </div>
     </div>`

    )}
    <div class="row justify-content-around">
    ${allEngineers
    .map(
        (engineer) =>
        //add `
        <div class="col-4 m-2">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Engineer</h5>
                    <p class="card-text">Name: ${engineer.name}</p>
                    <p class="card-text">Employee ID</p>
                    <p class="card-text">Email address: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                    <p class="card-text">GitHub username: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
                </div>
            </div>
        </div>
    )
    .join("")}

    ${allInterns
    .map(
        (intern) =>
        `<div class="col-4 m-2">
        <div class="card">
        <div`
    )}

    )}

    </html>;`
};

