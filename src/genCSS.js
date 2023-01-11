function cssGen() {
  return `body {
    background-color: rgb(218, 206, 206);
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  }
  nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: aqua;
    font-size: 120px;
  }
  .jawnk {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  h2 {
    font-size: 50px;
  }
  h3 {
    font-size: 35px;
  }
  h4 {
    font-size: 20px;
  }
  .card {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin-top: 80px;
    margin-left: 30px;
    width: 384px;
    border-radius: 15px;
    box-shadow: 3px 3px 3px 0px rgba(51, 49, 49, 0.3);
  }
  .card-header {
    background-color: rgb(120, 143, 207);
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    padding: 15px;
  }
  .card-content {
    background-color: rgb(226, 216, 216);
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-right: 15px;
    padding-left: 15px;
  }
  .container {
    background-color: rgb(245, 234, 234);
    border-radius: 15px;
    padding: 20px;
  }
  
  ul li h4 {
    margin-top: 10px;
    padding-top: 10px;
    border-bottom: 1px solid #000000;
  }`;
}
module.exports = cssGen();
