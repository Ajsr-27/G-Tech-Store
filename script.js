// Array de productos
const productos = [
  // Consolas
  {
    id: 1,
    nombre: "PlayStation 5",
    descripcion: "Consola Ps5 Play Station 5 Sony Slim 1 Tb - Incluye periféricos y stand.",
    precio: 1399999,
    imagen: "/imagenes/c-1.png",
    categoria: "consolas"
  },
  {
    id: 2,
    nombre: "Xbox Series S",
    descripcion: "Consola Xbox Series S Xbox S Microsoft Serie S 512 Gb.",
    precio: 989999,
    imagen: "/imagenes/c-2.png",
    categoria: "consolas"
  },
  {
    id: 3,
    nombre: "Nintendo Switch",
    descripcion: "Consola Switch Portatil Nintendo Oled 64 Gb.",
    precio: 899999,
    imagen: "/imagenes/c-3.png",
    categoria: "consolas"
  },
  {
    id: 4,
    nombre: "Xbox Series X",
    descripcion: "Microsoft Xbox Series X 1TB Carbon Black.",
    precio: 1497300,
    imagen: "/imagenes/c-4.png",
    categoria: "consolas"
  },
  {
    id: 5,
    nombre: "Asus Rog Ally",
    descripcion: "Asus Rog Ally Amd Z1 512gb Ssd, 16gb Ram.",
    precio: 1299000,
    imagen: "/imagenes/c-5.png",
    categoria: "consolas"
  },

  // Juegos
  {
    id: 6,
    nombre: "Gran Turismo 7",
    descripcion: "Juego Para Ps5 Sony Gran Turismo 7 Lat.",
    precio: 113999,
    imagen: "/imagenes/j-1.png",
    categoria: "juegos"
  },
  {
    id: 7,
    nombre: "Hogwarts Legacy",
    descripcion: "Juego Para Xbox One Hogwarts Legacy Lat.",
    precio: 129999,
    imagen: "/imagenes/j-2.png",
    categoria: "juegos"
  },
  {
    id: 8,
    nombre: "Mario Kart World",
    descripcion: "Exclusivamente en la consola Nintendo Switch 2.",
    precio: 199999,
    imagen: "/imagenes/j-3.png",
    categoria: "juegos"
  },
  {
    id: 9,
    nombre: "Marvel's Spider-Man 2",
    descripcion: "Aventura de la franquicia Marvel's Spider-Man para PS5.",
    precio: 130199,
    imagen: "/imagenes/j-4.png",
    categoria: "juegos"
  },
  {
    id: 10,
    nombre: "Battlefield 1",
    descripcion: "Xbox X/S Series Battlefield 1. Explora una historia inolvidable.",
    precio: 84699,
    imagen: "/imagenes/j-5.jpg",
    categoria: "juegos"
  },

  // Accesorios
  {
    id: 11,
    nombre: "Audífonos Gamer Bluetooth",
    descripcion: "Audífonos Gamer Bluetooth inalámbricos con micrófono y luz LED negro con azul.",
    precio: 195000,
    imagen: "/imagenes/a-1.png",
    categoria: "accesorios"
  },
  {
    id: 12,
    nombre: "Joystick Xbox X, S, One",
    descripcion: "Joystick inalámbrico Microsoft Xbox Carbon Black para Series X/S/One y PC.",
    precio: 119503,
    imagen: "/imagenes/a-2.png",
    categoria: "accesorios"
  },
  {
    id: 13,
    nombre: "JBL Tune 115 TWS",
    descripcion: "Audífonos Bluetooth JBL Tune 115 TWS Pure Bass.",
    precio: 119999,
    imagen: "/imagenes/a-3.png",
    categoria: "accesorios"
  },
  {
    id: 14,
    nombre: "Ghost Bear B100",
    descripcion: "Auriculares trimodo para juegos Ghost Bear B100 con micrófono.",
    precio: 116860,
    imagen: "/imagenes/a-4.png",
    categoria: "accesorios"
  },
  {
    id: 15,
    nombre: "JBL Tune 520BT",
    descripcion: "Audífono JBL Tune 520BT con cancelación de ruido, color negro.",
    precio: 66974,
    imagen: "/imagenes/a-5.png",
    categoria: "accesorios"
  }
];

