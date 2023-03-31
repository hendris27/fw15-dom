const formLogin=document.getElementById('form')
const loginSucces=document.getElementById('loginsucces')
const resultName=document.getElementById('resultName')
const resultEmail=document.getElementById('resultEmail')
const resultPass=document.getElementById('resultPass')
resultName.style.color='red'
formLogin.addEventListener('submit', function(event){
  event.preventDefault()
  const name =event.target.inputName.value
  const email =event.target.inputEmail.value
  const pass =event.target.inputPass.value
  if(name === "hendri" && email ==='hendri@gmail.com' && pass ==='1234'){
  window.location="./index.html"
  console.log(name)
  }
  else{
    if (name !== "hendri" || name === ''){
       resultName.innerText="name wrong, try again"
     } else if (email !== "hendri@gmail.com" || email ===''){
        resultEmail.innerText="email wrong, try again"

     } else if( pass !=="1234" || pass === ''){
      resultPass.innerText="pass wrong, try again"
          }
          else {
            resultName.innerText=''
            resultEmail.innerText=''
            resultPass.innerText=''
          }
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