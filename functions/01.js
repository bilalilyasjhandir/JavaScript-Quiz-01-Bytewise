function prime(num) {
    if (num <= 1) return false
    if (num <= 3) return true
    if (num % 2 == 0 || num % 3 == 0) return false
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i == 0 || num % (i + 2) == 0) return false
    }
    return true
  }

  console.log("Is 3 prime?", prime(3))
  console.log("Is 4 prime?", prime(4))
  console.log("Is 11 prime?", prime(11))
  console.log("Is 29 prime?", prime(29))
  console.log("Is 32 prime?", prime(32))