let result = document.getElementById("GFG");
 
        function changeColor(color) {
            document.body.style.background = color;
        }
 
        function myFunc() {
            changeColor('yellow');
            result.innerHTML = "Background Color changed";
        }        
// Obtén referencias a los elementos
const btnCambiarColor = document.getElementById('cambiarColorBtn');
const elementoCambioColor = document.getElementById('elementoCambioColor');

// Agrega un evento de clic al botón
btnCambiarColor.addEventListener('click', function() {
    // Cambia el color de fondo del elemento
    elementoCambioColor.style.backgroundColor = 'red'; // Puedes cambiar 'nuevoColor' al color deseado
});

// Obtén referencias a los elementos de la lista
const elemento1 = document.getElementById('elemento1');
const elemento2 = document.getElementById('elemento2');
// Agrega más referencias según sea necesario

// Agrega eventos de clic a cada elemento
elemento1.addEventListener('click', function() {
    alert('Contenido del Elemento 1: ' + elemento1.textContent);
});

elemento2.addEventListener('click', function() {
    alert('Contenido del Elemento 2: ' + elemento2.textContent);
});
elemento3.addEventListener('click', function() {
    alert('Contenido del Elemento 3: ' + elemento3.textContent);
});
elemento4.addEventListener('click', function() {
    alert('Contenido del Elemento 4: ' + elemento4.textContent);
});
// Agrega más eventos según sea necesario
// Obtén referencias a los elementos
const btnIncrementar = document.getElementById('incrementarBtn');
const contadorElemento = document.getElementById('contador');

let contador = 0;

// Agrega un evento de clic al botón
btnIncrementar.addEventListener('click', function() {
    contador++;
    contadorElemento.textContent = contador;
});
function enviarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Muestra una alerta con los datos del formulario
    alert(`Nombre: ${nombre}\nCorreo Electrónico: ${email}\nMensaje: ${mensaje}`);
}

// Obtén referencia a la imagen
const imagenCambio = document.getElementById('imagenCambio');

// Agrega eventos para cambiar la imagen
imagenCambio.addEventListener('mouseover', function() {
    imagenCambio.src = 'imagen2.jpg'; // Cambia 'imagen2.jpg' al nombre de tu segunda imagen
});

imagenCambio.addEventListener('mouseout', function() {
    imagenCambio.src = 'imagen1.jpg'; // Cambia 'imagen1.jpg' al nombre de tu primera imagen
});

// Obtén referencias a los elementos
const btnToggle = document.getElementById('toggleBtn');
const elementoToggle = document.getElementById('elementoToggle');

// Agrega un evento de clic al botón
btnToggle.addEventListener('click', function() {
    // Alterna la visibilidad del elemento
    elementoToggle.style.display = (elementoToggle.style.display === 'none') ? 'block' : 'none';
});
function mostrarModal(src) {
    document.getElementById('imagenModal').src = src;
    document.getElementById('modal').style.display = 'block';
}

function cerrarModal() {
    document.getElementById('modal').style.display = 'none';
}

function limpiarDisplay() {
    document.getElementById('display').value = '';
}

function agregarCaracter(caracter) {
    document.getElementById('display').value += caracter;
}

function calcularResultado() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function agregarElemento() {
    // Obtener el texto ingresado por el usuario
    var texto = document.getElementById('nuevoElemento').value;

    // Crear un nuevo elemento de lista
    var nuevoElementoLista = document.createElement('li');
    nuevoElementoLista.textContent = texto;

    // Obtener la lista desordenada y agregar el nuevo elemento
    var listaDesordenada = document.getElementById('listaDesordenada');
    listaDesordenada.appendChild(nuevoElementoLista);

    // Limpiar el campo de entrada después de agregar el elemento
    document.getElementById('nuevoElemento').value = '';
}
