$(document).ready(function() {
    $('#reservaForm').on('submit', function(event) {
        event.preventDefault();

        const nombre = $('#nombre').val();
        const email = $('#email').val();
        const fecha = $('#fecha').val();
        const hora = $('#hora').val();
        const espacio = $('#espacio').val();

        const reservaInfo = `
            <h2>Detalles de la Reserva</h2>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Correo Electrónico:</strong> ${email}</p>
            <p><strong>Fecha:</strong> ${fecha}</p>
            <p><strong>Hora:</strong> ${hora}</p>
            <p><strong>Espacio:</strong> ${espacio}</p>
        `;

        $('#resultado').html(reservaInfo);
    });
});
