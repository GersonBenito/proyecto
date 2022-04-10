
const contendorCards = document.querySelector('.contendor-cards');
const vacio = document.querySelector('.vacio');
const formulario = document.querySelector('.formulario');
const titulo = document.querySelector('#titulo'),
      imagen = document.querySelector('#imagen'),
      precio = document.querySelector('#precio'),
      destino = document.querySelector('#destino'),
      descripcion = document.querySelector('#descripcion');

formulario.style.display = 'none';

let viajes = [];

const nuevo = () => {
    formulario.style.display = 'flex'
}

const agregarDatos = () =>{
    contendorCards.innerHTML = '';
    const viaje = {
        titulo: titulo.value,
        imagen: imagen.value,
        precio: calcualarIVA(precio.value),
        destino: destino.value,
        descripcion: descripcion.value,
    };

    viajes = [viaje, ...viajes];
    generarCard(viajes);
    limpiarFormulario();

}

const generarCard = (viajes = []) => {

    vacio.innerHTML = '';
    contendorCards.innerHTML = '';

    if(viajes.length > 0){
        viajes.forEach((viaje, index) =>{
            contendorCards.innerHTML += `
                <div class="card">
                    <div class="img-card">
                        <img src="${viaje.imagen}" alt="${viaje.titulo}">
                    </div>
                    <div class="body-card">
                        <div class="titulo-card">
                            <p>${viaje.titulo}</p>
                        </div>
                        <div class="detalles">
                            <div class="precio subtitulo">
                                <p>Precio + IVA: <span>$${viaje.precio}</span></p>
                            </div> |
                            <div class="destino subtitulo">
                                <p>Destino: <span>${viaje.destino}</span></p>
                            </div>
                        </div>
                        <div class="descripcion">
                            <p>${viaje.descripcion}</p>
                        </div>
                    </div>
                    <div class="contenedor-boton">
                        <button type="button" class="eliminar" onclick="eliminarViaje(${index})" >Eliminar</button>
                        <button type="button">Detalles</button>
                    </div>
                </div> 
            `
        })

    }else{
        vacio.innerHTML = '<p>Aun no hay viajes agregados</p>'
    }
}

generarCard(viajes);

const limpiarFormulario = () =>{
    titulo.value = '';
    imagen.value = '';
    precio.value = '';
    destino.value = '';
    descripcion.value = ''
    formulario.style.display = 'none';
}

const calcualarIVA = (precio) =>{
    // 13% IVA
    let precioInicial = parseFloat(precio);
    let IVA = precioInicial * (13 / 100);
    let precioFinal = precioInicial + IVA;
    return precioFinal.toFixed(2);
}

const eliminarViaje = (id) => {
    contendorCards.innerHTML = '';
    const resultado = viajes.filter((_, index) => index !== id );
    viajes = [];
    generarCard(resultado);
}



