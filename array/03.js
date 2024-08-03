function square(arr) {
    return arr.map(function(element) {
      return element * element
    })
  }

  let array = [1, 2, 3, 4, 5, 6]
  let squareArray = square(array)
  console.log("The squared array is:", squareArray)