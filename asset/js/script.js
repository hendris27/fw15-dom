const loginPage = document.querySelector('.loginPage');
const signUpPage = document.querySelector('.signUpPage');
const forgotPassword = document.querySelector('.forgotPassword');
const homePage = document.querySelector('.homePage');

if (loginPage) {
    const resultName = document.getElementById('resultName')
    const inputName = document.getElementById('inputName')
    const resultEmail = document.getElementById('resultEmail')
    const inputEmail = document.getElementById('inputEmail')
    const formlogin = document.getElementById('formlogin')

    inputName.addEventListener('keyup', function (event) {
        event.preventDefault()
        const name = event.target.value
        if (Number(name) || name === '') {
            resultName.classList.remove('hidden')
        } else {
            if (typeof name === 'string') {
                resultName.classList.add('hidden')
            } else {
                resultName.classList.add('hidden')
            }
        }
    })

    // Function validate Email
    inputEmail.addEventListener('keyup', function (event) {
        event.preventDefault()
        const email = event.target.value
        if (!email.includes('@gmail.com') || email === '') {
            resultEmail.classList.remove('hidden')

        } else {
            if (email === 'string') {
                resultEmail.classList.add('hidden')
            } else {
                resultEmail.classList.add('hidden')
            }
        }
    })


    // Function validate Password
    const resultPass = document.getElementById('resultPass')
    const inputPass = document.getElementById('inputPass')
    inputPass.addEventListener('keyup', function (event) {
        event.preventDefault()
        const Pass = event.target.value
        if (Pass.length < 7 || Pass === '') {
            resultPass.classList.remove('hidden')

        } else {
            if (Pass === "12345678") {
                resultPass.classList.add('hidden')
            } else {
                resultPass.classList.add('hidden')
            }
        }
    })



    // validate submit signin
    formlogin.addEventListener('submit', function (event) {
        event.preventDefault()
        const name = event.target.inputName.value
        const email = event.target.inputEmail.value
        const pass = event.target.inputPass.value
        const resultErrorlogin = document.getElementById('resultErrorlogin')

        if (name === "hendri" && email === "hendri@gmail.com" && pass === "12345678") {
            window.location = "./index.html"
        } else if (name !== "hendri") {
            resultName.classList.remove('hidden')
            resultErrorlogin.classList.remove('hidden')
        } else if (email !== "hendri@gmail.com") {
            resultEmail.classList.remove('hidden')
            resultErrorlogin.classList.remove('hidden')
        } else if (pass !== "12345678") {
            resultPass.classList.remove('hidden')
            resultErrorlogin.classList.remove('hidden')
        }
    })
}
if (signUpPage) {
    const ckBox = document.getElementById('ckBox').checked = false;
    const btnSubmit = document.getElementById('btnSubmit').disabled = true;
}
if (signUpPage) {
    const ckBox = document.getElementById('ckBox');
    const btnSubmit = document.getElementById('btnSubmit');

    ckBox.addEventListener('click', function () {
        if (ckBox.checked === true) {
            btnSubmit.disabled = false;
            btnSubmit.className = 'shadow-for-all-button w-full h-14 rounded-xl  text-base font-semibold tracking-[1px] text-white bg-[#03C988]'
        } else {
            btnSubmit.disabled = true;
            btnSubmit.className = 'shadow-for-all-button w-full h-14 rounded-xl  text-base font-semibold tracking-[1px] text-white bg-[#0E8388]'
        }
    })
}
if (signUpPage) {
    // Function validate name
    const resultName = document.getElementById('resultName')
    const inputName = document.getElementById('inputName')
    const resultEmail = document.getElementById('resultEmail')
    const resultEmailfp = document.getElementById('resultEmailfp')
    const inputEmail = document.getElementById('inputEmail')
    const inputEmailfp = document.getElementById('inputEmailfp')
    const formsignup = document.getElementById('formsignup')

    inputName.addEventListener('keyup', function (event) {
        event.preventDefault()
        const name = event.target.value
        if (Number(name) || name === '') {
            resultName.classList.remove('hidden')
        } else {
            if (typeof name === 'string') {
                resultName.classList.add('hidden')
            } else {
                resultName.classList.add('hidden')
            }
        }
    })

    // Function validate Email
    inputEmail.addEventListener('keyup', function (event) {
        event.preventDefault()
        const email = event.target.value
        if (!email.includes('@gmail.com') || email === '') {
            resultEmail.classList.remove('hidden')
            return true
        } else {
            if (email === 'string') {
                resultEmail.classList.add('hidden')
            } else {
                resultEmail.classList.add('hidden')
            }
        }
    })


    // Function validate Password
    const resultPass = document.getElementById('resultPass')
    const inputPass = document.getElementById('inputPass')
    inputPass.addEventListener('keyup', function (event) {
        event.preventDefault()
        const Pass = event.target.value
        if (Pass.length < 7 || Pass === '') {
            resultPass.classList.remove('hidden')

        } else {
            if (Pass === "12345678") {
                resultPass.classList.add('hidden')
            } else {
                resultPass.classList.add('hidden')
            }
        }
    })

    const resultCPass = document.getElementById('resultCPass')
    const inputCPass = document.getElementById('inputCPass')
    inputCPass.addEventListener('keyup', function (event) {
        event.preventDefault()
        const CPass = event.target.value
        if (CPass.length < 7 || CPass === '') {
            resultCPass.classList.remove('hidden')

        } else {
            if (CPass === "12345678") {
                resultCPass.classList.add('hidden')
            } else {
                resultCPass.classList.add('hidden')
            }
        }
    })

    // validate submit signup
    formsignup.addEventListener('submit', function (event) {
        event.preventDefault()
        const name = event.target.inputName.value
        const email = event.target.inputEmail.value
        const pass = event.target.inputPass.value
        const Cpass = event.target.inputCPass.value
        const resultError = document.getElementById('resultError')

        if (name === "hendri" && email === "hendri@gmail.com" && pass === "12345678" && Cpass === "12345678") {
            window.location = "./login.html"
            return false
        } else if (name !== "hendri") {
            resultName.classList.remove('hidden')
            resultError.classList.remove('hidden')
            return false
        } else if (email !== "hendri@gmail.com") {
            resultEmail.classList.remove('hidden')
            resultError.classList.remove('hidden')
            return false
        } else if (pass !== "12345678") {
            resultPass.classList.remove('hidden')
            resultError.classList.remove('hidden')
        } else if (Cpass !== pass) {
            resultCPass.classList.remove('hidden')
            resultError.classList.remove('hidden')
        }
        return false


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
    inputEmailfp.addEventListener('keyup', function (event) {
        event.preventDefault()
        const Emailfp = event.target.value
        if (Emailfp.includes('@gmail.com')) {
            resultEmailfp.classList.remove('hidden')
        } else {
            if (Emailfp === "hendri@gmail.com") {
                resultEmailfp.classList.add('hidden')
            } else {
                resultEmailfp.classList.add('hidden')
            }
        }
    })

}


if (forgotPassword) {
    // Function validate name
    const resultEmailfp = document.getElementById('resultEmailfp')
    const inputEmailfp = document.getElementById('inputEmailfp')
    const formfp = document.getElementById('formpass')

    // valiadasi forgot Passowrd
    inputEmailfp.addEventListener('keyup', function (event) {
        event.preventDefault()
        const Emailfp = event.target.value
        if (!Emailfp.includes('@gmail.com') || Emailfp === '') {
            resultEmailfp.classList.remove('hidden')
            console.log(Emailfp)
        } else {
            if (Emailfp === 'string') {
                resultEmailfp.classList.add('hidden')
            } else {
                resultEmailfp.classList.add('hidden')
            }
        }
    })
    formfp.addEventListener('submit', function (event) {
        event.preventDefault()
        const resultError = document.getElementById('resultError')
        const email = event.target.inputEmailfp.value
        if (email === "hendri@gmail.com") {
            window.location = "./index.html"
            return false
        } else if (email !== "hendri@gmail.com") {
            resultEmailfp.classList.remove('hidden')
            resultError.classList.remove('hidden')
        }
        return false


    })
}
if (homePage) {
    const dataArray = [{
            title: "Sights & Sounds Exhibition",
            dateTime: "Wed, 15 Nov, 4:00 PM",
            image: '/asset/png/baner6.jpg'
        },
        {
            title: "See it in Gold Class",
            dateTime: "Thu, 16 Nov, 7:00 PM",
            image: '/asset/png/baner5.jpg'
        },
        {
            title: "See it in Gold Class",
            dateTime: "Sun, 01 Dec, 4:00 PM",
            image: '/asset/png/baner3.jpg'
        },
        {
            title: "See it in Gold Class",
            dateTime: "Thu, 16 Nov, 7:00 PM",
            image: '/asset/png/baner7.jpg'
        },
        {
            title: "Sights & Sounds Exhibition",
            dateTime: "Sun, 01 Dec, 4:00 PM",
            image: '/asset/png/baner4.jpg'
        }
    ];

    let dataArrayEvent = '';

    dataArray.map((data) => {
        dataArrayEvent += `
        <div class="baner">
          <div class="baner1  bg-cover bg-[url(${data.image})]">
            <a href="event.html">
              <div class="title-baner1">
                <div class="text1">${data.dateTime}</div>
                <div>${data.title}</div>
                <div class="profile-guest">
                  <div class="guest"> <img src="./asset/png/p1.jpeg" alt="profile1"> </div>
                  <div class="guest"> <img src="./asset/png/p1.jpeg" alt="profile2"> </div>
                  <div class="guest"> <img src="./asset/png/p3.jpg" alt="profile3"> </div>
                  <div class="guest"> <img src="./asset/png/p4.jpg" alt="profile4"> </div>
                </div>
              </div>
            </a>
          </div>
        </div>`;
    });

    console.log(dataArrayEvent);

    const wrapEvent = document.getElementById('wrapEvent');
    wrapEvent.innerHTML = dataArrayEvent;

    function showToggle() {
        var x = document.getElementById("show-menu");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
}