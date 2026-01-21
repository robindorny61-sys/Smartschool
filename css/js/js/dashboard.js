// Dashboard Leraar
const classesList = document.getElementById('classesList');
const createClassBtn = document.getElementById('createClass');

let classes = [];

createClassBtn.addEventListener('click', () => {
    const className = prompt('Naam van de klas:');
    if(className){
        classes.push(className);
        renderClasses();
    }
});

function renderClasses(){
    classesList.innerHTML = '';
    classes.forEach(cls => {
        const li = document.createElement('li');
        li.textContent = cls;
        li.addEventListener('click', () => {
            window.location.href = 'vak.html'; // later vak-ID meegeven
        });
        classesList.appendChild(li);
    });
}
