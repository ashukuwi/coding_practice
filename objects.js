//Lemonade Stand!!
var chips = {
    Doritos: 3,
    Lays: 2,
    Pringles: 3,
    Cape_Cod: 3
};
var lemonades = {
    small: 1,
    medium: 3,
    large: 5,
};
var chipTypes = ["Doritos", "Lays", "Pringles", "Cape_Cod"];
var lemonadeSizes = ["small", "medium", "large"];
var menu = {
chip: chipTypes,
lemonade: lemonadeSizes
};
var doritos = menu.chip[0];
var lays = menu.chip[1];
var pringles = menu.chip[2];
var cape_cod = menu.chip[3];
var small = menu.lemonade[0];
var medium = menu.lemonade[1];
var large = menu.lemonade[2];
var order = chips[doritos] + lemonades[large];
order = chips[lays] + lemonades[large];

console.log("You need to pay " + order + " $");







