import fetchData from "./fetchData.js";
import createFilter from "./createFilter.js";
import insertCards from "./insertCards.js";
import createSearch from "./createSearch.js";
import componentFocus from "./componentFocus.js";
import assignMode from "./assignMode.js";

async function driver(){
    assignMode();
    let data=await fetchData();
    createFilter(data);
    createSearch();
    insertCards(data);
    componentFocus();
}

driver();