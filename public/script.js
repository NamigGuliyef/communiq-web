// Language Management
let currentLanguage = 'en';

const translations = {
    en: {
        'nav.home': 'Home',
        'nav.services': 'Services',
        'nav.visas': 'Visas',
        'nav.investment': 'Investment',
        'nav.education': 'Education',
        'nav.contact': 'Contact',
        'hero.title': 'Your Trusted Guide to Portugal',
        'hero.subtitle': 'Expert immigration and relocation services to make your Portugal journey seamless and successful',
        'hero.cta': 'Start Your Journey',
        'services.title': 'Our Services',
        'services.subtitle': 'Comprehensive support for your Portugal journey',
        'education.title': 'World-Class Education',
        'education.subtitle': 'Premium international schools and top universities',
        'healthcare.title': 'Excellence in Healthcare',
        'healthcare.subtitle': 'Access to world-class medical facilities and specialists',
        'gallery.title': 'Experience Portugal',
        'gallery.subtitle': 'Discover the beauty and lifestyle that awaits you',
        'testimonials.title': 'Success Stories',
        'testimonials.subtitle': 'Hear from families who made Portugal their home',
        'contact.title': 'Start Your Journey Today',
        'contact.subtitle': 'Get in touch for a personalized consultation',
        'modal.title': 'Ready to Start Your Portugal Journey?',
        'modal.subtitle': 'Get expert guidance for your visa application',
        'modal.cta': 'Schedule Free Consultation'
    },
    az: {
        'nav.home': 'Ana səhifə',
        'nav.services': 'Xidmətlər',
        'nav.visas': 'Vizalar',
        'nav.investment': 'İnvestisiya',
        'nav.education': 'Təhsil',
        'nav.contact': 'Əlaqə',
        'hero.title': 'Portuqaliyaya Etibarlı Bələdçiniz',
        'hero.subtitle': 'Portuqaliya səyahətinizi rahat və uğurlu etmək üçün mütəxəssis immiqrasiya və köçürülmə xidmətləri',
        'hero.cta': 'Səyahətinizə Başlayın',
        'services.title': 'Xidmətlərimiz',
        'services.subtitle': 'Portuqaliya səyahətiniz üçün hərtərəfli dəstək',
        'education.title': 'Dünya Səviyyəsində Təhsil',
        'education.subtitle': 'Premium beynəlxalq məktəblər və ən yaxşı universitetlər',
        'healthcare.title': 'Səhiyyədə Mükəmməllik',
        'healthcare.subtitle': 'Dünya səviyyəsində tibbi qurumlar və mütəxəssislərə çıxış',
        'gallery.title': 'Portuqaliyanı Yaşayın',
        'gallery.subtitle': 'Sizi gözləyən gözəlliyi və həyat tərzini kəşf edin',
        'testimonials.title': 'Uğur Hekayələri',
        'testimonials.subtitle': 'Portuqaliyanı ev edən ailələrdən eşidin',
        'contact.title': 'Bu gün səyahətinizə başlayın',
        'contact.subtitle': 'Fərdi məsləhət üçün bizimlə əlaqə saxlayın',
        'modal.title': 'Portuqaliya səyahətinizə başlamağa hazırsınız?',
        'modal.subtitle': 'Viza müraciətiniz üçün mütəxəssis məsləhəti alın',
        'modal.cta': 'Pulsuz Məsləhət Planlaşdırın'
    },
    ru: {
        'nav.home': 'Главная',
        'nav.services': 'Услуги',
        'nav.visas': 'Визы',
        'nav.investment': 'Инвестиции',
        'nav.education': 'Образование',
        'nav.contact': 'Контакты',
        'hero.title': 'Ваш надежный гид в Португалию',
        'hero.subtitle': 'Экспертные услуги по иммиграции и переезду для успешного путешествия в Португалию',
        'hero.cta': 'Начать путешествие',
        'services.title': 'Наши услуги',
        'services.subtitle': 'Комплексная поддержка вашего путешествия в Португалию',
        'education.title': 'Образование мирового класса',
        'education.subtitle': 'Премиальные международные школы и лучшие университеты',
        'healthcare.title': 'Превосходство в здравоохранении',
        'healthcare.subtitle': 'Доступ к медицинским учреждениям и специалистам мирового класса',
        'gallery.title': 'Познайте Португалию',
        'gallery.subtitle': 'Откройте для себя красоту и образ жизни, которые вас ждут',
        'testimonials.title': 'Истории успеха',
        'testimonials.subtitle': 'Услышьте от семей, которые сделали Португалию своим домом',
        'contact.title': 'Начните свое путешествие сегодня',
        'contact.subtitle': 'Свяжитесь с нами для персональной консультации',
        'modal.title': 'Готовы начать свое путешествие в Португалию?',
        'modal.subtitle': 'Получите экспертное руководство для подачи заявления на визу',
        'modal.cta': 'Запланировать бесплатную консультацию'
    },
    pt: {
        'nav.home': 'Início',
        'nav.services': 'Serviços',
        'nav.visas': 'Vistos',
        'nav.investment': 'Investimento',
        'nav.education': 'Educação',
        'nav.contact': 'Contacto',
        'hero.title': 'O Seu Guia de Confiança para Portugal',
        'hero.subtitle': 'Serviços especializados de imigração e relocalização para tornar a sua jornada para Portugal tranquila e bem-sucedida',
        'hero.cta': 'Comece a Sua Jornada',
        'services.title': 'Os Nossos Serviços',
        'services.subtitle': 'Apoio abrangente para a sua jornada em Portugal',
        'education.title': 'Educação de Classe Mundial',
        'education.subtitle': 'Escolas internacionais premium e universidades de topo',
        'healthcare.title': 'Excelência em Cuidados de Saúde',
        'healthcare.subtitle': 'Acesso a instalações médicas e especialistas de classe mundial',
        'gallery.title': 'Experimente Portugal',
        'gallery.subtitle': 'Descubra a beleza e o estilo de vida que o esperam',
        'testimonials.title': 'Histórias de Sucesso',
        'testimonials.subtitle': 'Ouça famílias que fizeram de Portugal o seu lar',
        'contact.title': 'Comece a Sua Jornada Hoje',
        'contact.subtitle': 'Entre em contacto para uma consulta personalizada',
        'modal.title': 'Pronto para começar a sua jornada em Portugal?',
        'modal.subtitle': 'Obtenha orientação especializada para a sua candidatura de visto',
        'modal.cta': 'Agendar Consulta Gratuita'
    }
};

