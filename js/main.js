let onOff = true;
let volumen = 50;

document.getElementById("on-off").addEventListener("click", () => {

    if (onOff) {

        console.log("Apagando teléfono");
        document.getElementById("pantalla").style.background="#222";
        onOff = false;

    } else if (!onOff) {

        console.log("Encenciendo teléfono");
        document.getElementById("pantalla").style.background = "#00eeff";
        onOff = true;

    }

});

document.getElementById("up").addEventListener("click", () => {

    if (onOff) {

        if (volumen >= 100) {

            console.log("El dispositivo llegó al volumen máximo!!");
            volumen -= 10;

        }

        volumen += 10;
        console.log("Volumen: " + volumen);

    } else if (!onOff) {

        celOff();

    }

});

document.getElementById("down").addEventListener("click", () => {

    if (onOff) {

        if (volumen <= 0) {

            console.log("El dispositivo llegó al volumen mínimo!!");
            volumen += 10;

        }

        volumen -= 10;
        console.log("Volumen: " + volumen);

    } else if (!onOff) {

        celOff();

    }

});

document.getElementById("pantalla").addEventListener("dblclick", () => {

    if (onOff) {

        console.log("Foto tomada y guardada en Galería");

    } else if (!onOff) {

        celOff();

    }

});

function celOff() {
    
    console.log("El teléfono está apagado!!");

}