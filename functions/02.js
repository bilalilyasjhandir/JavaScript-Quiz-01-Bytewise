function factorial(n) {
    if (n < 0) return undefined
    if (n == 0 || n == 1) return 1
    return n * factorial(n - 1)
  }

  console.log("Factorial of 2:", factorial(2))
  console.log("Factorial of 5:", factorial(5)) 
  console.log("Factorial of 8:", factorial(8)) 