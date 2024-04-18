var inputEl = document.getElementById('input');
var resultEl = document.getElementById('result');
var errorEl = document.getElementById('error');

let resultTime;
let errorTime;

function weightConv(){
    if(inputEl.value>0){
        resultEl.innerText = (inputEl.value / 1000);
        clearTimeout(resultTime);
        resultTime = setTimeout(() => {
            resultEl.innerText = "";
            inputEl.value = "";
        }, 2000);

    }else{
        errorEl.innerText = ("please enter a number");
        clearTimeout(errorTime);
        errorTime = setTimeout(() => {
            errorEl.innerText = "";
            inputEl.value = "";
        }, 2000);
    }
}

inputEl.addEventListener('input', weightConv);
































/*const inputEl = document.getElementById("input");
const errorEl = document.getElementById("error");
const resultEl = document.getElementById("result");
let errorTime;
let resultTime;
function updateResults() {
  if (inputEl.value <= 0 || isNaN(inputEl.value)) {
    errorEl.innerText = "Please enter a valid number!";
    clearTimeout(errorTime);
    errorTime = setTimeout(() => {
      errorEl.innerText = "";
      inputEl.value = "";
    }, 2000);
  } else {
    resultEl.innerText = (inputEl.value / 2);//resultEl.innerText = (+inputEl.value / 2).toFixed(2);
    clearTimeout(resultTime);
    resultTime = setTimeout(() => {
      resultEl.innerText = "";
      inputEl.value = "";
    }, 10000);
  }
}

inputEl.addEventListener("input", updateResults);*/
