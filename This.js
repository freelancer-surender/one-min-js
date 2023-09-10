var firstName = "Ron";
var lastName = "Weasley";

var myObj = {
  firstName: "Harry",
  lastName: "Potter",
  fullName: () => {
    return this.firstName 
        + " " + this.lastName;
  },
};

console.log(myObj.fullName());




















