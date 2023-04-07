const a = 5;
const b = 6;
const grid = document.getElementById('container');

for (let i = 1; i <= b; i++) {
  const row = document.createElement('div');
  row.classList.add('row');
  
  for (let j = 1; j <= a; j++) {
    const button = document.createElement('button');
    button.innerText = (i - 1) * a + j;
    row.appendChild(button);

    let status = 0; // initialiseer de status op 0

    button.addEventListener('click', () => {
      if (status == 0) {
        button.style.backgroundColor = 'red';
        status = 1;
      } else if (status == 1) {
        button.style.backgroundColor = 'purple';
        status = 2;
      } else if (status == 2) {
        button.style.backgroundColor = 'blue';
        status = 3;
      } else if (status == 3) {
        button.style.backgroundColor = 'black';
        status = 4;
      } else if (status == 4) {
        button.remove(); // verwijder de button van de DOM
      }
    });
  }
  
  grid.appendChild(row);
}












