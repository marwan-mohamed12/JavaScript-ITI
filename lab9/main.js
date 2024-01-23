import { greenToast, alarmToast, errorToast, showToast, infoToast} from './utils.js'

let username = document.getElementById("username"),
    password = document.getElementById("password"),
    submitBtn = document.getElementById("submit");

let credentials = {
    username: "admin",
    password: "123"
};

submitBtn.addEventListener("click", e => {

    e.preventDefault();

    if (username.value === '' || password.value === '') {
        showToast(alarmToast);
        return;
    }

    if (username.value === credentials.username && password.value !== credentials.password ||
        username.value !== credentials.username && password.value === credentials.password) {
        showToast(errorToast)
        return;
    }

    document.body.innerHTML =`<div id="loading"></div>`;

    if (username.value === credentials.username && password.value === credentials.password) {
        document.body.innerHTML = `
            <h1>Welcome ${username.value}</h1>
            <br/>
            <button class="backBtn" id="backBtn">Back</button>    
        `;
        showToast(greenToast);
        let backBtn = document.getElementById("backBtn");
        backBtn.addEventListener('click', () => {
            location.reload();
        })

        backBtn.removeEventListener('click', ()=>{});
        username.value = '';
        password.value = '';

    } else {
        document.body.innerHTML = `
        <h1>User Is Not Registered</h1>
        <br/>
        <button class="backBtn" id="backBtn">Back</button>
        `;
        showToast(infoToast);
        username.value = '';
        password.value = '';

        let backBtn = document.getElementById("backBtn");
        backBtn.addEventListener('click', () => {
            location.reload();
        })

        backBtn.removeEventListener('click', ()=>{});
    }
});

