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
    
    button.addEventListener('click', () => {
      if (button.innerText == 1 || button.innerText == 7 || button.innerText == 13 || button.innerText == 19 || button.innerText == 25 || button.innerText == 29) {
        button.style.backgroundColor = 'red';
      } else {
        button.style.backgroundColor = rgb(0, 214, 46);
      }
    });
  }
  
  grid.appendChild(row);
}
