function sum(arr) {
    return arr.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue
    }, 0)
  }

  let array = [1, 2, 3, 4, 5, 6]
  let sumArray = sum(array)
  console.log("Sum of all elements is:", sumArray)