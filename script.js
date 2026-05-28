// Multi-language support
const translations = {
    ru: {
        nav_home: 'Главная',
        nav_features: 'Возможности',
        nav_softs: 'Софты',
        nav_how: 'Как работает',
        nav_download: 'Скачать',
        hero_badge: 'v9.1.4 — Новое обновление',
        hero_title_1: 'Умный лаунчер',
        hero_title_2: 'для софта и баз',
        hero_desc: 'Покупайте, арендуйте и запускайте софт в один клик. Парсинг баз данных, каналы с контентом, автообновления — всё в одном приложении.',
        hero_download: 'Скачать SoftHub',
        hero_view: 'Смотреть софты',
        stat_softs: 'программ',
        stat_support: 'поддержка',
        stat_users: 'пользователей',
        features_tag: 'Что внутри',
        features_title: 'Всё для комфортной работы',
        features_desc: 'SoftHub объединяет магазин софта, парсер баз и социальную сеть в одном приложении',
        feature_1_title: 'Каталог софта',
        feature_1_desc: 'Более 50 программ: чекеры, грабберы, SMTP тулзы. Удобный поиск и фильтрация по категориям',
        feature_2_title: 'Аренда софта',
        feature_2_desc: 'Арендуйте программы по часам, дням или неделям. Экономьте бюджет для редких задач',
        feature_3_title: 'Триалы',
        feature_3_desc: 'Попробуйте любой софт бесплатно. Триал до 20 минут — проверьте перед покупкой',
        feature_4_title: 'Каналы с базами',
        feature_4_desc: 'Пользователи делятся базами данных. Скачивайте, публикуйте, зарабатывайте рейтинг',
        feature_5_title: 'Парсер баз',
        feature_5_desc: 'Заказ баз по домену от 500k до 10M строк. Цена от 15$ за миллион',
        feature_6_title: 'Автообновления',
        feature_6_desc: 'Лаунчер и софты обновляются автоматически. Всегда актуальные версии',
        softs_tag: 'Популярные программы',
        softs_title: 'Топ софтов SoftHub',
        softs_desc: 'Чекеры, грабберы и тулзы для профессионалов',
        softs_more: 'Скачать SoftHub',
        how_tag: 'Простой старт',
        how_title: 'Как начать пользоваться',
        step1_title: 'Скачай лаунчер',
        step1_desc: 'Загрузи установщик с GitHub и запусти его',
        step2_title: 'Зарегистрируйся',
        step2_desc: 'Создай аккаунт за 30 секунд',
        step3_title: 'Пополни баланс',
        step3_desc: 'USDT, BTC, ETH, TON, SOL, TRX',
        step4_title: 'Покупай и запускай',
        step4_desc: 'Выбирай софт, оплачивай и работай',
        cta_title: 'Готов начать зарабатывать?',
        cta_desc: 'Присоединяйся к сообществу SoftHub уже сегодня',
        cta_btn: 'Скачать SoftHub бесплатно',
        footer_desc: 'Умный лаунчер для софта и баз данных',
        footer_product: 'Продукт',
        footer_softs: 'Софты',
        footer_features: 'Возможности',
        footer_how: 'Как работает',
        footer_support: 'Поддержка',
        footer_legal: 'Правовая',
        footer_terms: 'Пользовательское соглашение',
        footer_privacy: 'Политика конфиденциальности',
        footer_copyright: 'Все права защищены'
    },
    en: {
        nav_home: 'Home',
        nav_features: 'Features',
        nav_softs: 'Softs',
        nav_how: 'How it works',
        nav_download: 'Download',
        hero_badge: 'v9.1.4 — New update',
        hero_title_1: 'Smart launcher',
        hero_title_2: 'for software & databases',
        hero_desc: 'Buy, rent and run software with one click. Database parsing, content channels, auto-updates — all in one app.',
        hero_download: 'Download SoftHub',
        hero_view: 'View softs',
        stat_softs: 'programs',
        stat_support: 'support',
        stat_users: 'users',
        features_tag: 'What\'s inside',
        features_title: 'Everything for comfortable work',
        features_desc: 'SoftHub combines software store, database parser and social network in one app',
        feature_1_title: 'Software Catalog',
        feature_1_desc: 'Over 50 programs: checkers, grabbers, SMTP tools. Convenient search and filtering by category',
        feature_2_title: 'Software Rental',
        feature_2_desc: 'Rent programs by hour, day or week. Save budget for rare tasks',
        feature_3_title: 'Trials',
        feature_3_desc: 'Try any software for free. Up to 20 minutes trial — test before buying',
        feature_4_title: 'Database Channels',
        feature_4_desc: 'Users share databases. Download, publish, earn rating',
        feature_5_title: 'Database Parser',
        feature_5_desc: 'Order databases by domain from 500k to 10M lines. Price from $15 per million',
        feature_6_title: 'Auto-updates',
        feature_6_desc: 'Launcher and software update automatically. Always latest versions',
        softs_tag: 'Popular programs',
        softs_title: 'Top SoftHub Software',
        softs_desc: 'Checkers, grabbers and tools for professionals',
        softs_more: 'Download SoftHub',
        how_tag: 'Simple start',
        how_title: 'How to get started',
        step1_title: 'Download launcher',
        step1_desc: 'Download the installer from GitHub and run it',
        step2_title: 'Register',
        step2_desc: 'Create an account in 30 seconds',
        step3_title: 'Top up balance',
        step3_desc: 'USDT, BTC, ETH, TON, SOL, TRX',
        step4_title: 'Buy and launch',
        step4_desc: 'Choose software, pay and work',
        cta_title: 'Ready to start earning?',
        cta_desc: 'Join the SoftHub community today',
        cta_btn: 'Download SoftHub for free',
        footer_desc: 'Smart launcher for software and databases',
        footer_product: 'Product',
        footer_softs: 'Softs',
        footer_features: 'Features',
        footer_how: 'How it works',
        footer_support: 'Support',
        footer_legal: 'Legal',
        footer_terms: 'Terms of Service',
        footer_privacy: 'Privacy Policy',
        footer_copyright: 'All rights reserved'
    }
};

