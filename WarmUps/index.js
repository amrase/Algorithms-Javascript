// let arr=[10, 20, 20, 10, 10, 30, 50, 10, 20]
// console.log(sockMerchant(arr.length,arr))

//Sock Merchant
function sockMerchant(n, ar) {
    let sortedArray = ar.sort()
    console.log(sortedArray)
    let count = 0
    for(let i=0;i<n;i++){
        if(sortedArray[i]===sortedArray[i+1]){
            count++
            i++;
        }
    }
    return count;
    
}

let path= "UDDDUDUU"


//Counting Valleys
function countingValleys(n,s) {
    let valey=0;sealevel=0;
    for(let i=0;i<n;i++){
        let c = s.charAt(i);
        if(c==='U'){
            sealevel++;
        }
        if (c==='D'){
            sealevel--;  
            }
        if(sealevel == 0 && c =='U'){
            valey++;
         }
        }
    return valey;
 }

// console.log(countingValleys(path.length,path))

let c = [0,0,0,1,0,0]

function jumpingOnClouds(c) {
    var count = 0;
    for (var i = 0; i < c.length; i++) {
      if (c[i] === 0) {
        if (c[i] === c[i + 1]) {
          count++;
          i++;
        }
      } else {
        count++;
      }
    }
  
    return count;
}

console.log(jumpingOnClouds(c))
