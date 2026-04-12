function valid_log(){
let email=document.getElementById('em').value;
let password=document.getElementById('pas').value;


    if(email==""||password==""){
        alert("Fill the required data!");
        return false;
    }

    else if(!email.includes("@")){
         alert("invalid email");
         return false; 
    }
     else if(password.length<6){
        alert("password must be at least 6 characters");
        return false;
    }

    let saveddata=JSON.parse(localStorage.getItem("user"));

    if(saveddata.email==email && saveddata.password==password){
        alert("Successfull login!");
       if(saveddata.role=="admin"){
        window.location.href="adminHP.html";
     }   
     else{
        window.location.href="userNavBar.html";
     }
    }
    else{
        alert("Wrong email or password!");
    }
    
    return false;
}
function showpass(){
     let password=document.getElementById('pas');
     if(password.type==="password"){
        password.type="text";
     }
     else{
        password.type="password";
     }
     
}
const input = document.getElementByclass("inputsearch");

input.addEventListener("keydown", () => {
  const sound = new Audio("sounds/keydown.mp3");
  sound.play();
  sound.volume = 0.2;
});