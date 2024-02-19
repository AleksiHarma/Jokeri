const button = document.querySelector('button');
const table = document.querySelector('table');
const paragraph = document.querySelector('p');

let jokeriRiveja = 0;

button.addEventListener('click', () => {
    
    const row = table.insertRow();
    
    for (let i = 0; i < 7; i++) {
        
        const cell = row.insertCell();
        const randomNumber = Math.floor(Math.random() * 10);
        cell.textContent = randomNumber;
    }
    
    jokeriRiveja++;

    paragraph.textContent = `Arvottuja jokeririvejä: ${jokeriRiveja}`;
});