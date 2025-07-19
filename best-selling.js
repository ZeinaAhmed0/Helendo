const bestSellingProducts =[
    {
        id : 1,
        title :"teapot with black tea",
        price : [40.00,635.00],
        isOutOfStock : true,
        isDiscount : false,
        description :"At vero accusamus et iusto odio dignissimos blanditiis praesentiums dolores molest",
        tags:"pottery",
        rate:5,
        category : ["furniture","table"],
        image:"./assets/imges/1_1-300x300.webp"
    },
    {
        id : 2,
        title : "simple chair",
        price : [70.00,95.00],
        isOutOfStock : false,
        isDiscount : false,
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
        isDiscount : false,
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
        isDiscount : true,
        description :"At vero accusamus et iusto odio dignissimos blanditiis praesentiums dolores molest",
        tags:"pot",
        rate:3,
        category :["decoration","accessories","furniture"],
        image: "./assets/imges/1_4-300x300.webp"
    },
    {
        id : 5,
        title : "living room & bedroom lights",
        price : [60.00,69.00],
        isOutOfStock : true,
        isDiscount : false,
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
        isDiscount : false,
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
        isDiscount : true,
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
        isDiscount : false,
        description :"At vero accusamus et iusto odio dignissimos blanditiis praesentiums dolores molest",
        tags:"pot",
        rate:5,
        category : ["furniture","table"],
        image:"./assets/imges/1_8-300x300.webp"
    }
]

// best selling products
let bestSellingCategoryType = "all products"
function handleBestSellingCategories() {
    if (bestSellingCategoryType == "all products") {
        handleBestSellingProducts(bestSellingProducts)
    }else{
        const filterCategories = bestSellingProducts.filter((product)=> product.category.includes(bestSellingCategoryType)) 
        handleBestSellingProducts(filterCategories)
        console.log(filterCategories);
    }
}
// to get category
function getBestSellingProductCategory() {
    let categories = []
    bestSellingProducts.map((item)=> {
        categories.push(item.category)
    })
    const spreadCategories = categories.flat()
    const uniqueCategories = ["all products", ...new Set(spreadCategories)]
    const uniqueCategoriesObj = uniqueCategories.map((item)=>({
        value : item
    }))
    // to put category on html
    let CategoryBestSellingNav = document.querySelector(".best-selling-nav")
    let html = ``
    uniqueCategoriesObj.forEach(ele => {
        html += `<li class="nav-item d-flex align-items-center justify-content-center">
    <a class="nav-link ${ele.value === bestSellingCategoryType? "active" : ""}"data-value ="${ele.value}" >${ele.value}</a>
    <span>${uniqueCategoriesObj.length -1 == uniqueCategoriesObj.indexOf(ele)? "" : "|"}</span>
    </li>`
    });
    CategoryBestSellingNav.innerHTML = html
    const item = document.querySelectorAll(".best-selling-nav a")
    item.forEach((ele)=> (ele.onclick = ()=>{
        bestSellingCategoryType = ele.dataset.value
        item.forEach((ele)=>ele.classList.remove("active"))
        ele.classList.add("active")
        handleBestSellingCategories()
    }))
}
getBestSellingProductCategory()
const bestSelling = document.querySelector(".best-selling")
function handleBestSellingProducts(product) {
    html = ``
    product.forEach((ele)=>{
        html += `<div class="d-flex align-items-center justify-content-between">
        <div class="product-card ${ele.isDiscount? "discount":""} ${ele.isOutOfStock?"stock":""}">
            <div class="icons-bg">
                <div class="icon-box">
                    <div class="icon view" onclick="showPopup(${ele.id})"><i class="fas fa-plus"><a href="#"></a></i></div>
                    <div class="icon cart"><i class="fas fa-cart-plus"><a href="#"></a></i></div>
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
    })
    bestSelling.innerHTML = html
}
handleBestSellingProducts(bestSellingProducts)
// best selling popup
const bestSellingPopup = document.querySelector(".best-selling-popup")
const bestSellingPopupContainer = document.querySelector(".best-selling-popup-container")
function closePopup() {
    bestSellingPopup.classList.remove("show")
    bestSellingPopupContainer.classList.remove("show-container")
}
function showPopup(productId) {
    bestSellingPopup.classList.add("show")
    bestSellingPopupContainer.classList.add("show-container")
    const chosenProduct = bestSellingProducts.find((product)=> product.id == productId)
    putPopupContent(chosenProduct)
    console.log(chosenProduct);
}
function putPopupContent(ele) {
    let html = ``
        html +=`<div class="popup-img">
                    <img src="${ele.image}" alt="">
                </div>
                <div class="popup-content">
                <div class="best-selling-popup-cursor" onclick="closePopup()"><i class="fas fa-xmark"></i></div>
                    <h3>${ele.title}</h3>
                <div class="popup-rate">
                ${new Array(5).fill(0).map((item, index)=> ele.rate > index ?`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill="#dcb14a"></path> </g></svg>`:`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill="#999"></path> </g></svg>`).join("")}
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
        bestSellingPopupContainer.innerHTML = html
}