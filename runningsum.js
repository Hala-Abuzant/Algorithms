
var nums=[1,2,3,4];  

    var temp;

for(var i=1;i<nums.length;i++){

    temp=0;

    for(var j=i;j>=i-1;j--){

    temp+=nums[j];

    }
    
    nums[i]=temp;
 }

console.log(nums);