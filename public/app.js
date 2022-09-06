
build();

function build() {

    //console.log('Hey from javascript');

    const targetSettings = document.getElementById('app');
    const divSettings = document.createElement('div');
    divSettings.setAttribute('id', 'settings');
    targetSettings.appendChild(divSettings);
    
    const targetDivSettings = document.getElementById('settings');
    const titleSettings = document.createElement('h1');
    titleSettings.innerHTML = 'Settings';
    titleSettings.className = 'border';
    targetDivSettings.appendChild(titleSettings);
    

    const targetDivCalc = document.getElementById('app');
    const divCalc = document.createElement('div');
    divCalc.setAttribute('id', 'calculator');
    targetDivCalc.appendChild(divCalc);

    const targetCalc = document.getElementById('calculator');
    const titleCalc = document.createElement('h1');
    titleCalc.innerHTML = 'Calculator';
    titleCalc.className = 'border';
    targetCalc.appendChild(titleCalc);

}
