// Inicializar votos desde localStorage
let votosSi = parseInt(localStorage.getItem('votosSi')) || 0;
let votosNo = parseInt(localStorage.getItem('votosNo')) || 0;

function actualizarContador(){
    document.getElementById('votosSi').textContent = votosSi;
    document.getElementById('votosNo').textContent = votosNo;
    actualizarGrafica();
}

function registrarVoto(opcion){
    if(opcion === 'si') votosSi++;
    else votosNo++;

    localStorage.setItem('votosSi', votosSi);
    localStorage.setItem('votosNo', votosNo);

    actualizarContador();
}

function actualizarGrafica(){
    const ctx = document.getElementById('graficaVotos').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Con Piña 🍍', 'Sin Piña ❌'],
            datasets: [{
                data: [votosSi, votosNo],
                backgroundColor: ['#FFD700', '#DC143C']
            }]
        }
    });
}

// Manejo del formulario de sugerencias
document.getElementById('formSugerencias').addEventListener('submit', function(e){
    e.preventDefault();
    let mensaje = document.getElementById('mensaje').value;
    alert('Gracias por tu sugerencia: ' + mensaje);
    document.getElementById('mensaje').value = '';
});

// Inicialización inicial
actualizarContador();
