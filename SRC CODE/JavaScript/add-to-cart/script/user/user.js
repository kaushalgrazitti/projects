import handleBack from "../handleBack.js";
import populateUser from "./populateUser.js";
import createCart from "./createCart.js";
import createSearch from "./createSearch.js";

function main(){
    populateUser();
    handleBack();
    createCart();
    createSearch();
}

main();