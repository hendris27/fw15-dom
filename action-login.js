const resultName = document.getElementById('resultName')
const inputName = document.getElementById('inputName')
const resultEmail = document.getElementById('resultEmail')
const inputEmail = document.getElementById('inputEmail')
const formlogin = document.getElementById('formlogin')

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



// validate submit signin
formlogin.addEventListener('submit', function(event){
  event.preventDefault()
  const name = event.target.inputName.value
  const email = event.target.inputEmail.value
  const pass = event.target.inputPass.value
  const resultErrorlogin =document.getElementById('resultErrorlogin')
  
  if(name === "hendri" && email === "hendri@gmail.com" && pass === "1234"){
    window.location="./index.html"
  }else if(name !== "hendri"){
    resultName.classList.remove('hidden')
    resultErrorlogin.classList.remove('hidden')
  }else if(email !== "hendri@gmail.com"){
    resultEmail.classList.remove('hidden')
    resultErrorlogin.classList.remove('hidden')
  }else if(pass !== "12345678"){
    resultPass.classList.remove('hidden')
    resultErrorlogin.classList.remove('hidden')
  }
})