let signupCheck = JSON.parse(localStorage.getItem("signup"))||[]

import nav from "./nav.js"
import footer from "./footer.js"
// import topSearch

let mainFooter = document.getElementById("footer");
let mainNav = document.getElementById("nav")

let isLoader = true;


let img = document.createElement("img");
img.setAttribute("class","loader");

mainNav.innerHTML = nav;
mainFooter.innerHTML = footer;

let topScroll = document.getElementById("topScroll");
topScroll.addEventListener("click",()=>{
    event.preventDefault();
    window.scroll(0,0);
})


let cartArr = (JSON.parse(localStorage.getItem("trend-cart-key"))) ||[];
// console.log(cartArr)
let queryArr = JSON.parse(localStorage.getItem("query-data"))||[];
console.log(queryArr);
// let x = queryArr[queryArr-length-1].query;


let navCount = document.getElementById("cart-show-nav");
navCount.innerText= cartArr.length;


// console.log(navCount.innerText)

let topSearch = document.getElementById("topSearch");
let form = document.querySelector("form");
let total = document.querySelector("#total");



// pagination starts here

let pageDiv = document.getElementById("pageNoDiv");

let lurl = "https://numero-backend.vercel.app/kids";
let lData= [];
let length;
let noOfPages;
let limit = 20;
let count = 1;
let first = document.getElementById("first")
let prev = document.getElementById("prev")
let next = document.getElementById("next")
let last = document.getElementById("last")
fetchLength(lurl);

async function fetchLength(url){
    let res = await fetch(url);
    // console.log(res);
    let data = await res.json();
    lData = data;
    console.log(lData);
    length = lData.length;
    total.innerText = length;
    console.log(lData);
    // console.log("length is"+ lData.length)
    // console.log()
    // console.log(`lData is ${lData}`)
}

// 

let fetchedArr = [];

let container1 = document.getElementById("container")
let url = `https://numero-backend.vercel.app/kids?_page=${count}&_limit=${limit}`
let url2 = "https://numero-backend.vercel.app/kids?_sort=price&_order=asc";
let url3 = "https://numero-backend.vercel.app/kids?_sort=price&_order=desc";



if(queryArr.length>0){
    let x = queryArr[queryArr.length-1].query;
    console.log(x);

    let url = `https://numero-backend.vercel.app/kids?q=${x}`;
    fetchData(url)
    // console.log("fetching")

}
else{
    fetchData(url)
}





let filterPrice = document.getElementById("filter-price");

filterPrice.addEventListener("change",filterPriceFun);

function filterPriceFun(){

    if(topSearch.value!=""){
     
        
          
        
    

                if(filterPrice.value==""){
                    fetchData(url)
                }

                if(filterPrice.value=="asc"){
                    let url2 = `https://numero-backend.vercel.app/kids?_sort=price&_order=asc&q=${topSearch.value}`
                    console.log("INSIDE")
                    fetchData(url2)
                }
                if(filterPrice.value=="desc"){
                    let url3 = `https://numero-backend.vercel.app/kids?_sort=price&_order=desc&q=${topSearch.value}`

                    fetchData(url3)

                }

    }

    else{

        if(filterPrice.value==""){
            fetchData(url)
        }

        if(filterPrice.value=="asc"){
            let url2 = `https://numero-backend.vercel.app/kids?_sort=price&_order=asc&_page=${count}&_limit=${limit}`;
            fetchData(url2)

        }

        if(filterPrice.value=="desc"){
            let url3 = `https://numero-backend.vercel.app/kids?_sort=price&_order=desc&_page=${count}&_limit=${limit}`;
            fetchData(url3)
        }
    }

}

form.addEventListener("submit",formSubmit);

function formSubmit(){
    event.preventDefault();
    let x = topSearch.value;

    let url = `https://numero-backend.vercel.app/kids?q=${x}`;
    fetchData(url)


}



  
async function fetchData(url){

    try {
        if(isLoader){
        
            // img.src = "https://img.freepik.com/free-icon/waiting_318-541180.jpg?size=338&ext=jpg&ga=GA1.1.1919601102.1674298651&semt=sph"
            img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVLETmYH1vvT-g6wLKLiX2qRw-laLp1c9DeQ&usqp=CAU"
            container1.append(img)
            // container1.innerText = "fetching"
        }
        let res = await fetch(url);
    
        let data = await res.json();
    
        
       console.log(data)
        fetchedArr = data;
        localStorage.removeItem("query-data")
        isLoader = false;
        if(!isLoader){
    
            displayData(data);
        }
    } catch (error) {
        console.log(error)
    }
}