let currentLang = 'ru';

function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    });
    
    localStorage.setItem('softhub_lang', lang);
    const langBtn = document.getElementById('langToggleBtn');
    if (langBtn) langBtn.textContent = lang.toUpperCase();
}

function toggleLanguage() {
    const newLang = currentLang === 'ru' ? 'en' : 'ru';
    setLanguage(newLang);
}

// Mobile menu
function initMobileMenu() {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
}

// Smooth scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Animate on scroll
function initScrollAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.feature-card, .soft-card, .step').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.5s ease';
        observer.observe(el);
    });
}

// Документация (временная заглушка)
function initLinks() {
    const docsLink = document.getElementById('docsLink');
    const termsLink = document.getElementById('termsLink');
    const privacyLink = document.getElementById('privacyLink');
    
    if (docsLink) {
        docsLink.addEventListener('click', (e) => {
            e.preventDefault();
            const isRu = currentLang === 'ru';
            alert(isRu 
                ? '📖 Документация будет доступна позже. Следите за обновлениями в Telegram!' 
                : '📖 Documentation will be available later. Follow updates on Telegram!');
        });
    }
    
    if (termsLink) {
        termsLink.addEventListener('click', (e) => {
            e.preventDefault();
            const isRu = currentLang === 'ru';
            alert(isRu
                ? '📜 Пользовательское соглашение:\n\n1. Софт предоставляется "как есть"\n2. Запрещено распространение аккаунтов\n3. Возврат средств возможен в течение 24 часов\n\nПолная версия будет опубликована позже.'
                : '📜 Terms of Service:\n\n1. Software is provided "as is"\n2. Account sharing is prohibited\n3. Refunds possible within 24 hours\n\nFull version will be published later.');
        });
    }
    
    if (privacyLink) {
        privacyLink.addEventListener('click', (e) => {
            e.preventDefault();
            const isRu = currentLang === 'ru';
            alert(isRu
                ? '🔒 Политика конфиденциальности:\n\nМы не передаём ваши данные третьим лицам. Все транзакции защищены.'
                : '🔒 Privacy Policy:\n\nWe do not share your data with third parties. All transactions are secure.');
        });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('softhub_lang');
    if (savedLang && (savedLang === 'ru' || savedLang === 'en')) {
        setLanguage(savedLang);
    } else {
        setLanguage('ru');
    }
    
    const langBtn = document.getElementById('langToggleBtn');
    if (langBtn) {
        langBtn.addEventListener('click', toggleLanguage);
    }
    
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimation();
    initLinks();
});