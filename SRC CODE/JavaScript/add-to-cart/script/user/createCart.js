import getLocalData from "../getLocalData.js";
import createCard from "./createCard.js";
import {cardCreationLoop} from "./populateUser.js";

export default function(){
    let toggleCart=true;
    let container=document.querySelector(".container");
    let cart=document.querySelector(".cart");
    let cartContent=document.querySelector(".cart-content");
    let blockContent=document.querySelector(".block-content");
    let amount=document.querySelector(".amount");
    cart.addEventListener("click",e=>{
        if(toggleCart){
            cart.style.filter="invert(1)";
            // cart.style.right= "60px";
            cart.style.background="white url(../../assets/shopping-cart.png) no-repeat center/72%"
            cartContent.style.width="50%";
            cartContent.style.top=`${window.scrollY}px`;
            blockContent.style.width="50%";
            container.style.filter="blur(50px)";
            let adminItems=getLocalData("adminItems");
            let cartItemsId=getLocalData("cartItems").map(element=>element.id);
            adminItems=adminItems.filter(element=>cartItemsId.includes(element.id));
            cartContent.innerHTML="";
            amount.style.visibility="visible";
            setTimeout(()=>{
                updateTotalCost();
                amount.style.width="50%";
            },100);
            adminItems.forEach(element=>{
                cartContent.append(createCard(element));
            });
            document.querySelector("body").style.overflow="hidden";
        }
        else{
            removingCartSlider();
        }
        toggleCart=!toggleCart;
    });
    blockContent.addEventListener("click",e=>{
        removingCartSlider();
        toggleCart=!toggleCart;
    });
    function removingCartSlider(){
        cart.style.filter="invert(0)";
        // cart.style.right= "20px";
        cart.style.background="url(../../assets/shopping-cart.png) no-repeat center/72%";
        amount.style.width="0%";
        amount.style.visibility="hidden";
        cartContent.style.width="0%";
        blockContent.style.width="0%";
        container.style.filter="blur(0px)";
        let cartItems=getLocalData("cartItems");
        document.querySelectorAll("main > div").forEach(ele=>{
            let item=cartItems.find(childEle=>"id-"+childEle.id===ele.id);
            if(item){
                ele.querySelector(".selectedItemCart > :nth-child(2)").innerText=item.count;
            }
            else{
                ele.querySelector(".selectedItemCart > :nth-child(2)").innerText=1;
                ele.querySelector(".selectedItemCart").style.display="none";
                ele.querySelector(".add-to-cart-btn").style.display="flex";
            }
        });
        cartContent.innerHTML="";
        document.querySelector("body").style.overflow="auto";
    }
}

export function updateTotalCost(){
    let cartItems=getLocalData("cartItems");
    let amount=document.querySelector(".amount");
    amount.innerHTML=`&#x20B9; ${cartItems.reduce((acc,ele)=>acc+ele.price*ele.count,0)}`;
}