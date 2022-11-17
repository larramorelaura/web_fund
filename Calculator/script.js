// $("button").click(function (){
//     alert("button clicked");
// })
var calculator = {
    displayValue: "0",
    firstNumber : "0",
    done: false,
    operator: null,
    secondNumber : "0"
};

var answer= 0;




function press(num){
    $('#display').append(num);
}

function setOP(op){
    calculator.done = true;
    calculator.operator = op;
    calculator.displayValue= document.querySelector('#display').innerText;
    calculator.firstNumber= document.querySelector('#display').innerText;
    console.log(calculator);
    document.querySelector('#display').innerText= "0";
}

function calculate(){
    calculator.secondNumber= document.querySelector('#display').innerText;
    console.log(calculator);
    newFirst= parseInt(calculator.firstNumber, 10)
    newSecond= parseInt(calculator.secondNumber, 10)
    if (calculator.operator == '+'){
        answer = newFirst + newSecond;
    } else if (calculator.operator == '-'){
        answer= newFirst - newSecond;
    } else if (calculator.operator == '*'){
        answer = newFirst * newSecond;
    } else if (calculator.operator == '/'){
        answer= newFirst / newSecond;
    }
    document.querySelector('#display').innerText=answer;
    console.log(answer);
}

function clr(){
    document.querySelector('#display').innerText ="0";
}


