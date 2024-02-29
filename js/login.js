/**
 * Función de validación
 */
function validation() {

    let correcto = true;
    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;

    if (user === "" || !(user.length >= 8 && user.length <= 12)) {
        document.getElementById('userHelp').style.visibility = "visible";
        document.getElementById('user').style.borderColor = "red";
        correcto = false;
    }

    // Validar la contraseña con al menos una mayúscula, una minúscula y un dígito
    if (!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/.test(password))) {
        document.getElementById('passwordHelp').style.visibility = "visible";
        document.getElementById('password').style.borderColor = "red";
        correcto = false;
    }

    return correcto;

}

/**
 * Función de resetear
 */
function resetear(id) {

    document.getElementById(id + 'Help').style.visibility="hidden";
    document.getElementById(id).style.borderColor="#c6c3c3";

}