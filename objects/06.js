function arrayValues(obj) {
    return Object.values(obj)
  }
  
  let sample = {name: "Bilal", age: 20, occupation: "Student"}
  let valuesArray = arrayValues(sample)
  console.log("Array of values:", valuesArray)