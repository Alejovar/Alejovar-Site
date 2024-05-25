document.addEventListener('DOMContentLoaded', function() {
    const colItems = document.querySelectorAll('.col-md-3');

    colItems.forEach(function(colItem) {
        colItem.addEventListener('click', function() {
            const serviceName = colItem.querySelector('.service-item').getAttribute('data-service');
            const ventanaEmergente = document.getElementById(serviceName + 'VentanaEmergente');
            ventanaEmergente.style.display = 'block';
            document.body.classList.add('ventana-emergente-open'); // Agregar clase al cuerpo para aplicar efecto gaussiano al fondo
        });
    });

    const ventanasEmergentes = document.querySelectorAll('.ventana-emergente');

    ventanasEmergentes.forEach(function(ventanaEmergente) {
        const closeButton = ventanaEmergente.querySelector('.close-button');
        if (closeButton) {
            closeButton.addEventListener('click', function(event) {
                event.stopPropagation(); // Evitar que el clic en el botón cierre la ventana emergente
                ventanaEmergente.classList.add('closing'); // Agregar clase de animación de salida
                setTimeout(function() {
                    ventanaEmergente.classList.remove('closing'); // Remover clase después de que termine la animación
                    ventanaEmergente.style.display = 'none';
                    document.body.classList.remove('ventana-emergente-open'); // Eliminar clase del cuerpo para eliminar efecto gaussiano del fondo
                }, 500); // Ajustar el tiempo según la duración de la animación
            });
        }

        // Evitar que el clic en la ventana emergente la cierre
        ventanaEmergente.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });
});
