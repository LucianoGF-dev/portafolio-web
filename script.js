/* ========================================
   ENVÍO DE FORMULARIO CON EMAILJS
   ======================================== */

// 🔑 CONFIGURACIÓN - Reemplaza con tus credenciales de EmailJS
const EMAILJS_CONFIG = {
    publicKey: 'iue1o-aumZvmMhLaV',        // Ej: 'user_abc123xyz'
    serviceId: 'service_pfpaubi',        // Ej: 'service_gmail'
    templateId: 'template_2ussk2c'       // Ej: 'template_contacto'
};

// Inicializar EmailJS (solo una vez)
if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_CONFIG.publicKey);
}

const contactForm = document.querySelector('.contact-form form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Referencias a campos
        const nameInput = contactForm.name;
        const emailInput = contactForm.email;
        const subjectInput = contactForm.subject;
        const messageInput = contactForm.message;
        
        // UI: Estado de carga
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        
        try {
            // 🔒 Validación básica
            if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
                throw new Error('Por favor completa los campos obligatorios');
            }
            
            // 📧 Preparar datos MAPEADOS a tu plantilla HTML
            const templateParams = {
                from_name: nameInput.value.trim(),           // → {{from_name}}
                from_email: emailInput.value.trim(),         // → {{from_email}}
                reply_to: emailInput.value.trim(),           // → {{reply_to}}
                message: messageInput.value.trim(),          // → {{message}}
                subject: subjectInput.value.trim() || 'Nuevo mensaje desde el sitio web',
                date: new Date().toLocaleDateString('es-UY', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }) // → {{date}}
            };
            
            // 🔄 Mostrar estado de envío
            formStatus.textContent = 'Enviando...';
            formStatus.className = '';
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            
            // 📤 Enviar con EmailJS
            const response = await emailjs.send(
                EMAILJS_CONFIG.serviceId,
                EMAILJS_CONFIG.templateId,
                templateParams
            );
            
            // ✅ Éxito
            console.log('Email enviado:', response);
            formStatus.textContent = '¡Mensaje enviado! Te responderé pronto.';
            formStatus.classList.add('success');
            contactForm.reset();
            
        } catch (error) {
            // ❌ Error
            console.error('Error al enviar email:', error);
            formStatus.textContent = error.message || 'Error al enviar. Verifica tu conexión e intenta nuevamente.';
            formStatus.classList.add('error');
            
        } finally {
            // 🔄 Restaurar botón
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
            
            // Limpiar mensaje después de 5 segundos
            setTimeout(() => {
                if (formStatus.textContent) {
                    formStatus.textContent = '';
                    formStatus.className = '';
                }
            }, 5000);
        }
    });
    
    // ✨ Feedback visual en tiempo real (opcional pero recomendado)
    const inputs = contactForm.querySelectorAll('.form-control');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.validity.valid) {
                this.style.borderColor = 'var(--primary)';
            }
        });
        input.addEventListener('input', function() {
            if (formStatus.classList.contains('error')) {
                formStatus.textContent = '';
                formStatus.classList.remove('error');
            }
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
        title: 'Aplicacion web de empresa RootCli.',
        images: [
            'img/rootcli-1.png',
            'img/rootcli-2.png',
            'img/rootcli-3.png'
        ],
        description: 'Desarrollo e implementación de una aplicación web para la empresa RootCli.'
    },
    {
        title: 'Sistema web de gestión para institución tecnológica.',
        images: [
            'img/tecnologica-1.png',
            'img/tecnologica-2.png',
            'img/tecnologica-3.png'
        ],
        description: 'Sistema web desarrollado para la gestión de cursos, grupos y turnos de una institución tecnológica.'
    },
    {
        title: 'Sistema web de e-commerce para clientes.',
        images: [
            'img/ecommerce-1.png',
            'img/ecommerce-2.png',
            'img/ecommerce-3.png'
        ],
        description: 'Sistema web desarrollado para la gestión de productos y pedidos en una tienda virtual.'
    },
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

// ====== VISOR DE IMÁGENES ======

const imageViewer = document.getElementById("image-viewer");
const viewerImage = document.getElementById("viewer-image");
const closeViewer = document.querySelector(".close-viewer");

// Abrir imagen grande
document.addEventListener("click", function(e){

    if(e.target.closest("#modal-images img")){
        viewerImage.src = e.target.src;
        imageViewer.style.display = "flex";
    }

});

// Cerrar con la X
closeViewer.addEventListener("click", ()=>{
    imageViewer.style.display = "none";
});

// Cerrar haciendo clic fuera
imageViewer.addEventListener("click",(e)=>{
    if(e.target===imageViewer){
        imageViewer.style.display="none";
    }
});

// Cerrar con ESC
document.addEventListener("keydown",(e)=>{
    if(e.key==="Escape"){
        imageViewer.style.display="none";
    }
});