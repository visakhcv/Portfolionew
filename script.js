const header=document.querySelector("header")

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 0)
})

let menu=document.querySelector('#burger')
let navbar=document.querySelector('.navbar')

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}

window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active')
}

const scrolls = ScrollReveal({
    distance : '25px',
    duration : 2500,
    reset: true
})

scrolls.reveal('.home-text',{delay:190,origin:'bottom'})

scrolls.reveal('.about,.education,.portfolio,.contact',{delay:190, origin:'bottom'})