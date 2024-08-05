function arrayValuesKeys(obj) {
    return Object.entries(obj)
  }

  let sample = {name: "Bilal", age: 20, occupation: "Student"}
  let valuesKeysArray = arrayValuesKeys(sample) 
  console.log("Array of key-value pairs:", valuesKeysArray)