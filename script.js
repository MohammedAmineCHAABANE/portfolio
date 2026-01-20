document.addEventListener('DOMContentLoaded', () => {
    // 0. Translation Data
    const translations = {
        fr: {
            "nav-home": "Accueil",
            "nav-projects": "Projets",
            "nav-experience": "Expérience",
            "nav-skills": "Compétences",
            "nav-contact": "Contact",
            "hero-title": "DÉVELOPPEUR FULL STACK",
            "hero-about-title": "À Propos",
            "hero-subtitle": "Je suis Mohammed-Amine Chaabane, professionnel du digital passionné par la création d’expériences numériques modernes et efficaces. Rigoureux, créatif et orienté solution, je conçois des projets alliant esthétique, performance et utilité. Mon approche repose sur l’écoute, l’analyse et l’amélioration continue afin de transformer chaque idée en une expérience digitale pertinente et de qualité.",
            "cta-contact": "Me contacter",
            "cta-projects": "Voir mes projets",
            "projects-title-1": "Projets",
            "projects-title-2": "Récents",
            "project-view": "Voir le projet",
            "project-1-name": "Prestige Drive",
            "project-1-desc": "Système de gestion de location de voitures de luxe avec réservation en ligne.",
            "project-2-name": "Mayza Marketing",
            "project-2-desc": "Plateforme web et outils de gestion pour une agence de marketing digital.",
            "project-3-name": "Wejehni",
            "project-3-desc": "Portail d'orientation académique et professionnelle pour les étudiants.",
            "exp-title-1": "Expérience",
            "exp-title-2": "Professionnelle",
            "exp-1-date": "09/2023 – Aujourd’hui",
            "exp-1-role": "Développeur Web — Mayza Marketing (Télétravail)",
            "exp-1-company": "Mayza Marketing",
            "exp-1-desc": "Maintenance et amélioration d’outils informatiques existants, développement de nouvelles fonctionnalités et création de sites web personnalisés (WordPress et projets from scratch) en utilisant les technologies étudiées en formation ainsi que de nouvelles compétences acquises en auto-formation.",
            "exp-2-date": "01/03/2023 – 31/03/2023",
            "exp-2-role": "Stagiaire Développeur Web — L’ONEE",
            "exp-2-company": "L'ONEE",
            "exp-2-desc": "Réalisation d’un projet de fin d’études portant sur la digitalisation d’un formulaire papier, en concevant un outil de saisie numérique avec HTML, CSS, JavaScript et les bonnes pratiques UX.",
            "exp-3-date": "01/05/2021 – 31/05/2021",
            "exp-3-role": "Stagiaire Développeur Web — Nanoera Systems",
            "exp-3-company": "Soft Cactus",
            "exp-3-desc": "Application des compétences acquises durant la formation Greenchip pour développer et intégrer des fonctionnalités web utilisant HTML, CSS, SQL, dans le cadre d’un stage de fin de formation.",
            "skills-title-1": "Stack",
            "skills-title-2": "Technique",
            "skill-tools": "Outils",
            "edu-title-1": "Parcours",
            "edu-title-2": "Académique",
            "edu-1-date": "09/2024 - 06/2025",
            "edu-1-name": "Licence en Développement des Médias Numériques",
            "edu-2-date": "10/2021 - 06/2023",
            "edu-2-name": "Technicien Spécialisé en Développement Web Full Stack",
            "edu-3-date": "01/2021 - 05/2021",
            "edu-3-name": "Développeur Web & Web Mobile – Formation en entreprenariat",
            "edu-4-date": "09/2019 - 06/2020",
            "edu-4-name": "Baccalauréat en Sciences de la Vie et de la Terre",
            "contact-title-1": "Contact &",
            "contact-title-2": "Coordonnées",
            "contact-info-title": "Coordonnées",
            "contact-info-desc": "N'hésitez pas à me contacter pour toute collaboration ou opportunité professionnelle.",
            "cta-cv": "Télécharger mon CV",
            "form-name": "Nom complet",
            "form-name-ph": "Votre nom",
            "form-email": "Email",
            "form-email-ph": "votre@email.com",
            "form-message": "Message",
            "form-message-ph": "Votre message...",
            "form-submit": "Envoyer le message",
            "live-status": "Actif : Codage d'un Dashboard React",
            "typewriter": ["solutions digitales performantes", "expériences utilisateur uniques", "architectures web robustes"],
            "skill-languages": "Langues",
            "lang-ar": "Arabe (Maternel)",
            "lang-fr": "Français (Intermédiaire)",
            "lang-en": "Anglais (Basique)",
            "lang-de": "Allemand (Basique)"
        },
        en: {
            "nav-home": "Home",
            "nav-projects": "Projects",
            "nav-experience": "Experience",
            "nav-skills": "Skills",
            "nav-contact": "Contact",
            "hero-title": "FULL STACK DEVELOPER",
            "hero-about-title": "About Me",
            "hero-subtitle": "I am Mohammed-Amine Chaabane, a digital professional passionate about creating modern and efficient digital experiences. Rigorous, creative, and solution-oriented, I design projects that combine aesthetics, performance, and utility. My approach is based on listening, analysis, and continuous improvement to transform every idea into a relevant and high-quality digital experience.",
            "cta-contact": "Contact Me",
            "cta-projects": "See My Projects",
            "projects-title-1": "Recent",
            "projects-title-2": "Projects",
            "project-view": "View Project",
            "project-1-name": "Prestige Drive",
            "project-1-desc": "Luxury car rental management system with online booking.",
            "project-2-name": "Mayza Marketing",
            "project-2-desc": "Web platform and management tools for a digital marketing agency.",
            "project-3-name": "Wejehni",
            "project-3-desc": "Academic and professional orientation portal for students.",
            "exp-title-1": "Professional",
            "exp-title-2": "Experience",
            "exp-1-date": "09/2023 - Present",
            "exp-1-role": "Web Developer — Mayza Marketing (Remote)",
            "exp-1-company": "Mayza Marketing",
            "exp-1-desc": "Maintenance and improvement of existing tools, development of new features (WordPress & custom projects), and creating tailored websites using modern technologies and self-taught skills.",
            "exp-2-date": "03/2023",
            "exp-2-role": "Web Developer Intern — ONEE",
            "exp-2-company": "ONEE",
            "exp-2-desc": "Graduation project: digitalization of paperwork, creating a digital entry tool (HTML, CSS, JS) with a focus on UX best practices.",
            "exp-3-date": "05/2021",
            "exp-3-role": "Web Developer Intern — Nanoera Systems",
            "exp-3-company": "Nanoera Systems",
            "exp-3-desc": "Application of skills acquired during training to develop and integrate web features using HTML, CSS, SQL.",
            "skills-title-1": "Tech",
            "skills-title-2": "Stack",
            "skill-tools": "Tools",
            "edu-title-1": "Academic",
            "edu-title-2": "Journey",
            "edu-1-date": "09/2024 - 06/2025",
            "edu-1-name": "Bachelor in Digital Media Development",
            "edu-2-date": "10/2021 - 06/2023",
            "edu-2-name": "Specialized Technician in Full Stack Web Development",
            "edu-3-date": "01/2021 - 05/2021",
            "edu-3-name": "Web & Mobile Developer (Greenchip 2.0)",
            "edu-4-date": "2020",
            "edu-4-name": "Baccalaureate in Life and Earth Sciences",
            "contact-title-1": "Contact &",
            "contact-title-2": "Details",
            "contact-info-title": "Contact Details",
            "contact-info-desc": "Feel free to contact me for any collaboration or professional opportunity.",
            "cta-cv": "Download CV",
            "form-name": "Full Name",
            "form-name-ph": "Your name",
            "form-email": "Email",
            "form-email-ph": "your@email.com",
            "form-message": "Message",
            "form-message-ph": "Your message...",
            "form-submit": "Send Message",
            "live-status": "Active: Coding a React Dashboard",
            "typewriter": ["powerful digital solutions", "unique user experiences", "robust web architectures"],
            "skill-languages": "Languages",
            "lang-ar": "Arabic (Native)",
            "lang-fr": "French (Intermediate)",
            "lang-en": "English (Basic)",
            "lang-de": "German (Basic)"
        },
        de: {
            "nav-home": "Startseite",
            "nav-projects": "Projekte",
            "nav-experience": "Erfahrung",
            "nav-skills": "Fähigkeiten",
            "nav-contact": "Kontakt",
            "hero-title": "FULL STACK ENTWICKLER",
            "hero-about-title": "Über Mich",
            "hero-subtitle": "Ich bin Mohammed-Amine Chaabane, ein Full-Stack-Entwickler, Experte für PHP (Laravel) & React. Spezialist für Digital Media Development.",
            "cta-contact": "Kontaktieren Sie mich",
            "cta-projects": "Meine Projekte sehen",
            "projects-title-1": "Aktuelle",
            "projects-title-2": "Projekte",
            "project-view": "Projekt ansehen",
            "project-1-name": "Prestige Drive",
            "project-1-desc": "Luxusauto-Vermietungsmanagementsystem mit Online-Buchung.",
            "project-2-name": "Mayza Marketing",
            "project-2-desc": "Webplattform und Managementtools für eine digitale Marketingagentur.",
            "project-3-name": "Wejehni",
            "project-3-desc": "Akademisches und berufliches Orientierungsportal für Studenten.",
            "exp-title-1": "Berufliche",
            "exp-title-2": "Erfahrung",
            "exp-1-date": "09/2023 - Heute",
            "exp-1-role": "Web-Entwickler",
            "exp-1-company": "Mayza Marketing (Remote)",
            "exp-1-desc": "Entwicklung maßgeschneiderter Web-Lösungen und Wartung bestehender Tools (WordPress, High-Code).",
            "exp-2-date": "03/2023",
            "exp-2-role": "Web-Entwickler-Praktikant",
            "exp-2-company": "L'ONEE",
            "exp-2-desc": "Abschlussprojekt: Digitalisierung eines Papierformulars, digitales Eingabetool (HTML, CSS, JS).",
            "exp-3-date": "05/2021",
            "exp-3-role": "Web-Entwickler-Praktikant",
            "exp-3-company": "Nanoera Systems",
            "exp-3-desc": "Entwicklung und Integration von Web-Funktionalitäten (HTML, CSS, SQL).",
            "skills-title-1": "Tech",
            "skills-title-2": "Stack",
            "skill-tools": "Werkzeuge",
            "edu-title-1": "Akademischer",
            "edu-title-2": "Werdegang",
            "edu-1-date": "09/2024 - 06/2025",
            "edu-1-name": "Bachelor in Digital Media Development",
            "edu-2-date": "10/2021 - 06/2023",
            "edu-2-name": "Spezialisierter Techniker für Full-Stack-Entwicklung",
            "edu-3-date": "01/2021 - 05/2021",
            "edu-3-name": "Web & Mobile Entwickler (Greenchip 2.0)",
            "edu-4-date": "2020",
            "edu-4-name": "Abitur in Physik",
            "contact-title-1": "Kontakt &",
            "contact-title-2": "Details",
            "contact-info-title": "Kontaktdaten",
            "contact-info-desc": "Kontaktieren Sie mich gerne für jede Zusammenarbeit oder berufliche Gelegenheit.",
            "cta-cv": "Lebenslauf herunterladen",
            "form-name": "Vollständiger Name",
            "form-name-ph": "Ihr Name",
            "form-email": "E-Mail",
            "form-email-ph": "ihre@email.com",
            "form-message": "Nachricht",
            "form-message-ph": "Ihre Nachricht...",
            "form-submit": "Nachricht senden",
            "live-status": "Aktiv: Entwicklung eines React-Dashboards",
            "typewriter": ["leistungsstarke digitale Lösungen", "einzigartige Benutzererfahrungen", "robuste Webarchitekturen"],
            "skill-languages": "Sprachen",
            "lang-ar": "Arabisch (Muttersprache)",
            "lang-fr": "Französisch (Mittelstufe)",
            "lang-en": "Englisch (Grundkenntnisse)",
            "lang-de": "Deutsch (Grundkenntnisse)"
        },
        ar: {
            "nav-home": "الرئيسية",
            "nav-projects": "المشاريع",
            "nav-experience": "الخبرة",
            "nav-skills": "المهارات",
            "nav-contact": "اتصل بنا",
            "hero-title": "مطور Full Stack",
            "hero-about-title": "نبذة عني",
            "hero-subtitle": "أنا محمد أمين شعبان، مطور Full-Stack خبير في PHP (Laravel) و React. متخصص في تطوير الوسائط الرقمية، أبني مستقبل الويب بأناقة وأداء.",
            "cta-contact": "اتصل بي",
            "cta-projects": "شاهد مشاريعي",
            "projects-title-1": "المشاريع",
            "projects-title-2": "الأخيرة",
            "project-view": "عرض المشروع",
            "project-1-name": "Prestige Drive",
            "project-1-desc": "نظام إدارة تأجير السيارات الفاخرة مع الحجز عبر الإنترنت.",
            "project-2-name": "Mayza Marketing",
            "project-2-desc": "منصة ويب وأدوات إدارة لوكالة تسويق رقمي.",
            "project-3-name": "Wejehni",
            "project-3-desc": "بوابة للتوجيه الأكاديمي والمهني للطلاب.",
            "exp-title-1": "الخبرة",
            "exp-title-2": "المهنية",
            "exp-1-date": "09/2023 - الحاضر",
            "exp-1-role": "مطور ويب",
            "exp-1-company": "Mayza Marketing (عن بعد)",
            "exp-1-desc": "صيانة وتحسين الأدوات الحالية، وتطوير ميزات جديدة (WordPress ومشاريع مخصصة).",
            "exp-2-date": "03/2023",
            "exp-2-role": "متدرب مطور ويب",
            "exp-2-company": "L'ONEE",
            "exp-2-desc": "مشروع التخرج: رقمنة النماذج الورقية، أداة إدخال رقمية (HTML, CSS, JS).",
            "exp-3-date": "05/2021",
            "exp-3-role": "متدرب مطور ويب",
            "exp-3-company": "Nanoera Systems",
            "exp-3-desc": "تطوير ودمج ميزات الويب باستخدام HTML, CSS, SQL.",
            "skills-title-1": "مجموعة",
            "skills-title-2": "التقنيات",
            "skill-tools": "الأدوات",
            "edu-title-1": "المسار",
            "edu-title-2": "الأكاديمي",
            "edu-1-date": "09/2024 - 06/2025",
            "edu-1-name": "إجازة في تطوير الوسائط الرقمية",
            "edu-2-date": "10/2021 - 06/2023",
            "edu-2-name": "تقني متخصص في تطوير الويب الشامل",
            "edu-3-date": "01/2021 - 05/2021",
            "edu-3-name": "مطور ويب والهاتف المحمول (Greenchip 2.0)",
            "edu-4-date": "2020",
            "edu-4-name": "بكالوريا علوم فيزيائية",
            "contact-title-1": "إتصل بنا &",
            "contact-title-2": "بيانات التواصل",
            "contact-info-title": "بيانات الاتصال",
            "contact-info-desc": "لا تتردد في الاتصال بي لأي تعاون أو فرصة مهنية.",
            "cta-cv": "تحميل السيرة الذاتية",
            "form-name": "الاسم الكامل",
            "form-name-ph": "اسمك",
            "form-email": "البريد الإلكتروني",
            "form-email-ph": "email@example.com",
            "form-message": "الرسالة",
            "form-message-ph": "رسالتك...",
            "form-submit": "إرسال الرسالة",
            "live-status": "نشط: برمجة لوحة تحكم React",
            "typewriter": ["حلول رقمية قوية", "تجارب مستخدم فريدة", "بنيات ويب متينة"],
            "skill-languages": "اللغات",
            "lang-ar": "العربية (اللغة الأم)",
            "lang-fr": "الفرنسية (متوسط)",
            "lang-en": "الإنجليزية (أساسي)",
            "lang-de": "الألمانية (أساسي)"
        },
    };

    let currentLang = 'fr';

    function updateLanguage(lang) {
        currentLang = lang;

        // Handle RTL for Arabic
        if (lang === 'ar') {
            document.documentElement.dir = 'rtl';
            document.documentElement.lang = 'ar';
        } else {
            document.documentElement.dir = 'ltr';
            document.documentElement.lang = lang;
        }

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });

        // Update typewriter source
        phrases = translations[lang].typewriter;
        phraseIndex = 0;
        charIndex = 0;
    }

    // 1. Language Switcher Logic
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateLanguage(btn.getAttribute('data-lang'));
        });
    });

    // 2. Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

        // Close menu on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            });
        });
    }

    // 3. Typewriter Effect
    const textElement = document.querySelector('.typewriter');
    let phrases = translations[currentLang].typewriter;
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            textElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            textElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at the end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    if (textElement) type();

    // 4. Custom Cursor Follower
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    const cursor = document.createElement('div');
    const cursorBlur = document.createElement('div');

    if (!isTouchDevice) {
        cursor.className = 'custom-cursor';
        document.body.appendChild(cursor);

        cursorBlur.className = 'cursor-blur';
        document.body.appendChild(cursorBlur);

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';

            // Blur follows with slight delay
            cursorBlur.animate({
                left: e.clientX + 'px',
                top: e.clientY + 'px'
            }, { duration: 500, fill: "forwards" });
        });
    } else {
        // Restore default cursor for touch devices
        document.body.style.cursor = 'auto';
    }

    // Cursor scale on hover
    const interactiveElements = document.querySelectorAll('a, button, .timeline-card, .skill-tag');
    if (!isTouchDevice) {
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('cursor-large'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-large'));
        });
    }

    // 5. Magnetic Buttons
    const magneticBtns = document.querySelectorAll('.btn-magnetic');
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', function (e) {
            const position = btn.getBoundingClientRect();
            const x = e.pageX - position.left - position.width / 2;
            const y = e.pageY - position.top - position.height / 2;

            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.5}px)`;
        });

        btn.addEventListener('mouseout', function () {
            btn.style.transform = 'translate(0px, 0px)';
        });
    });

    // 6. Scroll Animations (AOS style)
    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // If it's a skill tag, animate it specifically
                if (entry.target.classList.contains('skill-tag')) {
                    entry.target.style.transitionDelay = `${Math.random() * 0.5}s`;
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-aos], .skill-tag').forEach(element => {
        observer.observe(element);
    });

    // 7. Hero Background Parallax
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        const heroBg = document.querySelector('.hero-bg-glow');
        if (heroBg) {
            heroBg.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }

        // Spotlight Card Effect
        document.querySelectorAll('.spotlight-card').forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // 8. Interactive Particle System (Neural Background)
    const canvas = document.getElementById('particles-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        let mouse = { x: null, y: null };

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1.5; // Bigger particles
                this.speedX = Math.random() * 0.8 - 0.4;
                this.speedY = Math.random() * 0.8 - 0.4;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas.width) this.x = 0;
                else if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                else if (this.y < 0) this.y = canvas.height;

                // Mouse interaction - stronger attraction
                if (mouse.x) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 200) {
                        this.x -= dx / 40;
                        this.y -= dy / 40;
                    }
                }
            }

            draw() {
                ctx.fillStyle = 'rgba(56, 189, 248, 0.6)'; // More opaque
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();

                // Add a small glow to each dot
                ctx.shadowBlur = 10;
                ctx.shadowColor = 'rgba(56, 189, 248, 0.5)';
            }
        }

        function initParticles() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            particles = [];
            let numberOfParticles = (canvas.width * canvas.height) / 15000; // Desktop density
            for (let i = 0; i < Math.min(numberOfParticles, 120); i++) {
                particles.push(new Particle());
            }
        }

        function connectParticles() {
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    let dx = particles[a].x - particles[b].x;
                    let dy = particles[a].y - particles[b].y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 180) { // Longer reach
                        ctx.strokeStyle = `rgba(56, 189, 248, ${(1 - distance / 180) * 0.4})`; // Stronger lines
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            connectParticles();
            requestAnimationFrame(animateParticles);
        }

        window.addEventListener('resize', initParticles);
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

        initParticles();
        animateParticles();
    }

    // 8. Simple form submission feedback (moved from index.html)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // FormSubmit AJAX Submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Envoi en cours...';
            submitBtn.disabled = true;

            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);

            fetch(contactForm.action, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
                .then(response => {
                    if (response.ok) {
                        const msg = currentLang === 'fr' ? 'Message envoyé avec succès !' :
                            (currentLang === 'en' ? 'Message sent successfully!' :
                                (currentLang === 'de' ? 'Nachricht erfolgreich gesendet!' : 'تم إرسال الرسالة بنجاح!'));
                        alert(msg);
                        contactForm.reset();
                    } else {
                        console.error('FormSubmit Error:', response);
                        const err = currentLang === 'fr' ? 'Erreur serveur (vérifiez l\'activation FormSubmit).' : 'Oops! Server error (check FormSubmit activation).';
                        alert(err);
                    }
                })
                .catch(error => {
                    console.error('Fetch Error:', error);
                    const err = currentLang === 'fr' ? 'Erreur de connexion.' : 'Oops! Connection error.';
                    alert(err);
                })
                .finally(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                });
        });
    }
});
