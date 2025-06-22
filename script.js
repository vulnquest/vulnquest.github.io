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
    'title-tagline': {
        'fr': 'VulnQuest | Tests d\'intrusion & Audits de sécurité informatique',
        'en': 'VulnQuest | Penetration Testing & IT Security Audits'
    },
    'title-tagline-404': {
        'fr': 'Page non trouvée (404) | VulnQuest - Tests d\'intrusion & Audits de sécurité informatique',
        'en': 'Page not found (404) | VulnQuest - Penetration Testing & IT Security Audits'
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
        'fr': 'Évaluation de la sécurité des serveurs et des équipements composant votre infrastructure pour identifier les failles exploitables.',
        'en': 'Security assessment of servers and equipment comprising your infrastructure to identify exploitable vulnerabilities.'
    },
    'service-infra-item1': {
        'fr': 'Cartographie via le MITRE ATT&CK',
        'en': 'Mapping using the MITRE ATT&CK framework'
    },
    'service-infra-item2': {
        'fr': 'Système d\'information exposé',
        'en': 'Information system exposed on the Internet'
    },
    'service-infra-item3': {
        'fr': 'Réseau local (LAN)',
        'en': 'Local network (LAN)'
    },
    'service-infra-item4': {
        'fr': 'Focus sur les services sensibles',
        'en': 'Focus on sensitive services'
    },
    'service-conf-title': {
        'fr': 'Audits de configuration',
        'en': 'Configuration audits'
    },
    'service-conf-desc': {
        'fr': 'Évaluation des réglages de vos assets sur base d\'un référentiel afin d\'identifier les non-conformités pour proposer un plan d\'action et durcir la configuration.',
        'en': 'Assessment of the settings of your assets based on a framework to identify non-conformities, propose an action plan, and strengthen the configuration.'
    },
    'service-conf-item1': {
        'fr': 'Services annuaires (Active Directory)',
        'en': 'Directory services (Active Directory)'
    },
    'service-conf-item2': {
        'fr': 'Souscriptions Cloud (AWS, Azure, GCP)',
        'en': 'Cloud subscriptions (AWS, Azure, GCP)'
    },
    'service-conf-item3': {
        'fr': 'Serveurs Windows & Linux',
        'en': 'Windows & Linux servers'
    },
    'service-conf-item4': {
        'fr': 'Machines de travail Windows & Linux',
        'en': 'Windows & Linux workstations'
    },
    'service-audit-title': {
        'fr': 'Audits organisationnels',
        'en': 'Organizational audits'
    },
    'service-audit-desc': {
        'fr': 'Revue complète de vos systèmes, processus et politiques de sécurité pour identifier les écarts par rapport aux bonnes pratiques et normes du secteur.',
        'en': 'Comprehensive review of your systems, processes, and security policies to identify gaps compared to industry best practices and standards.'
    },
    'service-audit-item1': {
        'fr': 'Conformité réglementaire (RGPD, ISO 27001)',
        'en': 'Regulatory compliance (GDPR, ISO 27001)'
    },
    'service-audit-item2': {
        'fr': 'Analyse documentaire (PCA/PRA, PSSI)',
        'en': 'Document analysis (BCP/DRP, ISSP)'
    },
    'service-audit-item3': {
        'fr': 'Entretiens et recueil d\'informations',
        'en': 'Interviews and information gathering'
    },
    'service-audit-item4': {
        'fr': 'Prise en compte du contexte et des besoins en sécurité',
        'en': 'Consideration of the context and security needs'
    },
    'service-scan-title': {
        'fr': 'Scan de vulnérabilités',
        'en': 'Vulnerability scanning'
    },
    'service-scan-desc': {
        'fr': 'Détection automatisée et régulière des vulnérabilités connues sur vos systèmes pour maintenir un niveau de sécurité optimal en continu.',
        'en': 'Automated and regular detection of known vulnerabilities on your systems to continuously maintain an optimal level of security.'
    },
    'service-scan-item1': {
        'fr': 'Lancements programmés et périodiques',
        'en': 'Scheduled and periodic launches'
    },
    'service-scan-item2': {
        'fr': 'Détection des dernières CVE publiées',
        'en': 'Detection of the latest published CVEs'
    },
    'service-scan-item3': {
        'fr': 'Rejeux des vulnérabilités identifiées',
        'en': 'Re-testing of identified vulnerabilities'
    },
    'service-scan-item4': {
        'fr': 'Rapports détaillés & suivi des correctifs',
        'en': 'Detailed reports & tracking of fixes'
    },
    'service-osint-title': {
        'fr': 'Détection de surface d\'attaque',
        'en': 'Attack surface detection'
    },
    'service-osint-desc': {
        'fr': 'Recherche des assets accessibles en source ouverte et appartenant à votre organisation pour évaluer votre exposition aux attaques.',
        'en': 'Search for publicly accessible assets belonging to your organization to assess your exposure to attacks.'
    },
    'service-osint-item1': {
        'fr': 'Adresses IP & ASN',
        'en': 'IP Addresses & ASN'
    },
    'service-osint-item2': {
        'fr': 'Noms de domaines & certificats',
        'en': 'Domain names & certificates'
    },
    'service-osint-item3': {
        'fr': 'Services publiquement exposés',
        'en': 'Publicly exposed services'
    },
    'service-osint-item4': {
        'fr': 'Données personnelles et confidentielles',
        'en': 'Personal and confidential data'
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
    'methodology-step1-title': {
        'fr': 'Reconnaissance',
        'en': 'Reconnaissance'
    },
    'methodology-step1-desc': {
        'fr': 'Collecte d\'informations sur les systèmes cibles pour identifier les vecteurs d\'attaque potentiels. Cette phase non-intrusive permet de cartographier l\'environnement et de préparer les tests.',
        'en': 'Gathering information about targeted systems to identify potential attack vectors. This non-intrusive phase allows for mapping the environment and preparing for testing.'
    },
    'methodology-step2-title': {
        'fr': 'Analyse des vulnérabilités',
        'en': 'Vulnerability analysis'
    },
    'methodology-step2-desc': {
        'fr': 'Identification des failles de sécurité exploitables à l\'aide d\'outils spécialisés et d\'analyses manuelles approfondies.',
        'en': 'Identification of exploitable vulnerabilities using specialized tools and thorough manual analyses.'
    },
    'methodology-step3-title': {
        'fr': 'Exploitation',
        'en': 'Exploitation'
    },
    'methodology-step3-desc': {
        'fr': 'Tentatives d\'exploitation contrôlée des vulnérabilités découvertes pour évaluer leur impact réel sur votre système.',
        'en': 'Controlled exploitation attempts of discovered vulnerabilities to assess their actual impact on your system.'
    },
    'methodology-step4-title': {
        'fr': 'Post-exploitation',
        'en': 'Post-exploitation'
    },
    'methodology-step4-desc': {
        'fr': 'Évaluation de l\'étendue des accès obtenus et des données potentiellement compromises. Cette phase permet de mesurer les conséquences réelles d\'une intrusion dans votre contexte.',
        'en': 'Assessment of the extent of access gained and potentially compromised data. This phase helps measure the actual consequences of an intrusion in your context.'
    },
    'methodology-step5-title': {
        'fr': 'Analyse et rédaction',
        'en': 'Analysis and reporting'
    },
    'methodology-step5-desc': {
        'fr': 'Synthèse des résultats, évaluation des risques et transmission des recommandations détaillées pour remédier aux vulnérabilités identifiées et exploitées.',
        'en': 'Summary of results, risk assessment, and delivery of detailed recommendations to address the identified and exploited vulnerabilities.'
    },
    'methodology-standards-title': {
        'fr': 'Nos standards et référentiels',
        'en': 'Our standards and frameworks'
    },
    'methodology-standards-desc': {
        'fr': 'Nos tests d\'intrusion sont réalisés selon les méthodologies et référentiels reconnus internationalement pour garantir les tests les plus exhaustifs possibles:',
        'en': 'Our penetration tests are conducted based on internationally recognized methodologies and frameworks to ensure the most comprehensive tests possible:'
    },
    'methodology-standards-item1': {
        'fr': 'OWASP (Open Web Application Security Project) Testing Guide (WSTG, MASTG)',
        'en': 'OWASP (Open Web Application Security Project) Testing Guide (WSTG, MASTG)'
    },
    'methodology-standards-item2': {
        'fr': 'OSSTMM (Open Source Security Testing Methodology Manual)',
        'en': 'OSSTMM (Open Source Security Testing Methodology Manual)'
    },
    'methodology-standards-item3': {
        'fr': 'PTES (Penetration Testing Execution Standard)',
        'en': 'PTES (Penetration Testing Execution Standard)'
    },
    'methodology-standards-item4': {
        'fr': 'NIST SP 800-115 (Technical Guide to Information Security Testing)',
        'en': 'NIST SP 800-115 (Technical Guide to Information Security Testing)'
    },
    // Process Section
    'process-title': {
        'fr': 'Déroulement d\'une Mission',
        'en': 'Conduct of a Mission'
    },
    'process-intro': {
        'fr': 'Découvrez les étapes clés d\'une mission de test d\'intrusion avec VulnQuest, de la prise de contact initiale à la livraison du rapport final.',
        'en': 'Discover the key steps of a penetration testing mission with VulnQuest, from initial contact to final report delivery.'
    },
    'process-step1-title': {
        'fr': 'Prise de contact',
        'en': 'Initial contact'
    },
    'process-step1-desc': {
        'fr': 'Échange initial pour comprendre vos besoins spécifiques et définir le périmètre général de la mission. Nous vous proposons une première estimation et planifions une réunion de cadrage.',
        'en': 'Initial discussion to understand your specific needs and outline the general scope of the mission. We provide a preliminary estimate and schedule a planning meeting.'
    },
    'process-step2-title': {
        'fr': 'Cadrage et proposition',
        'en': 'Scoping and proposal'
    },
    'process-step2-desc': {
        'fr': 'Définition précise du périmètre, des objectifs et des contraintes de la mission. Nous établissons ensemble une proposition détaillée incluant méthodologie, livrables et planning prévisionnel.',
        'en': 'Precise definition of the scope, objectives, and constraints of the mission. Together, we draft a detailed proposal including methodology, deliverables, and a provisional schedule.'
    },
    'process-step3-title': {
        'fr': 'Réunion de lancement',
        'en': 'Kick-off meeting'
    },
    'process-step3-desc': {
        'fr': 'Présentation de l\'équipe d\'intervention, validation des derniers détails techniques et organisationnels, et mise en place des canaux de communication pour le suivi de la mission.',
        'en': 'Introduction of the pentesters, validation of final technical and organizational details, and establishment of communication channels for monitoring the mission.'
    },
    'process-step4-title': {
        'fr': 'Réalisation des tests',
        'en': 'Execution of tests'
    },
    'process-step4-desc': {
        'fr': 'Exécution des tests selon la méthodologie et le référentiel définis, avec des points d\'étape réguliers. Nos experts travaillent de manière contrôlée pour éviter tout impact sur vos systèmes de production.',
        'en': 'Execution of tests following the defined methodology and framework, with regular progress updates. Our experts work in a controlled manner to avoid any impact on your production systems.'
    },
    'process-step5-title': {
        'fr': 'Rapport et restitution',
        'en': 'Report and feedback'
    },
    'process-step5-desc': {
        'fr': 'Livraison d\'un rapport détaillé présentant les vulnérabilités découvertes, les éléments techniques permettant de les reproduire, leur niveau de criticité et nos recommandations. Une réunion de restitution permet d\'échanger sur les résultats et de répondre à vos questions.',
        'en': 'Delivery of a detailed report outlining the discovered vulnerabilities, technical details for reproduction, their severity level, and our recommendations. A debriefing meeting is held to discuss the results and address your questions.'
    },
    'process-step6-title': {
        'fr': 'Suivi et contre-test',
        'en': 'Follow-up and verification test'
    },
    'process-step6-desc': {
        'fr': 'Accompagnement dans la mise en œuvre des recommandations et possibilité de réaliser un test de vérification pour valider l\'efficacité des correctifs appliqués.',
        'en': 'Support in implementing the recommendations and the option to conduct a verification test to validate the effectiveness of the applied fixes.'
    },
    
    // Understand Section
    'understand-title': {
        'fr': 'Comprendre les Tests d\'Intrusion',
        'en': 'Understanding Penetration Testing'
    },
    'understand-intro': {
        'fr': 'Le test d\'intrusion est un type d\'audit informatique visant à vérifier la résistance d\'une ressource face une attaque informatique.',
        'en': 'Penetration testing is a type of IT audit aimed at assessing the resilience of a resource against a cyberattack.'
    },
    'understand-faq1-title': {
        'fr': 'Qu\'est-ce qu\'un test d\'intrusion ?',
        'en': 'What is a penetration test ?'
    },
    'understand-faq1-desc1': {
        'fr': 'Un test d\'intrusion (ou pentest) est une méthode d\'évaluation de la sécurité d\'un système informatique par la mise en place d\'une session d\'attaques ciblée.',
        'en': 'A penetration test (or pentest) is a method of assessing the security of a computer system by conducting a targeted attack session.'
    },
    'understand-faq1-desc2': {
        'fr': 'Cette approche proactive permet d\'identifier et de corriger les vulnérabilités avant qu\'elles ne soient découvertes et exploitées par des acteurs malveillants.',
        'en': 'This proactive approach helps identify and address vulnerabilities before they are discovered and exploited by malicious actors.'
    },
    'understand-faq1-desc3': {
        'fr': 'L\'objectif est donc d\'implémenter ou de renforcer vos défenses pour améliorer votre niveau de sécurité.',
        'en': 'The objective is therefore to implement or strengthen your defenses to enhance your security posture.'
    },
    'understand-faq2-title': {
        'fr': 'Pourquoi réaliser un test d\'intrusion ?',
        'en': 'Why conduct a penetration test ?'
    },
    'understand-faq2-desc1': {
        'fr': 'Identifier les vulnérabilités avant qu\'elles ne soient exploitées',
        'en': 'Identify vulnerabilities before they are exploited'
    },
    'understand-faq2-desc2': {
        'fr': 'Évaluer l\'efficacité de vos mesures de sécurité actuelles',
        'en': 'Assess the effectiveness of your current security measures'
    },
    'understand-faq2-desc3': {
        'fr': 'Débloquer des investissements en sécurité informatique',
        'en': 'Unlock investments in cybersecurity'
    },
    'understand-faq2-desc4': {
        'fr': 'Répondre aux exigences réglementaires et de conformité',
        'en': 'Meet regulatory and compliance requirements'
    },
    'understand-faq2-desc5': {
        'fr': 'Protéger votre réputation et la confiance de vos clients',
        'en': 'Protect your reputation and your customers\' trust'
    },
    'understand-faq2-desc6': {
        'fr': 'Sensibiliser vos équipes aux enjeux de la cybersécurité',
        'en': 'Raise awareness among your teams about cybersecurity challenges'
    },
    'understand-faq-others': {
        'fr': 'Autres questions fréquentes',
        'en': 'Other frequently asked questions'
    },
    'understand-faq3-title': {
        'fr': 'Quelle est la différence entre un scan de vulnérabilités et un test d\'intrusion ?',
        'en': 'What is the difference between a vulnerability scan and a penetration test ?'
    },
    'understand-faq3-desc': {
        'fr': 'Un scan de vulnérabilités est un processus automatisé qui identifie les failles potentielles sans chercher à les exploiter. Le test d\'intrusion va plus loin puisque l\'auditeur va tenter d\'exploiter ces vulnérabilités pour évaluer leur impact réel et les risques associés.',
        'en': 'A vulnerability scan is an automated process that identifies potential weaknesses without attempting to exploit them. A penetration test goes further, as the auditor tries to exploit these vulnerabilities to assess their actual impact and associated risks.'
    },
    'understand-faq4-title': {
        'fr': 'À quelle fréquence faut-il réaliser des tests d\'intrusion ?',
        'en': 'How often should penetration tests be conducted ?'
    },
    'understand-faq4-desc': {
        'fr': 'La fréquence recommandée dépend de plusieurs facteurs : la sensibilité de vos données, la complexité de votre infrastructure, la fréquence des changements dans votre système et les exigences réglementaires. En général, nous recommandons un test d\'intrusion complet au moins une fois par an et après chaque changement majeur dans votre infrastructure',
        'en': 'The recommended frequency depends on several factors: the sensitivity of your data, the complexity of your infrastructure, the frequency of changes in your system, and regulatory requirements. Generally, we recommend conducting a comprehensive penetration test at least once a year and after every major change in your infrastructure.'
    },
    'understand-faq5-title': {
        'fr': 'Les tests d\'intrusion peuvent-ils perturber nos systèmes ?',
        'en': 'Can penetration tests disrupt our systems ?'
    },
    'understand-faq5-desc': {
        'fr': 'Nos tests sont réalisés de manière contrôlée pour minimiser les risques d\'impact sur vos systèmes. Nous définissons ensemble les plages horaires appropriées et les précautions à prendre. Pour les systèmes critiques, nous pouvons également réaliser les tests dans un environnement de préproduction.',
        'en': 'Our tests are conducted in a controlled manner to minimize the risk of impacting your systems. We collaboratively define appropriate time windows and necessary precautions. For critical systems, we can also perform the tests in a pre-production environment.'
    },
    'understand-faq6-title': {
        'fr': 'Quels sont les différents modes de test d\'intrusion ?',
        'en': 'What are the different types of penetration testing methods ?'
    },
    'understand-faq6-desc': {
        'fr': 'Les tests d\'intrusion sont des simulations. Par conséquent, différents modes ont été créés pour s\'adapter aux différents contextes métiers: boîte noire (aucune information préalable sur la cible), boîte grise (peu d\'information sur la cible et/ou accès authentifié avec des privilèges faibles) et boîte blanche (l\'ensemble des informations sont disponibles sur la cible et/ou accès authentifié avec des privilèges élevés).',
        'en': 'Penetration tests are simulations. As a result, different methods have been developed to suit various business contexts: black-box testing (no prior information about the target), gray-box testing (limited information about the target and/or authenticated access with low privileges), and white-box testing (complete information about the target and/or authenticated access with elevated privileges).'
    },
    'understand-faq7-title': {
        'fr': 'Quelles certifications possèdent vos consultants ?',
        'en': 'What certifications do your consultants hold ?'
    },
    'understand-faq7-desc': {
        'fr': 'Nos consultants sont titulaires de certifications reconnues dans le domaine de la cybersécurité comme l\'OSCP (Offensive Security Certified Professional). Nous investissons continuellement dans leur formation pour maintenir leur expertise à jour face aux menaces émergentes.',
        'en': 'Our consultants hold recognized certifications in the field of cybersecurity, such as OSCP (Offensive Security Certified Professional). We continuously invest in their training to keep their expertise up to date in the face of emerging threats.'
    },

    // Contact Section
    'contact-title': {
        'fr': 'Contactez-nous',
        'en': 'Contact Us'
    },
    'contact-intro': {
        'fr': 'Vous souhaitez sécuriser votre système d\'information ? Notre équipe d\'experts est à votre disposition pour répondre à vos questions et vous accompagner dans votre démarche.',
        'en': 'Want to secure your information system? Our team of experts is available to answer your questions and support you in your approach.'
    },
    'contact-letstalk': {
        'fr': 'Prenons contact',
        'en': 'Get in touch with us'
    },
    'contact-letstalk-desc': {
        'fr': 'Que vous ayez besoin d\'un devis personnalisé, d\'informations complémentaires sur nos services ou de conseils sur votre stratégie de sécurité, n\'hésitez pas à nous contacter.',
        'en': 'Whether you need a personalized quote, additional information about our services, or guidance on your security strategy, feel free to contact us.'
    },
    'service-request': {
        'fr': 'Demande d\'information',
        'en': 'Information request'
    },
    'service-type': {
        'fr': 'Service souhaité',
        'en': 'Preferred service'
    },
    'footer-nav': {
        'fr': 'Navigation',
        'en': 'Browsing'
    },
    'footer-legal': {
        'fr': 'Légal',
        'en': 'Legal'
    },
    'footer-legal-item1': {
        'fr': 'Mentions légales',
        'en': 'Terms of use'
    },
    'footer-legal-item2': {
        'fr': 'Politique de confidentialité',
        'en': 'Privacy policy'
    },
    'footer-legal-item3': {
        'fr': 'Conditions générales',
        'en': 'General terms and conditions'
    },
    'footer-copyright': {
        'fr': '© 2025 VulnQuest. Tous droits réservés.',
        'en': '© 2025 VulnQuest. All rights reserved.'
    },

    // Error Section
    '404-title': {
        'fr': 'Page non trouvée',
        'en': 'Page not found'
    },
    '404-message': {
        'fr': 'La page que vous recherchez n\'existe pas ou a été déplacée. Nous vous invitons à retourner à la page d\'accueil ou à nous contacter si vous ne trouvez pas ce que vous cherchez.',
        'en': 'The page you are looking for does not exist or has been moved. We invite you to return to the homepage or contact us if you cannot find what you are looking for.'
    },
    '404-home-button': {
        'fr': 'Retour à l\'accueil',
        'en': 'Back to homepage'
    },
    '404-contact-button': {
        'fr': 'Nous contacter',
        'en': 'Contact us'
    },

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

    const queryString = window.location.search;
    const searchParams = new URLSearchParams(queryString);

    // Retrieve specific parameter by name
    if (searchParams.get("lang") === "fr") {
        updateActiveButton(langFrBtn, langEnBtn);
        setLanguage('fr');
    }

    if (searchParams.get("lang") === "en") {
        updateActiveButton(langEnBtn, langFrBtn);
        setLanguage('en');
    }

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
            setLanguage('fr');
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