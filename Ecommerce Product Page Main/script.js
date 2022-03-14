const addCart = document.querySelector('.add-cart')
const cart = document.querySelector('.cart')
const cartCard = document.querySelector('.cart-card')
const productCart = document.querySelector('.product-cart')
const productInfo = document.querySelector('.product-info')
const emptyp = document.querySelector('.cart-card p')
const cont = document.querySelector('.cont')
const more = document.querySelector('.more')
const less = document.querySelector('.less')
let product = 'Fall Limited Edition Sneakers'
let quant = 0
let price = 125.00


more.addEventListener('click', addQuant)
less.addEventListener('click', removeQuant)

function addQuant(){
  quant += 1
  cont.innerHTML = quant
}
function removeQuant(){
  if(quant > 0){
  quant -= 1
  cont.innerHTML = quant
  }
}


addCart.addEventListener('click', function(){
  let total = price * quant
  productCart.innerText = product
  productInfo.innerHTML = `<p>$${price}.00 x ${quant} <span>$${total}.00</span></p>`
})

cart.addEventListener('click', mostrarCarrinho)

function mostrarCarrinho(){
  if(quant == 0){
    cartCard.classList.toggle('empty')
    cartCard.classList.remove('active')
  }else{
    cartCard.classList.toggle('active')
    cartCard.classList.remove('empty')
  }
}