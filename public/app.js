build();



function build() {

    //console.log('Hey from javascript');

    const divCalc = document.createElement('div');
    divCalc.setAttribute('id', 'calculator');
    app.appendChild(divCalc);

    const titleCalc = document.createElement('h1');
    titleCalc.innerHTML = 'Calculator';
    divCalc.appendChild(titleCalc);


    const divSettings = document.createElement('div');
    divSettings.setAttribute('id', 'settings');
    app.appendChild(divSettings);
    
    const titleSettings = document.createElement('h1');
    titleSettings.innerHTML = 'Settings';
    divSettings.appendChild(titleSettings);
    

    calculatorWindow(divCalc, divSettings); // skickar med variabeln till en annan function
    settingsWindow(divSettings, divCalc); // skickar med variabeln till en annan function
    
}


function calculatorWindow(divCalc, divSettings) {

    const numberInput1 = document.createElement('input');
    numberInput1.setAttribute('id', 'input1');
    numberInput1.setAttribute('type', 'number');
    numberInput1.autofocus = true;
    divCalc.appendChild(numberInput1);

    const numberInput2 = document.createElement('input');
    numberInput2.setAttribute('id', 'input2');
    numberInput2.setAttribute('type', 'number');
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

    // varje knapp anropa en ny funktion som räknar ut 
    // och skriver ut resultatet
    
    const calculatorResult = document.createElement('textarea');
    calculatorResult.setAttribute('id', 'txaResult');
    calculatorResult.disabled = true;
    divCalc.appendChild(calculatorResult);


    const buttonClear = document.createElement('button');
    buttonClear.innerText = 'Clear';
    buttonClear.setAttribute('id', 'btnClear');
    divCalc.appendChild(buttonClear);



    // nollsätta txaResult


    const hideShowBtn = document.createElement('button');
    hideShowBtn.onclick = () => {divSettings.hidden = true}; 
    hideShowBtn.innerText = 'Hide/Show';

    hideShowBtn.onclick = () => divSettings.hidden = !divSettings.hidden;
    divCalc.appendChild(hideShowBtn);
    
    settingsWindow(calculatorResult) 
}



function settingsWindow(divSettings, divCalc, calculatorResult) {

    const colorSelect = document.createElement('select');
    colorSelect.setAttribute('id', 'colorSelect');

    createOptionsColor('Grey', colorSelect );
    createOptionsColor('Blue', colorSelect );
    createOptionsColor('Yellow', colorSelect );

    colorSelect.onchange = (event) => { 

        divCalc.className = event.target.value;

    };

    divSettings.appendChild(colorSelect);
    

    const fontSizeSelect = document.createElement('select');
    fontSizeSelect.setAttribute('id', 'fontSizeSelect');

    createOptionsFont('12px', fontSizeSelect );
    createOptionsFont('20px', fontSizeSelect );
    createOptionsFont('30px', fontSizeSelect );

    fontSizeSelect.onchange = (event) => {

        calculatorResult.className = event.target.value;
    };

    divSettings.appendChild(fontSizeSelect);


}

function createOptionsFont(fontSize, target) {

    const fontOption = document.createElement('option');
    fontOption.setAttribute('value', fontSize);
    fontOption.innerText = fontSize;
    target.appendChild(fontOption);
}   

function createOptionsColor(colorName, target) {
    
    const colorOption = document.createElement('option');
    colorOption.setAttribute('value', colorName);
    colorOption.innerText = colorName;
    target.appendChild(colorOption);

}