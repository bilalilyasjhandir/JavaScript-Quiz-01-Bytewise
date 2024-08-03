function getNames(users) {
    return users
      .filter(function(user) {
        return user.age > 30
      })
      .map(function(user) {
        return user.name
      })
  }
  
  let users = [
    {name: "Bilal", age: 20 },
    {name: "Ahmad", age: 30 },
    {name: "Ali", age: 35 },
    {name: "Dawood", age: 40 }
  ]
  
  let olderThan30 = getNames(users)
  console.log("Names of users older than 30:", olderThan30)