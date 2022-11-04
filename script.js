// let userinfo=document.getElementById("user-info")
// let user=document.getElementById("user")
// let links=document.getElementById("links")
// let logout=document.getElementById("logout")

// if(localStorage.getItem("username")){
//     links.remove()
//     userinfo.style.display='flex'
//     user.innerHTML=localStorage.getItem('username')

// }

// logout.addEventListener('click',function(){
//     localStorage.clear()
//     setTimeout(function(){
//         window.location='register.html'

//     },1000)
    
    
// })


///////////3mlt ll7ta ele fo2 deh lw7dha fe user.js//////////


// ///////////////////////////////////////////////////////////////////////////


// /////////////define product/////////////////

let productDom=document.querySelector(".products")

let products=[
    {
        id:1,
        title:"headphone item",
        size:"large",
        imageUrl:"images/1.jpg"
    },
    {
        id:2,
        title:"iphone 14 pro item",
        size:"medium",
        imageUrl:"images/2.jpg"
    },
    {
        id:3,
        title:"watch item",
        size:"small",
        imageUrl:"images/3.jpg"
    },
    {
        id:4,
        title:"sunglasses item",
        size:"large",
        imageUrl:"images/4.jpg"
    },
    {
        id:5,
        title:"labtop item",
        size:"small",
        imageUrl:"images/5.jpg"
    },
    {
        id:6,
        title:"bag item",
        size:"Large",
        imageUrl:"images/6.jpg"
    },
    {
        id:7,
        title:"shoes item",
        size:"small",
        imageUrl:"images/7.jpg"
    },
    {
        id:8,
        title:"t-shirt item",
        size:"medium",
        imageUrl:"images/8.jpg"
    },
    
]


localStorage.setItem("products",JSON.stringify(products))


// display product///////////


let drawProduct

(drawProduct=function(products=[]){

    let productUi=products.map((item)=>{

        return `
        

        <div class="product-item">

                    <img src="${item.imageUrl}" class="product-img" alt="images">


                    <div class="product-discription">
                        <a onclick="saveItemData(${item.id})">${item.title}</a>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing </p>
                        <span>Size:${item.size}</span>
                    </div>

                    <div class="product-actions">
                        <button class="add-to-cart" onclick="addedToCart(${item.id})">Add To Cart</button>
                        <i class="fa-regular fa-heart fav"></i>
                        

                    </div>

                </div>

                `
        

    })

    productDom.innerHTML=productUi


})

(JSON.parse(localStorage.getItem("products")))


// //////////////////////////////////////////////////

let cartsproductDrop=document.querySelector(".cart-product div")
let badge=document.querySelector(".badge")



// check if there is items in local storage
let addedItem=localStorage.getItem("productInCart") ? JSON.parse(localStorage.getItem("productInCart")) :[]

if(addedItem){
    addedItem.map(item=>{

        cartsproductDrop.innerHTML+=`<p>${item.title}</p>`

    })
    badge.style.display='block'
    badge.innerHTML=addedItem.length
}


function addedToCart(id){


    if(localStorage.getItem("username")){

        let choosenItem=products.find((item)=> item.id===id)
        cartsproductDrop.innerHTML+=`<p>${choosenItem.title}</p>`
        addedItem=[...addedItem,choosenItem]
        localStorage.setItem("productInCart",JSON.stringify(addedItem))
    
    
        badge.style.display='block'
    
        
        let cartProductLength=document.querySelectorAll('.cart-product div p')
        badge.innerHTML=cartProductLength.length

    }
    else{
        window.location="login.html"
    }

}




let cartsproductMenu=document.querySelector(".cart-product ")
let shoppingcart=document.querySelector(".shopping-cart")


shoppingcart.addEventListener('click',function(){
    if(cartsproductDrop.innerHTML!=""){
        if(cartsproductMenu.style.display=='block'){
            cartsproductMenu.style.display='none'

        }
        else{
            cartsproductMenu.style.display='block'
        }
        

    }
})



//////////////////////////////////////////////////////

/////////save item data in cart detail page ////////////////////




function saveItemData(id){
    localStorage.setItem("productId",id)
    window.location="cartdetails.html"
}


// ///////////////////////////////////////////////////


// //////////Serach by name /////////////////////////

let inp=document.getElementById("search")

inp.addEventListener('keyup',function(e){

    
        search(e.target.value,JSON.parse(localStorage.getItem("products")))

    

    if(e.target.value.trim()===""){
        drawProduct(JSON.parse(localStorage.getItem("products")))

    }


})

function search(title,myArray){

    // for(let i=0;i<myArray.length;i++){
    //     if(myArray[i].title===title){
    //         console.log(myArray[i])
    //     }
    // }

    let arr=myArray.filter((item)=>item.title.indexOf(title)!==-1)
    console.log(arr)
    drawProduct(arr)
    
}


// ///////////////////////////////////////////////////










































































///////////////// w2ft whml lsa 3leha bs hrag3 el2wl  Lsa elcartsdetails.js lsa m3mltsh feh 7aga lsa hktb feh whkml 3la ele fo2ek//////////////////////





// let productDom=document.querySelector(".products")
// let products=[
//         {
//             id:1,
//             title:"headphone item",
//             size:"large",
//             imageUrl:"images/a.jpg"
//         },
//         {
//             id:2,
//             title:"sunglaesses item",
//             size:"medium",
//             imageUrl:"images/b.jpg"
//         },
//         {
//             id:3,
//             title:"labtop item",
//             size:"small",
//             imageUrl:"images/c.jpg"
//         },
//         {
//             id:4,
//             title:"mobile item",
//             size:"large",
//             imageUrl:"images/d.jpg"
//         },
//         {
//             id:5,
//             title:"watch item",
//             size:"small",
//             imageUrl:"images/e.jpg"
//         }
        
//     ]

//     function drawProduct(){
//         let productUi=products.map((item)=>{

//             return`
//             <div class="product-item">

//                   <img src="${item.imageUrl}" class="product-img" alt="images">


//                     <div class="product-discription">
//                          <a onclick="saveItemData(${item.id})">${item.title}</a>
//                          <p>Lorem, ipsum dolor sit amet consectetur adipisicing </p>
//                          <span>Size:${item.size}</span>
//                      </div>

//                     <div class="product-actions">
//                      <button class="add-to-cart" onclick="addedToCart(${item.id})">Add To Cart</button>
//                      <i class="fa-regular fa-heart fav"></i>
                        

//                      </div>

//                 </div>

            
//             `
//         })

//         productDom.innerHTML=productUi

//     }

//     drawProduct()

//     function checkLogedUser(){
//         if(localStorage.getItem('username')){

//             window.location="carts products.html"
//         }
//         else{
//             window.location="login.html"
//         }


//     }

//     // /////////////////////////////////////////////////

//     let cartsproductdiv=document.querySelector(".cart-product div")
    
//     let badge=document.querySelector(".badge")


//     function addedToCart(id){
        
//         let choosenItem=products.find((item)=>item.id===id)
        
//         cartsproductdiv.innerHTML+=`<p>${choosenItem.title}</p>`
//         badge.style.display='block'
//         let cartsproductPara=document.querySelectorAll(".cart-product div p")
//         badge.innerHTML=cartsproductPara.length
                
        
        
//     }

//     // /////////////////////////////////

//     let shoppingcart=document.querySelector(".shopping-cart")
//     let cartProduct=document.querySelector(".cart-product")
    

//     shoppingcart.addEventListener('click',function(){
//         cartProduct.style.display='block'
//     })
    






    




















