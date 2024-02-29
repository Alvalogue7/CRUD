/**
 * Función de validación
 */
function validation() {

    let correcto = true;
    let name = document.getElementById('name').value;
    let lastName = document.getElementById('lastName').value;
    let dni = document.getElementById('dni').value;
    let email = document.getElementById('email').value;
    let age = document.getElementById('age').value;
    let horarioSeleccionado = document.querySelector('input[name="horario"]:checked');
    let terms = document.getElementById('terms').checked;
    let department = document.getElementById('department').value;

    if (name === "") {
        document.getElementById('nameHelp').style.visibility = "visible";
        document.getElementById('name').style.borderColor = "red";
        correcto = false;
    }

    if (!(lastName.length > 2)) {
        document.getElementById('lastNameHelp').style.visibility = "visible";
        document.getElementById('lastName').style.borderColor = "red";
        correcto = false;
    }

    if (!(/^[0-9]{7,8}[A-Z]$/.test(dni))) {
        document.getElementById('dniHelp').style.visibility = "visible";
        document.getElementById('dni').style.borderColor = "red";
        correcto = false;
    }

    if (!(/^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/.test(email))) {
        document.getElementById('emailHelp').style.visibility = "visible";
        document.getElementById('email').style.borderColor = "red";
        correcto = false;
    }

    if (!(/^(1[8-9]|[2-6][0-9]|7[0-5])$/.test(age))) {
        document.getElementById('ageHelp').style.visibility = "visible";
        document.getElementById('age').style.borderColor = "red";
        correcto = false;
    }

    if (!horarioSeleccionado) {
        document.getElementById('horarioHelp').style.visibility = "visible";
        correcto = false;
    }

    if (!terms) {
        document.getElementById('termsHelp').style.visibility = "visible"; 
        correcto = false;
    }

    if (department === '0') {
        document.getElementById('departmentHelp').style.visibility = "visible";
        document.getElementById('department').style.borderColor = "red"; 
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