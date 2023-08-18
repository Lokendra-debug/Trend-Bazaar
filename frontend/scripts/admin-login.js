import nav from "./nav.js"
import footer from "./footer.js"

let mainFooter = document.getElementById("footer");
let mainNav = document.getElementById("nav")

mainNav.innerHTML = nav;
mainFooter.innerHTML = footer;

let topScroll = document.getElementById("topScroll");
topScroll.addEventListener("click",()=>{
    event.preventDefault();
    window.scroll(0,0);
})

let Adminform = document.getElementById("login");

let check = document.getElementById("check");
let password = document.getElementById("password")
check.addEventListener("click",show)

function show(){

    if(password.type=="password"){
        password.type="text"
    }
    else{
        password.type="password";
    }
}


Adminform.addEventListener("submit",formSubmit);


function formSubmit(){
    event.preventDefault();

    let email = Adminform.email.value;
    let pass = Adminform.password.value;

    
    
    if(email=="admin@trend.com"&&pass=="123"){

        alert("Succesfully logged in");
        window.location.href = "admin.html";
    }

    else{
        alert("It seems you are not an admin. Please go to the user login page for user log in")
    }
   
    

}














let logoNav = document.getElementById("logoImg");
let cartNav = document.getElementById("nav-cart");
let signNav = document.getElementById("nav-account");



logoNav.addEventListener("click",()=>{
   window.location.href = "index.html"
})

cartNav.addEventListener("click",()=>{
    window.location.href = "cart.html"
})


signNav.addEventListener("click",()=>{
    window.location.href = "signup.html"
})

