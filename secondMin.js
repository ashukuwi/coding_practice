var givenNumbers = [10,40,32,2,5,1,100];

var findMin = function(givenNumbers){
   var min = givenNumbers[0];
   var minIndex=0;
   for(i=1;i<givenNumbers.length;i++){
       if(givenNumbers[i]<min){
           min=givenNumbers[i];
           minIndex=i;
       }
   }
   var temp = givenNumbers[0];
   givenNumbers[0]=givenNumbers[minIndex];
   givenNumbers[minIndex]=temp;
   return givenNumbers;
}

givenNumbers = findMin(givenNumbers);
console.info("After first iteration ",givenNumbers);
givenNumbers = findMin(givenNumbers.slice(1,givenNumbers.length));
console.info("After second iteration ",givenNumbers);
console.info("Second Min Number is ",givenNumbers[0]);