function displayData(data){
   
    container1.innerHTML = null;

    data.forEach((el,i)=>{
 
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.img;

        let title1 = document.createElement("h4");
        title1.innerText = el.title1;

        let title2 = document.createElement("p");
        title2.innerText = el.title2;

        let price = document.createElement("p");
        price.innerText = el.price;

        let obj = {
            img:el.img,
            title1:el.title1,
            title2:el.title2,
            price:+(el.price),

        }

        let add = document.createElement("button");
        add.innerText = "Add to Cart"
        // add_to_cart

        

        add.addEventListener("click",()=>{
            
            if(signupCheck.length>0){
                if(checkData(obj)){
                    alert("Product already in cart");
                }
    
                else{
                    cartArr.push({...obj,quantity:1});
                    // console.log(cartArr)
                    navCount.innerText = cartArr.length;
                    
                    localStorage.setItem("trend-cart-key",JSON.stringify(cartArr))
                    alert("Product added to cart")
                }
            }
            else{
                alert("Please signup");
                window.location.href = "signup.html"
            }
             
        })








        div.append(img,title1,title2,price,add);
        container1.append(div)


        // total.innerText = data.length;


    })
}


function checkData(obj){

    for(let i=0;i<cartArr.length;i++){
        if(cartArr[i].title1==obj.title1&&cartArr[i].price==obj.price){
            // console.log(obj)
            return true
        }
    }

    return false;
}



// pagination


if(count==1){
    prev.disabled = true;
    prev.style.opacity = .7;
    first.disabled = true ;
    first.style.opacity = .7;

}
if(count!=1){
    prev.disabled = false;
    prev.style.opacity = 1;
    first.disabled = false ;
    first.style.opacity = 1;
}

first.addEventListener("click",()=>{

    count = 1;

    if(count!=noOfPages){
        last.disabled = false;
        last.style.opacity = 1;
        next.disabled = false ;
        next.style.opacity = 1;
    }
    if(count==1){
        prev.disabled = true;
        prev.style.opacity = .7;
        first.disabled = true ;
        first.style.opacity = .7;
    
    }
    pageDiv.innerText = count;
    let url = `https://numero-backend.vercel.app/kids?_page=${count}&_limit=${limit}`
    fetchData(url);
    window.scrollTo(0, 0);
})

// console.log(noOfPages);
last.addEventListener("click",()=>{
     
  noOfPages =  Math.ceil(length/limit);
    count = noOfPages;
        
        if(count!=1){
            prev.disabled = false;
            prev.style.opacity = 1;
            first.disabled = false ;
            first.style.opacity = 1;
        }
        if(count==noOfPages){
            next.disabled = true;
            next.style.opacity = .7;
            last.disabled = true ;
            last.style.opacity = .7;
        }
    
    // console.log(length,"66")
    console.log(noOfPages,"pages");
    // console.log(count)
    pageDiv.innerText = count;

    let url = `https://numero-backend.vercel.app/kids?_page=${count}&_limit=${limit}`
    fetchData(url)
    window.scrollTo(0, 0);
})
prev.addEventListener("click",()=>{
    if(count!=1){
        count--;

        if(count==1){
            prev.disabled = true;
            prev.style.opacity = .7;
            first.disabled = true ;
            first.style.opacity = .7;
           
        }
    }
    if(count==1){
        prev.disabled = true;
        prev.style.opacity = .7;
        first.disabled = true ;
        first.style.opacity = .7;
       
    }
    if(count!=noOfPages){
        last.disabled = false;
        last.style.opacity = 1;
        next.disabled = false ;
        next.style.opacity = 1;
    }


        
        pageDiv.innerText = count;
        let url = `https://numero-backend.vercel.app/kids?_page=${count}&_limit=${limit}`
       fetchData(url);
       window.scrollTo(0, 0);
})


next.addEventListener("click",()=>{
   
    noOfPages =  Math.ceil(length/limit);

    // if(count==noOfPages){
    //     console.log("do nothing")
    // }
    count++;
    if(count!=1){
        prev.disabled = false;
        prev.style.opacity = 1;
        first.disabled = false ;
        first.style.opacity = 1;
    }
    if(count==noOfPages){
        next.disabled = true;
        next.style.opacity = .7;
        last.disabled = true ;
        last.style.opacity = .7;
    }
    pageDiv.innerText = count;
    prev.disabled = false;


    // console.log(count)
    let url = `https://numero-backend.vercel.app/kids?_page=${count}&_limit=${limit}`
    fetchData(url)
    window.scrollTo(0, 0);
})

    pageDiv.innerText = count;
















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

