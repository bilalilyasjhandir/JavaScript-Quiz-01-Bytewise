function reverse(arr) {
    let first = 0
    let last = arr.length - 1
    while (first < last) {
      let temp = arr[first]
      arr[first] = arr[last]
      arr[last] = temp
      first++
      last--
    }
    return arr
  }

  let array = [1, 2, 3, 4, 5, 6]
  let reverseArray = reverse(array)
  console.log("The resversed array is:", reverseArray)