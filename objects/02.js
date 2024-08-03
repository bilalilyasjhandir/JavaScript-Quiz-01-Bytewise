let person = {
    name: "Bilal Jhandir",
    age: 20,
    occupation: "Undergraduate Student"
  }
  function printProperties(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        console.log(`${key}: ${obj[key]}`);
      }
    }
  }

  printProperties(person); 