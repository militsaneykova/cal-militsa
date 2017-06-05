
var saveNumber;
var operand;
var shouldResetDisplay = false;
var didSaveSecondNumber = false;
var numInput = [];
var display = document.getElementById('main-display');

function updateDisplay(number) {
	
    if (shouldResetDisplay == true) {
    	display.innerHTML = number; // show the argument of the function on the display
    	shouldResetDisplay = false; // which is from html
    } else {
    	var currentNumber = display.innerHTML + number;
        display.innerHTML = currentNumber;
    }
};
function numberButtonClick(event) {
    var number = event.currentTarget.innerHTML;
    updateDisplay(number);
};
function operandButtonClick(event) {
    saveNumber = display.innerHTML;
    operand = event.currentTarget.innerHTML;
    shouldResetDisplay = true;
    if (operand == "avg"){
        numInput.push(display.innerHTML);

    } else if (operand == "%"){
        var result = parseFloat(saveNumber) / 100; 
        display.innerHTML = result;   
    };

};

function clearButtonClick() {
	updateDisplay('');
	saveNumber = undefined;
	operand = undefined; 
	shouldResetDisplay = true;
	didSaveSecondNumber = false;
    numInput = [];
};

function deleteButtonClick() {
 	saveNumber = display.innerHTML;
 	operand = "c";
 	shouldResetDisplay = true;
};

function sumButtonClick() {	
    var result;
    var secondNumber = display.innerHTML;

 	if (operand == "+") {
       result = parseFloat(saveNumber) + parseFloat(secondNumber) 
       display.innerHTML = result;
      
 	} else if (operand == "-") {
       result = parseFloat(saveNumber) - parseFloat(secondNumber) 
       display.innerHTML = result;
      
 	} else if (operand == "%") {
 	   result = parseFloat(saveNumber) % parseFloat(secondNumber) 
       display.innerHTML = result;

 	} else if (operand == "/") {
       result = parseFloat(saveNumber) / parseFloat(secondNumber) 
       display.innerHTML = result;
 	
 	} else if (operand == 'x') {
	   result = parseFloat(saveNumber) * parseFloat(secondNumber) 
       display.innerHTML = result;

	} else if (operand == 'avg') {
       var sum = 0;
       for(var count = 0; count < numInput.length; count++) {
            sum += parseFloat(numInput[count]);
       }
   
       result = parseFloat(sum) / parseFloat(numInput.length);
       display.innerHTML = result;
    
    }

    if (didSaveSecondNumber == false) {
       saveNumber = secondNumber;  //if we make the saved number to be the second one
       didSaveSecondNumber = true; // and  every time we press = to add the second number to the new number
    }
};

