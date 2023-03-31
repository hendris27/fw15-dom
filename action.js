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
  if (email !== "hendri@gmail.com" || email === '' ){
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
  if (Pass !== "1234" || Pass === '' ){
    resultPass.classList.remove('hidden')
    
  } else {
    if(Pass === "1234"){
      resultPass.classList.add('hidden')
    }else{
      resultPass.classList.add('hidden')
    }
  }
})

formLogin.addEventListener('submit', function(event){
  event.preventDefault()
  const name = event.target.inputName.value
  const email = event.target.inputEmail.value
  const pass = event.target.inputPass.value
  if(name === "hendri" && email === "hendri@gmail.com" && pass === "1234")
  window.location="./index.html"
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