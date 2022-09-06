
build();

calculator();

function build() {

    //console.log('Hey from javascript');

    const targetSettings = document.getElementById('app');
    const divSettings = document.createElement('div');
    divSettings.setAttribute('id', 'settings');
    targetSettings.appendChild(divSettings);
    
    const targetDivSettings = document.getElementById('settings');
    const titleSettings = document.createElement('h1');
    titleSettings.innerHTML = 'Settings';
    targetDivSettings.appendChild(titleSettings);
    

    const targetDivCalc = document.getElementById('app');
    const divCalc = document.createElement('div');
    divCalc.setAttribute('id', 'calculator');
    targetDivCalc.appendChild(divCalc);

    const targetCalc = document.getElementById('calculator');
    const titleCalc = document.createElement('h1');
    titleCalc.innerHTML = 'Calculator';
    targetCalc.appendChild(titleCalc);

}


function settings() {



}


function calculator() {

    const targetNumberInput1 = document.getElementById('calculator');
    const numberInput1 = document.createElement('input');
    numberInput1.setAttribute('id', 'input1');
    targetNumberInput1.appendChild(numberInput1);

    const targetNumberInput2 = document.getElementById('calculator');
    const numberInput2 = document.createElement('input');
    numberInput2.setAttribute('id', 'input2');
    targetNumberInput2.appendChild(numberInput2);

    const buttonAddition = document.getElementById('calculator');
    

}



