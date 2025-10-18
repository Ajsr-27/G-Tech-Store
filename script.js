// Seleccionar elementos
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('nav ul li a');

// Función para abrir/cerrar el menú
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  
  // Cambiar icono entre hamburguesa y X
  const icon = menuToggle.querySelector('i');
  if (navMenu.classList.contains('active')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

// Cerrar el menú al hacer clic en un enlace
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    const icon = menuToggle.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  });
});

// Cerrar el menú al hacer clic fuera de él
document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
    navMenu.classList.remove('active');
    const icon = menuToggle.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

// Manejo del formulario de reseñas
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.formulario form');
    
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault(); // Evita la redirección
            
            const formData = new FormData(form);
            const button = form.querySelector('button[type="submit"]');
            const buttonText = button.textContent;
            
            // Deshabilitar el botón mientras se envía
            button.disabled = true;
            button.textContent = 'Enviando...';
            
            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    // Mensaje de éxito
                    alert('¡Gracias por tu reseña! Tu mensaje ha sido enviado correctamente.');
                    
                    // Limpiar el formulario
                    form.reset();
                } else {
                    alert('Hubo un problema al enviar tu reseña. Por favor, intenta nuevamente.');
                }
            } catch (error) {
                alert('Error al enviar el formulario. Por favor, verifica tu conexión.');
            } finally {
                // Rehabilitar el botón
                button.disabled = false;
                button.textContent = buttonText;
            }
        });
    }
});