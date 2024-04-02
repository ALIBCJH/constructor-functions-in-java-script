
//working with default parameters
function greet(name = "Simon juma"){
  console.log(`Hello, ${name}!`);
  }
  greet();
  greet("Jane rose");
  
  //how to use constractor function
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  let person = new Person("John Smith", 30);
  console.log(person.name); // Output: "John Smith"
  console.log(person.age); 