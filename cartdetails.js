

/////////save item data in cart detail page ////////////////////


let productsSaved=JSON.parse(localStorage.getItem("products")) 
let productId=localStorage.getItem("productId")

let productDetail=productsSaved.find((item)=>item.id==productId)



let itemDetail=document.querySelector(".item-details")

itemDetail.innerHTML=`

<img src="${productDetail.imageUrl}" alt="">
<h2>${productDetail.title}</h2>
<span>Size:${productDetail.size}</span>



`


// ///////////////////////


