import { getDataFromLocalStorage, setDataToLocalStorage } from "./allFunc.js";
const formRegister = document.querySelector("form");
const userName = document.querySelector("#userName");
const inputEmail = document.querySelector("#email");
const password = document.querySelector("#password");


const users = getDataFromLocalStorage("users") || [];


formRegister.addEventListener("submit",function (e) {

    e.preventDefault();

    const user={
        id:Date.now(),
        userName:userName.value.trim(),
        Email:inputEmail.value.trim(),
        password: passwordInput.value.trim(),
        isLogged: false
    };
    users.push(user);
    setDataToLocalStorage("users",users);
    window.location.replace("login.html");
    resetForm();
})


function resetForm() {
    registerForm.reset();
  }
