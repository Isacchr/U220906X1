build();



function build() {

    //console.log('Hey from javascript');

    const divSettings = document.createElement('div');
    divSettings.setAttribute('id', 'settings');
    app.appendChild(divSettings);
    
    const titleSettings = document.createElement('h1');
    titleSettings.innerHTML = 'Settings';
    divSettings.appendChild(titleSettings);
    
    const divCalc = document.createElement('div');
    divCalc.setAttribute('id', 'calculator');
    app.appendChild(divCalc);

    const titleCalc = document.createElement('h1');
    titleCalc.innerHTML = 'Calculator';
    divCalc.appendChild(titleCalc);

    calculatorWindow(divCalc);

}


function settingsWindow() {



}


function calculatorWindow(divCalc) {

    const numberInput1 = document.createElement('input');
    numberInput1.setAttribute('id', 'input1');
    divCalc.appendChild(numberInput1);

    const numberInput2 = document.createElement('input');
    numberInput2.setAttribute('id', 'input2');
    divCalc.appendChild(numberInput2);


    const buttonAddition = document.createElement( 'button');
    buttonAddition.innerText = '+';
    buttonAddition.setAttribute('id', 'btnAddition');
    divCalc.appendChild(buttonAddition);

    const buttonSubtraction = document.createElement( 'button');
    buttonSubtraction.innerText = '-';
    buttonSubtraction.setAttribute('id', 'btnSubtraction');
    divCalc.appendChild(buttonSubtraction);

    const buttonMultiply = document.createElement( 'button');
    buttonMultiply.innerText = '*';
    buttonMultiply.setAttribute('id', 'btnMultiply');
    divCalc.appendChild(buttonMultiply);

    const buttonDivision = document.createElement( 'button');
    buttonDivision.innerText = '/';
    buttonDivision.setAttribute('id', 'btnDivision');
    divCalc.appendChild(buttonDivision);

    const calculatorResult = document.createElement('textarea');
    calculatorResult.setAttribute('disabled', 'true');
    divCalc.appendChild(calculatorResult);
    
}



