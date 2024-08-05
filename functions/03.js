function capitalize(str) {
    return str.split(' ').map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    }).join(' ')
  }

  let sample = "hello world! i am bilal ilyas jhandir"
  let capitalized = capitalize(sample)
  console.log("Capitalized string:", capitalized)