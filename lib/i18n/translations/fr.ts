import { Translations } from "../types";

export const fr: Translations = {
  nav: {
    work: "Travaux",
    experience: "Expérience",
    projects: "Projets",
    contact: "Contact",
  },
  hero: {
    statusBadge: "À l'écoute d'opportunités",
    typewriterWords: [
      { text: "Ingénieur" },
      { text: "Logiciel" },
      { text: "Full-Stack" },
    ],
    bio: "Je conçois et maintiens des applications web et desktop de production avec TypeScript, React et Node.js. Axé sur une architecture robuste, la performance et la maîtrise de bout en bout du produit.",
    viewWork: "Voir les projets",
    getInTouch: "Me contacter",
    resumeLabel: "CV",
  },
  work: {
    badge: "Sélection de projets",
    title: "Systèmes phares",
    description:
      "Runtimes desktop critiques, plateformes de gouvernance civique et moteurs d'évaluation conçus pour des opérations réelles.",
    projects: [
      {
        slug: "yosan-budget",
        category: "ERP Secteur Public",
        role: "Lead Frontend Engineer",
        title: "Yosan - Public Procurement & Budget ERP",
        subtitle:
          "Système desktop d'exécution budgétaire et cycle de la dépense",
        highlights: [
          "Client desktop natif léger développé avec Tauri v2, React 19 et Bun (distribution <15 Mo) avec boîtes de dialogue natives et mises à jour automatiques via GitHub releases.",
          "Modélisation du cycle de la dépense publique marocaine : actes d'engagement, commissions fournisseurs, PV de réception, retenues TVA/IS et bordereaux Trésor.",
          "Calculs financiers de précision arbitraire par conversion BigInt en centimes entiers et ingestion hiérarchique Excel à 4 niveaux (Chapitre > Article > Paragraphe > Ligne).",
        ],
        cta: "Lire l'étude de cas",
      },
      {
        slug: "smarthire",
        category: "Moteur de recrutement IA",
        role: "Lead Systems Engineer",
        title: "SmartHire",
        subtitle: "Moteur d'évaluation et de tri de candidats assisté par IA",
        highlights: [
          "Évaluation découplée en deux niveaux séparant citations textuelles sémantiques par LLM et calculs déterministes de scores pondérés.",
          "Déduplication de documents par somme de contrôle SHA-256 avec verrous d'extraction en mémoire pour éliminer les appels LLM redondants.",
          "Extraction locale de texte PDF via WebAssembly et flux NDJSON temps réel pour l'interrogation interactive des CVs.",
        ],
        cta: "Lire l'étude de cas",
      },
      {
        slug: "qarawiyyin",
        category: "ERP Universitaire",
        role: "Lead Full-Stack",
        title: "Qarawiyyin",
        subtitle: "Système de gestion universitaire",
        highlights: [
          "Application desktop d'administration et portails web pour le personnel universitaire, les professeurs et les étudiants.",
          "Contrôle d'accès basé sur les rôles (RBAC) pour gérer les permissions départementales (RH, notes, scolarité et paiements).",
          "Mises à jour temps réel via WebSockets et génération automatisée d'attestations et certificats PDF officiels.",
        ],
        cta: "Lire l'étude de cas",
      },
      {
        slug: "exact-pos",
        category: "Point de vente & ERP",
        role: "Lead Frontend Engineer",
        title: "Exact POS & Retail ERP",
        subtitle: "Système desktop de point de vente et gestion de magasin",
        highlights: [
          "Point de vente desktop haute performance avec lecture code-barres, remises échelonnées et règlements multi-moyens fractionnés.",
          "Synchronisation temps réel mobile-desktop via Socket.IO permettant aux paniers mobiles en rayon d'alimenter les caisses.",
          "Moteur d'impression de tickets thermiques et factures bilingues avec jsPDF, typographie arabe vectorielle (Amiri) et mises à jour automatisées.",
        ],
        cta: "Lire l'étude de cas",
      },
    ],
    viewAllProjects: "Voir toutes les études de cas techniques",
  },
  experience: {
    badge: "Expérience",
    title: "Expérience professionnelle",
    description:
      "Parcours dans l'ingénierie de systèmes de production et le pilotage technique.",
    role: "Ingénieur Logiciel Full-Stack",
    company: "Agence logicielle & numérique",
    period: "2023 - 2026",
    bullets: [
      "Conçu, déployé et maintenu des plateformes desktop et web sur mesure pour des établissements d'enseignement et des programmes régionaux.",
      "Développé des fonctionnalités full-stack de bout en bout : conception de schémas MySQL, APIs REST avec Node.js/Express et interfaces réactives avec React et TypeScript.",
      "Créé des distributions desktop multiplateformes avec Electron et Tauri, avec pipelines de release GitHub et mises à jour automatiques.",
      "Collaboré directement avec les utilisateurs et parties prenantes pour traduire les processus administratifs en logiciel opérationnel et résoudre les incidents en production.",
    ],
    skillsTitle: "Technologies & compétences clés",
  },
  stack: {
    badge: "Compétences & Outils",
    title: "Stack technique",
    description:
      "Technologies et outils que j'utilise pour concevoir des systèmes résilients et évolutifs.",
    categories: {
      frontend: {
        title: "Langages & Frontend",
        description:
          "Clients typés, systèmes d'UI réactifs et fenêtres natives.",
      },
      backend: {
        title: "Backend & Runtimes",
        description:
          "APIs HTTP rapides, persistance des données et synchronisation temps réel.",
      },
      systems: {
        title: "Systèmes & Outils",
        description:
          "Runtimes multiplateformes, conteneurisation et automatisation.",
      },
    },
  },
  contact: {
    titleStart: "Construisons quelque chose d'",
    titleHighlight: "exceptionnel",
    titleEnd: ".",
    subtitle:
      "Disponible pour des postes à fort impact ou des missions de conseil technique.",
    nameLabel: "Nom",
    namePlaceholder: "Votre nom",
    emailLabel: "Email",
    emailPlaceholder: "vous@exemple.com",
    messageLabel: "Message",
    messagePlaceholder: "Parlez-moi de votre projet, équipe ou opportunité...",
    sendButton: "Envoyer le message",
    sendingButton: "Envoi en cours...",
    successToast:
      "Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.",
    errorToast:
      "Échec de l'envoi. Veuillez réessayer ou m'écrire directement par email.",
    orDirectEmail: "Ou contactez-moi directement à",
    errors: {
      nameRequired: "Veuillez entrer votre nom.",
      nameMin: "Le nom doit comporter au moins 2 caractères.",
      nameMax: "Le nom ne peut pas dépasser 80 caractères.",
      emailRequired: "Veuillez entrer votre adresse email.",
      emailInvalid:
        "Veuillez entrer une adresse email valide (ex. nom@domaine.com).",
      emailMax: "L'email ne peut pas dépasser 120 caractères.",
      messageRequired: "Veuillez entrer un message.",
      messageMin: "Le message doit comporter au moins 10 caractères.",
      messageMax: "Le message ne peut pas dépasser 3 000 caractères.",
    },
  },
  projectsPage: {
    badge: "Portfolio",
    title: "Projets phares",
    subtitle:
      "Analyse technique détaillée des systèmes de production que j'ai conçus et maintenus. En raison d'accords de confidentialité, l'accent est mis sur la logique système et les défis d'architecture.",
    architectureHeading: "Défis techniques clés & architecture",
    coreImplementation: "Mise en œuvre technique",
    techStack: "Stack technique",
    outcomeHeading: "Résultat & impact",
    ctaTitle: "Intéressé par une collaboration ?",
    ctaSubtitle:
      "Je suis toujours ouvert à la discussion autour de nouveaux projets et opportunités.",
    ctaButton: "Échangeons",
    items: [
      {
        slug: "yosan-budget",
        title: "Yosan - Public Procurement & Budget ERP",
        subtitle:
          "Système desktop d'exécution budgétaire et cycle de la dépense",
        role: "Lead Frontend Engineer",
        highlights: [
          "Conception d'un client desktop léger avec Tauri v2, React 19 et Bun, intégrant les sélecteurs de fichiers natifs de l'OS et les mises à jour automatiques en arrière-plan via GitHub releases.",
          "Modélisation du cycle de la dépense publique marocaine : création d'actes d'engagement, évaluation des commissions fournisseurs, validation des réceptions, retenues fiscales (TVA/IS) et émission des bordereaux Trésor.",
          "Mise en œuvre de calculs financiers à précision arbitraire via conversion BigInt en centimes entiers pour éliminer les dérives de virgule flottante IEEE 754.",
          "Développement d'un moteur d'ingestion Excel hiérarchique analysant 4 niveaux budgétaires (Chapitre > Article > Paragraphe > Ligne) avec validation syntaxique ligne par ligne et génération PDF côté client.",
        ],
        outcome:
          "Remplacement du suivi budgétaire manuel sur tableurs par un ERP desktop natif de moins de 15 Mo, garantissant la conformité procédurale des actes de marchés publics et des décaissements du trésor.",
      },
      {
        slug: "smarthire",
        title: "SmartHire",
        subtitle: "Moteur d'évaluation et de tri de candidats assisté par IA",
        role: "Lead Full-Stack & Systems Engineer",
        highlights: [
          "Ingénierie d'un système d'évaluation découplé en deux niveaux : le LLM gère l'extraction sémantique avec citations textuelles exactes, tandis qu'un algorithme déterministe calcule les scores pondérés (compétences, expérience, formation).",
          "Mise en place de la déduplication de documents par empreinte SHA-256 avec verrous d'extraction en mémoire vive pour prévenir les appels LLM concurrents redondants.",
          "Résolution d'identité des candidats avec normalisation téléphone/email et détection automatique des conflits de candidatures multi-postes.",
          "Intégration de l'extraction PDF locale via WebAssembly/unpdf et de flux de streaming NDJSON pour la recherche interactive et la préparation d'entretiens ciblée.",
        ],
        outcome:
          "Suppression de la variance aléatoire de notation des LLMs grâce à la séparation de la classification sémantique et du calcul mathématique, fournissant aux recruteurs un classement déterministe avec citations vérifiées.",
      },
      {
        slug: "qarawiyyin",
        title: "Qarawiyyin",
        subtitle: "Système de gestion universitaire",
        role: "Lead Full-Stack Engineer",
        highlights: [
          "Conception d'un contrôle d'accès basé sur les rôles (RBAC) au niveau des composants et synchronisation d'état en temps réel via WebSockets.",
          "Architecture modulaire couvrant les départements RH, Pédagogie, Examens et Paiements.",
          "Pipeline automatisé de délivrance de certificats remplaçant les flux papier.",
          "Générateur de formulaires sur mesure pour l'inscription des étudiants avec ingestion de données Excel.",
          "Mises à jour automatiques du client desktop via GitHub et electron-updater.",
        ],
        scopeNote:
          "Modules départementaux étendus (RH, Paiements, Scolarité) non listés par souci de concision.",
        outcome:
          "Migration réussie des opérations universitaires depuis un suivi papier vers un écosystème numérique unifié, offrant à la direction une visibilité en temps réel sur l'ensemble des départements.",
      },
      {
        slug: "exact-pos",
        title: "Exact POS & Retail ERP",
        subtitle: "Système desktop de point de vente et gestion de magasin",
        role: "Lead Frontend Engineer",
        highlights: [
          "Développement d'une interface de caisse desktop à haute cadence avec lecture code-barres, calcul de remises échelonnées et règlements multi-moyens fractionnés (espèces, carte, échéanciers multi-chèques).",
          "Synchronisation par sockets temps réel reliant directement les terminaux mobiles des vendeurs en rayon aux caisses principales d'encaissement.",
          "Génération de factures et tickets thermiques bilingues (français/arabe) avec jsPDF, typographie arabe vectorielle (Amiri) et mise en page RTL dynamique.",
          "Mises à jour automatiques du client desktop via electron-updater intégrées à la clôture journalière de caisse.",
        ],
        outcome:
          "Optimisation des flux d'encaissement et unification des terminaux en un registre synchronisé, assurant la comptabilité journalière et l'émission automatisée des reçus.",
      },
      {
        slug: "storyland-edtech",
        title: "Storyland",
        subtitle:
          "Plateforme de lecture gamifiée & moteur d'évaluation de quiz",
        role: "Lead Full-Stack Developer",
        highlights: [
          "Conception d'espaces de travail scolaires multi-établissements avec contrôle d'accès par rôles pour administrateurs, enseignants et élèves.",
          "Développement d'une carte d'aventure interactive en 2D sur canvas PixiJS, débloquant des étapes et récompenses selon les points de lecture des élèves.",
          "Moteur de quiz chronométré avec décompte, notation équilibrée sur 100 points pour un nombre arbitraire de questions et restriction à une tentative par jour.",
          "Pipeline d'importation de catalogue permettant aux écoles de dupliquer les histoires de la bibliothèque centrale, répliquer les séries de questions et gérer les médias locaux.",
          "Intégration d'inscriptions groupées d'élèves depuis des listes Excel via SheetJS avec validation du code Massar marocain et génération automatique de mots de passe.",
        ],
        outcome:
          "Modernisation du suivi de la lecture dans les écoles primaires, remplaçant les fiches de lecture manuelles par la correction automatisée des quiz et des classements à l'échelle de l'école.",
      },
      {
        slug: "vaa-associations",
        title: "VAA - Virtual Assistant for Associations",
        subtitle:
          "Plateforme de gouvernance d'ONG & automatisation documentaire",
        role: "Lead Full-Stack Developer",
        highlights: [
          "Moteur de compilation documentaire côté navigateur avec @react-pdf/renderer et typographie arabe intégrée (Cairo), générant statuts, procès-verbaux d'assemblée et factures conformes sans surcharge de rendu serveur.",
          "Assistant NLP conversationnel arabe auto-hébergé utilisant node-nlp et arabic-stemmer, avec réentraînement du modèle en direct et gestion en masse de jeux de données via Excel.",
          "Modules administratifs pour le suivi du cycle de vie des associations : registre du quorum de l'assemblée constitutive, registre du bureau exécutif et agrégation des subventions.",
          "Pilotage de l'architecture full-stack entre backend découplé Express/MySQL et client Vite, amorçant la migration vers Next.js 16 et Prisma ORM.",
        ],
        outcome:
          "Numérisation des flux de constitution légale et de gouvernance des associations régionales, remplaçant les démarches papier par la génération documentaire automatisée et l'assistance NLP autonome.",
      },
      {
        slug: "nid",
        title: "Nid",
        subtitle: "Système de candidature et de notation de subventions",
        role: "Lead Full-Stack Engineer",
        highlights: [
          "Moteur mathématique sur mesure pour l'évaluation des risques et du potentiel de réussite des business plans.",
          "Flux de soumission sécurisé par vérification d'identité avec liste blanche d'identifiants pré-validés.",
          "Formulaire financier multi-étapes avec validation complexe et persistance robuste des données.",
          "Tableau de bord d'analyse administrative avec visualisations de données en temps réel.",
          "Numérisation de processus manuels en présentiel en un pipeline automatisé et sécurisé.",
        ],
        outcome:
          "Remplacement des évaluations manuelles sous Excel par un outil d'aide à la décision sécurisé et automatisé, réduisant significativement les délais de traitement et les erreurs humaines dans l'attribution des subventions.",
      },
      {
        slug: "mystore-cms",
        title: "MyStore E-Commerce & Content CMS",
        subtitle:
          "Back-office administratif & moteur de gestion de boutique en ligne",
        role: "Lead Frontend Engineer",
        highlights: [
          "Architecture d'un back-office administratif gérant les catalogues multi-variantes, les niveaux de stock, les ventes flash programmées et les téléversements de médias multipart/form-data.",
          "Pipeline de traitement des commandes à double état séparant le rapprochement des paiements de la logistique d'expédition multi-étapes (en transit, suivi de livraison et retours).",
          "Moteur bilingue RTL/LTR dynamique gérant plus de 500 chaînes de traduction, basculant automatiquement le sens de lecture et les polices (Almarai pour l'arabe, Roboto pour le français).",
          "Personnalisateur de thème de boutique en direct avec palettes de couleurs dynamiques, ordonnancement des bannières, éditeur de texte enrichi WYSIWYG et analyses de chiffre d'affaires Recharts.",
        ],
        outcome:
          "Mise à disposition d'un tableau de bord opérationnel centralisé remplaçant les tableurs dispersés par un suivi unifié des commandes, du catalogue et de la personnalisation de boutique.",
      },
    ],
  },
  footer: {
    rights: "Alae Herrak ©",
  },
};
