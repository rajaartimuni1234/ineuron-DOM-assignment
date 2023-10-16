let courselist=document.querySelectorAll('a')
/*for(let i=0;i<courselist.length;i++){
    i++
    courselist[i].remove()
}*/

for (let i=0;i<courselist.length;i++){
    let list =courselist[i].innerText
    const listarr=list.includes('2.0')
   // console.log(listarr);
    if (listarr==true)
    courselist[i].remove()
}

//2

let intputag= document.querySelector('.main__form-input')

let button=document.querySelector('.main__form-btn')

let form=document.querySelector('form')

intputag.disabled=false
 button.disabled=false

 form.addEventListener('submit', function(e){
    const input=document.querySelector('form input').value
    let newdata=JSON.parse(localStorage.getItem('input'))||[]
    newdata.push(input)
   
    localStorage.setItem('input',JSON.stringify(newdata))
   
  console.log(newdata);
  
 })
 let maindiv=document.querySelector('body')
 let newdata=JSON.parse(localStorage.getItem('input'))||[]
newdata.forEach(el => {
    console.log(el)
    let div=document.createElement('div')
    div.style.margin='auto'
    div.style.backgroundColor='red'
    div.style.width="400px"
    div.style.marginRight="340px"
    div.style.color='white'
    div.style.marginTop='15px'
    let p=document.createElement('p')
    p.innerText=el
    p.style.marginLeft='20p'
    div.append(p)
    maindiv.append(div)  
});


