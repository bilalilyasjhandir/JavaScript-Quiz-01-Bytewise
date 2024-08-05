function double(arr) {
    return arr.map(function(element) {
      return element > 10 ? element * 2 : element
    })
  }

  let simpleNumbers = [1, 5, 8, 10, 15, 17, 23, 40]
  let doubledNumbers = double(simpleNumbers)
  console.log("Original array:", simpleNumbers)
  console.log("Doubled array if greater than 10:", doubledNumbers)