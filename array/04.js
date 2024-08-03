function remove(arr) {
    return arr.filter(function(element) {
      return element % 2 !== 0
    })
  }
  
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  let oddNumberArray = remove(array)
  console.log("Array with only odd numbers is:", oddNumberArray)