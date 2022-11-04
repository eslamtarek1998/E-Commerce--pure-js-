let username=document.getElementById("username")
let password=document.getElementById("password")
let signin=document.getElementById("signin")


signin.addEventListener('click',function(e){

    e.preventDefault()

    if(username.value===""||password.value===""){
        alert("please fill data required")

    }

    else{

        if(localStorage.getItem('username')===username.value && localStorage.getItem('password')===password.value){
            setTimeout(function(){
                window.location="index.html"
    
            },1000)

        }
        else{
            alert("Data is incorrect")

        }
        


    }
})

// ///////////////////////////////////////////////////////////////////////////