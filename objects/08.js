function isObject(obj) {
    return obj && typeof obj == 'object' && !Array.isArray(obj)
  }
  function merge(target, source) {
    if (!isObject(target) || !isObject(source)) {
      throw Error('Both target and source must be objects')
    }
    Object.keys(source).forEach(key => {
      let sourceValue = source[key]
      let targetValue = target[key]
      if (isObject(sourceValue)) {
        if (!target[key]) {
          Object.assign(target, { [key]: {} })
        }
        merge(target[key], sourceValue)
      } else {
        Object.assign(target, { [key]: sourceValue })
      }
    })
    return target
  }

  let obj1 = {
    a: 1,
    b: { c: 3, d: { e: 5 } },
    f: 7
  }
  let obj2 = {
    b: { c: 4, d: { g: 6 } },
    h: 8
  }
  let mergedObject = merge(obj1, obj2)
  console.log("Merged object:", mergedObject) 