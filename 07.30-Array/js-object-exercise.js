/*Exercise 1: Creating an Object
Task: Create an object called person with the following properties:

firstName  (string)
lastName   (string)
age        (number)
city       (string)
Then, log the object to the console.
*/
let person = {
  firstName: "anhaa",
  lastName: "baymbaa",
  age: "27",
  city: "ulanbaatar",
};
/*Exercise 2: Accessing Object Properties
Task: Using the person object from Exercise 1, log the firstName and city properties to the console.
*/
console.log("exercise 1 =", person.firstName, person.city);
/*Exercise 3: Adding and Modifying Properties
Task: Add a new property email to the person object and set it to "yourEmail@gmail.com". Then, change the city property to "Ulaanbaatar".*/
person = person.city == "baymkhongor";
console.log("exercise 2 =", person);
/*Exercise 4: Nested Objects - Access and Modify
Task: Create an object student with nested objects grades and address.

name    (string)
age     (number)
grades  (object with properties: math, science, history all numbers)
address (object with properties: street, city, zip)

Modify the math grade to 95 and change the city in the address to "Ulaanbaatar".
*/
let student = {
  name: "boldoo",
  age: 14,
  grades: 60,
  address: "khan-uul",
};
/*Exercise 6: Adding and Deleting Properties
Task: Start with the student object from Exercise 4. Add a new property email with the value "yourEmail@example.com" and then delete the zip property.*/
let exer6 = delete student.address && (person.email = "myEmail@Example.com");
