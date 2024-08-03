function count(arr) {
    return arr.reduce(function(accumulator, currentValue) {
      if (accumulator[currentValue]) {
        accumulator[currentValue]++
      } else {
        accumulator[currentValue] = 1
      }
      return accumulator
    }, {})
  }

  let array = [1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 4, 4, 5, 5, 5]
  let countedElements = count(array)
  console.log("The count of each of the elements is:", countedElements)