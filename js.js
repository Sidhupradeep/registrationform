const name = document.getElementById("name");
const phoneNumber = document.getElementById("phoneNumber");
const email = document.getElementById("email");
const country = document.getElementById("country");
const city = document.getElementById("city");
const service = document.getElementById("service");



function formValidation() {
  
  // checking name length
  if (name.value.length < 2 || name.value.length > 15) {
    alert("Name length should be more than 2 and less than 21");
    name.focus();
    return false;
  }
  // checking phone number
  if (!phoneNumber.value.match(/^[1-9][0-9]{9}$/)) {
    alert("Phone number must be 10 characters long number and first digit can't be 0!");
    phoneNumber.focus();
    return false;
  }
  
  
  // checking country
  if (country.value === "") {
    alert("Please select your country!");
    return false;
  }
  // checking city
  if (city.value === "") {
    alert("Please select your city!")
    return false;
  }
  // checking service
  if (service.value === "") {
    alert("Please select your service!")
    return false;
  }
}