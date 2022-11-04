let userinfo=document.getElementById("user-info")
let user=document.getElementById("user")
let links=document.getElementById("links")
let logout=document.getElementById("logout")

if(localStorage.getItem("username")){
    links.remove()
    userinfo.style.display='flex'
    user.innerHTML=localStorage.getItem('username')

}

logout.addEventListener('click',function(){
    localStorage.clear()
    setTimeout(function(){
        window.location='register.html'

    },1000)
    
    
})