/**
 * VulnQuest - Main JavaScript
 * Handles form validation, FAQ toggles, and mobile menu
 */

// Translation dictionary
const translations = {
    // Header & Navigation
    'tagline': {
        'fr': 'Tests d\'intrusion & Audits de sécurité informatique',
        'en': 'Penetration Testing & IT Security Audits'
    },
    'nav-home': {
        'fr': 'Accueil',
        'en': 'Home'
    },
    'nav-services': {
        'fr': 'Services',
        'en': 'Services'
    },
    'nav-methodology': {
        'fr': 'Méthodologie',
        'en': 'Methodology'
    },
    'nav-process': {
        'fr': 'Déroulement',
        'en': 'Process'
    },
    'nav-understand': {
        'fr': 'FAQ',
        'en': 'FAQ'
    },
    'nav-contact': {
        'fr': 'Contact',
        'en': 'Contact'
    },
    
    // Hero Section
    'hero-title': {
        'fr': 'Votre sécurité informatique, notre expertise',
        'en': 'Your IT security, our expertise'
    },
    'hero-description': {
        'fr': 'VulnQuest accompagne les entreprises dans la protection de leurs systèmes d\'information grâce à des tests d\'intrusion et des audits de sécurité sur mesure. Notre équipe d\'experts certifiés identifie les vulnérabilités avant qu\'elles ne soient exploitées par des acteurs malveillants.',
        'en': 'VulnQuest helps companies protect their information systems through customized penetration tests and security audits. Our team of certified experts identifies vulnerabilities before they can be exploited by malicious actors.'
    },
    'hero-cta-quote': {
        'fr': 'Demander un devis',
        'en': 'Request a quote'
    },
    'hero-cta-services': {
        'fr': 'Découvrir nos services',
        'en': 'Discover our services'
    },
    
    // Services Section
    'services-title': {
        'fr': 'Nos Services',
        'en': 'Our Services'
    },
    'services-intro': {
        'fr': 'Nous proposons une gamme complète de services de sécurité offensive pour évaluer et renforcer votre niveau de sécurité.',
        'en': 'We offer a complete range of offensive security services to assess and strengthen your security posture.'
    },
    'service-web-title': {
        'fr': 'Tests d\'intrusion applicatifs',
        'en': 'Web application pentests'
    },
    'service-web-desc': {
        'fr': 'Analyse approfondie de la sécurité de vos applications pour détecter les vulnérabilités critiques comme les injections et les failles liées aux mécanismes d\'authentification ou d\'autorisation.',
        'en': 'In-depth analysis of the security of your applications to detect critical vulnerabilities such as injections and flaws related to authentication or authorization mechanisms.'
    },
    'service-web-item1': {
        'fr': 'Tests basés sur l\'OWASP',
        'en': 'Tests based on OWASP'
    },
    'service-web-item2': {
        'fr': 'Mode boîte noire, grise & blanche',
        'en': 'Black box, gray box & white box mode'
    },
    'service-web-item3': {
        'fr': 'Prise en compte des API',
        'en': 'API analysis'
    },
    'service-web-item4': {
        'fr': 'Analyse des applications mobiles',
        'en': 'Mobile application analysis'
    },
    'service-infra-title': {
        'fr': 'Test d\'intrusion infrastructure',
        'en': 'Infrastructure penetration testing'
    },
    'service-infra-desc': {
        'fr': 'Évaluation de la sécurité de votre infrastructure réseau, serveurs et équipements pour identifier les failles exploitables depuis l\'extérieur.',
        'en': 'Assessment of your network infrastructure, servers and equipment security to identify exploitable vulnerabilities from the outside.'
    },
    'service-infra-item1': {
        'fr': 'Scan de vulnérabilités',
        'en': 'Vulnerability Scanning'
    },
    'service-infra-item2': {
        'fr': 'Tests d\'intrusion réseau',
        'en': 'Network Penetration Testing'
    },
    'service-infra-item3': {
        'fr': 'Audit de configuration',
        'en': 'Configuration Audit'
    },
    'service-internal-title': {
        'fr': 'Pentest Interne',
        'en': 'Internal Pentest'
    },
    'service-internal-desc': {
        'fr': 'Simulation d\'attaques depuis l\'intérieur de votre réseau pour évaluer les risques liés à une compromission interne ou à un collaborateur malveillant.',
        'en': 'Simulation of attacks from inside your network to assess risks related to internal compromise or malicious employees.'
    },
    'service-internal-item1': {
        'fr': 'Élévation de privilèges',
        'en': 'Privilege Escalation'
    },
    'service-internal-item2': {
        'fr': 'Mouvement latéral',
        'en': 'Lateral Movement'
    },
    'service-internal-item3': {
        'fr': 'Exfiltration de données',
        'en': 'Data Exfiltration'
    },
    'service-internal-item4': {
        'fr': 'Persistance',
        'en': 'Persistence'
    },
    'service-audit-title': {
        'fr': 'Audits de Sécurité',
        'en': 'Security Audits'
    },
    'service-audit-desc': {
        'fr': 'Revue complète de vos systèmes, processus et politiques de sécurité pour identifier les écarts par rapport aux bonnes pratiques et normes du secteur.',
        'en': 'Complete review of your systems, processes and security policies to identify gaps compared to industry best practices and standards.'
    },
    'service-audit-item1': {
        'fr': 'Conformité réglementaire (RGPD, ISO 27001)',
        'en': 'Regulatory Compliance (GDPR, ISO 27001)'
    },
    'service-audit-item2': {
        'fr': 'Politiques de sécurité',
        'en': 'Security Policies'
    },
    'service-audit-item3': {
        'fr': 'Gestion des accès',
        'en': 'Access Management'
    },
    'service-audit-item4': {
        'fr': 'Continuité et reprise d\'activité',
        'en': 'Business Continuity and Recovery'
    },
    'service-scan-title': {
        'fr': 'Scan de Vulnérabilités',
        'en': 'Vulnerability Scanning'
    },
    'service-scan-desc': {
        'fr': 'Détection automatisée et régulière des vulnérabilités connues sur vos systèmes pour maintenir un niveau de sécurité optimal en continu.',
        'en': 'Automated and regular detection of known vulnerabilities on your systems to maintain an optimal security level continuously.'
    },
    'service-scan-item1': {
        'fr': 'Scans programmés et périodiques',
        'en': 'Scheduled and Periodic Scans'
    },
    'service-scan-item2': {
        'fr': 'Détection des CVE',
        'en': 'CVE Detection'
    },
    'service-scan-item3': {
        'fr': 'Rapports détaillés',
        'en': 'Detailed Reports'
    },
    'service-scan-item4': {
        'fr': 'Suivi des correctifs',
        'en': 'Patch Tracking'
    },
    
    // Methodology Section
    'methodology-title': {
        'fr': 'Notre Méthodologie',
        'en': 'Our Methodology'
    },
    'methodology-intro': {
        'fr': 'Nous suivons une approche structurée et rigoureuse pour garantir des tests d\'intrusion efficaces et pertinents.',
        'en': 'We follow a structured and rigorous approach to ensure effective and relevant penetration tests.'
    },
    
    // Process Section
    'process-title': {
        'fr': 'Déroulement d\'une Prestation',
        'en': 'Service Process'
    },
    'process-intro': {
        'fr': 'Découvrez les étapes clés d\'une mission de test d\'intrusion avec VulnQuest, de la prise de contact initiale à la livraison du rapport final.',
        'en': 'Discover the key steps of a penetration testing mission with VulnQuest, from initial contact to final report delivery.'
    },
    
    // Understand Section
    'understand-title': {
        'fr': 'Comprendre le Test d\'Intrusion',
        'en': 'Understanding Penetration Testing'
    },
    'understand-intro': {
        'fr': 'Le test d\'intrusion est une simulation d\'attaque informatique réalisée avec votre autorisation pour identifier et corriger les vulnérabilités avant qu\'elles ne soient exploitées par de véritables attaquants. Cette démarche proactive est essentielle pour évaluer et renforcer la sécurité de votre système d\'information.',
        'en': 'Penetration testing is a simulated cyber attack performed with your authorization to identify and fix vulnerabilities before they are exploited by real attackers. This proactive approach is essential to assess and strengthen the security of your information system.'
    },
    
    // Contact Section
    'contact-title': {
        'fr': 'Contactez-nous',
        'en': 'Contact Us'
    },
    'contact-intro': {
        'fr': 'Vous souhaitez sécuriser votre système d\'information ? Notre équipe d\'experts est à votre disposition pour répondre à vos questions et vous accompagner dans votre démarche.',
        'en': 'Want to secure your information system? Our team of experts is available to answer your questions and support you in your approach.'
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive components
    initMobileMenu();
    initFaqToggles();
    initContactForm();
    initSmoothScrolling();
    initLanguageSelector();
});

