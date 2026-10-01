let nameId = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");
let button = document.getElementById("button");

function buttonId(){
  if(nameId.value === ""){
    button.innerText = "Invalid input!!";
  }
  else if(email.value ===""){
    button.innerText = "Invalid input!!";
  }
  else if(message.value ===""){
    button.innerText = "Invalid input!!";
  }
    else if(message.value.length < 40){
      button.innerText ="Invalid input!!";
    }
    else{
          document.getElementsByTagName("button").innerText=alert("Message sent successsfully!!!");
  }
}
const navbarIcon = document.getElementById('navbar-icon');
const header = document.getElementById('header');
const navLink = document.getElementById('navLink');
 
function showMenu() {
  navLink.classList.toggle("active");
  header.style.height = 'fit-content';
  header.style.transition = '500ms';
          // navLink.style.display = 'flex';

          console.log('clicked');
}




