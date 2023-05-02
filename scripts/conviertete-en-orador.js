let form = document.getElementById("formulario-conviertete-en-orador");

const onSubmit = (event) => {
    event.preventDefault();
    console.log("Formulario enviado");
}

form.onsubmit = onSubmit;