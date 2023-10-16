let news=document.querySelector('aside')
news.style.overflow='hidden'
news.style.overflowY='scroll'

let backimg=document.querySelector('body')
backimg.style.backgroundImage='none'
let nav=document.querySelector('.navbar-toggler')
nav.addEventListener('click', function(){
    let show=document.querySelector('#navbarTogglerDemo01')
    show.classList.toggle('show')
})