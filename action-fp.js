// Function validate name
const resultEmailfp = document.getElementById('resultEmailfp')
const inputEmailfp = document.getElementById('inputEmailfp')
const formfp = document.getElementById('formpass')


// show hide toggle index
function showToggle() {
    var x = document.getElementById("show-menu");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  // valiadasi forgot Passowrd
  inputEmailfp.addEventListener('keyup', function(event){
    event.preventDefault()
    const Emailfp =event.target.value
    if (!Emailfp.includes('@gmail.com') || Emailfp === ''){
      resultEmailfp.classList.remove('hidden')
    } else{
        if  (Emailfp === 'string'){
    resultEmailfp.classList.add('hidden')
         } else{
    resultEmailfp.classList.add('hidden')
         }
        }
  })
  formfp.addEventListener('submit', function(event){
    event.preventDefault()
  const resultError =document.getElementById('resultError')
  const email = event.target.inputEmailfp.value
  if(email === "hendri@gmail.com"){
    window.location="./index.html"
    return false
  }else if(email !== "hendri@gmail.com"){
    resultEmailfp.classList.remove('hidden')
    resultError.classList.remove('hidden')
   } return false
  

  }
  )