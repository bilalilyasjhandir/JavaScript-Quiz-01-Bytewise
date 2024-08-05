function transform(arr, keyProperty) {
    return arr.reduce((acc, obj) => {
      let key = obj[keyProperty]
      let { [keyProperty]: _, ...rest } = obj
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(rest)
      return acc
    }, {})
  }
  
  let sample = [
    {id: 1, name: "Bilal", age: 20},
    {id: 2, name: "Ahmad", age: 25},
    {id: 1, name: "Ali", age: 30},
    {id: 3, name: "Dawood", age: 35}
  ]
  let transformed = transform(sample, 'id')
  console.log(transformed)  