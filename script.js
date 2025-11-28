// Inicializar EmailJS (reemplaza con tu userID de EmailJS)
emailjs.init('iue1o-aumZvmMhLaV');

// Envío de formulario de contacto con EmailJS
const contactForm = document.querySelector('.contact-form form');
const formStatus = document.getElementById('form-status');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        formStatus.textContent = '';
        const formData = {
            name: contactForm.name.value,
            email: contactForm.email.value,
            subject: contactForm.subject.value,
            message: contactForm.message.value
        };
        // Reemplaza 'TU_SERVICE_ID', 'TU_TEMPLATE_ID' con tus datos de EmailJS
        emailjs.send('service_pfpaubi', 'template_2ussk2c', formData)
            .then(function() {
                formStatus.textContent = '¡Mensaje enviado!';
                contactForm.reset();
            }, function(error) {
                formStatus.textContent = 'Error al enviar. Intenta de nuevo.';
            });
    });
}
// Menú móvil
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace (móvil)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Efecto de desplazamiento suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Efecto de aparición al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar efectos a las secciones
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(section);
});

// Efecto de aparición a las cards
document.querySelectorAll('.card, .skill-item, .project-card').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(item);
});


// --- MODAL DE PROYECTOS ---
// Datos de ejemplo para imágenes y descripciones de proyectos
const projectData = [
    {
        title: 'Aplicación gestión de donantes',
        images: [
            'img/Banco-1.png',
            'img/Banco-2.png',
            'img/Banco-3.png'
        ],
        description: 'Plataforma desarrollada y pensada para estudiantes de hemoterapia del hospital de Paysandú.'
    },
    {
        title: 'Aplicación de gestión para el sector de transporte.',
        images: [
            'img/transporte-1.png',
            'img/transporte-2.png',
            'img/transporte-3.png'
        ],
        description: 'Componente diseñado para gestionar y administrar contactos así como datos correspondientes al sector transporte.'
    },
    {
        title: 'Cartelera digital para institución.',
        images: [
            'img/Cartelera-1.png',
            'img/Cartelera-2.png',
            'img/Cartelera-3.png'
        ],
        description: 'Implementación pensada para administrar y visualizar cursos, grupos, turnos así como eventos y comunicados oficiales.'
    }
];

const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalImages = document.getElementById('modal-images');
const modalDescription = document.getElementById('modal-description');
const closeModalBtn = document.querySelector('.close-modal');

// Abrir modal al hacer click en "Ver Detalles"
document.querySelectorAll('.projects-grid .btn').forEach((btn, idx) => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const data = projectData[idx];
        if (data) {
            modalTitle.textContent = data.title;
            modalDescription.textContent = data.description;
            // Limpiar imágenes previas
            modalImages.innerHTML = '';
            data.images.forEach(src => {
                const img = document.createElement('img');
                img.src = src;
                img.alt = data.title;
                modalImages.appendChild(img);
            });
            modal.style.display = 'flex';
            modal.style.width = '100%';
        }
    });
});

// Cerrar modal
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar modal al hacer click fuera del contenido
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});