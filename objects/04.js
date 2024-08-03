function mergeObjects(object1, object2) {
    return Object.assign({}, object1, object2)
  }

  let object1 = {name: "Bilal", age: 20}
  let object2 = {occupation: "Student", city: "Bahawalpur"}
  let mergedObject = mergeObjects(object1, object2)
  console.log("Merged object:", mergedObject)  