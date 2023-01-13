function managerCardGen(name, id, email, officeNum) {
  return `      
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="reset.css" />
      <link rel="stylesheet" href="styles.css" />
       <title>Document</title>
    </head>
    <body>
      <nav>
        <header><h1>My Team</h1></header>
      </nav>
      <main class="jawnk">
      <div class="card">
  <div class="card-header">
    <ul>
      <li><h2>${name}</h2></li>
      <br />
      <li><h3>Manager</h3></li>
    </ul>
  </div>
  <div class="card-content">
    <ul class="container">
      <li><h4>Employee ID : ${id}</h4></li>
      <br />
      <br />
      <li>
        <h4>
          Email Adress :
          <a href="mailto:${email}">${email}</a>
        </h4>
      </li>
      <br />
      <br />
      <li><h4>Office Number : ${officeNum}</h4></li>
    </ul>
  </div>
 </div>
`;
}
function engineerCardGen(name, id, email, github) {
  return `      
  <div class="card">
   <div class="card-header">
    <ul>
      <li>
        <h2>${name}</h2>
      </li>
      <br />
      <li>
        <h3>Engineer</h3>
      </li>
    </ul>
   </div>
   <div class="card-content">
    <ul class="container">
      <li>
        <h4>Employee ID : ${id} </h4>
      </li>
      <br />
      <br />
      <li>
        <h4>
          Email Adress : <a href="mailto:${email}">${email}</a>
        </h4>
      </li>
      <br />
      <br />
      <li>
        <h4>
          Github : <a href="https://github.com/${github}">${github}</a>
        </h4>
      </li>
     </ul>
    </div>
</div>`;
}
function internCardGen(name, id, email, school) {
  return `      
  <div class="card">
   <div class="card-header">
     <ul>
       <li><h2>${name}</h2></li>
       <br />
       <li><h3>Intern</h3></li>
     </ul>
   </div>
  <div class="card-content">
    <ul class="container">
      <li><h4>Employee ID : ${id}</h4></li>
      <br />
      <br />
      <li>
        <h4>
          Email Adress : <a href="mailto:${email}">${email}</a>
        </h4>
      </li>
      <br />
      <br />
      <li><h4>School : ${school}</h4></li>
    </ul>
  </div>
</div>`;
}
function endHtml() {
  return `
  </main>
  </body>
  </html>`;
}
module.exports = {
  managerCardGen,
  engineerCardGen,
  internCardGen,
  endHtml,
};
