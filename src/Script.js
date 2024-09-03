const form = document.getElementById('form')
const emailAddress = document.getElementById('emailAddress')
const emailConfirm = document.getElementById('emailConfirm')
const errorElement = document.getElementById("error")

form.addEventListener('submit', (e) =>{
    let messages = []
    if (emailAddress.value != emailConfirm.value){
        messages.push("Email does not match...")
    }
    if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(", ")
    }
})