/**
 * Language Translation System
 */
function initLanguageSelector() {
    const langFrBtn = document.getElementById('lang-fr');
    const langEnBtn = document.getElementById('lang-en');
    
    // Set initial language based on HTML lang attribute
    const currentLang = document.documentElement.lang || 'fr';
    
    if (langFrBtn && langEnBtn) {
        // Add click event listeners to language buttons
        langFrBtn.addEventListener('click', function() {
            setLanguage('fr');
            updateActiveButton(langFrBtn, langEnBtn);
        });
        
        langEnBtn.addEventListener('click', function() {
            setLanguage('en');
            updateActiveButton(langEnBtn, langFrBtn);
        });
        
        // Set initial active button based on current language
        if (currentLang === 'fr') {
            updateActiveButton(langFrBtn, langEnBtn);
        } else if (currentLang === 'en') {
            updateActiveButton(langEnBtn, langFrBtn);
            setLanguage('en');
        }
    }
}

function updateActiveButton(activeBtn, inactiveBtn) {
    activeBtn.classList.add('active');
    inactiveBtn.classList.remove('active');
}

function setLanguage(lang) {
    document.documentElement.lang = lang;
    
    // Update all translatable elements
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[key] && translations[key][lang]) {
            element.innerHTML = translations[key][lang];
        }
    });
    
    // Update form placeholders
    updateFormPlaceholders(lang);
}

