
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


let cArr = JSON.parse(localStorage.getItem("check-form"))||[];

let x = cArr[cArr.length-1].data;


localStorage.removeItem("trend-cart-key")



let img = document.getElementById("img");

let st = document.getElementById("order-status")



checkOut();


function checkOut(){

    setTimeout(()=>{

        st.innerText = "Your order is in process"
    },2000)
    
    setTimeout(()=>{
    
        st.innerText  = "Your order is being packed"
    },4000)
    
    setTimeout(()=>{
        st.style.color = green;
        st.innerText = "Your order is  placed succesfully"
        img.src = "https://media3.giphy.com/media/tf9jjMcO77YzV4YPwE/200w.webp?cid=ecf05e47qgsgays15orwqhuho9x8vgcqmncdoigzvq6xk61b&rid=200w.webp&ct=g"
    },6000)

    setTimeout(()=>{
        
        st.innerText = x;
        img.src = "https://media3.giphy.com/media/tf9jjMcO77YzV4YPwE/200w.webp?cid=ecf05e47qgsgays15orwqhuho9x8vgcqmncdoigzvq6xk61b&rid=200w.webp&ct=g";
    },8000)


    setTimeout(()=>{
        localStorage.removeItem("cart-form")
        st.innerText = "You are being redirected to Homepage........."
        img.src = "https://media3.giphy.com/media/tf9jjMcO77YzV4YPwE/200w.webp?cid=ecf05e47qgsgays15orwqhuho9x8vgcqmncdoigzvq6xk61b&rid=200w.webp&ct=g"
        
    },12000)



    setTimeout(()=>{
        window.location.href = "index.html"
    },16000)


    
}

