function updateProperties(target, updates) {
    Object.keys(updates).forEach(key => {
      target[key] = updates[key]
    })
    return target
  }

  let sample = {
    name: "Bilal",
    age: 20,
    occupation: "Student"
  }
  let update = {
    age: 30,
    occupation: "Teacher",
    city: "Lahore"
  }
  let updatedObject = updateProperties(sample, update)
  console.log("Updated object:", updatedObject)