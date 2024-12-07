import {cart,removeFromCart} from "../cart.js";
import { products } from "../products.js";
import { formatCurrency } from "../utils/money.js";
let cartSummaryHtml;
cart.forEach((cartItem)=>{
    const productId = cartItem.productId;
    let matchingProducts;
    products.forEach((product)=>{
        if(product.id === productId){
            matchingProducts = product;
        }
    });
     
       cartSummaryHtml+=` <div id="cart-${matchingProducts.id}" class="cart-item-container">
        <div class="delivery-date">
        Delivery date: Wednesday, June 15
        </div>

        <div class="cart-item-details-grid">
        <img class="product-image"
        src="${matchingProducts.image}">

        <div class="cart-item-details">
        <div class="product-name">
        ${matchingProducts.name}
        </div>
        <div class="product-price">
       ${formatCurrency(matchingProducts.priceCents)}
        </div>
        <div class="product-quantity">
        <span>
        Quantity: <span class="quantity-label">${cartItem.quantity}</span>
        </span>
        <button class="update-quantity-link link-primary">
        Update
        </button>
        <button class="delete-quantity-link link-primary" id="js-delete-link" data-product-id="${matchingProducts.id}">
        Delete
        </button>
        </div>
        </div>

        <div class="delivery-options">
        <div class="delivery-options-title">
        Choose a delivery option:
        </div>

        <div class="delivery-option">
        <input type="radio" class="delivery-option-input"
        name="delivery-option-${matchingProducts.id}">
        <div>
        <div class="delivery-option-date">
            Tuesday, June 21
        </div>
        <div class="delivery-option-price">
            FREE Shipping
        </div>
        </div>
        </div>
        <div class="delivery-option">
        <input type="radio" checked class="delivery-option-input"
        name="delivery-option-${matchingProducts.id}">
        <div>
        <div class="delivery-option-date">
            Wednesday, June 15
        </div>
        <div class="delivery-option-price">
            $4.99 - Shipping
        </div>
        </div>
        </div>
        <div class="delivery-option">
        <input type="radio" class="delivery-option-input"
        name="delivery-option-${matchingProducts.id}">
        <div>
        <div class="delivery-option-date">
            Monday, June 13
        </div>
        <div class="delivery-option-price">
            $9.99 - Shipping
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    `;
   console.log(document.querySelector('delivery-option-price'))
})
document.querySelector('#js-order-summary').innerHTML = cartSummaryHtml;
 document.querySelectorAll('#js-delete-link').forEach((link)=>{
    link.addEventListener('click',()=>{
const productId = link.dataset.productId;
removeFromCart(productId);
 const container =document.querySelector(`.js-cart-item-container-${productId}`);
 console.log(container);
 
    });
});