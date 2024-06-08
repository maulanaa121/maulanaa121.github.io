const Menu_icon = document.querySelector('#menu-icon');
const nav_list = document.querySelector('.nav-list');
const nav = document.querySelector('nav');


// membuat menu toggle
Menu_icon.addEventListener('click',()=>{
    Menu_icon.classList.toggle('bx-x')
    nav_list.classList.toggle('show')
})

// membuat agar saat di scroll muncul border-bottom
window.addEventListener('scroll',()=>{
    nav.classList.toggle('sticky',window.scrollY>50)
})