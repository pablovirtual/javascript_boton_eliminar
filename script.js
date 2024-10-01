var usuarios = [];
// funcion para validacion de formulario
function validarFormulario() {
    // variables para la validacion de los campos del formulario
    var texto;
    var nombre = document.forms["formulario"]["nombre"].value;
    var apellido = document.forms["formulario"]["apellido"].value;
    var genero = document.forms["formulario"]["genero"].value;
    var comentarios = document.forms["formulario"]["comentarios"].value;
    // validacion de los campos del formulario
    if (nombre == null || nombre == "") {
        texto = "<span style='color:red;'>Debe de acompletar el campo de nombre</span>";
        document.getElementById("info").innerHTML = texto;
        document.querySelector("input[name=nombre]").style.border = "1px solid red";
        return false;
    } else {
        document.querySelector("input[name=nombre]").style.border = "2px solid mediumseagreen";
    }
    // validacion de los campos del formulario
    if (apellido == null || apellido == "") {
        texto = "<span style='color:red;'>Debe de acompletar el campo de apellido</span>";
        document.getElementById("info").innerHTML = texto;
        document.querySelector("input[name=apellido]").style.border = "1px solid red";
        return false;
    } else {
        document.querySelector("input[name=apellido]").style.border = "2px solid mediumseagreen";
    }
    // validacion de los campos del formulario
    if (genero == "0") {
        texto = "<span style='color:red;'>Debe de acompletar el campo de genero</span>";
        document.getElementById("info").innerHTML = texto;
        document.querySelector("select[name=genero]").style.border = "1px solid red";
        return false;
    } else {
        document.querySelector("select[name=genero]").style.border = "2px solid mediumseagreen";
    }
    // validacion de los campos del formulario
    var paises = document.getElementsByName("pais");
    var paisSeleccionado = false;
    var paisSeleccionadoValor = "";
    for (var i = 0; i < paises.length; i++) {
        if (paises[i].checked) {
            paisSeleccionado = true;
            paisSeleccionadoValor = paises[i].value;
            break;
        }
    }
    // validacion de los campos del formulario
    if (!paisSeleccionado) {
        texto = "<span style='color:red;'>Debe de seleccionar un pais</span>";
        document.getElementById("info").innerHTML = texto;
        return false;
    }
    // validacion de los campos del
    if (comentarios == null || comentarios == "") {
        texto = "<span style='color:red;'>Debe de acompletar el campo de comentarios</span>";
        document.getElementById("info").innerHTML = texto;
        return false;
    }

    texto = "<span style='color:green;'>Formulario enviado correctamente</span>";
    document.getElementById("info").innerHTML = texto;

    //array de usuarios
    var usuario = {
        nombre: nombre,
        apellido: apellido,
        genero: genero,
        pais: paisSeleccionadoValor,
        comentarios: comentarios
    };

    // el metodo push() agrega un nuevo elemento al final de un array y devuelve la nueva longitud del array.
    usuarios.push(usuario);
    // en actualizarTablaUsuarios() se actualiza la tabla de usuarios
    actualizarTablaUsuarios();

    return false;
}

function actualizarTablaUsuarios() {
    //en la variable tbody se obtiene el elemento con el id "registroUsuarios" de la tabla en html
    var tbody = document.getElementById("registroUsuarios");
    tbody.innerHTML = "";

    //el metodo forEach() ejecuta la funcion indicada una vez por cada elemento del array
    usuarios.forEach(function(usuario) {
        var tr = document.createElement("tr");

        //crea un elemento td y le asigna el valor de la propiedad nombre del objeto usuario
        var tdNombre = document.createElement("td");
        tdNombre.textContent = usuario.nombre;
        tr.appendChild(tdNombre);
        //crea un elemento td y le asigna el valor de la propiedad apellido del objeto usuario
        var tdApellido = document.createElement("td");
        tdApellido.textContent = usuario.apellido;
        tr.appendChild(tdApellido);

        var tdGenero = document.createElement("td");
        tdGenero.textContent = usuario.genero;
        tr.appendChild(tdGenero);

        var tdPais = document.createElement("td");
        tdPais.textContent = usuario.pais;
        tr.appendChild(tdPais);

        var tdComentarios = document.createElement("td");
        tdComentarios.textContent = usuario.comentarios;
        tr.appendChild(tdComentarios);
        //agrega el elemento tr al elemento tbody
        tbody.appendChild(tr);
    });
}

//variable eliminar para manipular el DOM del boton eliminar en html
var eliminar = getElementById("boton-eliminar");
eliminar.addEventlistener("click", eliminarTodo); //agrego un evento al boton eliminar

function eliminarTodo() {
    usuarios.pop(); //elimina el ultimo elemento del array
    actualizarTablaUsuarios(); //actualiza la tabla de usuarios
}








