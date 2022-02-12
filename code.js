function divisibleSumPairs(n, k, ar) {
    // Write your code here
    // length of ar, divisor, array 
    // return two number pairs
    var result = 0
      for(let i = 0; i < n; i++){
        // console.log(ar[i])
        for(let j = 1; j < n - i ; j++){
          // console.log(ar[j])
          if((ar[i] + ar[j]) % k === 0){
            result ++
          } 
        } 
      } 
      return result

    }
    console.log(divisibleSumPairs(6, 3, [1,3,4,6,9,10]))
    let body = document.querySelector("body")
    let button = document.getElementById("button")
    button.addEventListener("click", function(){
    let input = document.getElementById("input").value
    let div = document.createElement("div")
    div.innerHTML = `${divisibleSumPairs(input)}`
    body.append(div)
  })