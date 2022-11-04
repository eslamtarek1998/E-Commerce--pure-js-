let productDom=document.querySelector(".products")
// let productInCart=localStorage.getItem("productInCart")




let noproduct=document.querySelector(".noproduct")

function drawProduct(allproducts=[]){

    if(JSON.parse(localStorage.getItem("productInCart")).length===0){
        noproduct.innerHTML="There is no Item !!"

    }


    let products=JSON.parse(localStorage.getItem("productInCart")) || allproducts

    let productUi=products.map((item)=>{

        return `
        

        <div class="product-item">

                    <img src="${item.imageUrl}" class="product-img" alt="images">


                    <div class="product-discription">
                        <h2>${item.title}</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing </p>
                        <span>Size:${item.size}</span>
                    </div>

                    <div class="product-actions">
                        <button class="add-to-cart" onclick="removeFromCart(${item.id})">Romove from Cart</button>
                        
                        

                    </div>

                </div>

                `
        

    })

    productDom.innerHTML=productUi


}

drawProduct()



// remove cart
function removeFromCart(id){
    let productInCart=localStorage.getItem("productInCart")
   if(productInCart) {
    let items=JSON.parse(productInCart)
    let filterdItems=items.filter((item)=>item.id!==id)
    localStorage.setItem("productInCart",JSON.stringify(filterdItems))
    drawProduct(filterdItems)
    

   }

   
}
