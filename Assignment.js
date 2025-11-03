
let Users = JSON.parse(localStorage.getItem("Users")) || [
  {
    Name:"dhoni",
    Email:"msd@gmail.com",
    Username: "ms",
    Password: "msd@123"
  },
  {
    Name:"virat",
    Email:"virat@gmail.com",
    Username: "king",
    Password: "king@123"
  }
];

function saveUsers() {
  localStorage.setItem("Users", JSON.stringify(Users));
}

let login = document.getElementById("loginform");
if (login) {
  login.addEventListener("submit", function (event) {
    event.preventDefault();
    let formdata = new FormData(event.target);
    let userData = Object.fromEntries(formdata.entries());

    if (
      Users.find(
        user =>
          user.Username === userData.Username &&
          user.Password === userData.Password
      )
    ) {
      window.location.replace("home.html");
    } else {
      window.location.replace("Registration.html");
    }
  });
}

let register = document.getElementById("Registerform");
if (register) {
  register.addEventListener("submit", function (event) {
    event.preventDefault();
    let registerform = new FormData(event.target);
    let registerData = Object.fromEntries(registerform.entries());
    console.log(registerData.Username);

    if (
      !Users.find(
        user =>
          user.Username === registerData.Username &&
          user.Password === registerData.Password
      )
    ) {
      let temp = {
        Username: registerData.Username,
        Password: registerData.Password
      };
      Users.push(temp);
      localStorage.setItem("Users", JSON.stringify(Users));
      window.location.replace("Login.html");
      console.log("True");
    }else{
        console.log("false");
    }
  }); 
}
