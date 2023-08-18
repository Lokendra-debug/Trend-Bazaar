import nav from "./nav.js"
import footer from "./footer.js"

let queryArr = JSON.parse(localStorage.getItem("query-data"))||[];
let userData = JSON.parse(localStorage.getItem("signup"))||[];
let totalUser = document.getElementById("user-total")


let mainFooter = document.getElementById("footer");
let mainNav = document.getElementById("nav")

mainNav.innerHTML = nav;
mainFooter.innerHTML = footer;

let topScroll = document.getElementById("topScroll");
topScroll.addEventListener("click",()=>{
    event.preventDefault();
    window.scroll(0,0);
})

let topSearch = document.getElementById("topSearch");

 
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

let tbody = document.querySelector("tbody");



displayData(userData);

function displayData(data){
    tbody.innerHTML = null;


    data.forEach((el,i)=>{

        let tr = document.createElement("tr");

           let fname = document.createElement("td")
           fname.innerText = el.fname;

           let lname = document.createElement("td");
           lname.innerText = el.lname;

           let email = document.createElement("td");
           email.innerText = el.email;

           let password = document.createElement("td");
           password.innerText = el.pass;

           let remove = document.createElement("td");
           remove.innerText = "Remove";
           remove.style.background = "red";
           remove.style.cursor = "pointer"


           remove.addEventListener("click",()=>{
               
               userData = userData.filter((ele,index)=>{
                  if(ele.email==el.email){
                     return false
                  }
                  else{
                    return true
                  }
               })
               totalUser.innerText = data.length;

               localStorage.setItem("signup",JSON.stringify(userData));
               displayData(userData)
           })

        tr.append(fname,lname,email,password,remove);

        tbody.append(tr);

        totalUser.innerText = data.length;
    })
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