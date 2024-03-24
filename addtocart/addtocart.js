const product = [
    {
        id: 0,
        image:'img//foldphone.jpg',
        title: 'Foldable Mobile',
        price: 5000,
    },
    {
        id:1,
        image:'img/earpods.avif',
        title:'Airpods Pro',
        price:1200,
    },
    {
        id:2,
        image:'img/Camera.jpg',
        title:'250D DSLR Camera',
        price:20000,
    },
    {
        id:3,
        image:'img/Headphone.webp',
        title:'Head Phones',
        price:800,
    },
    {
        id:4,
        image:'img/Waterheater.jpg',
        title:'Water Heater',
        price:30000,
    },
    {
        id:5,
        image:'img/WashingMachine.webp',
        title:'Washing Machine',
        price:18000,
    },
    {
        id:6,
        image:'img/Fridge.webp',
        title:'Fridge',
        price:15000,
    },
    {
        id:7,
        image:'img/LEDtv.webp',
        title:'LED Tv',
        price:20000,
    }
];

const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById('root').innerHTML=categories.map((item)=>
    {
        var {image, title, price}=item;
        return(
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div>
                    <div class='bottom'>
                        <p>${title}</p>
                        <h2>₹ ${price}.00</h2>`+
                        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
                        `</div>
                    </div>`
        )
    }).join('')

    var cart=[];

    function addtocart(a){
        cart.push({...categories[a]});
        displaycart();
    }
    function delElement(a){
        cart.splice(a,1);
        displaycart();
    }

    function displaycart(a){
        let j = 0, total=0;
        document.getElementById("count").innerHTML=cart.length;
        if(cart.length==0){
            document.getElementById('cartItem').innerHTML="Your Cart is Empty";
            document.getElementById("total").innerHTML="₹ "+0+".00";
        }
        else{
            document.getElementById("cartItem").innerHTML=cart.map((items)=>
            {
                var {image,title,price} = items;
                total=total+price;
                document.getElementById("total").innerHTML="₹ "+total+".00";
                return(
                    `<div class='cart-item'>
                    <div class='row-img'>
                    <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size: 12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>₹ ${price}.00</h2>`+
                    "<i class='fa-solid fa-trash' onclick='delElement("+(j++) +")'></i></div>"
                );
            }).join('');
        }
    }