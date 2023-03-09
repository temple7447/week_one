const form =  document.getElementById('form')
const Name =  document.getElementById('name')
const email =  document.getElementById('email')
const Phone =  document.getElementById('Phone')
const gender =  document.getElementById('gender')
const Pass =  document.getElementById('Pass')



form.addEventListener('submit', (e)=>{
    e.preventDefault()
const name= Name.value;
const email = email.value;
const phoneNumber = Phone.value;
const genderMF = gender.value;
const PASS = Pass.value;



console.log(name, email, phoneNumber, genderMF, PASS)
})