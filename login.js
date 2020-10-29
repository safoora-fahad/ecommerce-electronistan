let username = document.getElementById('username')
let password = document.getElementById('password')
let loginBtn = document.getElementById('do-login')
let overlay = document.getElementById('overlay')
let emailError = document.getElementById('emailError')
let passError = document.getElementById('passError')

dummyMail = "teamb@gmail.com"
dummypass = "12345"

loginBtn.onclick = ()=>{
    if(username.value == dummyMail && password.value==dummypass){
        overlay.style.display="flex"
    }

        if(username.value != dummyMail){
            emailError.style.display="block"
        }
        else{
            emailError.style.display="none"
        }

        if(password.value != dummypass){
            passError.style.display="block"
        }
        else{
            passError.style.display="none"
        }
}


function clickOk(){
    window.location.href = "index.html"
}
