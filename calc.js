let string = '';
let result = document.querySelector('.result');
const buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {

        if (e.target.innerHTML == '=') {
            string = eval(string)

            result.innerHTML = '= ' + string;
        }
        else if (e.target.innerHTML == 'C') {
            string = '0';
            result.innerHTML = string;
            string = '';
        }
        else if (e.target.innerHTML == '❌') {
            if (string[0] == undefined) {
                console.log("here")
                string = '0';
                result.innerHTML = string;
                string = '';
            }
            else {
                string = string.substring(0, string.length - 1);
                result.innerHTML = string;
            }
        }
        else if (e.target.id == 'square') {
            string = string + '*' + string;
            string = eval(string)
            result.innerHTML = '= ' + string;
        }
        else {
            string = string + e.target.innerHTML;
            result.innerHTML = string;
        }
    })
})