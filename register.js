let username=document.getElementById("username")
let email=document.getElementById("email")
let password=document.getElementById("password")
let signup=document.getElementById("signup")

signup.addEventListener('click',function(e){

    e.preventDefault()

    if(username.value===""||email.value===""||password.value===""){
        alert("please fill data required")

    }

    else{
        localStorage.setItem("username",username.value)
        localStorage.setItem("email",email.value)
        localStorage.setItem("password",password.value)

        setTimeout(function(){
            window.location="login.html"

        },1000)
    }
})
// ///////////////////////////////////////////////////////////////////////////



