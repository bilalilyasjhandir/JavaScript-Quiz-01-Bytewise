function extract(users) {
    return users.map(function(user) {
      return user.name
    })
  }
  
  let users = [
    {name: "Bilal", age: 20 },
    {name: "Ahmad", age: 25 },
    {name: "Ali", age: 30 }
  ]
  
  let names = extract(users)
  console.log("Names of all the users are:", names)  