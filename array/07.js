function getUsers(users) {
    return users.filter(function(user) {
      return user.age > 30
    })
  }
  
  let users = [
    {name: "Bilal", age: 20 },
    {name: "Ali", age: 30 },
    {name: "Ahmad", age: 35 },
    {name: "Dawood", age: 40 }
  ]
  
  let olderThan30 = getUsers(users)
  console.log("Users older than 30 are:", olderThan30)