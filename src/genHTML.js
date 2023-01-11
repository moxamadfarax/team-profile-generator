function managerCardGen() {
  return `      <div class="card">
  <div class="card-header">
    <ul>
      <li><h2>${staffData[0].name}</h2></li>
      <br />
      <li><h3>${staffData[0].role}</h3></li>
    </ul>
  </div>
  <div class="card-content">
    <ul class="container">
      <li><h4>Employee ID : ${staffData[0].id}</h4></li>
      <br />
      <br />
      <li>
        <h4>
          Email Adress :
          <a href="mailto:${staffData[0].email}">email</a>
        </h4>
      </li>
      <br />
      <br />
      <li><h4>Office Number :</h4></li>
    </ul>
  </div>
</div>`;
}
function engineerCardGen() {
  return `      <div class="card">
  <div class="card-header">
    <ul>
      <li><h2>Michael</h2></li>
      <br />
      <li><h3>Intern</h3></li>
    </ul>
  </div>
  <div class="card-content">
    <ul class="container">
      <li><h4>Employee ID :</h4></li>
      <br />
      <br />
      <li>
        <h4>
          Email Adress :
          <a href="mailto:mohamedfarah0508@gmail.com">email</a>
        </h4>
      </li>
      <br />
      <br />
      <li><h4>School :</h4></li>
    </ul>
  </div>
</div>`;
}
function internCardGen() {
  return `      <div class="card">
  <div class="card-header">
    <ul>
      <li><h2>Sophia</h2></li>
      <br />
      <li><h3>Engineer</h3></li>
    </ul>
  </div>
  <div class="card-content">
    <ul class="container">
      <li><h4>Employee ID :</h4></li>
      <br />
      <br />
      <li>
        <h4>
          Email Adress :
          <a href="mailto:mohamedfarah0508@gmail.com">email</a>
        </h4>
      </li>
      <br />
      <br />
      <li>
        <h4><a href="https://github.com/moxamadfarax">github</a></h4>
      </li>
    </ul>
  </div>
</div>`;
}
module.exports = {
  managerCardGen,
  engineerCardGen,
  internCardGen,
};