// DOM Elements
const languageMenu = document.getElementById('languageMenu');
const mobileNav = document.getElementById('mobileNav');
const menuIcon = document.getElementById('menuIcon');
const visaModal = document.getElementById('visaModal');

// Language Functions
function toggleLanguageMenu() {
    languageMenu.classList.toggle('active');
}

function setLanguage(lang) {
    currentLanguage = lang;
    updateContent();
    languageMenu.classList.remove('active');
    
    // Update language button text
    const languageText = document.querySelector('.language-text');
    const languages = {
        'en': 'English',
        'az': 'Azərbaycan',
        'ru': 'Русский',
        'pt': 'Português'
    };
    if (languageText) {
        languageText.textContent = languages[lang];
    }
}

function updateContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
}

// Mobile Menu Functions
function toggleMobileMenu() {
    mobileNav.classList.toggle('active');
    
    // Update menu icon
    if (mobileNav.classList.contains('active')) {
        menuIcon.className = 'fas fa-times';
    } else {
        menuIcon.className = 'fas fa-bars';
    }
}

// Modal Functions
function showVisaModal() {
    visaModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeVisaModal() {
    visaModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Smooth Scrolling for Anchor Links
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Intersection Observer for Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.service-card, .education-card, .healthcare-card, .testimonial-card, .gallery-item'
    );
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Close dropdowns when clicking outside
function closeDropdowns(e) {
    if (!e.target.closest('.language-selector')) {
        languageMenu.classList.remove('active');
    }
    
    if (!e.target.closest('.header-content') && mobileNav.classList.contains('active')) {
        toggleMobileMenu();
    }
    
    if (e.target === visaModal) {
        closeVisaModal();
    }
}

// Initialize Functions
function init() {
    // Set default language content
    updateContent();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Show visa modal after 2 seconds
    setTimeout(showVisaModal, 2000);
    
    // Add event listeners
    document.addEventListener('click', closeDropdowns);
    
    // Close mobile nav when clicking on links
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileNav.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });
    
    // Keyboard navigation for modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && visaModal.classList.contains('active')) {
            closeVisaModal();
        }
    });
    
    // Prevent modal content from closing modal when clicked
    const modalContent = document.querySelector('.modal-content');
    if (modalContent) {
        modalContent.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
}

// Scroll effects
function handleScroll() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'hsla(var(--background), 0.98)';
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'hsla(var(--background), 0.95)';
        header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', init);
window.addEventListener('scroll', handleScroll);

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Form handling (if needed for contact forms)
function handleFormSubmit(formData) {
    // This would typically send data to a server
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
}

// Navigation highlighting
function updateActiveNavigation() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === '/' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Call on page load
document.addEventListener('DOMContentLoaded', updateActiveNavigation);

// Performance optimization
const debouncedHandleScroll = debounce(handleScroll, 10);
window.addEventListener('scroll', debouncedHandleScroll);

// Accessibility improvements
function improveAccessibility() {
    // Add ARIA labels
    const menuButton = document.querySelector('.mobile-menu-btn');
    if (menuButton) {
        menuButton.setAttribute('aria-label', 'Toggle mobile menu');
        menuButton.setAttribute('aria-expanded', 'false');
    }
    
    const languageButton = document.querySelector('.language-btn');
    if (languageButton) {
        languageButton.setAttribute('aria-label', 'Select language');
        languageButton.setAttribute('aria-haspopup', 'true');
    }
}

document.addEventListener('DOMContentLoaded', improveAccessibility);