var numbers = [681, 523, 587, 338, 294, 1234, 1235, 1236, 102];
var outPut = [];
var weirdoKid = numbers.length;
var MiNiMuM = numbers[0];
var FindSmallestNumber = function() {
     for (i=1;i<=weirdoKid;i++) {
          if (MiNiMuM > numbers[i]) {
            outPut.unshift(MiNiMuM - numbers[i]); 
            MiNiMuM = numbers[i];
          }
        }                
        var SmallestNumber__INDEX = i;   
        console.info("output",outPut);
        console.log(SmallestNumber__INDEX);
}
var second;
var FindSecondSmallestNumber = function() {
    for (t=1;t<=weirdoKid;t++) {
         if (second > outPut[t]) {
           second = outPut[t];
           
           
           
             
         }
       }

               
           
         
       
}

FindSmallestNumber();
console.log(MiNiMuM);
second = outPut[0];
FindSecondSmallestNumber();
console.log(second);

