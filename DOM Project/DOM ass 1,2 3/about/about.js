

//task B 2

let accordiandiv=document.createElement('div')
accordiandiv.classList='accordian'
let h3=document.createElement('h3')
h3.textContent="Skills"
let p=document.createElement('p')
p.textContent="I posses a very good command over the full stack development technologies like MERN which can be seen in my work over the github"
accordiandiv.append(h3,p)
let appenddata=document.querySelector('.accordian-wrapper')
appenddata.append(accordiandiv)
console.log(appenddata)


let accordian=document.querySelectorAll(".accordian h3")

for(let i of accordian){
    i.style.backgroundColor="#d2c2fd"
    i.addEventListener('click' , ()=>{
        let para=i.nextElementSibling
        if (para.style.display=='none')
        para.style.display='block'
        else {
            para.style.display='none'
        }
    })
}