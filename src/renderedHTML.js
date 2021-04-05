
function generateManager(input) {
    return `
    <div class="col-lg-4 col-sm-12 p-3">
    <div class="card p-3 shadow p-3 mb-5 bg-body rounded">
        <div class="card-body border border-2 rounded">
            <div class="grad p-2 mb-2 border border-3 rounded">
                <h5 class="card-title p-2 text-center text-light">${input.fullName}</h5>
                <h5 class="card-title p-2 text-center">${input.jobTitle}</h5>
            </div>
            <p class="card-text">ID: ${input.id}</p>
            <p class="card-text">Email: <a href="${input.email}"></a></p>
            <p class="card-text">Office Number: ${input.officeNumber}</p>
        </div>
    </div>
</div>
    `;
}

function generateEngineer(input) {
    return `
    <div class="col-lg-4 col-md-6 col-sm-12 p-3">
    <div class="card p-3 shadow p-3 mb-5 bg-body rounded">
        <div class="card-body border border-2 rounded">
            <div class="grad p-2 mb-2 border border-3 rounded">
                <h5 class="card-title p-2 text-center text-light">${input.fullName}</h5>
                <h5 class="card-title p-2 text-center">${input.jobTitle}</h5>
            </div>
            <p class="card-text">ID: ${input.id}</p>
            <p class="card-text">Email: <a href="${input.email}"></a></p>
            <p class="card-text">GitHub: <a href="https://github.com/${input.userName}"
                    target="_blank">${input.github}</a></p>
        </div>
    </div>
</div>
    `
}

function generateIntern (input) {
    return `
    <div class="col-lg-4 col-md-6 col-sm-12 p-3">
    <div class="card p-3 shadow p-3 mb-5 bg-body rounded">
        <div class="card-body border border-2 rounded">
            <div class="grad p-2 mb-2 border border-3 rounded">
                <h5 class="card-title p-2 text-center text-light">${input.fullName}</h5>
                <h5 class="card-title p-2 text-center">${input.jobTitle}</h5>
            </div>
            <p class="card-text">ID: ${input.id}</p>
            <p class="card-text">Email: <a href="${input.email}"></a></p>
            <p class="card-text">School: ${input.school}</p>
        </div>
    </div>
</div>
    `
};


 function generateHTML (input) {
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
              ${myTeam}
          </div>
      </section>
  </body>
  
  </html>
`;
}

module.exports = generateHTML;