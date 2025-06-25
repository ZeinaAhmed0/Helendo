const products = [
    {
        id : 1,
        title :"teapot with black tea",
        price : [40.00,635.00],
        isOutOfStock : true,
        idDiscount : false,
        description :"At vero accusamus et iusto odio dignissimos blanditiis praesentiums dolores molest",
        tags:"pottery",
        rate:5,
        category : ["furniture","table"],
        image:"./assets/imges/1_1-300x300.webp"
    },
    /*
    {
        id : 2,
        title : "simple chair",
        price : [70.00,95.00],
        isOutOfStock : false,
        idDiscount : false,
        description :"At vero accusamus et iusto odio dignissimos blanditiis praesentiums dolores molest",
        tags:"chair",
        rate:4,
        category :["furniture","chair"],
        image:"./assets/imges/1_2-300x300.webp"
    },
    {
        id : 3,
        title : "smooth disk",
        price : [46.00],
        isOutOfStock : false,
        idDiscount : false,
        description :"At vero accusamus et iusto odio dignissimos blanditiis praesentiums dolores molest",
        tags:"disk",
        rate:4,
        category :["accessories","decoration"],
        image:"./assets/imges/1_3-300x300.webp"
    },
    {
        id : 4,
        title : "wooden flowerpot",
        price : [40.00,635.00],
        isOutOfStock : false,
        idDiscount : true,
        description :"At vero accusamus et iusto odio dignissimos blanditiis praesentiums dolores molest",
        tags:"pot",
        rate:3,
        category :["decoration","accessories","furniture"],
        image: "./assets/imges/1_4-300x300.webp"
    }
    ,
    {
        id : 5,
        title : "living room & bedroom lights",
        price : [60.00,69.00],
        isOutOfStock : false,
        idDiscount : false,
        description :"At vero accusamus et iusto odio dignissimos blanditiis praesentiums dolores molest",
        tags:"lamp",
        rate:4,
        category :["decoration","accessories"],
        image:"./assets/imges/1_5-300x300.webp"
    },
    {
        id : 6,
        title : "gray lamp",
        price : [80.00],
        isOutOfStock : false,
        idDiscount : false,
        description :"At vero accusamus et iusto odio dignissimos blanditiis praesentiums dolores molest",
        tags:"lamp",
        rate:3,
        category :["decoration","accessories"],
        image:"./assets/imges/1_6-300x300.webp"
    },
    {
        id : 7,
        title : "decoration wood",
        price : [50.00],
        isOutOfStock : false,
        idDiscount : false,
        description :"At vero accusamus et iusto odio dignissimos blanditiis praesentiums dolores molest",
        tags:"decoration",
        rate:3,
        category :["decoration","accessories","table"],
        image:"./assets/imges/1_7-300x300.webp"
    },
    {
        id : 8,
        title :"teapot with black tea",
        price : [20.00,135.00],
        isOutOfStock : false,
        idDiscount : false,
        description :"At vero accusamus et iusto odio dignissimos blanditiis praesentiums dolores molest",
        tags:"pot",
        rate:5,
        category : ["furniture","table"],
        image:"./assets/imges/1_8-300x300.webp"
    }
    */
]
let categoryType = "all products"
// to get category
function getProductCategory() {
    let categories = []
    products.map((item)=> {
        categories.push(item.category)
    })
    const spreadCategories = categories.flat()
    const uniqueCategories = ["all products", ...new Set(spreadCategories)]
    console.log("categories :" + uniqueCategories);
    // to put category on html
    let CategoryNav = document.querySelector(" .nav")
    let html = ``
    uniqueCategories.forEach(ele => {
        html += `<li class="nav-item">
    <a class="nav-link" href="#">${ele}</a>
    </li>`
    });
    CategoryNav.innerHTML = html
}
getProductCategory()

// to put products
const productsContainer = document.querySelector(".products-container")
console.log(productsContainer);
function handleProducts() {
    let html = ``
    products.forEach((ele)=>{
        html += `<div class="col-md-3 position-relative">
            <div class="product-card d-flex flex-column g-2">
                <div class="icons-bg">
                    <div class="icon-box">
                        <div class="icon view onclick="showPopup(${ele.id})""><i class="fas fa-plus"><a href="#"></a></i></div>
                        <div class="icon cart"><i class="fab fa-shopify"><a href="#"></a></i></div>
                        <div class="icon wishlist"><i class="fas fa-heart"><a href="#"></a></i></div>
                    </div>
                </div>
                <div class="products-img">
                    <img src="${ele.image}" alt="teapot">
                </div>
                <div class="product-txt pt-2 d-flex flex-column align-items-center justify-content-center">
                    <h5>${ele.title}</h5>
                    <span>${ele.price.map((price)=> `<span>${ele.price.indexOf(price) == ele.price.length -1? "AE" + price : "AE" + price + "-"}</span>`).join("")}</span>
                </div>
            </div>
        </div>
        </div>`
    productsContainer.innerHTML = html
    })
}
handleProducts()



//popup
/*
const popup = document.querySelector(".popup")
const popupCursor = document.querySelector(".popup-cursor")
function closePopup() {
    popup.classList.remove("show")
    popupContainer.classList.remove("show-container")
}
function showPopup(productId) {
    popup.classList.add("show")
    popupContainer.classList.add("show-container")
    const filterProducts = products.find((product)=> product.id == productId)
    putPopupContent(filterProducts)
}
*/
const popupContainer = document.querySelector(".popup-container")
console.log(popupContainer);
function putPopupContent() {
    let html = ``
    products.forEach((ele)=>{
        html +=`<div class="popup-img">
                    <img src="${ele.image}" alt="">
                </div>
                <div class="popup-content">
                <div class="popup-cursor" onclick="closePopup()">X</div>
                    <h3>${ele.title}</h3>
                <div class="popup-rate">
                ${new Array(5).fill(0).map((item, index)=> ele.rate > index ?`<svg class="active" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>`:`<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4- 100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>`).join("")}
                </div>
                    <div class="price"> <span>${ele.price.map((price)=>`<span>${ele.price.indexOf(price) == ele.price.length-1 ? "AE"+ price : "AE"+ price +"-"}</span>`).join("")}</span></div>
                    <p>${ele.description}</p> 
                    <div class="is-available"><span><strong>available: </strong>${ele.isOutOfStock == true ? `<span class="out-of-stock">out of stock</span>`: `<span>in stock</span>`}</span></div>
                    <div class="cart-content">
                        <div class="counter">
                            <span class="dec">-</span>
                            <span class="count">0</span>
                            <span class="inc">+</span>
                        </div>
                        <div class="add-to-cart-content">
                            <span>add to cart</span>
                        </div>
                        <div class="wish-list">
                            <i class="fas fa-heart"></i>
                        </div>
                    </div>
                    <div class="category"><span><strong>categories: </strong><span>${ele.category}</span></span></div>
                    <div class="tag"><span><strong>tags: </strong><span>${ele.tags}</span></span></div>
                    <div class="social d-flex align-items-center justify-content-start gap-3">
                        <span>share this items : </span>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-google-plus-g"></i></a>
                        <a href="#"><i class="fab fa-pinterest-p"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>`
        })
        popupContainer.innerHTML = html
    }
putPopupContent()