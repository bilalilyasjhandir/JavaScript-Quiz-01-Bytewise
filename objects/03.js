function cloneObject(obj) {
    return Object.assign({}, obj)
  }

  let original = {name: "Bilal", age: 20, occupation: "Student" }
  let cloned = cloneObject(original)
  console.log("Original object:", original)
  console.log("Cloned object:", cloned)
  console.log("Are they the same reference?", original == cloned) 