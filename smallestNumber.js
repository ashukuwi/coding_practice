var numbers = [175, 587, 338, 421, 649, 294, 175];
var weirdoKid = numbers.length;
var MiNiMuM = numbers[0];
var FindSmallestNumber = function() {
     for (i=1;i<=weirdoKid;i++) {
          if (MiNiMuM > numbers[i]) {
              MiNiMuM = numbers[i];
          }
     }

}
FindSmallestNumber();
console.log(MiNiMuM);