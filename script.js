const digits = document.querySelectorAll('button')
const show1 = document.getElementById('value1')
const show2 = document.getElementById('value2')

digits.forEach(digits => digits.addEventListener('click', () => {
      
   show1.innerHTML += digits.innerText
    let numbers = show1.innerHTML
   
if (digits.innerText == 'C') {
      show1.textContent = ''
      show2.textContent =""
      
}  else {
    show2.innerHTML = eval(numbers)
}

if (show1.textContent === show2.textContent) {
    show2.textContent = ""
}   
}))
