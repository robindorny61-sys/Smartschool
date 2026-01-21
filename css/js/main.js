// Globale functies
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if(loginForm){
        loginForm.addEventListener('submit', e => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            alert(`Inloggen: ${username}`);
            /const testUser = {
        username: 'admin',
        password: '1234'/ 
        });
    }
});