function updateFormPlaceholders(lang) {
    // Update form labels and placeholders
    const formLabels = {
        'name': { 'fr': 'Nom complet *', 'en': 'Full Name *' },
        'company': { 'fr': 'Entreprise *', 'en': 'Company *' },
        'email': { 'fr': 'Email professionnel *', 'en': 'Professional Email *' },
        'phone': { 'fr': 'Téléphone', 'en': 'Phone' },
        'message': { 'fr': 'Message *', 'en': 'Message *' }
    };
    
    // Update select options
    const serviceOptions = {
        'empty': { 'fr': 'Sélectionnez un service', 'en': 'Select a service' },
        'pentest-web': { 'fr': 'Test d\'intrusion Web', 'en': 'Web Penetration Testing' },
        'pentest-infra': { 'fr': 'Test d\'intrusion Infrastructure', 'en': 'Infrastructure Penetration Testing' },
        'pentest-interne': { 'fr': 'Test d\'intrusion Interne', 'en': 'Internal Penetration Testing' },
        'audit': { 'fr': 'Audit de sécurité', 'en': 'Security Audit' },
        'scan': { 'fr': 'Scan de vulnérabilités', 'en': 'Vulnerability Scanning' },
        'autre': { 'fr': 'Autre / Je ne sais pas', 'en': 'Other / I don\'t know' }
    };
    
    // Update form labels
    for (const id in formLabels) {
        const label = document.querySelector(`label[for="${id}"]`);
        if (label) {
            label.textContent = formLabels[id][lang];
        }
    }
    
    // Update service select options
    const serviceSelect = document.getElementById('service');
    if (serviceSelect) {
        const options = serviceSelect.querySelectorAll('option');
        options.forEach(option => {
            const value = option.value;
            if (value === '') {
                option.textContent = serviceOptions['empty'][lang];
            } else if (serviceOptions[value]) {
                option.textContent = serviceOptions[value][lang];
            }
        });
    }
    
    // Update form success message
    const formSuccess = document.getElementById('formSuccess');
    if (formSuccess) {
        const successMessage = {
            'fr': 'Votre message a bien été envoyé. Nous vous recontacterons dans les plus brefs délais.',
            'en': 'Your message has been sent. We will contact you as soon as possible.'
        };
        const successParagraph = formSuccess.querySelector('p');
        if (successParagraph) {
            successParagraph.textContent = successMessage[lang];
        }
    }
    
    // Update error messages
    const errorMessages = {
        'nameError': {
            'fr': 'Veuillez saisir votre nom complet (minimum 2 caractères)',
            'en': 'Please enter your full name (minimum 2 characters)'
        },
        'companyError': {
            'fr': 'Veuillez saisir le nom de votre entreprise',
            'en': 'Please enter your company name'
        },
        'emailError': {
            'fr': 'Veuillez saisir une adresse email valide',
            'en': 'Please enter a valid email address'
        },
        'phoneError': {
            'fr': 'Veuillez saisir un numéro de téléphone valide',
            'en': 'Please enter a valid phone number'
        },
        'messageError': {
            'fr': 'Veuillez saisir un message d\'au moins 10 caractères',
            'en': 'Please enter a message with at least 10 characters'
        }
    };
    
    // Update submit button
    const submitBtn = document.querySelector('.contact-form button[type="submit"]');
    if (submitBtn) {
        submitBtn.textContent = lang === 'fr' ? 'Envoyer ma demande' : 'Send my request';
    }
}

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger to X
            const spans = menuToggle.querySelectorAll('span');
            spans.forEach(span => span.classList.toggle('active'));
            
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                
                // Reset hamburger icon
                const spans = menuToggle.querySelectorAll('span');
                spans.forEach(span => span.classList.remove('active'));
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
}

