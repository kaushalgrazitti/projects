import getLocalData from "../getLocalData.js";
import { updateTotalCost } from "./createCart.js";

export default function (content) {
    let cartItems = getLocalData("cartItems");
    let cartElement = cartItems.find(element => element.id === content.id);
    let cardDiv = document.createElement("div");
    cardDiv.id = "id-" + content.id;
    cardDiv.style.display = "flex";
    cardDiv.style.flexDirection = "column";

    cardDiv.innerHTML = `
    <div style="
    background: #eab9ff url(${content.imageURL}) no-repeat center/100%;
    height:185px;
    ">
    
    </div>
    <div style="
    display:flex;
    justify-content: space-between;
    background-color: #c8ffd0;
    padding:10px;
    ">
        <div style="
        display: flex;
        flex-direction:column;
        justify-content: space-between;
        height: 50px;
        overflow:auto;
        scrollbar-color: transparent transparent;
        ">
            <div>
                ${content.itemName}
            </div>
            <div>
                &#x20B9;${content.price}
            </div>
        </div>
        <div class="add-to-cart-btn">
            Add to cart
        </div>
        <div class="selectedItemCart">
            <div>&minus;</div>
            <div>${cartElement ? cartElement.count : 1}</div>
            <div>&plus;</div>
        </div>
    </div>
    `;

    let addToCartDiv = cardDiv.querySelector(".add-to-cart-btn");
    let selectedItemCartDiv = cardDiv.querySelector(".selectedItemCart");
    if (cartElement) {
        addToCartDiv.style.display = "none";
    }
    else {
        selectedItemCartDiv.style.display = "none";
    }
    addToCartDiv.addEventListener("click", e => {
        cartItems = getLocalData("cartItems");
        cartItems.push({ id: content.id, count: 1, price: content.price });
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        addToCartDiv.style.display = "none";
        selectedItemCartDiv.style.display = "flex";
        updateCartCount();
        updateTotalCost();
        
    });
    let quantity = cardDiv.querySelector(`.selectedItemCart > :nth-child(2)`);
    cardDiv.querySelector(".selectedItemCart > :nth-child(1)").addEventListener("click", e => {
        cartItems = getLocalData("cartItems");
        cartElement = cartItems.find(element => element.id === content.id);
        cartElement.count--;
        if (cartElement.count === 0) {
            cartItems = cartItems.filter(ele => ele.count);
            selectedItemCartDiv.style.display = "none";
            addToCartDiv.style.display = "flex";
        }
        else quantity.innerText = +quantity.innerText - 1;
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        updateCartCount();
        updateTotalCost();
    });
    cardDiv.querySelector(".selectedItemCart > :nth-child(3)").addEventListener("click", e => {
        cartItems = getLocalData("cartItems");
        cartElement = cartItems.find(element => element.id === content.id);
        cartElement.count++;
        quantity.innerText = +quantity.innerText + 1;
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        updateTotalCost();
    });
    function updateCartCount() {
        let cartItemsLength = getLocalData("cartItems").length;
        let cartCount = document.querySelector(".count");
        if (cartItemsLength) {
            cartCount.innerText = cartItemsLength;
            cartCount.style.backgroundColor = "blue";
        }
        else {
            cartCount.innerText = "";
            cartCount.style.backgroundColor = "rgba(0,0,0,0)";
        }
    }
    updateCartCount();
    return cardDiv;
}