import nav from "./nav.js"
import footer from "./footer.js"

let mainFooter = document.getElementById("footer");
let mainNav = document.getElementById("nav")

mainNav.innerHTML = nav;
mainFooter.innerHTML = footer;




let showLogin = document.getElementById("login-name");



let topScroll = document.getElementById("topScroll");
topScroll.addEventListener("click",()=>{
    event.preventDefault();
    window.scroll(0,0);
})


let queryArr = JSON.parse(localStorage.getItem("query-data"))||[];

let formQuery = document.querySelector("form");

formQuery.addEventListener("submit",formSubmitQuery);

function formSubmitQuery(){
    event.preventDefault();
    
    let x = {
        query:topSearch.value
    }

    queryArr.push(x);
    localStorage.setItem("query-data",JSON.stringify(queryArr));
    
    window.location.href = "all.html";
}

let signArr = JSON.parse(localStorage.getItem("signup"))||[];
console.log(signArr);

let form = document.getElementById("login");

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


form.addEventListener("submit",formSubmit);


let name
function formSubmit(){
    event.preventDefault();
    let email = form.email.value;
    let pass = form.password.value;
    
    let isSign = false;
    for(let i=0;i<signArr.length;i++){
        // name = signArr[i].fname
        let e = signArr[i].email;
        let p = signArr[i].pass;
        if(e==email&&p==pass){
            isSign = true;
            name = signArr[i].fname
            
            break;
        }

    }

    if(isSign){
        alert("Succesfully logged in");
        window.location.href = "index.html";
        showLogin.innerText = name;
        
    }
    else{
        alert("Invalid or Wrong Credentials")
    }
   
    

}














// navbar one"

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