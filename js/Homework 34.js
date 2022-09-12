let form = document.forms.login
let inputs = form.querySelectorAll('.active-blue')
let countErrorTxt = document.querySelector('.countError')
let countSuccessTxt = document.querySelector('.countSuccess')
let submitBtn = document.querySelector('.submit-btn')
// let topInputTxt = document.querySelectorAll('.top-input-txt')

form.onsubmit = (event) => {
    event.preventDefault()

    let error = false 
    let countError = 0
    let countSuccess = 0

    inputs.forEach(input => {
        if(input.value.length == 0) {
            error = true
            countError++
            input.style.border = "2px solid red";
            submitBtn.style.background = "red";
            submitBtn.style.border = "2px solid red";
        }

    })

    countSuccess = 7 - countError

    countErrorTxt.innerText = `${countError}`
    countSuccessTxt.innerText = `${countSuccess}`


    if(error == false) {
        submit()
    }

}

function submit() {
    let user = {}

    let fm = new FormData(form) 

    fm.forEach((value, key) => {
        user[key] = value   
    })

    console.log(user);
}