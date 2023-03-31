// Function validate name
const resultName = document.getElementById('resultName')
const inputName = document.getElementById('inputName')
const resultEmail = document.getElementById('resultEmail')
const inputEmail = document.getElementById('inputEmail')
const formLogin = document.getElementById('form')

inputName.addEventListener('keyup', function(event){
  event.preventDefault()
  const name =event.target.value
  if (Number(name) || name === ''){
    resultName.classList.remove('hidden')
  } else {
    if( typeof name === 'string'){
      resultName.classList.add('hidden')
    }
    else {
      resultName.classList.add ('hidden')
    }
  }
})

// Function validate Email
inputEmail.addEventListener('keyup', function(event){
  event.preventDefault()
  const email =event.target.value
  if (!email.includes('@') || email === ''){
    resultEmail.classList.remove('hidden')
    
  } else {
    if(email === "hendri@gmail.com"){
      resultEmail.classList.add('hidden')
    }else{
      resultEmail.classList.add('hidden')
    }
  }
})


// Function validate Password
const resultPass=document.getElementById('resultPass')
const inputPass=document.getElementById('inputPass')
inputPass.addEventListener('keyup', function(event){
  event.preventDefault()
  const Pass =event.target.value
  if (Pass.length < 7 || Pass === '' ){
    resultPass.classList.remove('hidden')
    
  } else {
    if(Pass === "1234"){
      resultPass.classList.add('hidden')
    }else{
      resultPass.classList.add('hidden')
    }
  }
})

const resultCPass=document.getElementById('resultCPass')
const inputCPass=document.getElementById('inputCPass')
inputCPass.addEventListener('keyup', function(event){
  event.preventDefault()
  const CPass =event.target.value
  if (CPass.length < 7 || CPass === '' ){
    resultCPass.classList.remove('hidden')
    
  } else {
    if(CPass === "1234"){
      resultCPass.classList.add('hidden')
    }else{
      resultCPass.classList.add('hidden')
    }
  }
})



formLogin.addEventListener('submit', function(event){
  event.preventDefault()
  const name = event.target.inputName.value
  const email = event.target.inputEmail.value
  const pass = event.target.inputPass.value
  const Cpass = event.target.inputCPass.value
  const resultError =document.getElementById('resultError')
  
  if(name === "hendri" && email === "hendri@gmail.com" && pass === "1234" && Cpass === "1234"){
    window.location="./index.html"
  }else if(name !== "hendri"){
    resultName.classList.remove('hidden')
    resultError.classList.remove('hidden')
  }else {
    resultError.classList.remove('hidden')
  }
     
  
  
})


// show hide toggle index
function showToggle() {
    var x = document.getElementById("show-menu");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
// show data input
// function showDatainput(){
//     const Name=document.getElementById('inputName')
//     if (Name === ""){
//         Resultname.innerText='Data harus diisi!!!'

//     }else{
//         Resultname.innerText=Name
//     }
//     const Email=document.getElementById('inputEmail')
//     const Pass=document.getElementById('inputPass')
//     const Resultname=document.getElementById('resultName')
//     const Resultemail=document.getElementById('resultEmail')
//     const Resultpass=document.getElementById('resultPass')
//     Resultname.innerText = Name.value;
//     Resultemail.innerText = Email.value;
//     Resultpass.innerText = Pass.value;
// }
function validasiEmail() {
	var rs = document.forms["formpass"]["Email"].value;
	var atps=rs.indexOf("@");
	var dots=rs.lastIndexOf(".");
	if (atps<1 || dots<atps+2 || dots+2>=rs.length) {
		alert("Alamat email tidak valid.");
		return false;
	} else {
		alert("Alamat email valid.");
	}
}