
function generateManager(manager) {
    return `
    <div class="col-lg-4 col-sm-12 p-3">
    <div class="card p-3 shadow p-3 mb-5 bg-body rounded">
        <div class="card-body border border-2 rounded">
            <div class="grad p-2 mb-2 border border-3 rounded">
                <h5 class="card-title p-2 text-center text-light">${manager.fullName}</h5>
                <h5 class="card-title p-2 text-center">${manager.jobTitle}</h5>
            </div>
            <p class="card-text">ID: ${manager.id}</p>
            <p class="card-text">Email: <a href="${manager.email}"></a></p>
            <p class="card-text">Office Number: ${manager.officeNumber}</p>
        </div>
    </div>
</div>
    `;
}

function generateEngineer(engineer) {
    return `
    <div class="col-lg-4 col-md-6 col-sm-12 p-3">
    <div class="card p-3 shadow p-3 mb-5 bg-body rounded">
        <div class="card-body border border-2 rounded">
            <div class="grad p-2 mb-2 border border-3 rounded">
                <h5 class="card-title p-2 text-center text-light">${engineer.fullName}</h5>
                <h5 class="card-title p-2 text-center">${engineer.jobTitle}</h5>
            </div>
            <p class="card-text">ID: ${engineer.id}</p>
            <p class="card-text">Email: <a href="${engineer.email}"></a></p>
            <p class="card-text">GitHub: <a href="https://github.com/${engineer.userName}"
                    target="_blank">${engineer.github}</a></p>
        </div>
    </div>
</div>
    `;
}

function generateIntern(intern) {
    return `
    <div class="col-lg-4 col-md-6 col-sm-12 p-3">
    <div class="card p-3 shadow p-3 mb-5 bg-body rounded">
        <div class="card-body border border-2 rounded">
            <div class="grad p-2 mb-2 border border-3 rounded">
                <h5 class="card-title p-2 text-center text-light">${intern.fullName}</h5>
                <h5 class="card-title p-2 text-center">${intern.jobTitle}</h5>
            </div>
            <p class="card-text">ID: ${intern.id}</p>
            <p class="card-text">Email: <a href="${intern.email}"></a></p>
            <p class="card-text">School: ${intern.school}</p>
        </div>
    </div>
</div>
    `;
}

function generateHTML(input) {
    let profileArray = [];

    for (let i = 0; i < input.length; i++) {
        const employee = input[i];
        const role = employee.getRole();

        if (role === "Manager") {
            const managerProfile = generateManager(employee);
            profileArray.push(managerProfile);
        }

        if (role === "Engineer") {
            const engineerProfile = generateEngineer(employee);
            profileArray.push(engineerProfile);
        }

        if (role === "Intern") {
            const internProfile = generateIntern(employee);
            profileArray.push(internProfile);
        }
    }
    const employeeProfiles = profileArray.join("")
    const generateTeam = generateIndex(employeeProfiles);
    return generateTeam;

}



function generateIndex(employeeProfiles) {
    return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Team</title>
      <!--Google Font-->
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Laila&display=swap" rel="stylesheet">
      <!--Bootstrap-->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
      <!--CSS-->
      <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  
  <body>
      <header>
          <h1 class="text-center p-5 shadow-lg p-3 mb-5 bg-body">
              My Team
          </h1>
      </header>
      <section class="container">
          <div class="row">
              ${employeeProfiles}
          </div>
      </section>
  </body>
  
  </html>
`;
}


module.exports = generateHTML