function getKeys(obj) {
    return Object.keys(obj)
  }
  
  let object = {name: "Bilal", age: 20, occupation: "Student"}
  let keysArray = getKeys(object)
  console.log("Array of keys:", keysArray)