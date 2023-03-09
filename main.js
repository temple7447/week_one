const form =  document.getElementById('form')
const Name =  document.getElementById('name')
const email =  document.getElementById('email')
const Phone = document.getElementsByClassName('name')[2];
const gender = document.getElementsByClassName('gender');
const Pass =  document.getElementById('Pass')
const successMessage = document.getElementById("success-message");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = Name ? Name.value : "";
    const emaild = email ? email.value : "";
    const phoneNumber = Phone ? Phone.value : "";
    const genderMF = gender[0].checked ? "Male" : "Female";
    const PASS = Pass ? Pass.value : "";
    let valid = true;

    if (!emailRegex.test(emaild)) {
        successMessage.classList.add("hidden");
        const errorMessage = document.createElement("div");
        errorMessage.innerHTML = "Invalid email format. Please enter a valid email address.";
        errorMessage.style.color = "red";
        document.getElementById("error-message").appendChild(errorMessage);
        setTimeout(() => {
            errorMessage.style.display = "none";
          }, 2000);
        valid = false;
    }


    if (valid ) {
        setTimeout(() => {
            successMessage.style.display = "none";
          }, 2000);
        successMessage.classList.remove("hidden");
        console.log("Name: ", name);
        console.log("Email: ", emaild);
        console.log("Phone number: ", phoneNumber);
        console.log("Gender: ", genderMF);
        console.log("Password: ", PASS);
    }
})
