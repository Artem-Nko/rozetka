// function checkAge() {
//     const name = prompt("Enter your name:");
//     const ageInput = prompt("Enter your age:");
//     const status = prompt("Enter your status (admin, moderator, user):");
  
//     if (!name || !ageInput || !status) {
//       throw new Error("The field is empty!");
//     }
  
//     const age = parseInt(ageInput);
  
//     if (isNaN(age)) {
//       throw new TypeError();
//     }
  
//     if (age < 18 || age > 70) {
//       throw new RangeError();
//     }
  
//     if (status !== "admin" && status !== "moderator" && status !== "user") {
//       throw new EvalError();
//     }
  
//     alert("You can watch a movie!");
//   }
  