let onOff = true;

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