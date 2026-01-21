// Test login
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    // Dit is ons testaccount
    const testUser = {
        username: 'admin',
        password: '1234'
    };

    if (loginForm) {
        loginForm.addEventListener('submit', e => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === testUser.username && password === testUser.password) {
                alert('Login succesvol!');
                // Ga door naar dashboard
                window.location.href = 'dashboard-leraar.html';
            } else {
                alert('Foutieve gebruikersnaam of wachtwoord');
            }
        });
    }
});
