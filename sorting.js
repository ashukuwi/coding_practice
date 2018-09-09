var numbers = [10,5,1,20,50];
var sorted = [];
var smallest = function(){
    
    while(numbers.length>0){
           var min=numbers[0];
           var minIndex=0;       
            
            for(i=1;i<numbers.length;i++){
                if(min>numbers[i]){
                    min=numbers[i];
                    minIndex=i;
                }
            }
            sorted.push(min);
            numbers.splice(minIndex,1);  
            
        }   
}

smallest();
console.log(sorted);
console.log(numbers);