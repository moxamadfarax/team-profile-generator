function managerCardGen(name, role, id, email, officeNum) {
  return `      <div class="card">
  <div class="card-header">
    <ul>
      <li><h2>${name}</h2></li>
      <br />
      <li><h3>${role}</h3></li>
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
</div>`;
}
function engineerCardGen(name, role, id, github) {
  return `      <div class="card">
  <div class="card-header">
    <ul>
      <li>
        <h2>${name}</h2>
      </li>
      <br />
      <li>
        <h3>${role}</h3>
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
          Email Adress :<a href="mailto:${email}">${email}</a>
        </h4>
      </li>
      <br />
      <br />
      <li>
        <h4>
          <a href="https://github.com/${github}">${github}}</a>
        </h4>
      </li>
    </ul>
  </div>
</div>`;
}
function internCardGen(name, role, id, school) {
  return `      <div class="card">
  <div class="card-header">
    <ul>
      <li><h2>${name}</h2></li>
      <br />
      <li><h3>${role}</h3></li>
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
          <a href="mailto${email}">${email}</a>
        </h4>
      </li>
      <br />
      <br />
      <li><h4>School : ${school}</h4></li>
    </ul>
  </div>
</div>`;
}
module.exports = {
  managerCardGen,
  engineerCardGen,
  internCardGen,
};
