function maximum(arr) {
    if (arr.length == 0) {
      throw Error("The array is empty!")
    }
    let maxElement = arr[0]
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i]
      }
    }
    return maxElement
  }

  let array = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9]
  let maxElement = maximum(array)
  console.log("The maximum element in this array is:", maxElement)