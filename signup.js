
function valid_sign(){
    let name=document.getElementById('name').value;
let email=document.getElementById('email').value;
let password=document.getElementById('pass').value;
let conf_pass=document.getElementById('conf_pass').value;
let admin=document.getElementById('admin').checked;


    if(name==""||email==""||password==""||conf_pass==""){
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
    else if(password!=conf_pass){
        alert("unmatched passwords!");
        return false;
    }
        
let user={
name:name,
password:password,
email:email,
role:admin?"admin":"user"
};

localStorage.setItem("user",JSON.stringify(user));
alert("account created succesfully");
return true;
}
function showpass(fieldId){
     let password=document.getElementById(fieldId);
     if(password.type==="password"){
        password.type="text";
     }
     else{
        password.type="password";
     }
     
}


