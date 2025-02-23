function showRegister() {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('registerContainer').style.display = 'block';
}

function showLogin() {
    document.getElementById('registerContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'block';
}

function register() {
    let user = document.getElementById('regUser').value;
    let pass = document.getElementById('regPass').value;

    if (user === "" || pass === "") {
        alert("Usuario y contraseña requeridos.");
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[user]) {
        alert("El usuario ya existe.");
        return;
    }

    users[user] = pass; // Guardamos el usuario y contraseña en localStorage
    localStorage.setItem('users', JSON.stringify(users));
    alert("Registro exitoso. Ahora puedes iniciar sesión.");
    showLogin();
}

function login() {
    let user = document.getElementById('loginUser').value;
    let pass = document.getElementById('loginPass').value;

    let users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[user] && users[user] === pass) {
        sessionStorage.setItem('loggedUser', user); // Guardar usuario en sesión
        showWelcome(user);
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}

function showWelcome(user) {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('registerContainer').style.display = 'none';
    document.getElementById('welcomeContainer').style.display = 'block';
    document.getElementById('userName').innerText = user;

    // Redirigir a la página principal después de 3 segundos
    setTimeout(() => {
        window.location.href = "https://galvis464.github.io/caf-/"; // Cambia "index.html" por la URL de tu página principal
    }, 3000);
}


function logout() {
    sessionStorage.removeItem('loggedUser');
    document.getElementById('welcomeContainer').style.display = 'none'; // Ocultar mensaje de bienvenida
    showLogin();
}


window.onload = function () {
    let user = sessionStorage.getItem('loggedUser');
    if (user) {
        showWelcome(user);
    }
};