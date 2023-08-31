const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const burguerMenu = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const cartMenu = document.querySelector(".navbar-shopping-cart")
const productMenu = document.querySelector(".product-detail")
const cardsContainer = document.querySelector(".cards-container")

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
cartMenu.addEventListener('click', toogleCartMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive")
    productMenu.classList.add("inactive")
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive")
    productMenu.classList.add("inactive")
}

function toogleCartMenu() {
    productMenu.classList.toggle("inactive")
    desktopMenu.classList.add("inactive")
    mobileMenu.classList.add("inactive")
}

const productList = []
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: 'SmartTV',
    price: 12000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: 'Stereo',
    price: 800,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: 'Phone',
    price: 1000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: 'Server',
    price: 1200,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

function renderProducts(products) {
    for (product of products) {
        const productCard = document.createElement("div")
        productCard.classList.add('product-card')
        
        const ProductImg = document.createElement('img')
        ProductImg.src = product.image
    
        const productInfo = document.createElement("div")
        productInfo.classList.add('product-info')
    
        const productData = document.createElement("div")
    
        const productPrice = document.createElement("p")
        productPrice.innerText = `$ ${product.price}`
    
        const productName = document.createElement("p")
        productName.innerText = product.name
    
        const productFigure = document.createElement("figure")
    
        const productAddButton = document.createElement("img")
        productAddButton.src = "./icons/bt_add_to_cart.svg"
    
        productFigure.appendChild(productAddButton)
    
        productData.appendChild(productPrice)
        productData.appendChild(productName)
    
        productInfo.appendChild(productData)
        productInfo.appendChild(productFigure)
    
        productCard.appendChild(ProductImg)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)