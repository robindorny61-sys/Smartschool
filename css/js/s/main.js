alert("main.js werkt en is geladen");

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");

    if (!form) {
        alert("loginForm niet gevonden");
        return;
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const user = document.getElementById("username").value;
        const pass = document.getElementById("password").value;

        if (user === "admin" && pass === "1234") {
            alert("Login gelukt");
        } else {
            alert("Fout wachtwoord");
        }
    });
});
