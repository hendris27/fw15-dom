// Function validate name
const resultName = document.getElementById('resultName')
const inputName = document.getElementById('inputName')
const resultEmail = document.getElementById('resultEmail')
const resultEmailfp = document.getElementById('resultEmailfp')
const inputEmail = document.getElementById('inputEmail')
const inputEmailfp = document.getElementById('inputEmailfp')
const formsignup = document.getElementById('formsignup')

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
  if (!email.includes('@gmail.com') || email === ''){
    resultEmail.classList.remove('hidden')
    return true
  } else {
    if(email === 'string'){
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
    if(Pass === "12345678"){
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
    if(CPass === "12345678"){
      resultCPass.classList.add('hidden')
    }else{
      resultCPass.classList.add('hidden')
    }
  }
})

// validate submit signup
formsignup.addEventListener('submit', function(event){
  event.preventDefault()
  const name = event.target.inputName.value
  const email = event.target.inputEmail.value
  const pass = event.target.inputPass.value
  const Cpass = event.target.inputCPass.value
  const resultError =document.getElementById('resultError')
  
  if(name === "hendri" && email === "hendri@gmail.com" && pass === "1234" && Cpass === "1234"){
    window.location="./index.html"
    return false
  }else if(name !== "hendri"){
    resultName.classList.remove('hidden')
    resultError.classList.remove('hidden')
    return false
  }else if(email !== "hendri@gmail.com"){
    resultEmail.classList.remove('hidden')
    resultError.classList.remove('hidden')
    return false
  }else if(pass !== "12345678"){
    resultPass.classList.remove('hidden')
    resultError.classList.remove('hidden')
  }else if(Cpass !== pass){
    resultCPass.classList.remove('hidden')
    resultError.classList.remove('hidden')
  }return false
  
  
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

  // valiadasi Change Passowrd
  inputEmailfp.addEventListener('keyup', function(event){
    event.preventDefault()
    const Emailfp =event.target.value
    if (Emailfp.includes('@gmail.com') ){
      resultEmailfp.classList.remove('hidden')
    } else {
      if(Emailfp === "hendri@gmail.com"){
        resultEmailfp.classList.add('hidden')
      }else{
        resultEmailfp.classList.add('hidden')
      }
    }
  })
  