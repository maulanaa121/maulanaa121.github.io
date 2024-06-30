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
    nav_list.classList.toggle('show')
})

// membuat agar saat di scroll muncul border-bottom
window.addEventListener('scroll',()=>{
    nav.classList.toggle('sticky',window.scrollY>50)
})

// membuat animasi
sr.reveal('.about h1',{delay:700,origin:'top'})
sr.reveal('.about-content .about-img',{delay:800,origin:'right'})
sr.reveal('.about-content .about-teks',{delay:900,origin:'left'})
sr.reveal('.education .heading',{delay:50,origin:'bottom'})
sr.reveal('#skills .skills-left',{delay:200,origin:'left'})
sr.reveal('#skills .skills-right',{delay:200,origin:'right'})