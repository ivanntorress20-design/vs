document.getElementById("contac-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Evita que se recargue la página

    const nombre = document.querySelector('input[name="nombre"]').value;
    const telefono = document.querySelector('input[name="Telefono"]').value;
    const mensaje = document.querySelector('textarea[name="mensaje"]').value;

    const tuNumero = "529531330884"; // PON AQUÍ TU WHATSAPP
    const texto = `Nuevo mensaje de tu web:%0A
Nombre: ${nombre}%0A
Teléfono: ${telefono}%0A
Mensaje: ${mensaje}`;

    const url = `https://wa.me/${tuNumero}?text=${texto}`;

    window.open(url, "_blank");
});
