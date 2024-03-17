import populateMain from "./populateMain.js";
import handleFilter from "./handleFilter.js";

async function main(){
    await populateMain();
    handleFilter();
}
main();