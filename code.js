function divisibleSumPairs(n, k, ar) {
    // Write your code here
    // length of ar, divisor, array 
    // return two number pairs
    var result = 0
      for(let i = 0; i < n; i++){
        for(let j = 1; j < n - i ; j++){
          if((ar[i] + ar[j]) % k === 0){
            result ++
          } 
        } 
      } 
      return result
    }
    console.log(divisibleSumPairs(2, 5, [2,1]))