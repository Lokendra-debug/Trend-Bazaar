
import nav from "./nav.js"
import footer from "./footer.js"

let queryArr = JSON.parse(localStorage.getItem("query-data"))||[];


let mainFooter = document.getElementById("footer");
let mainNav = document.getElementById("nav")

mainNav.innerHTML = nav;
mainFooter.innerHTML = footer;



// scroll click

let topScroll = document.getElementById("topScroll");
topScroll.addEventListener("click",()=>{
    event.preventDefault();
    window.scroll(0,0);
})

// 
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





let cartArr = JSON.parse(localStorage.getItem("trend-cart-key"))||[];
let navCount = document.getElementById("cart-show-nav")

navCount.innerText = cartArr.length;


let container1 = document.querySelector("#container1");
let container2 = document.querySelector("#shop-by-img");
let container3 = document.querySelector("#shop-by-bottom");
let container4 = document.querySelector("#camping-gear");
let container5 = document.querySelector("#exp-cont");
let container6 = document.querySelector("#foot-cont");
let container7 = document.querySelector("#insta-img");
let container8 = document.querySelector("#instaBottom");
let container9 = document.querySelector("#top-brands-div");



let imgArr1 = [
    {img:"https://media.graphassets.com/KHd0BJHvSZ2bAtLAWqEQ?format=pjpg&auto=webp"},
    {img:"https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {img:"https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {img:"https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsb3RoaW5nfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}
]

let shopByArr = [
   
    {img:"https://cdn-icons-png.flaticon.com/128/2530/2530005.png",
    text:"SNOW"},
    {img:"https://cdn-icons-png.flaticon.com/128/2491/2491921.png",
    text:"TRAVEL"},
    {img:"https://cdn-icons-png.flaticon.com/128/7247/7247515.png",
    text:"PADDLE"},
    {img:"https://cdn-icons-png.flaticon.com/128/71/71468.png",
    text:"CLIMB"},
    {img:"https://cdn-icons-png.flaticon.com/128/94/94203.png",
    text:"CYCLE"},
]



let shopByBottom = [
    {img:"https://media.graphassets.com/oPV693GQ5q9htXMruhkr?format=pjpg&auto=webp"},
    {img:"https://media.graphassets.com/SIH1JRz2R1aDiGwveLUK?format=pjpg&auto=webp"},
    {img:"https://media.graphassets.com/wwYOixLISVSmcrvdb7VT?format=pjpg&auto=webp"},
]

let campingGear = [
    
    {img:"https://media.graphassets.com/QdkSpBWcQoSlt819IUB6?format=pjpg&auto=webp"},
    {img:"https://media.graphassets.com/AEr0LC1S6O1ILKay2MR3?format=pjpg&auto=webp"},
    {img:"https://media.graphassets.com/W8RkqVRQaC9iNDrC52jc?format=pjpg&auto=webp"},

]


let exp = [
     {img:"https://media.graphassets.com/JtdemCYvTQ6eOkoE6Zvg?format=pjpg&auto=webp"},
     {img:"https://media.graphassets.com/c5KaUulROWvSANwQFcGi?format=pjpg&auto=webp"},
     {img:"https://media.graphassets.com/0P6fNzzhRgePWG5RSrPJ?format=pjpg&auto=webp"},
     {img:"https://media.graphassets.com/UYrY9aYqTrKdJU4oE8OI?format=pjpg&auto=webp"},
     {img:"https://media.graphassets.com/XZym2Oh8SM2pAowuoPEf?format=pjpg&auto=webp"},
     {img:"https://media.graphassets.com/sBdmxbbWSkyWOdyOTYD1?format=pjpg&auto=webp"},
     {img:"https://media.graphassets.com/CupO6ryVSijO7jlXzoQ6?format=pjpg&auto=webp"},
     {img:"https://media.graphassets.com/4zmWcZmRxS92Zy1kAoVJ?format=pjpg&auto=webp"}
]


let footTerrain = [
   {img:"https://media.graphassets.com/tgBebAnStKzYuNpeLqvy?format=pjpg&auto=webp"},
   {img:"https://media.graphassets.com/CLKwDIQ7R9uNgaPDSm5K?format=pjpg&auto=webp"},
   {img:"https://media.graphassets.com/AyaHIyxDSIyDlVWN5hSM?format=pjpg&auto=webp"},
   {img:"https://media.graphassets.com/AyaHIyxDSIyDlVWN5hSM?format=pjpg&auto=webp"},
   {img:"https://media.graphassets.com/vlQ5eKg0QSnjx5t2Zfvx?format=pjpg&auto=webp"},
   {img:"https://media.graphassets.com/ip0AMGanTMKMe5yw3OVQ?format=pjpg&auto=webp"},
   {img:"https://media.graphassets.com/pvaSHNmbR7yd8KcANRb9?format=pjpg&auto=webp"},
   {img:"https://media.graphassets.com/WJHekGRDTm2Rcd9PGVAI?format=pjpg&auto=webp"}
]

let instaFollow = [
    {img:"https://media.graphassets.com/COuVGSrzQ3sY6FyWjXgW?format=pjpg&auto=webp"}
]

let instaBottom = [

    {img:"https://media.graphassets.com/R4bWfWFeRZaP7lT85d2A?format=pjpg&auto=webp"},
    {img:"https://media.graphassets.com/9y53Ex5uSkO2B9rjAT15?format=pjpg&auto=webp"},
    {img:"https://media.graphassets.com/8tXqnMawRFKHauoYVOcu?format=pjpg&auto=webp"},
    {img:"https://media.graphassets.com/E1K6i5XHS5GrfFFbz0yA?format=pjpg&auto=webp"},
    {img:"https://media.graphassets.com/bYQGFeFRfuF8iTDWeQO1?format=pjpg&auto=webp"},
    {img:"https://media.graphassets.com/J2VTEUSOKRFbjXUik1og?format=pjpg&auto=webp"},
    {img:"https://media.graphassets.com/SJYzHVhbSJa7kld1z3rP?format=pjpg&auto=webp"},
    {img:"https://media.graphassets.com/spWBqESYRNiviYavMelF?format=pjpg&auto=webp"}
]

let topBrands = [
    {img:"https://media.graphassets.com/e6KAdK1QaK4pII4vgEoB?format=pjpg&auto=webp"},
    {img:"https://media.graphassets.com/J4GlZFdQduEebnnLoefI?format=pjpg&auto=webp"},
    {img:"https://media.graphassets.com/XtJUp945QadnpR3UOFAD?format=pjpg&auto=webp"},
    {img:"https://media.graphassets.com/gntHeDCgQXu3PWg5G6tc?format=pjpg&auto=webp"},
    {img:"https://media.graphassets.com/biFpMMcTkuHZyuPrlxFK?format=pjpg&auto=webp"},
    {img:"https://media.graphassets.com/Z5MqM8ySqyJHzA4xqAqg?format=pjpg&auto=webp"},
    {img:"https://media.graphassets.com/BxJnkrhDSp6UdZsh0Qkm?format=pjpg&auto=webp"},
    {img:"https://media.graphassets.com/4wMA8EDTb6EvVqExDbGm?format=pjpg&auto=webp"},
    {img:"https://media.graphassets.com/ZhYi4jB6TZyzJmADVHwL?format=pjpg&auto=webp"},
    {img:"https://media.graphassets.com/eSy612wiTs2nm4xHmIV4?format=pjpg&auto=webp"}
]






fetchContainer(imgArr1,container1);
fetchContainer(shopByArr,container2);
fetchContainer(shopByBottom,container3)
fetchContainer(campingGear,container4)
fetchContainer(exp,container5);
fetchContainer(footTerrain,container6);
// fetchContainer(instaFollow,container7);
fetchContainer(instaBottom,container8);
fetchContainer(topBrands,container9);  //container9


function fetchContainer(data,container){

    container.innerHTML =null;
    data.forEach(el=>{
       let div = document.createElement("div");

       let img = document.createElement("img");
       img.src = el.img;

       div.append(img);

       container.append(div)
    })
}



// mens,womens,kids click link


let menCLik = document.querySelector("#shop-by-bottom>div:nth-child(1)")
let womenCLik = document.querySelector("#shop-by-bottom>div:nth-child(2)")
let kidsCLik = document.querySelector("#shop-by-bottom>div:nth-child(3)")

menCLik.addEventListener("click",()=>{
    window.location.href = "mens.html";
})
womenCLik.addEventListener("click",()=>{
    window.location.href = "womens.html";
})
kidsCLik.addEventListener("click",()=>{
    window.location.href = "kids.html";
})






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


