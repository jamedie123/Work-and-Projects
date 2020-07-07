/*
Find the maximum subbaray with the length of the number passed to the function

maxSubArray([100,200,300,400], 2) // 700
maxSubArray([1,4,2,10,23,3,10,20], 4) // 39
maxSubArray([-3,4,0,-2,6,-1], 2) // 5
maxSubArray([3,-2,7,-4,1,-1,4,-2,1], 2) // 5
maxSubArray([2,3], 2) // null
*/

maxSubArray Solution
function maxSubarraySum(arr, num){
    if (arr.length < num) return null;
 
    let total = 0;
    for (let i=0; i<num; i++){
       total += arr[i];
    }
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
       currentTotal += arr[i] - arr[i-num];
       total = Math.max(total, currentTotal);
    }
    return total;
}

