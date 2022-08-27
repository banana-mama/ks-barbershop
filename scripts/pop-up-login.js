var loginLink = document.querySelector(".login-link");
var loginPopup = document.querySelector(".pop-up-login");
var loginPopupCloseBtn = loginPopup.querySelector(".close-button");
var loginForm = loginPopup.querySelector("form");
var login = loginPopup.querySelector(".login-item-login input");
var password = loginPopup.querySelector(".login-item-password input");
var remember = loginPopup.querySelector(".login-item-checkbox input");

var isStorageSupport = true;
var storageLogin = "";

try {
    storageLogin = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

loginLink.addEventListener("click", function (evt){
    evt.preventDefault();
    loginPopup.classList.add("pop-up-show");
    if (storageLogin) {
        login.value = storageLogin;
        password.focus();
    }
    else {
        login.focus();
    }
});

loginPopupCloseBtn.addEventListener("click", function (){
    loginPopup.classList.remove("pop-up-show");
    loginPopup.classList.remove("pop-up-error");
});

window.addEventListener("keydown", function (evt){
    if (evt.key === "Esc" || evt.key === "Escape") {
        if (loginPopup.classList.contains("pop-up-show")){
            evt.preventDefault();
            loginPopup.classList.remove("pop-up-show");
            loginPopup.classList.remove("pop-up-error");
        }
    }
});

loginForm.addEventListener("submit", function (evt){
    if (!login.value || !password.value) {
        evt.preventDefault();
        loginPopup.classList.remove("pop-up-error");
        loginPopup.offsetWidth = loginPopup.offsetWidth;
        loginPopup.classList.add("pop-up-error");
    }
    else {
        if (remember.checked && isStorageSupport){
            localStorage.setItem("login", login.value);
        }
    }
});