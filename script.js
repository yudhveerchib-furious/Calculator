const input = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button'); // all buttons accessed
let str = '';

for (let i = 0; i < buttons.length; i++) {
    let buttonElement = buttons[i];

    buttonElement.addEventListener('click', (e) => {
        const value = e.target.innerHTML;

        if (value === 'AC') {
            str = ''; // clear all
        } else if (value === 'DEL') {
            str = str.slice(0, -1); // delete last character
        } else if (value === '=') {
            try {
                str = eval(str); // calculate result
            } catch {
                str = 'Error'; // handle invalid expression
            }
        } else {
            str += value; // append number/operator
        }

        input.value = str;
    });
}
