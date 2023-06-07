let equalbtn = document.getElementById('equal');
let resultdiv = document.getElementsByClassName('result')[0];
let numberbtns = document.getElementsByClassName('isnumber');
let operations = document.getElementsByClassName('isoperation')
let num1 = ``;
let num2 = ``;
let operation = '';
let afterOpe = false;

function resultinner () {
    resultdiv.innerHTML = `${num1} ${operation} ${num2}`
}

equalbtn.addEventListener('click', function () {
    if (num2 === '') {
        if (operation === ``) {
            resultdiv.innerHTML = `You Didn't Enter Operation <i class="fa-regular fa-face-rolling-eyes fa-shake fa-sm" style="color: #ffffff;"></i>`;
            return
        } else if (operation !== '' && num2 === ``) {
            resultdiv.innerHTML = `You Didn't Enter Second Number <i class="fa-regular fa-face-angry fa-bounce"></i>`;
            return
        }
    }
    if (typeof eval(`${num1} ${operation} ${num2}`) === 'number') {
        resultdiv.innerHTML = eval(`${num1} ${operation} ${num2}`);
    } else {
        resultdiv.innerHTML = `You Didn't Enter Numbers `
    }
    num1 = parseInt(resultdiv.innerHTML) || ``;
    num2 = ``
    operation = ``
    afterOpe = false;
})
for (let i = 0; i < numberbtns.length; i++) {
    let button = numberbtns[i]
    button.addEventListener('click',function addNumber () {
        if (!afterOpe) {
            num1 = `${num1}${button.value}`
        } else {
            num2 = `${num2}${button.value}`
        }
        resultinner()
    })
}
for (let i = 0; i < operations.length; i++) {
    let operationEle = operations[i]
    operationEle.addEventListener('click',function isOper () {
        if (!afterOpe) {
        afterOpe = true;
        operation = operationEle.innerHTML
        resultinner();
        } else {
            num1 = resultdiv.innerHTML;
            num2 = ``
            operation = operationEle.innerHTML
            resultdiv.innerHTML = `${num1} ${operation} ${num2}`
        }
    })
}
document.getElementById('delete').addEventListener('click',function () {
    if (!afterOpe) {
        num1 = num1.slice(0,(num1.length -1))
    } else {
        if (num2 !== '') {
            num2 = ''
        } else {
            operation = ``;
        }
    }
    resultinner()
})
document.getElementById('clearbtn').addEventListener('click',function () {
    num1 = ``;
    num2 = ``;
    operation = '';
    afterOpe = false;
    resultinner()
})
