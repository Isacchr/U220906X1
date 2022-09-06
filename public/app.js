
build();

function build() {

    //console.log('Hey from javascript');

    const target = document.getElementById('app');
    const newElement = document.createElement('p');
    newElement.innerHTML = 'TESTING';
    newElement.className = 'red';
    target.appendChild(newElement);

}
