import { getFromLocalstore, setToLocalstorage } from "./allFunc.js";

const formLogin = document.querySelector("form");
const userNameorEmail = document.querySelector("#userName-email");
const passwordInput = document.querySelector("#password");

let users = getFromLocalstore("users") || [];

console.log("Users from localStorage:", users); 
formLogin.addEventListener("submit", function (e) {
    e.preventDefault();

    let password = passwordInput.value.trim();
    let userNameoremail = userNameorEmail.value.trim().toLowerCase();

    console.log("Entered Username/Email: ", userNameoremail);
    console.log("Entered Password: ", password);

    const foundUser = users.find((user) => {
        let normalizedUserName = '';
        if (user.userName) {
            normalizedUserName = user.userName.trim().toLowerCase();
        } else {
            normalizedUserName = '';
        }

        let normalizedEmail = '';
        if (user.email) {
            normalizedEmail = user.email.trim().toLowerCase();
        } else {
            normalizedEmail = ''; 
        }

        console.log("Checking user:", user.userName, user.email);  
        console.log("Comparing input:", userNameoremail);
        console.log("Password match:", user.password === password); 
        console.log("Username or email match:", normalizedUserName === userNameoremail || normalizedEmail === userNameoremail);

        return user.password === password &&
               (normalizedUserName === userNameoremail || normalizedEmail === userNameoremail);
    });

    console.log("Found user:", foundUser);

    if (foundUser) {
        foundUser.isLogged = true;
        setToLocalstorage("users", users);
        window.location.replace("index.html");  
    } else {
        window.alert("User melumatlarini duzgun yazin!"); 
    }
});

function resetForm() {
    registerForm.reset();
}
