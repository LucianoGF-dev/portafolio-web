// Objeto de traducciones
const translations = {
    es: {
        nav: {
            about: "Acerca de mí",
            skills: "Habilidades",
            education: "Educación",
            projects: "Proyectos",
            contact: "Contacto"
        },
        hero: {
            title: "Desarrollador Full Stack",
            description: "Creando soluciones digitales innovadoras con tecnologías modernas y un enfoque centrado en el usuario.",
            btn: "Ver Proyectos"
        },
        about: {
            title: "Acerca de mí",
            history: {
                title: "Mi Historia",
                desc: "Soy un desarrollador apasionado con 3 años de experiencia en el desarrollo de aplicaciones web. Me especializo en crear soluciones eficientes y escalables utilizando las últimas tecnologías."
            },
            mission: {
                title: "Mi Misión",
                desc: "Transformar ideas en experiencias digitales que resuelvan problemas reales y generen valor para los usuarios y las empresas."
            },
            focus: {
                title: "Mi Enfoque",
                desc: "Combino creatividad, pensamiento lógico y atención al detalle para desarrollar productos."
            }
        },
        skills: {
            title: "Habilidades Técnicas",
            languages: "Lenguajes de Programación",
            frameworks: "Frameworks y Librerías",
            soft: "Habilidades Blandas",
            certifications: "Cursos y Certificaciones",
            englishCert: {
                title: "Inglés",
                desc1: "Certificado de fortalecimiento de inglés",
                desc2: "Certificado de examen Linguaskill B1 intermedio"
            },
            communication: {
                title: "Comunicación",
                desc: "Capacidad para comunicar ideas técnicas"
            },
            teamwork: {
                title: "Trabajo en Equipo",
                desc: "Colaboración efectiva en equipos multidisciplinarios"
            },
            critical: {
                title: "Pensamiento crítico",
                desc: "Enfoque analítico para resolver desafíos complejos"
            },
            listening: {
                title: "Escucha activa",
                desc: "Capacidad para comprender necesidades, ideas y emociones de los demás"
            },
            autonomy: {
                title: "Autonomía",
                desc: "Capacidad para organizar tareas, priorizar y tomar decisiones"
            }
        },
        education: {
            title: "Educación y Certificaciones",
            university: {
                title: "Universidad Tecnológica",
                desc: "Tecnólogo en informática"
            },
            institute: {
                title: "Instituto tecnológico Superior",
                desc: "Bachiller en informática"
            },
            liceo: {
                title: "Liceo Nº4 Manuel Oribe",
                desc: "Ciclo Básico"
            },
            escuela: {
                title: "Escuela Nº11 Miguel de Cervantes Saavedra",
                desc: "Escuela Primaria"
            }
        },
        projects: {
            title: "Proyectos",
            btn: "Ver Detalles",
            donantes: {
                title: "Aplicación gestión de donantes",
                desc: "Plataforma desarrollada y pensada para estudiantes de hemoterapia del hospital de Paysandú."
            },
            transporte: {
                title: "Aplicación de gestión para el sector de transporte.",
                desc: "Componente diseñado para gestionar y administrar contactos así como datos correspondientes al sector transporte."
            },
            cartelera: {
                title: "Cartelera digital para institución.",
                desc: "Implementación pensada para administrar y visualizar cursos, grupos, turnos así como eventos y comunicados oficiales."
            }
        }
    },
    en: {
        nav: {
            about: "About Me",
            skills: "Skills",
            education: "Education",
            projects: "Projects",
            contact: "Contact"
        },
        hero: {
            title: "Full Stack Developer",
            description: "Creating innovative digital solutions with modern technologies and a user-centered approach.",
            btn: "View Projects"
        },
        about: {
            title: "About Me",
            history: {
                title: "My Story",
                desc: "I am a passionate developer with 3 years of experience in web application development. I specialize in creating efficient and scalable solutions using the latest technologies."
            },
            mission: {
                title: "My Mission",
                desc: "Transform ideas into digital experiences that solve real problems and add value for users and companies."
            },
            focus: {
                title: "My Approach",
                desc: "I combine creativity, logical thinking, and attention to detail to develop products."
            }
        },
        skills: {
            title: "Technical Skills",
            languages: "Programming Languages",
            frameworks: "Frameworks and Libraries",
            soft: "Soft Skills",
            certifications: "Courses and Certifications",
            englishCert: {
                title: "English",
                desc1: "English strengthening certificate",
                desc2: "Linguaskill B1 intermediate exam certificate"
            },
            communication: {
                title: "Communication",
                desc: "Ability to communicate technical ideas"
            },
            teamwork: {
                title: "Teamwork",
                desc: "Effective collaboration in multidisciplinary teams"
            },
            critical: {
                title: "Critical Thinking",
                desc: "Analytical approach to solving complex challenges"
            },
            listening: {
                title: "Active Listening",
                desc: "Ability to understand the needs, ideas, and emotions of others"
            },
            autonomy: {
                title: "Autonomy",
                desc: "Ability to organize tasks, prioritize, and make decisions"
            }
        },
        education: {
            title: "Education and Certifications",
            university: {
                title: "Technological University",
                desc: "Technologist in Computer Science"
            },
            institute: {
                title: "Superior Technological Institute",
                desc: "Bachelor in Computer Science"
            },
            liceo: {
                title: "Liceo Nº4 Manuel Oribe",
                desc: "Basic Cycle"
            },
            escuela: {
                title: "Escuela Nº11 Miguel de Cervantes Saavedra",
                desc: "Primary School"
            }
        },
        projects: {
            title: "Projects",
            btn: "View Details",
            donantes: {
                title: "Blood Donor Management Application",
                desc: "Platform developed and designed for hemotherapy students at Paysandú Hospital."
            },
            transporte: {
                title: "Management Application for the Transportation Sector.",
                desc: "Component designed to manage and administer contacts as well as data corresponding to the transportation sector."
            },
            cartelera: {
                title: "Digital Billboard for Institution.",
                desc: "Implementation designed to administer and visualize courses, groups, shifts as well as events and official communications."
            }
        }
    }
};

// --- MODAL DE PROYECTOS ---
// Datos de ejemplo para imágenes y descripciones de proyectos
let projectData = [
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

// Función para cambiar idioma
function setLanguage(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('language', lang);
    
    // Actualizar elementos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = translations[lang];
        keys.forEach(k => value = value[k]);
        if (value) element.textContent = value;
    });
    
    // Actualizar botón de idioma
    const langBtn = document.getElementById('lang-toggle');
    langBtn.textContent = lang === 'es' ? 'EN' : 'ES';
    
    // Actualizar projectData para el modal
    updateProjectData(lang);
}

// Función para actualizar projectData según idioma
function updateProjectData(lang) {
    projectData[0].title = translations[lang].projects.donantes.title;
    projectData[0].description = translations[lang].projects.donantes.desc;
    projectData[1].title = translations[lang].projects.transporte.title;
    projectData[1].description = translations[lang].projects.transporte.desc;
    projectData[2].title = translations[lang].projects.cartelera.title;
    projectData[2].description = translations[lang].projects.cartelera.desc;
}

// Event listener para el botón de idioma
document.getElementById('lang-toggle').addEventListener('click', () => {
    const currentLang = document.documentElement.lang || 'es';
    const newLang = currentLang === 'es' ? 'en' : 'es';
    setLanguage(newLang);
});

// Cargar idioma al inicio
const savedLang = localStorage.getItem('language') || 'es';
setLanguage(savedLang);

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