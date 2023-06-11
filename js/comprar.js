//constantes

const form = document.getElementById("Form-comprar");
const nombre = document.querySelector('[aria-label="Nombre"]');
const apellido = document.querySelector('[aria-label="Apellido"]');
const correo = document.querySelector('[aria-label="Correo"]');
const cantidad = document.querySelector('[aria-label="Cantidad"]');
const select = document.querySelector(".form-select");
const comprar = document.querySelector('[aria-label="Comprar"]');
const borrar = document.querySelector('[aria-label="Borrar"]');
const totalPrecio = document.querySelector('[name="out"]');
const precio = 200;

var regValido = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var cant = parseInt(cantidad.value);

//Seccion de Eventos

comprar.addEventListener("click", verificar);
borrar.addEventListener("click", clear);
select.addEventListener("change", calcular);
cantidad.addEventListener("change", calcular);

// Funciones

function calcular(){
    var total = 0;
    var cant = parseInt(cantidad.value);
    if(/\D/.test(cantidad.value)){
        swal({
            title: "Error",
            text: "Este campo es solo numerico",
            icon: "warning",
          })
    }
    if(!Number.isNaN(cant)){
        switch (select.value){
            case "estudiante":
                total = precio*0.2*cant;
                break;
            case "trainee":
                total = precio*0.5*cant;
                break;
            case "junior":
                total = precio*0.85*cant;
                break;
        }
        totalPrecio.innerHTML ="Total a pagar: $"+total;
    }
}

function verificar(){
    var cant_errores=0;
    var cant = parseInt(cantidad.value);
    if(!nombre.value || nombre.value.length<2){
        cant_errores++;
        nombre.style.borderColor="red";
    }else{
        nombre.style.borderColor="gainsboro";
    }
    if(!apellido.value || apellido.value.length<2){
        cant_errores++;
        apellido.style.borderColor="red";
    }else{
        apellido.style.borderColor="gainsboro";
    }
    if(!correo.value.match(regValido)){
        cant_errores++;
        correo.style.borderColor="red";
    }else{
        correo.style.borderColor="gainsboro";
    }
    if (cant == 0 || !cantidad.value || Number.isNaN(cant) || /\D/.test(cantidad.value)){
        cant_errores++;
        cantidad.style.borderColor="red";
    }else{
        cantidad.style.borderColor="gainsboro";
    }
    if (!select.value){
        cant_errores++;
        select.style.borderColor="red";
    }else{
        select.style.borderColor="gainsboro";
    }
    if(cant_errores!=0){
        swal({
            title: "Error",
            text: "Por favor verifique los campos  indicados",
            icon: "warning",
          })
    }else{
        swal({
            title: "Muchas gracias!",
            text: "Ahora sera dirigido a la pagina de pago",
            icon: "success",
          })
    }
}

function clear(){
    form.reset();
    nombre.style.borderColor="gainsboro";
    apellido.style.borderColor="gainsboro";
    correo.style.borderColor="gainsboro";
    cantidad.style.borderColor="gainsboro";
    select.style.borderColor="gainsboro";
    totalPrecio.innerHTML ="Total a pagar: $0";
}