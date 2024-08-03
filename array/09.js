function flatten(nestedArray) {
    return nestedArray.reduce(function(accumulator, currentValue) {
      if (Array.isArray(currentValue)) {
        return accumulator.concat(flatten(currentValue))
      } else {
        return accumulator.concat(currentValue)
      }
    }, [])
  }
  
  let nestedArray = [1, [2, [3, [4, 5]], 6], 7, [8, 9]]
  let flattenedArray = flatten(nestedArray)
  console.log("The nested array as flattened array:", flattenedArray)