import { greenToast, alarmToast, errorToast, showToast, infoToast} from './utils.js'

let username = document.getElementById("username"),
    password = document.getElementById("password"),
    submitBtn = document.getElementById("submit");

let credentials = {
    username: "admin",
    password: "123"
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
submitBtn.addEventListener("click", e => {

    e.preventDefault();

    document.querySelectorAll(".error-message").forEach(ele => {
        ele.remove();
    })

    if (username.value === '' || password.value === '') {
        showToast(alarmToast);
        return;
    }



    if (!emailRegex.test(username.value)){
        document.getElementById("username").insertAdjacentHTML('afterend', `
        
        <p class="error-message">
            <i class="fa-solid fa-circle-xmark"></i>
            Email should be email@mail.com
        </p>
        
        `);
        return;
    }

    if (!passwordRegex.test(password.value)) {
        document.getElementById("password").insertAdjacentHTML('afterend', `
        
        <p class="error-message">
            <i class="fa-solid fa-circle-xmark"></i>
            contain capital, small letters. 
        </p>
        <p class="error-message">
            <i class="fa-solid fa-circle-xmark"></i>
            contain numbers. 
        </p>
        <p class="error-message">
            <i class="fa-solid fa-circle-xmark"></i>
            8 characters or more.
        </p>
        
        `);
    }

    if (emailRegex.test(username.value) && passwordRegex.test(password.value)) {
        showToast(greenToast);
        username.value = '';
        password.value = '';
    }

});

