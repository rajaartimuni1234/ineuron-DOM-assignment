let button=document.querySelector('.navbar').lastElementChild

button.style.display='flex'
newBtn=document.createElement('a')
newBtn.textContent="Pro Subscription"
newBtn.classList.add('btn')
button.append(newBtn)

let listItem=document.querySelector('.tags-container').lastElementChild
let chinese=document.createElement('a')
chinese.style.href="#"
chinese.textContent="chinese(7)"
listItem.append(chinese)

let recipegallery=document.querySelector(".recipe-gallery")
let card=document.createElement('div')
card.textContent="Add 6th card"
card.classList='card'
recipegallery.append(card)