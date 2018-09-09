var lunch = false;
var snack = false;
var backpack = !false;
var folder = true;
var weekend = false;
var canIgoToSchool = !weekend && (lunch||snack) && folder && backpack;

console.log(canIgoToSchool);
if (canIgoToSchool === true) {
    console.log("Hooray, see you later")
}else{
    console.log("Aww man, now i'm stuck here")
};
