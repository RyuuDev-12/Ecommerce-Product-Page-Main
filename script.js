const addCart = document.querySelector('.add-cart')
const cart = document.querySelector('.cart')
const cartCard = document.querySelector('.cart-card')
const productCart = document.querySelector('.product-cart')
const productInfo = document.querySelector('.product-info')
const emptyp = document.querySelector('.cart-card p')
const cont = document.querySelector('.cont')
const editQuant = document.querySelectorAll('.edit')
const tumb = document.querySelectorAll('.tumb')
const mainImg = document.querySelector('.main')

var product = new Object()
product.name = 'Fall Limited Edition Sneakers'
product.price = document.querySelector('.price')
product.quant = 0
product.image = 'images/image-product-1.jpg'

cart.addEventListener('click', showCart)
function showCart(){
  cartCard.classList.toggle('empty')
}
editQuant.forEach((item, index) =>{
  item.addEventListener('click', function(){
    let contNumber = Number(cont.innerHTML)
    if(index != 0){
      cont.innerHTML = contNumber + 1
    }else{
      
      }
    }
  })
})

tumb.forEach((item, index) =>{
  item.addEventListener('click', function(){
    mainImg.setAttribute('src', `images/image-product-${index+1}.jpg`)
    item.classList.add('selected')
  })
})