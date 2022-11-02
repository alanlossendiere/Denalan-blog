// Confirmacion de completado de formulario

function habilitar() {
        let nombre = document.getElementById("nameLastName").value;
        let email = document.getElementById("email").value;
        let telefono = document.getElementById("number").value;
        let hospedaje = document.getElementById("hospedaje").value;
        let personas = document.getElementById("personas").value;
        let grupo = document.getElementById("grupo").value;
        val = 0;

        if (nombre == "") {
                val++;
        }
        if (email == "") {
                val++;
        }
        if (telefono == "") {
                val++;
        }
        if (hospedaje == "") {
                val++;
        }
        if (personas == "") {
                val++;
        }
        if (grupo == "") {
                val++;
        }
        if (val == 0) {
                document.getElementById("submit-wpp").disabled = false;
        } else {
                document.getElementById("submit-wpp").disabled = true;
        }
}
document.getElementById("nameLastName").addEventListener("keyup", habilitar);
document.getElementById("email").addEventListener("keyup", habilitar);
document.getElementById("number").addEventListener("keyup", habilitar);
document.getElementById("hospedaje").addEventListener("change", habilitar);
document.getElementById("personas").addEventListener("cheange", habilitar);
document.getElementById("grupo").addEventListener("change", habilitar);

/* formulario para enviar */

const boton = document.getElementById("submit-wpp")

const enviarMensaje = () => {
        let nombre = document.getElementById("nameLastName").value;
        let email = document.getElementById("email").value;
        let telefono = document.getElementById("number").value;
        let hospedaje = document.getElementById("hospedaje").value;
        let personas = document.getElementById("personas").value;
        let grupo = document.getElementById("grupo").value;
        let fechaEntrada = document.getElementById("fecha-inicio").value;
        let fechaSalida = document.getElementById("fecha-final").value;




        var url = window.open("https://api.whatsapp.com/send?phone=5492267520604&text=Mi%20Nombre%20es:%20" + nombre + "%0ATe%20pregunto%20por:%20" + hospedaje + "%0ASomos:%20" + personas + "%0ASomos%20un%20grupo%20de:%20" + grupo +
                "%0AMi%20numero%20de%20telefono%20es:%20" + telefono + "%0AMi%20email%20es:%20" + email + "%0ADesde%20el:%20" + fechaEntrada + "%0AHasta%20el:%20" + fechaSalida + "%0AGracias%20:)");

}

boton.addEventListener('click', enviarMensaje)