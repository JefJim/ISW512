function validarLogin() {
    // Obtener valores de los campos
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Validar contraseña mínima de 8 caracteres
    if (password.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres");
        return false;
    }

    // Verificar si el usuario está registrado
    if (verificarUsuario(username, password)) {
        alert("¡Inicio de sesión exitoso para " + username + "!");
        return true;
    } else {
        alert("Usuario no registrado. Verifica tus credenciales.");
        return false;
    }
}

function verificarUsuario(username, password) {
    // Obtener la información del archivo .txt (simulando una lista de usuarios)
    var usuariosRegistrados = obtenerUsuariosRegistrados();

    // Verificar si el usuario y la contraseña coinciden
    for (var i = 0; i < usuariosRegistrados.length; i++) {
        var usuarioGuardado = usuariosRegistrados[i].split(",");
        if (usuarioGuardado[0] === username && usuarioGuardado[1] === password) {
            return true;
        }
    }
    return false;
}

function obtenerUsuariosRegistrados() {
    // Simulación: Obtener información del archivo .txt
    var contenidoArchivo =
        "Pepe,444\n" +
        "Juan,123\n" +
        "Maria,789";

    // Dividir las líneas del archivo y devolver como lista
    return contenidoArchivo.split("\n");
}
