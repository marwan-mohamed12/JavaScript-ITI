import { greenToast, alarmToast, errorToast, showToast, infoToast} from './utils.js'

let username = document.getElementById("username"),
    password = document.getElementById("password"),
    submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", e => {

    e.preventDefault();

    if (username.value === '' || password.value === '') {
        showToast(alarmToast);
        return;
    }

    if (username.value === "admin" && password.value !== "123" ||
        username.value !== "admin" && password.value === "123") {
        showToast(errorToast)
        return;
    }

    document.body.innerHTML =`<div id="loading"></div>`;

    if (username.value === "admin" && password.value === "123") {
        document.body.innerHTML = `<h1>Welcome ${username.value}</h1>`;
        showToast(greenToast);
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

