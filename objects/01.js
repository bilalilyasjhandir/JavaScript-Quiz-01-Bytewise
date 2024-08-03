function emptyObject(obj) {
    return Object.keys(obj).length == 0 && obj.constructor == Object
  }

  let object1 = {}
  let object2 = {name: "Bilal"}
  
  console.log("Is first object empty?", emptyObject(object1))
  console.log("Is second object empty?", emptyObject(object2))