console.log(productos)

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

// ---------------------------
// CARRITO
// ---------------------------

let carrito = [];

// Botones agregar al carrito
const botones = document.querySelectorAll(".agregar-carrito");

botones.forEach(boton => {
  boton.addEventListener("click", (e) => {
    const idProducto = parseInt(e.target.closest("button").dataset.id);
    agregarAlCarrito(idProducto);
  });
});

function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  const item = carrito.find(p => p.id === id);

  if (item) {
    item.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  mostrarCarrito();
  actualizarContador();
  guardarCarritoLS();
}

// ---------------------------
// PANEL
// ---------------------------

const botonCarrito = document.getElementById("btn-carrito");
const panelCarrito = document.getElementById("panel-carrito");
const cerrarPanel = document.getElementById("cerrar-panel");

botonCarrito.addEventListener("click", (e) => {
  e.preventDefault();
  panelCarrito.classList.add("abierto");
});

cerrarPanel.addEventListener("click", () => {
  panelCarrito.classList.remove("abierto");
});

// ---------------------------
// MOSTRAR CARRITO
// ---------------------------

function mostrarCarrito() {
  const lista = document.getElementById("lista-carrito");
  lista.innerHTML = "";

  carrito.forEach(item => {
    const li = document.createElement("li");

    li.innerHTML = `
  <div class="item-img">
    <img src="${item.imagen}" alt="${item.nombre}">
  </div>

  <div class="item-info">
    <strong>${item.nombre}</strong>
    <span>${formatearPrecio(item.precio * item.cantidad)}</span>
  </div>

  <div class="item-controles">
    <button class="btn-control" onclick="restarUnidad(${item.id})">-</button>
    <span>${item.cantidad}</span>
    <button class="btn-control" onclick="sumarUnidad(${item.id})">+</button>
    <button class="btn-delete" onclick="eliminarProducto(${item.id})">🗑️</button>
  </div>
`;

    lista.appendChild(li);
  });

  actualizarTotal();
}

// ---------------------------
// CONTADOR
// ---------------------------

function actualizarContador() {
  const contador = document.getElementById("contador-carrito");
  const total = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  contador.textContent = total;
}

// ---------------------------
// CONTROLES
// ---------------------------

function sumarUnidad(id) {
  const item = carrito.find(p => p.id === id);
  item.cantidad++;
  mostrarCarrito();
  actualizarContador();
  guardarCarritoLS();
}

function restarUnidad(id) {
  const item = carrito.find(p => p.id === id);

  if (item.cantidad > 1) {
    item.cantidad--;
  } else {
    carrito = carrito.filter(p => p.id !== id);
  }

  mostrarCarrito();
  actualizarContador();
  guardarCarritoLS();
}

function eliminarProducto(id) {
  carrito = carrito.filter(p => p.id !== id);

  mostrarCarrito();
  actualizarContador();
  guardarCarritoLS();
}

function actualizarTotal() {
  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  document.getElementById("total-carrito").textContent = formatearPrecio(total);

}

// Vaciar carrito
document.getElementById("vaciar-carrito").addEventListener("click", () => {
  carrito = [];
  mostrarCarrito();
  actualizarContador();
  guardarCarritoLS();
});

function guardarCarritoLS() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

document.addEventListener("DOMContentLoaded", () => {
  const carritoGuardado = localStorage.getItem("carrito");

  if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
    mostrarCarrito();
    actualizarContador();
  }
});

function formatearPrecio(valor) {
  return valor.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0
  });
}




