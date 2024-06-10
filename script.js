const Menu_icon = document.querySelector('#menu-icon');
const nav_list = document.querySelector('.nav-list');
const nav = document.querySelector('nav');
const sr = ScrollReveal({
    distance:'60px',
    duration:2500,
    delay:400,
    reset:true
})

// membuat menu toggle
Menu_icon.addEventListener('click',()=>{
    Menu_icon.classList.toggle('bx-x')
    nav_list.classList.toggle('show')
})

// membuat agar saat di scroll muncul border-bottom
window.addEventListener('scroll',()=>{
    nav.classList.toggle('sticky',window.scrollY>50)
})

// membuat animasi delay saat scroll
sr.reveal('.home .home-img',{delay:800,origin:'right'})
sr.reveal('.home .home-content',{delay:800,origin:'left'})
sr.reveal('.home .home-content .wrapper',{delay:800,origin:'bottom'})
sr.reveal('.about h1',{delay:800,origin:'top'})
sr.reveal('.about-content .about-img',{delay:800,origin:'left'})
sr.reveal('..about-content .about-teks',{delay:800,origin:'right'})
