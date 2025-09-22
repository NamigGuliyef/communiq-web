import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'az' | 'ru' | 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  az: {
    // Navigation
    'nav.home': 'Ana Səhifə',
    'nav.services': 'Xidmətlər',
    'nav.visas': 'Vizalar',
    'nav.investment': 'İnvestisiya',
    'nav.education': 'Təhsil',
    'nav.contact': 'Əlaqə',
    
    // Hero Section
    'hero.title': 'Portuqaliya Səyahətiniz Burada Başlayır',
    'hero.subtitle': 'Biz müştərilərimizi hər mərhələdə dəstəkləyirik - viza müraciətindən tam həlledilməyə qədər, hər bir ehtiyaca uyğun fərdi yanaşma ilə.',
    'hero.cta': 'Portuqaliyaya Köçünüzü Planlaşdırın',
    
    // Facts
    'facts.title': 'Portuqaliya Faktları',
    'facts.safety': 'Dünyada 7-ci ən təhlükəsiz ölkə',
    'facts.europe': 'Avropada 3-cü ən təhlükəsiz',
    'facts.welcoming': 'İmmiqrantlar üçün ən qonaqpərvər cəmiyyətlərdən biri',
    
    // Services
    'services.title': 'Xidmətlərimiz',
    'services.subtitle': 'Portuqaliyaya köçmə prosesinizdə sizə kömək edən tam xidmət paketi',
    
    // Gallery
    'gallery.title': 'Portuqaliya Həyatı',
    
    // Education
    'education.title': 'Portuqaliyada Təhsil',
    
    // Healthcare
    'healthcare.title': 'Səhiyyə Sistemi',
    
    // Contact
    'contact.title': 'Əlaqə',
    'contact.subtitle': 'Sizin Portuqaliya səyahətinizə başlamağa hazırıq',
    'contact.form.title': 'Mesaj Göndərin',
    'contact.form.send': 'Göndər',
    'contact.phone': 'Telefon',
    'contact.office': 'Ofis',
    
    // Pages
    'page.services.title': 'Xidmətlərimiz',
    'page.visas.title': 'Viza Növləri',
    'page.investment.title': 'İnvestisiya İmkanları',
    'page.education.title': 'Təhsil və Səhiyyə',
    'page.contact.title': 'Bizimlə Əlaqə Saxlayın',
    
    // Contact
    'contact.form.name': 'Ad Soyad',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Telefon',
    'contact.form.message': 'Mesaj',
    'contact.form.submit': 'Göndər',
    'contact.info.title': 'Əlaqə Məlumatları',
    
    // Gallery Stats
    'stats.sunshine': 'Günəşli Günlər',
    'stats.temperature': 'Orta Temperatur',
    'stats.distance': 'Portugaliyadakı Məsafə',
    'stats.hours': 'gündə günəş işığı saatı',
    
    // Gallery Images
    'gallery.lisbon': 'Tarixi Lissabon',
    'gallery.lisbon.desc': 'Ənənəvi memarlıqla cazibədar məhəllələr',
    'gallery.coast': 'Atlantik Sahili',
    'gallery.coast.desc': 'Gözəl çimərliklər və sahil həyat tərzi',
    'gallery.modern': 'Müasir Həyat',
    'gallery.modern.desc': 'Müasir dizayn ənənəvi cazibə ilə birləşir',
    'gallery.community': 'İctimai Həyat',
    'gallery.community.desc': 'Canlı mədəniyyət və isti cəmiyyət',
  },
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.services': 'Услуги',
    'nav.visas': 'Визы',
    'nav.investment': 'Инвестиции',
    'nav.education': 'Образование',
    'nav.contact': 'Контакты',
    
    // Hero Section
    'hero.title': 'Ваше Путешествие в Португалию Начинается Здесь',
    'hero.subtitle': 'Мы поддерживаем наших клиентов на каждом этапе - от подачи заявления на визу до полного обустройства, с персональным подходом к каждой потребности.',
    'hero.cta': 'Планируйте Переезд в Португалию',
    
    // Facts
    'facts.title': 'Факты о Португалии',
    'facts.safety': '7-я самая безопасная страна в мире',
    'facts.europe': '3-я самая безопасная в Европе',
    'facts.welcoming': 'Одно из самых гостеприимных обществ для иммигрантов',
    
    // Services
    'services.title': 'Наши Услуги',
    'services.subtitle': 'Полный пакет услуг для помощи в процессе переезда в Португалию',
    
    // Gallery
    'gallery.title': 'Жизнь в Португалии',
    
    // Education
    'education.title': 'Образование в Португалии',
    
    // Healthcare
    'healthcare.title': 'Система Здравоохранения',
    
    // Contact
    'contact.title': 'Контакты',
    'contact.subtitle': 'Готовы начать ваше путешествие в Португалию',
    'contact.form.title': 'Отправить Сообщение',
    'contact.form.send': 'Отправить',
    'contact.phone': 'Телефон',
    'contact.office': 'Офис',
    
    // Pages
    'page.services.title': 'Наши Услуги',
    'page.visas.title': 'Типы Виз',
    'page.investment.title': 'Инвестиционные Возможности',
    'page.education.title': 'Образование и Здравоохранение',
    'page.contact.title': 'Свяжитесь с Нами',
    
    // Contact
    'contact.form.name': 'Имя Фамилия',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Телефон',
    'contact.form.message': 'Сообщение',
    'contact.form.submit': 'Отправить',
    'contact.info.title': 'Контактная Информация',
    
    // Gallery Stats
    'stats.sunshine': 'Дней Солнца',
    'stats.temperature': 'Средняя Температура',
    'stats.distance': 'Расстояние до Португалии',
    'stats.hours': 'часов солнечного света в день',
    
    // Gallery Images
    'gallery.lisbon': 'Исторический Лиссабон',
    'gallery.lisbon.desc': 'Очаровательные районы с традиционной архитектурой',
    'gallery.coast': 'Атлантическое Побережье',
    'gallery.coast.desc': 'Красивые пляжи и прибрежный образ жизни',
    'gallery.modern': 'Современная Жизнь',
    'gallery.modern.desc': 'Современный дизайн сочетается с традиционным шармом',
    'gallery.community': 'Общественная Жизнь',
    'gallery.community.desc': 'Яркая культура и теплое сообщество',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.visas': 'Visas',
    'nav.investment': 'Investment',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Your Portugal Journey Starts Here',
    'hero.subtitle': 'We support our clients at every stage, from visa application to full settlement, with a personalized approach tailored to each need.',
    'hero.cta': 'Plan Your Move to Portugal',
    
    // Facts
    'facts.title': 'Portugal Facts',
    'facts.safety': '7th safest country in the world',
    'facts.europe': '3rd safest in Europe',
    'facts.welcoming': 'One of the most welcoming societies for immigrants',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Complete service package to help you with your Portugal relocation process',
    
    // Gallery
    'gallery.title': 'Portugal Life',
    
    // Education
    'education.title': 'Education in Portugal',
    
    // Healthcare
    'healthcare.title': 'Healthcare System',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Ready to start your Portugal journey',
    'contact.form.title': 'Send a Message',
    'contact.form.send': 'Send Message',
    'contact.phone': 'Phone',
    'contact.office': 'Office',
    
    // Pages
    'page.services.title': 'Our Services',
    'page.visas.title': 'Visa Types',
    'page.investment.title': 'Investment Opportunities',
    'page.education.title': 'Education & Healthcare',
    'page.contact.title': 'Get in Touch',
    
    // Contact
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send',
    'contact.info.title': 'Contact Information',
    
    // Gallery Stats
    'stats.sunshine': 'Days of Sunshine',
    'stats.temperature': 'Average Temperature',
    'stats.distance': 'Distance to Portugal',
    'stats.hours': 'hours of sunlight per day',
    
    // Gallery Images
    'gallery.lisbon': 'Historic Lisbon',
    'gallery.lisbon.desc': 'Charming neighborhoods with traditional architecture',
    'gallery.coast': 'Atlantic Coast',
    'gallery.coast.desc': 'Beautiful beaches and coastal lifestyle',
    'gallery.modern': 'Modern Living',
    'gallery.modern.desc': 'Contemporary design meets traditional charm',
    'gallery.community': 'Community Life',
    'gallery.community.desc': 'Vibrant culture and warm community',
  },
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.services': 'Serviços',
    'nav.visas': 'Vistos',
    'nav.investment': 'Investimento',
    'nav.education': 'Educação',
    'nav.contact': 'Contato',
    
    // Hero Section
    'hero.title': 'Sua Jornada para Portugal Começa Aqui',
    'hero.subtitle': 'Apoiamos nossos clientes em todas as etapas, desde a solicitação de visto até o estabelecimento completo, com uma abordagem personalizada para cada necessidade.',
    'hero.cta': 'Planeje sua Mudança para Portugal',
    
    // Facts
    'facts.title': 'Fatos sobre Portugal',
    'facts.safety': '7º país mais seguro do mundo',
    'facts.europe': '3º mais seguro na Europa',
    'facts.welcoming': 'Uma das sociedades mais acolhedoras para imigrantes',
    
    // Services
    'services.title': 'Nossos Serviços',
    'services.subtitle': 'Pacote completo de serviços para ajudá-lo no processo de mudança para Portugal',
    
    // Gallery
    'gallery.title': 'Vida em Portugal',
    
    // Education
    'education.title': 'Educação em Portugal',
    
    // Healthcare
    'healthcare.title': 'Sistema de Saúde',
    
    // Contact
    'contact.title': 'Entre em Contato',
    'contact.subtitle': 'Pronto para começar sua jornada em Portugal',
    'contact.form.title': 'Envie uma Mensagem',
    'contact.form.send': 'Enviar Mensagem',
    'contact.phone': 'Telefone',
    'contact.office': 'Escritório',
    
    // Pages
    'page.services.title': 'Nossos Serviços',
    'page.visas.title': 'Tipos de Visto',
    'page.investment.title': 'Oportunidades de Investimento',
    'page.education.title': 'Educação e Saúde',
    'page.contact.title': 'Entre em Contato',
    
    // Contact
    'contact.form.name': 'Nome Completo',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Telefone',
    'contact.form.message': 'Mensagem',
    'contact.form.submit': 'Enviar',
    'contact.info.title': 'Informações de Contato',
    
    // Gallery Stats
    'stats.sunshine': 'Dias de Sol',
    'stats.temperature': 'Temperatura Média',
    'stats.distance': 'Distância até Portugal',
    'stats.hours': 'horas de luz solar por dia',
    
    // Gallery Images
    'gallery.lisbon': 'Lisboa Histórica',
    'gallery.lisbon.desc': 'Bairros encantadores com arquitetura tradicional',
    'gallery.coast': 'Costa Atlântica',
    'gallery.coast.desc': 'Belas praias e estilo de vida costeiro',
    'gallery.modern': 'Vida Moderna',
    'gallery.modern.desc': 'Design contemporâneo encontra charme tradicional',
    'gallery.community': 'Vida Comunitária',
    'gallery.community.desc': 'Cultura vibrante e comunidade calorosa',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('communiq-language');
      return (saved as Language) || 'en';
    }
    return 'en';
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('communiq-language', lang);
    }
  };

  const t = (key: string): string => {
    const translation = translations[language]?.[key as keyof typeof translations[typeof language]];
    return translation || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};