/**
 * FAQ Accordion Toggles
 */
function initFaqToggles() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const toggle = item.querySelector('.faq-toggle');
        
        if (question) {
            question.addEventListener('click', function() {
                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.faq-toggle').textContent = '+';
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
                
                // Update toggle symbol
                if (toggle) {
                    toggle.textContent = item.classList.contains('active') ? '−' : '+';
                }
            });
        }
    });
}

/**
 * Contact Form Validation
 */
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset previous error messages
            const errorMessages = document.querySelectorAll('.error-message');
            errorMessages.forEach(msg => msg.textContent = '');
            
            // Get form fields
            const name = document.getElementById('name');
            const company = document.getElementById('company');
            const email = document.getElementById('email');
            const phone = document.getElementById('phone');
            const message = document.getElementById('message');
            
            // Validation flags
            let isValid = true;
            
            // Validate name (required, min 2 chars)
            if (!name.value.trim() || name.value.trim().length < 2) {
                document.getElementById('nameError').textContent = 'Veuillez saisir votre nom complet (minimum 2 caractères)';
                isValid = false;
            }
            
            // Validate company (required)
            if (!company.value.trim()) {
                document.getElementById('companyError').textContent = 'Veuillez saisir le nom de votre entreprise';
                isValid = false;
            }
            
            // Validate email (required, format)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
                document.getElementById('emailError').textContent = 'Veuillez saisir une adresse email valide';
                isValid = false;
            }
            
            // Validate phone (optional, format if provided)
            if (phone.value.trim()) {
                const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,3}[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,4}$/;
                if (!phoneRegex.test(phone.value.trim())) {
                    document.getElementById('phoneError').textContent = 'Veuillez saisir un numéro de téléphone valide';
                    isValid = false;
                }
            }
            
            // Validate message (required, min 10 chars)
            if (!message.value.trim() || message.value.trim().length < 10) {
                document.getElementById('messageError').textContent = 'Veuillez saisir un message d\'au moins 10 caractères';
                isValid = false;
            }
            
            // If valid, show success message and reset form
            if (isValid) {

                // Construct the mail body
                let mailBody = `Nom complet: ${name.value}\nEntreprise: ${company.value}\nEmail professionnel: ${email.value}`;
                mailBody += phone.value ? `\nTéléphone: ${phone.value}` : ''; // Add phone only if provided
                mailBody += service.value ? `\nService souhaité: ${service.value}` : ''; // Add service only if provided
                mailBody += `\nMessage: ${message.value}`;

                // Construct the mailto link
                const recipientEmail = "contact@vulnquest.fr";
                const subject = "Demande de service pour VulnQuest";
                const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailBody)}`;
                
                // Redirect to the mailto link
                window.location.href = mailtoLink;

                contactForm.reset();
                contactForm.style.display = 'none';
                formSuccess.style.display = 'block';
                
                // For demo purposes, reset after 5 seconds
                setTimeout(() => {
                    contactForm.style.display = 'grid';
                    formSuccess.style.display = 'none';
                }, 5000);
            }
        });
    }
}

/**
 * Smooth Scrolling for Anchor Links
 */
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only process internal links
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                
                // Skip if it's just "#"
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Get header height for offset
                    const headerHeight = document.querySelector('header').offsetHeight;
                    
                    // Calculate position
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                    
                    // Smooth scroll
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

/**
 * Intersection Observer for Animations
 * Add subtle animations when elements come into view
 */
document.addEventListener('DOMContentLoaded', function() {
    // Create observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });
    
    // Elements to observe
    const elements = document.querySelectorAll('.service-card, .methodology-step, .timeline-item, .faq-item');
    elements.forEach(element => {
        observer.observe(element);
    });
});

// Add CSS for animations
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .service-card, .methodology-step, .timeline-item, .faq-item {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .service-card.animate, .methodology-step.animate, .timeline-item.animate, .faq-item.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        .methodology-step:nth-child(2), .timeline-item:nth-child(2), .service-card:nth-child(2) {
            transition-delay: 0.1s;
        }
        
        .methodology-step:nth-child(3), .timeline-item:nth-child(3), .service-card:nth-child(3) {
            transition-delay: 0.2s;
        }
        
        .methodology-step:nth-child(4), .timeline-item:nth-child(4), .service-card:nth-child(4) {
            transition-delay: 0.3s;
        }
        
        .methodology-step:nth-child(5), .timeline-item:nth-child(5), .service-card:nth-child(5) {
            transition-delay: 0.4s;
        }
    `;
    document.head.appendChild(style);
});