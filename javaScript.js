const actividades = [
    {
        "nombre": "Trekking",
        "imagen": "imagenes/trekking.jpg",
        "altimg": "imagen lugare para hacer trekking",
        "Ubicación": "Cascada Escondida vía Mirador El Peñal./ Cerro de la Virgen.",
        "descripción": "(Prestamos vestimenta se pide llevar calzado necesario)",
        "Edad": "Mayores de 15 años",
        "Precio": "$10.000",
        "Horarios": "",

    },

    {
        "nombre": "Caminatas",
        "imagen": "imagenes/caminatahornillos.jpg",
        "altimg": "imagen lugar para caminar los hornillos",
        "Ubicación": "Cascada los hornillos",
        "descripción": "(Prestamos vestimenta se pide llevar calzado necesario y agua para hidratarse)",
        "Edad": "Mayores de 15 años",
        "Precio": "$10.000",
        "Horarios": "",


    },

    {
        "nombre": "Rafting",
        "imagen": "imagenes/rafting1.jpg",
        "altimg": "imagen lugar para hacer rafting",
        "Ubicación": "Río Grande, Rio Minaclavero",
        "descripción": "(Prestamos Vestimenta, no es necesario experiencia)",
        "Edad": "Mayores de 15 años",
        "Precio": "$20.000",
        "Horarios": "",
    },

    {
        "nombre": "Aerosilla",
        "imagen": "imagenes/aerosilla.jpg",
        "altimg": "imagen lugar para hacer aerosilla",
        "Ubicación": "Villa Carlos Paz",
        "descripción": "( no es necesario experiencia )",
        "Edad": "Mayores de 10 años",
        "Precio": "$10.000",
        "Horarios": "9:30 a 12:30 y de 2:30 a 7:30",
    },

    {
        "nombre": "Tirolesa",
        "imagen": "imagenes/tirolesa feliz.jpg",
        "altimg": "imagen lugar para hacer tirolesa",
        "Ubicación": "Villa Carlos Paz",
        "descripción": "( no es necesario experiencia se brindara instrucciones en el lugar)",
        "Edad": "Mayores de 17 años",
        "Precio": "$10.000",
        "Horarios": "",
    },

];

function mostraractividades(listactividades = actividades) {
    let tarjetasHTML = "";
    listactividades.forEach((actividad) => {
        tarjetasHTML += `<div class="tarjeta">
                <div>
                    <img src="${actividad.imagen}" alt="${actividad.altimg}">
                </div>
                <div class="background">
                    <p><strong><u>
                                <h2>${actividad.nombre}</h2>
                            </u></strong></p>

                    <p>Ubicacion:
                        <strong>${actividad.Ubicación}</strong>
                        ${actividad.descripción}
                    </p>

                    <p>Edad:
                        <strong> ${actividad.Edad}</strong>
                    </p>`;

        if (actividad.Horarios != "") {
            tarjetasHTML += `<p>Horarios:${actividad.Horarios}</p>`;
        }

        tarjetasHTML += `<p>precio
                        <a span class="precio" href="https://w.app/tweEFb"> ${actividad.Precio}</span></a>
                    </p>
                </div>
            </div>`
    })

    document.querySelector(".actividades").innerHTML = tarjetasHTML;
}