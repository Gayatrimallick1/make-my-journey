let item=document.getElementById(item)
function abc()
{
    item.innerHTML=product.map((product)=>{

        let{price,name,image,rating}=product
        return`
        
        <div class=card />
        <img src="${img}/>
        <div class="text-detail">
        <p> price:${price}</p>
        <h1> ratting:${rating}</h1>
        <button> Add to cart</button>
        </div>
        </div>`

    })

}

var x=0;

document.getElementById('cart-amount').innerHTML=x
function add(img,price,rating){

    x+=1;

    document.getElementById('cart-amount').innerHTML=x

    document.getElementById('cart-item').innerHTML+=`<li>
    <div class="card">
    <img src="${img}/>
    <div class="text-detail">
        <p> price:${price}</p>
        <h1> ratting:${rating}</h1>
        <button onclick=""> Remove</button>
        </div>
        </div>
        </li>`
    

}
function remove(price,name,rating,img){
    for(var i=0;i<cart-item.length;i++)
    {
        cart_item[i].onclick = function(){

            this.parentnode.removechild(this)
        

        }
    }
    x=x-1;
    document.getElementById("cart-amount").innerHTML=x
}
var Total_price=0
document.getElementById('sum').innerHTML=Total_price



remove()

add()

abc()