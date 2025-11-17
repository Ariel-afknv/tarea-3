let diametros = [];

let listaDisplay = document.getElementById('lista');
let resultadoDisplay = document.getElementById('resultado');

document.getElementById('agregarBtn').addEventListener('click', function() {
    let input = document.getElementById('diametroInput');
    let diametro = parseFloat(input.value);
    
    diametros.push(diametro);
    
    listaDisplay.textContent = diametros.join(', ');
    
    input.value = '';
    input.focus();
});

document.getElementById('contarBtn').addEventListener('click', function() {
    
    let contador = 0;
    let i = 0;
    let diametroActual = diametros[i];

    while (diametroActual !== 0 && i < diametros.length) {
        
        if (diametroActual > 50) {
            contador = contador + 1;
        }
        
        i = i + 1;
        diametroActual = diametros[i];
    }
    
    resultadoDisplay.textContent = contador;
    
    diametros = [];
    listaDisplay.textContent = '---';
});