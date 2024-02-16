// @flow
import * as d3 from 'd3'

export type TrackId = 'MOBILE' | 'WEB_CLIENT' | 'FOUNDATIONS' | 'SERVERS' |
  'PROJECT_MANAGEMENT' | 'COMMUNICATION' | 'CRAFT' | 'INITIATIVE' |
  'CAREER_DEVELOPMENT' | 'ORG_DESIGN' | 'WELLBEING' | 'ACCOMPLISHMENT' |
  'MENTORSHIP' | 'EVANGELISM' | 'RECRUITING' | 'COMMUNITY'
export type Milestone = 0 | 1 | 2 | 3 | 4 | 5

export type MilestoneMap = {
  'MOBILE': Milestone,
  'WEB_CLIENT': Milestone,
  'FOUNDATIONS': Milestone,
  'SERVERS': Milestone,
  'PROJECT_MANAGEMENT': Milestone,
  'COMMUNICATION': Milestone,
  'CRAFT': Milestone,
  'INITIATIVE': Milestone,
  'CAREER_DEVELOPMENT': Milestone,
  'ORG_DESIGN': Milestone,
  'WELLBEING': Milestone,
  'ACCOMPLISHMENT': Milestone,
  'MENTORSHIP': Milestone,
  'EVANGELISM': Milestone,
  'RECRUITING': Milestone,
  'COMMUNITY': Milestone
}
export const milestones = [0, 1, 2, 3, 4, 5]

export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0: return 0
    case 1: return 1
    case 2: return 3
    case 3: return 6
    case 4: return 12
    case 5: return 20
    default: return 0
  }
}

export const pointsToLevels = {
  '0': '1.1',
  '5': '1.2',
  '11': '1.3',
  '17': '2.1',
  '23': '2.2',
  '29': '2.3',
  '36': '3.1',
  '43': '3.2',
  '50': '3.3',
  '58': '4.1',
  '66': '4.2',
  '74': '4.3',
  '90': '5.1',
  '110': '5.2',
  '135': '5.3',
}

export const maxLevel = 135

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[]
  }[]
}

type Tracks = {|
  'WEB_CLIENT': Track,
  'FOUNDATIONS': Track,
  'SERVERS': Track,
  'PROJECT_MANAGEMENT': Track,
  'COMMUNICATION': Track,
  'CRAFT': Track,
  'INITIATIVE': Track,
  'CAREER_DEVELOPMENT': Track,
  'ORG_DESIGN': Track,
  'WELLBEING': Track,
  'ACCOMPLISHMENT': Track,
  'MENTORSHIP': Track,
  'EVANGELISM': Track,
  'RECRUITING': Track,
  'COMMUNITY': Track
|}

export const tracks: Tracks = {
    "WEB_CLIENT": {
        "displayName": "Technologie front",
        "category": "A",
        "description": "Développe une expertise dans les technologies telles que HTML et JavaScript.",
        "milestones": [{
            "summary": "Individuel : Travaille efficacement au sein des architectures client Web établies, en suivant les pratiques actuelles de l'équipe.",
            "signals": [
                "Effectue des modifications mineures sur les écrans existants.",
                "Corrige des problèmes simples de qualité de conception.",
                "Connait et applique le clean code JS."
            ],
            "examples": [
                "A changé la position d'un bouton dans un page.",
                "A rajouté un formulaire de validation.",
                "A récupérer l'information d'une offre et l'a affiché dans un tableau d'offre sur une page du tunnel."
            ],
        }, {
            "summary": "Equipe : Remet en question et fait évoluer positivement l'architecture existante des applications ou les pratiques de l'équipe.",
            "signals": [
                "Fait des refactorisations pertinentes du code de l'application.", // craft
                "Fournit des retours de conception utiles et propose des alternatives réalisables",
                "Construit des composants complexes de manière indépendante."
                "A proposer une nouvelle pratique adoptées par l'équipe."
                "Agit en tant que gardien de la structure du code",
            ],  
            "examples": [
                "Construit le composant de saisie de carte de crédit.",
                "A mutualisé les steps du tunnel, tout en gardant la posibilité de personnalisé chaque tunnel."
               
            ],
        }, {  
            "summary": "Hors équipe : Conçoit de nouvelles fonctionnalités grâce à une compréhension nuancée des contraintes des applications.",
            "signals": [
                "Propose des modifications acceptées dans les code bases des autres équipes."
                "Crée des packages npm utilisés par quelques équipes.
            ],
            "examples": [
                "Hugo changement chez partner ",
                "A conçu un design system utilisé par tous les composants front"
                "Développement d'une librairie blazor partagé plusieurs équipes du domaine.",
                "Conçu et implémenté ResponseScreen",
            ],
        }, {
            "summary": "All tech : Construit des architectures qui pionnent les meilleures pratiques et permettent aux ingénieurs de travailler plus efficacement.",
            "signals": [
                "A créé et répendu un standard technologique au sein de l'entreprise."

                
            ],
            "examples": [

                "Proto NP6",
                
                "Disgn system"
            ],
        }, {
            "summary": "Superstar : Est un expert de premier plan de l'industrie des technologies front ou définit la direction stratégique front de l'entreprise.",
            "signals": [
               
            ],
            "examples": [
               
            ],
        }],
    },

    "FOUNDATIONS": {
        "displayName": "Fondations",
        "category": "A",
        "description": "Développe une expertise dans les systèmes fondamentaux, tels que les pipelines, les base de données ou les services managés.",
        "milestones": [{
            "summary": "Travaille efficacement au sein des structures établies, en suivant les meilleures pratiques actuelles.",
            "signals": [
                "Monitore la production et répond aux alertes de manière appropriée (de manière autonome ou en demandant de l'aide).",
                "Effectue des changements de configuration simples.",
                "Effectue des backfills de manière sûre et efficace, sans provoquer d'interuption de services.",
            ],
            "examples": [
                "A relancer un service défaillant après une interruption.",
                "A modifié un pipeline de déployement.",
                "A résolu des erreurs de disque indépendamment.",
            ],
        }, {
            "summary": "Développe de nouvelles instances de l'architecture existante ou des améliorations mineures de l'architecture existante.",
            "signals": [
                "Effectue les mises à jour de versions de librairies ou de framework.",
                "Créer des pipelines robustes et efficaces.",
                "Traite correctement et de manière indépendante les problèmes de service.",
            ],
            "examples": [
                "A mis à niveau .NET Framwork de la version 5 à 6.",
                "A optimiser le temps de chargement d'une application en metant en place de warmup.",
                "A amélioré l'efficacité d'un pipeline de déployment ",
            ],
        }, {
            "summary": "Conçoit des systèmes autonomes de complexité modérée ou de nouvelles fonctionnalités majeures dans des systèmes existants",
            "signals": [
                "Agit en tant que mainteneur principal pour les systèmes critiques existants",
                "Conçoit des systèmes de complexité modérée",
                "Effectue des mises à niveau majeures de bibliothèques",
            ],
            "examples": [
                "A conçu la gestion de configuration Ansible",
                "A construit le pipeline de statistiques en temps réel de Medium",
                "A conçu un cadre flexible pour écrire des tâches d'apprentissage automatique",
            ],
        }, {
            "summary": "Construit des architectures complexes et réutilisables qui pionnent les meilleures pratiques pour d'autres ingénieurs, ou des services multi-systèmes",
            "signals": [
                "Conçoit des projets complexes englobant plusieurs systèmes et technologies",
                "Démontre une connaissance approfondie des systèmes fondamentaux",
                "Introduit de nouvelles bases de données et technologies pour répondre à des besoins non satisfaits",
            ],
            "examples": [
                "A conçu et construit BBFD",
                "A conçu la gestion de configuration AWS",
                "A introduit Kinesis et a pionné le pipeline d'événements en streaming",
            ],
        }, {
            "summary": "Est un expert de premier plan de l'industrie en ingénierie fondamentale ou définit la direction stratégique fondamentale pour une équipe d'ingénierie",
            "signals": [
                "Conçoit des projets transformationnels au service d'objectifs à long terme",
                "Définit la vision stratégique pour le travail fondamental et les technologies de soutien",
                "Invente des techniques de pointe pour résoudre des problèmes complexes",
            ],
            "examples": [
                "A inventé une technique ML novatrice qui a fait progresser l'état de l'art",
                "A défini et développé la stratégie de livraison continue de Medium",
                "A développé et mis en œuvre une stratégie de haute disponibilité",
            ],
        }],
    },

    "SERVERS": {
        "displayName": "Serveurs",
        "category": "A",
        "description": "Développe une expertise en ingénierie côté serveur, en utilisant des technologies telles que Go, NodeJS ou Scala",
        "milestones": [{
            "summary": "Travaille efficacement au sein des frameworks côté serveur établis, en suivant les meilleures pratiques actuelles",
            "signals": [
                "Ajoute des points de terminaison NodeJS en utilisant l'architecture en couches",
                "Ajoute des points de terminaison golang en utilisant l'architecture Gotham",
                "Effectue des changements mineurs sur le serveur pour répondre aux besoins des clients",
            ],
            "examples": [
                "A ajouté un déclencheur IFTTT pour un nouveau signet sur medium2",
                "A ajouté une route de suppression audio à Buggle",
                "A interrogé un LSI Dynamo de manière appropriée",
            ],
        }, {
            "summary": "Développe de nouvelles instances de l'architecture existante ou des améliorations mineures de l'architecture existante",
            "signals": [
                "Évalue la justesse et l'utilité du code existant et évite de copier-coller aveuglément",
                "Généralise le code quand cela est approprié",
                "Détermine les besoins en données à partir des exigences du produit",
            ],
            "examples": [
                "A identifié le besoin d'un nouvel index sur Dynamo",
                "A agi en tant que gardien des protocoles de route",
                "A mis à jour la version de l'API Facebook et les dépendances du codebase",
            ],
        }, {
            "summary": "Conçoit des systèmes autonomes de complexité modérée ou de nouvelles fonctionnalités majeures dans des systèmes existants",
            "signals": [
                "Agit en tant que mainteneur principal pour les systèmes critiques existants",
                "Intègre efficacement des services tiers",
                "Rédige des playbooks pour la maintenance de nouveaux services",
            ],
            "examples": [
                "A mis en place la connexion Google Auth pour Medium",
                "A intégré l'intégration des paiements avec Stripe",
                "A construit le serveur Textshots",
            ],
        }, {
            "summary": "Construit des architectures complexes et réutilisables qui pionnent les meilleures pratiques pour d'autres ingénieurs, ou des services multi-systèmes",
            "signals": [
                "Livraison de systèmes complexes qui atteignent leurs objectifs",
                "Évite les erreurs architecturales subtiles lors de la considération de nouveaux systèmes",
                "Fait des choix appropriés entre achat et construction",
            ]
        }],
    },


    "PROJECT_MANAGEMENT": {
        "displayName": "Gestion de projet",
        "category": "B",
        "description": "Fournit des programmes de travail bien définis qui atteignent leurs objectifs, à temps, dans les limites du budget, de manière harmonieuse",
        "milestones": [{
            "summary": "Livraison efficace des tâches individuelles",
            "signals": [
                "Estime avec précision les petites tâches",
                "Livraison efficace des projets à portée étroitement définie",
                "Rédige des spécifications techniques efficaces décrivant l'approche",
            ],
            "examples": [
                "A rédigé la spécification technique pour les images de publication en vedette",
                "A livré le support des éléments de flux pour les résumés par e-mail",
                "A livré le tableau de bord de l'historique des paiements",
            ],
        }, {
            "summary": "Livraison efficace de petits projets personnels",
            "signals": [
                "Effectue des recherches et envisage des approches alternatives",
                "Équilibre le pragmatisme et le polissage de manière appropriée",
                "Définit et atteint des jalons intermédiaires",
            ],
            "examples": [
                "A livré l'éditeur promotionnel",
                "A livré le téléchargement audio pour le client Web",
                "A exécuté les recommandations pour les backfills de clap",
            ],
        }, {
            "summary": "Livraison efficace de projets avec une petite équipe",
            "signals": [
                "Délègue les tâches à d'autres de manière appropriée",
                "Intègre les besoins de l'entreprise dans la planification des projets",
                "Choisit une stratégie de gestion de projet appropriée en fonction du contexte",
            ],
            "examples": [
                "A mené une rétro-projet pour évaluer les opportunités d'amélioration",
                "A complété la liste de contrôle de lancement de manière proactive pour un déploiement bien contrôlé",
                "A facilité la réunion de lancement de projet pour obtenir l'adhésion",
            ],
        }, {
            "summary": "Livraison efficace de projets avec une grande équipe, ou avec un nombre important de parties prenantes ou de complexité",
            "signals": [
                "Trouve des moyens de livrer plus rapidement la portée demandée et hiérarchise le backlog",
                "Gère les dépendances avec d'autres projets et équipes",
                "Tire parti de la reconnaissance des modèles de projet répétés",
            ],
            "examples": [
                "A supervisé la livraison technique de Hightower",
                "A géré la migration de l'infrastructure vers VPC",
                "A impliqué le marketing, le juridique et les fonctions appropriées au début du projet",
            ],
        }, {
            "summary": "Gère les poussées majeures de l'entreprise livrées par plusieurs équipes",
            "signals": [
                "Tient compte des contraintes externes et des objectifs commerciaux lors de la planification",
                "Dirige des équipes d'équipes et coordonne une collaboration interfonctionnelle efficace",
                "Possède une métrique clé de l'entreprise",
            ],
            "examples": [
                "A géré la migration technique vers SOA",
                "A dirigé la livraison technique de 10/7",
                "A livré un projet d'ingénierie de plusieurs mois à temps",
            ],
        }],
    },

    "COMMUNICATION": {
        "displayName": "Communication",
        "category": "B",
        "description": "Partage la bonne quantité d'informations avec les bonnes personnes, au bon moment, et écoute efficacement",
        "milestones": [{
            "summary": "Communique efficacement avec les parties prenantes proches lorsqu'on lui demande, et intègre les retours constructifs",
            "signals": [
                "Communique clairement et efficacement l'état du projet",
                "Collabore avec les autres avec empathie",
                "Demande de l'aide au moment approprié",
            ],
            "examples": [
                "A mis à jour The Watch avant d'exécuter un backfill",
                "A mis à jour rapidement les changements d'état du projet dans Asana",
                "A donné des commentaires réfléchis lors des points de contrôle",
            ],
        }, {
            "summary": "Communique avec l'équipe de manière appropriée, en mettant l'accent sur la rapidité et la qualité des conversations",
            "signals": [
                "Pratique l'écoute active et la suspension de l'attention",
                "Veille à ce que les parties prenantes soient informées des blocages actuels",
                "Choisit les outils appropriés pour une communication précise et opportune",
            ],
            "examples": [
                "A reçu et intégré positivement des retours critiques",
                "A créé un canal Slack inter-équipes pour le travail sur les paiements",
                "A parlé aux experts du domaine avant de rédiger une spécification",
            ],
        }, {
            "summary": "Partage proactivement des informations, sollicite activement des retours et facilite la communication pour de multiples parties prenantes",
            "signals": [
                "Résout les difficultés de communication entre les autres",
                "Anticipe et partage les écarts de calendrier avec beaucoup de temps",
                "Gère efficacement les attentes des parties prenantes du projet",
            ],
            "examples": [
                "A dirigé efficacement la réponse de l'équipe pendant les pannes",
                "A donné une présentation substantielle lors des réunions générales sur l'ingénierie concernant React",
                "A prévenu des travaux à venir lors de la réunion de briefing de l'ingénierie",
            ],
        }, {
            "summary": "Communique des idées complexes avec habileté et nuances, et établit un alignement au sein de l'organisation dans son ensemble",
            "signals": [
                "Communique habilement et avec nuances les risques et les compromis du projet",
                "Contextualise et clarifie la direction et la stratégie ambiguës pour les autres",
                "Négocie des compromis de ressources avec d'autres équipes",
            ],
            "examples": [
                "A dirigé un atelier hors site sur l'entrevue",
                "A écrit le cadre de croissance de Medium et sa justification",
                "A aligné toute l'organisation autour des clap",
            ],
        }, {
            "summary": "Influence les résultats au plus haut niveau, va au-delà de la simple diffusion et établit les meilleures pratiques pour les autres",
            "signals": [
                "Définit des processus de communication claire pour toute l'équipe",
                "Partage la bonne quantité d'informations avec les bonnes personnes, au bon moment",
                "Développe et met en œuvre des plans pour les dirigeants, le conseil d'administration et les investisseurs externes",
            ],
            "examples": [
                "A organisé une réunion semestrielle hors site pour l'entreprise",
                "A créé le plan de communication pour un grand changement organisationnel",
                "A présenté au conseil d'administration les principales métriques et projets de l'entreprise",
            ],
        }],
    },

    "CRAFT": {
        "displayName": "Artisanat",
        "category": "B",
        "description": "Incarne et promeut des pratiques pour garantir des produits et services d'excellente qualité",
        "milestones": [{
            "summary": "Fournit un travail de qualité constamment bon",
            "signals": [
                "Teste rigoureusement le nouveau code, localement et en production une fois déployé",
                "Écrit des tests pour chaque nouvelle fonctionnalité et correction de bogue",
                "Rédige des commentaires et une documentation clairs",
            ],
            "examples": [
                "A repéré un bogue sur Hatch avant sa mise en ligne",
                "A validé une PR non négligeable sans commentaires de gardien",
                "A écrit des tests hermétiques pour les cas de réussite et d'échec",
            ],
        }, {
            "summary": "Augmente la robustesse et la fiabilité des bases de code, et consacre du temps au polissage des produits et des systèmes",
            "signals": [
                "Refactorise le code existant pour le rendre plus testable",
                "Ajoute des tests pour les zones non couvertes",
                "Supprime le code inutile et déprécie de manière proactive quand cela est sécuritaire de le faire",
            ],
            "examples": [
                "A demandé des tests pour une PR lorsqu'il agissait en tant que relecteur",
                "A réduit le nombre d'exceptions de zelda fitzgerald",
                "A corrigé un TODO pour quelqu'un d'autre dans la base de code",
            ],
        }, {
            "summary": "Améliore la capacité des autres à fournir un travail de grande qualité",
            "signals": [
                "Met en place des systèmes permettant de meilleurs tests",
                "Fournit des relectures de code réfléchies en tant qu'expert du domaine",
                "Ajoute des outils pour améliorer la qualité du code",
            ],
            "examples": [
                "A amélioré PRB pour exécuter le même volume de tests plus rapidement",
                "A simplifié la modification des données de test hermétiques",
                "A créé un système de fixation pour la qualité visuelle",
            ],
        }, {
            "summary": "Plaide en faveur et modélise une grande qualité avec des actions proactives, et aborde des problèmes système difficiles et subtils",
            "signals": [
                "Construit des systèmes pour éliminer des classes entières d'erreurs de programmation",
                "Recentre l'équipe sur la qualité avec des rappels réguliers",
                "Coordonne les priorités et les projets de Watch",
            ],
            "examples": [
                "A ajouté des rapports de couverture de code au pipeline de CI iOS",
                "A itéré à plusieurs reprises pour développer la solution de soulignement de Medium",
                "A défini et supervisé le plan de fermeture de la vulnérabilité Heartbleed",
            ],
        }, {
            "summary": "Permet et encourage toute l'organisation à faire de la qualité une partie centrale du processus de développement",
            "signals": [
                "Définit des politiques pour l'organisation d'ingénierie qui encouragent un travail de qualité",
                "Identifie et élimine les points de défaillance uniques dans toute l'organisation",
                "Obtient du temps et des ressources des dirigeants pour soutenir une grande qualité",
            ],
            "examples": [
                "A négocié des ressources pour la semaine Fix-It avec l'équipe de direction",
                "A institué et assuré le succès d'une politique de 20% de temps",
                "A lancé The Watch",
            ],
        }],
    },

    "INITIATIVE": {
        "displayName": "Initiative",
        "category": "B",
        "description": "Remet en question le statu quo et apporte des changements organisationnels positifs en dehors du travail obligatoire",
        "milestones": [{
            "summary": "Identifie les opportunités de changement organisationnel ou d'amélioration des produits",
            "signals": [
                "Écrit des articles sur Hatch sur les opportunités d'amélioration",
                "Soulève des tensions significatives lors des réunions tactiques",
                "Pose des questions percutantes à l'équipe de direction lors des réunions FAM",
            ],
            "examples": [
                "A écrit sur les problèmes de TTR sur Hatch",
                "A écrit sur les problèmes de politique de contenu sur Hatch",
                "A signalé un problème de site dans Github",
            ],
        }, {
            "summary": "Provoque un changement ayant un impact positif sur quelques individus ou une amélioration mineure d'un produit ou service existant",
            "signals": [
                "Sélectionne des bogues dans le backlog de manière proactive lorsqu'il est bloqué ailleurs",
                "Apporte des améliorations de qualité de conception de manière proactive",
                "Prend en charge proactivement des tâches de confiance et de sécurité lorsqu'il est bloqué ailleurs",
            ],
            "examples": [
                "A plaidé en son nom pour un changement de rôle",
                "A mis en œuvre le typage de flux pour les promesses",
                "A audit la performance du client Web dans Chrome et a proposé des correctifs",
            ],
        }, {
            "summary": "Provoque un changement ayant un impact positif sur toute une équipe ou initie une fonctionnalité ou un service mineur",
            "signals": [
                "Démontre des concepts de manière proactive avec des prototypes",
                "Corrige des bogues complexes en dehors du domaine régulier",
                "Prend en charge des systèmes que personne ne possède ou ne veut",
            ],
            "examples": [
                "A défini un guide de style pour résoudre les arguments de style",
                "A proposé et mis en œuvre un prototype de mentions pour",
                "A mis en œuvre la vidéo pour Android indépendamment, sans sollicitation",
            ],
        }, {
            "summary": "Provoque un changement ayant un impact positif substantiel sur l'organisation d'ingénierie ou un impact majeur sur un produit",
            "signals": [
                "Championne et pionnière de nouvelles technologies pour résoudre de nouvelles classes de problèmes",
                "Exemplifie le courage et la détermination face à des obstacles persistants",
                "Initie de nouvelles fonctionnalités, services ou architectures majeurs",
            ],
            "examples": [
                "A créé la rubrique et le livret d'entrevue",
                "A mis en œuvre et obtenu un soutien pour une connexion native",
                "A migré medium2 vers le référentiel mono et bazel",
            ],
        }, {
            "summary": "Provoque un changement ayant un impact positif substantiel sur l'ensemble de l'entreprise",
            "signals": [
                "Crée une nouvelle fonction pour résoudre les problèmes systémiques",
                "Galvanise l'ensemble de l'entreprise et obtient l'adhésion pour une nouvelle stratégie",
                "Modifie des processus organisationnels complexes",
            ],
            "examples": [
                "A migré l'organisation de Holacracy",
                "A créé un prototype Android pour Medium et a convaincu les dirigeants de le financer",
                "A convaincu la direction et l'organisation d'ingénierie de passer à l'architecture Medium Lite",
            ],
        }],
    },

    "CAREER_DEVELOPMENT": {
        "displayName": "Développement de carrière",
        "category": "C",
        "description": "Fournit un soutien stratégique aux ingénieurs pour les aider à construire la carrière qu'ils souhaitent",
        "milestones": [{
            "summary": "Donne un aperçu des opportunités et aide à identifier les forces et faiblesses des individus",
            "signals": [
                "Plaide en faveur et défend un membre du groupe",
                "Partage des opportunités d'amélioration et reconnaît les réalisations",
                "Explique les chemins professionnels disponibles",
            ],
            "examples": [
                "Recueilli et fourni des retours d'information",
                "Discuté informellement des options de carrière et des domaines d'intérêt",
                "Accueilli un stagiaire de l'Académie Floodgate",
            ],
        }, {
            "summary": "Soutient formellement et plaide pour une personne en leur fournissant des outils pour résoudre les problèmes de carrière",
            "signals": [
                "S'assure qu'un membre du groupe a un rôle approprié dans son équipe",
                "Offre des conseils de carrière efficaces aux membres du groupe, sans être prescriptif",
                "Crée un espace pour que les gens discutent des défis",
            ],
            "examples": [
                "Mise en place et participation à des entretiens réguliers et constructifs en tête-à-tête",
                "Fourni du coaching sur la manière de mener des conversations difficiles",
                "Enseigné aux membres du groupe le modèle GROW",
            ],
        }, {
            "summary": "Inspire et retient un petit groupe de personnes et les pousse activement à se dépasser",
            "signals": [
                "Discute des chemins et crée des plans de croissance personnelle et professionnelle",
                "Plaide pour aligner les personnes avec des rôles appropriés au sein de l'organisation",
                "Travaille avec les chefs d'équipe pour promouvoir les futurs leaders",
            ],
            "examples": [
                "A examiné la progression individuelle des membres du groupe toutes les 6 semaines",
                "A suggéré un membre du groupe approprié pour le poste de chef technique",
                "A organisé un changement de discipline demandé pour un membre du groupe",
            ],
        }, {
            "summary": "Gère les interactions et les processus entre les groupes, promeut les meilleures pratiques et donne l'exemple",
            "signals": [
                "Gère les transitions d'équipe en douceur, en respectant les besoins de l'équipe et des individus",
                "Développe les meilleures pratiques pour la résolution de conflits",
                "Veille à ce que les rôles de tous les membres du groupe répondent à leurs besoins de carrière",
            ],
            "examples": [
                "A suivi une formation sur le leadership situationnel",
                "A élaboré un plan de ressources basé sur les objectifs de l'entreprise, de l'équipe et des individus",
                "A évité l'attrition regrettée par une intervention intentionnelle et ciblée",
            ],
        }, {
            "summary": "Soutient le développement d'une partie importante de l'organisation d'ingénierie, et est largement considéré comme un conseiller de confiance",
            "signals": [
                "Soutient et développe les cadres supérieurs",
                "A identifié des opportunités de formation en leadership pour les cadres supérieurs",
                "Pousse tout le monde à donner le meilleur de lui-même, avec empathie",
            ],
            "examples": [
                "A fourni du coaching aux responsables de groupe",
                "A conçu le programme Pathwise pour les responsables de groupe",
                "A plaidé auprès des dirigeants pour des ressources et des programmes de développement des ingénieurs",
            ],
        }],
    },

    "ORG_DESIGN": {
        "displayName": "Conception org.",
        "category": "C",
        "description": "Définit les processus et les structures qui permettent la forte croissance et l'exécution d'une organisation d'ingénierie diversifiée",
        "milestones": [{
            "summary": "Respecte et participe aux processus, donne des retours d'information significatifs pour aider l'organisation à s'améliorer",
            "signals": [
                "Réfléchit aux réunions qui les inspirent ou les frustrent",
                "Enseigne aux autres les processus existants",
                "Participe activement et apporte des contributions aux processus organisationnels",
            ],
            "examples": [
                "A facilité une réunion tactique efficace avec empathie",
                "A expliqué le format des réunions tactiques à un nouvel employé",
                "A donné des retours sur la réunion de planification de sprint",
            ],
        }, {
            "summary": "Identifie les opportunités d'amélioration des processus existants et apporte des changements qui affectent positivement l'équipe locale",
            "signals": [
                "Définit la structure et le rythme des réunions qui répondent aux besoins de l'équipe",
                "S'engage dans la réflexion sur les systèmes organisationnels",
                "Plaide en faveur d'une meilleure diversité et inclusion, et propose des idées pour aider",
            ],
            "examples": [
                "A défini la structure de réunion Frankenmeeting pour une petite équipe",
                "A amélioré la planification de rotation d'astreinte de Watch",
                "A défini les canaux standards pour la communication inter-équipes",
            ],
        }, {
            "summary": "Développe des processus pour résoudre les problèmes organisationnels persistants",
            "signals": [
                "Crée des programmes qui améliorent de manière significative la diversité organisationnelle",
                "Résout les problèmes organisationnels de longue date",
                "Réalloue les ressources pour répondre aux besoins organisationnels",
            ],
            "examples": [
                "A développé des modèles d'équipe de base pour la cohérence",
                "A créé un programme de rotation de bogues pour résoudre les problèmes de qualité persistants",
                "A défini le manifeste et la charte des Guildes",
            ],
        }, {
            "summary": "Réfléchit profondément aux problèmes organisationnels et identifie les dynamiques cachées qui y contribuent",
            "signals": [
                "Évalue les structures d'incitation et leur effet sur l'exécution",
                "Analyse les processus existants pour détecter les biais et les lacunes",
                "Relie les préoccupations abstraites aux actions ou normes organisationnelles concrètes",
            ],
            "examples": [
                "A relié les difficultés de recrutement mobile à la focalisation sur l'excellence",
                "A soulevé les disparités de changement de niveau de leadership",
                "A analysé la grille d'évaluation du recrutement pour son potentiel de faux négatif",
            ],
        }, {
            "summary": "Mène des initiatives pour résoudre les problèmes découlant des dynamiques cachées et des normes de l'entreprise",
            "signals": [
                "Met en place des programmes de formation en compétences souhaitées pour les cadres",
                "Crée de nouvelles structures qui offrent des opportunités de croissance uniques",
                "Mène la planification et la communication pour les réorganisations",
            ],
            "examples": [
                "A dirigé les efforts pour augmenter le nombre d'ingénieurs mobiles",
                "A dirigé les ressources pour améliorer de manière significative la diversité à tous les niveaux",
                "A élaboré la grille de cadre de croissance",
            ],
        }],
    },

    "COLLABORATION": {
        "displayName": "Collaboration",
        "category": "C",
        "description": "Promeut ou adopte, les méthodes et attitudes favorisant une meilleure collaboration au sein de Younited.",
        "milestones": [{
            "summary": "Individu : Agit proactivement pour favoriser la collaboration avec ses interlocateurs.",
            "signals": [
                "Etablit et entretient spontanément une relation de confiance (apport son aide naturellement, fiable dans le respects des délais et de la qualité associée, abordable facilement et sans barrières).",
                "Sait trouver le juste milieu entre autonomie et travail d'équipe.",
                "Évite de blâmer et se concentre sur le changement positif",
            ],
            "examples": [
                "A veillé à ce que les membres du groupe prennent suffisamment de vacances",
                "S'est mis à la place d'un autre pour comprendre son point de vue",
                "A pris des nouvelles d'un collègue montrant des signes d'épuisement professionnel",
            ],
        }, {
            "summary": "Equipe :  Sait guider avec son équipe proche",
            "signals": [
                "Adopte une attitude serreine et professionnelle.",
                "Partage des feedbacks (positif ou axes d'amélioration) factuels dans une logique d'amélioration continue",
                "Propose des solutions lorsque les équipes s'enlisent ou perdent de l'élan",
            ],
            "examples": [
                "A su calmer les esprits pendant une réunion où les échanges devenaient trop virulants.",
                "A réalisé régulièrement des échanges 1 à 1 pour partager",
                "A relié un projet fastidieux de test A|B aux objectifs globaux de l'entreprise",
                "A remarqué une équipe sans victoire récente et a suggéré quelques victoires rapides et faciles",
            ],
        }, {
            "summary": "Domaine Sait instoré un climat de collaboration tranverse",
            "signals": [
                "Entraîne les membres du groupe à séparer le stimulus de la réponse",
                "Garde un œil sur le moral individuel et d'équipe",
                "Aide les membres du groupe à aborder les problèmes avec curiosité",
            ],
            "examples": [
                "A suivi une formation sur le transfert et le contre-transfert",
                "A suivi une formation sur les techniques de compromis et de négociation",
                "A reformulé un problème en défi, plutôt qu'en obstacle, lorsque cela était approprié",
            ],
        }, {
            "summary": "Département Comprend les intérêts de l'entreprises et sait créer un environement idéal pour tous",
            "signals": [
                "Veille à ce que les environnements d'équipe soient sûrs et inclusifs, de manière proactive",
                "Ancre les angoisses des membres du groupe dans la réalité",
                "Suit activement la rétention de l'équipe et propose des solutions pour la renforcer",
            ],
            "examples": [
                "A soulagé la tension organisationnelle autour de la direction du produit en fournissant des contextes supplémentaires",
                "A encouragé les membres du groupe à se concentrer sur ce qu'ils peuvent contrôler",
                "A guidé les personnes à travers un changement organisationnel complexe",
            ],
        }, {
            "summary": "Younited Sait créer un schéma d'organisation visant à faire entreprise wise.",
            "signals": [
                "Reconnaît et souligne les récits lorsque c'est approprié",
                "Travaille à remodeler les récits de la victimisation à la prise de responsabilité",
                "Augmente la sécurité psychologique de toute l'équipe",
            ],
            "examples": [
                "A converti un membre du groupe d'un problème en un résolveur de problème",
                "A remis en question un récit erroné et l'a redirigé vers la compassion et l'empathie",
                "A cultivé et défendu une culture d'empathie au sein de toute l'équipe",
            ],
        }],
    },



    "WELLBEING": {
        "displayName": "Bien-être",
        "category": "C",
        "description": "Soutient le bien-être émotionnel des membres du groupe en période difficile, et célèbre leurs succès",
        "milestones": [{
            "summary": "Utilise des outils et des processus pour aider à garantir que les collègues sont en bonne santé et heureux",
            "signals": [
                "Garde les confidences sauf obligation légale ou morale de faire autrement",
                "Applique le principe de la personne raisonnable aux autres",
                "Évite de blâmer et se concentre sur le changement positif",
            ],
            "examples": [
                "A veillé à ce que les membres du groupe prennent suffisamment de vacances",
                "S'est mis à la place d'un autre pour comprendre son point de vue",
                "A pris des nouvelles d'un collègue montrant des signes d'épuisement professionnel",
            ],
        }, {
            "summary": "Crée un environnement d'équipe positif, de soutien et engageant pour les membres du groupe",
            "signals": [
                "Met en lumière d'autres expériences pour construire l'empathie et la compassion",
                "Valide le travail en cours et maintient la motivation",
                "Propose des solutions lorsque les équipes s'enlisent ou perdent de l'élan",
            ],
            "examples": [
                "A coordonné une petite célébration pour le lancement d'un projet",
                "A relié un projet fastidieux de test A|B aux objectifs globaux de l'entreprise",
                "A remarqué une équipe sans victoire récente et a suggéré quelques victoires rapides et faciles",
            ],
        }, {
            "summary": "Gère les attentes entre pairs, les responsables dans l'organisation, promeut le calme et empêche la construction de consensus",
            "signals": [
                "Entraîne les membres du groupe à séparer le stimulus de la réponse",
                "Garde un œil sur le moral individuel et d'équipe",
                "Aide les membres du groupe à aborder les problèmes avec curiosité",
            ],
            "examples": [
                "A suivi une formation sur le transfert et le contre-transfert",
                "A suivi une formation sur les techniques de compromis et de négociation",
                "A reformulé un problème en défi, plutôt qu'en obstacle, lorsque cela était approprié",
            ],
        }, {
            "summary": "Plaide pour les besoins des équipes et des membres du groupe, et travaille de manière proactive pour calmer l'organisation",
            "signals": [
                "Veille à ce que les environnements d'équipe soient sûrs et inclusifs, de manière proactive",
                "Ancre les angoisses des membres du groupe dans la réalité",
                "Suit activement la rétention de l'équipe et propose des solutions pour la renforcer",
            ],
            "examples": [
                "A soulagé la tension organisationnelle autour de la direction du produit en fournissant des contextes supplémentaires",
                "A encouragé les membres du groupe à se concentrer sur ce qu'ils peuvent contrôler",
                "A guidé les personnes à travers un changement organisationnel complexe",
            ],
        }, {
            "summary": "Gère les récits, canalise la négativité en inspiration et motivation, et protège toute l'équipe",
            "signals": [
                "Reconnaît et souligne les récits lorsque c'est approprié",
                "Travaille à remodeler les récits de la victimisation à la prise de responsabilité",
                "Augmente la sécurité psychologique de toute l'équipe",
            ],
            "examples": [
                "A converti un membre du groupe d'un problème en un résolveur de problème",
                "A remis en question un récit erroné et l'a redirigé vers la compassion et l'empathie",
                "A cultivé et défendu une culture d'empathie au sein de toute l'équipe",
            ],
        }],
    },

    "ACCOMPLISHMENT": {
        "displayName": "Accomplissement",
        "category": "C",
        "description": "Inspire l'excellence au quotidien, maximise le potentiel et résout efficacement les problèmes de performance avec compassion",
        "milestones": [{
            "summary": "Aide les individus à identifier les obstacles et les aide à identifier les prochaines étapes pour les résoudre",
            "signals": [
                "Remarque quand quelqu'un est bloqué et prend contact",
                "Aide les autres à diviser les problèmes en prochaines étapes réalisables et tangibles",
                "Discute des problèmes de manière non-jugeante",
            ],
            "examples": [
                "A suivi une formation sur le diagnostic des problèmes",
                "A débloqué un membre du groupe",
                "Renforce et affirme les retours positifs pour un bon travail",
            ],
        }, {
            "summary": "Aide les individus à résoudre des problèmes de performance difficiles, avec perspicacité, compassion et compétence",
            "signals": [
                "Recueille des informations en dehors du problème immédiat",
                "Reconnaît les problèmes dans l'environnement local et suggère des changements",
                "Travaille pour encourager la prise en charge des actions et des responsabilités",
            ],
            "examples": [
                "A suivi une formation sur la prise de décision",
                "A convaincu un membre du groupe de résoudre un problème directement, plutôt que de le faire pour lui",
                "A donné des retours honnêtes sur une mauvaise performance, avec compassion",
            ],
        }, {
            "summary": "Intervient dans des problèmes de performance de longue date avec un changement de comportement ciblé ou des plans de performance",
            "signals": [
                "Aggrège les signaux de mauvaise performance et crée un processus d'amélioration",
                "Investigue la motivation et les externalités pour une mauvaise performance constante",
                "Élabore des plans de performance complets et réalisables",
            ],
            "examples": [
                "A travaillé avec un membre du groupe pour résoudre les échecs de communication persistants",
                "A organisé un transfert vers une autre équipe, ce qui a entraîné une amélioration de la performance",
                "A géré étroitement un membre du groupe pour maximiser les chances de succès du PIP",
            ],
        }, {
            "summary": "Médie dans des situations conflictuelles, autonomise les équipes en sous-performance et résout les conflits",
            "signals": [
                "Reconnaît les situations tendues et les interactions toxiques ou agressives",
                "S'insère dans le conflit lorsque c'est approprié pour calmer et médier",
                "Encourage le dialogue ouvert et construit la confiance entre les parties en conflit",
            ],
            "examples": [
                "A permis à une équipe d'avancer malgré l'incertitude",
                "A protégé l'équipe des externalités pour qu'elle puisse se concentrer sur les objectifs",
                "A organisé une réunion entre membres de l'équipe pour aborder les tensions",
            ],
        }, {
            "summary": "Résout les dysfonctionnements organisationnels complexes ou les conflits persistants à des niveaux supérieurs",
            "signals": [
                "Prend le contrôle des équipes dysfonctionnelles pour organiser le chaos",
                "Répare les dynamiques d'équipe brisées et construit l'harmonie",
                "Préside une équipe de haut niveau bien huilée",
            ],
            "examples": [
                "A redressé la performance d'une équipe problématique",
                "A désamorcé des tensions sérieuses entre des équipes",
                "A reconstruit la confiance entre les chefs d'équipe seniors",
            ],
        }],
    },

    "MENTORSHIP": {
        "displayName": "Mentorat",
        "category": "D",
        "description": "Fournit un soutien aux collègues, diffuse les connaissances et développe l'équipe en dehors des structures de reporting formelles",
        "milestones": [{
            "summary": "Mentore de manière informelle des individus de façon ad hoc, soutient les nouvelles recrues et transmet les connaissances institutionnelles",
            "signals": [
                "Se rend disponible pour un soutien et des conseils informels",
                "Sert de caisse de résonance pour les pairs et les membres moins expérimentés",
                "Fournit des conseils avisés lorsqu'on lui demande",
            ],
            "examples": [
                "A agi comme un compagnon d'intégration",
                "Apparié avec un ingénieur pour l'aider dans un domaine inconnu",
                "A aidé un collègue à comprendre ses sentiments",
            ],
        }, {
            "summary": "Mentore de manière proactive et guide les gens vers des prises de conscience plutôt que de fournir la réponse",
            "signals": [
                "Prend le temps d'expliquer les concepts et les meilleures pratiques",
                "Pose des questions pour éclairer les concepts, plutôt que de les énoncer",
                "Permet à d'autres de diriger des efforts lorsque cela aidera leur développement",
            ],
            "examples": [
                "Partage un article intéressant avec un membre de l'équipe pour l'aider dans sa croissance",
                "A offert des commentaires non sollicités pour aider à la croissance, avec empathie",
                "Dirigé de l'arrière pour soutenir quelqu'un nouveau dans un rôle de leadership",
            ],
        }, {
            "summary": "Enseigne à de petits groupes d'ingénieurs et contribue à la base de connaissances partagée de Medium",
            "signals": [
                "Évite d'isoler l'information lorsqu'elle peut être utilement partagée avec d'autres",
                "Travaille à augmenter le facteur de sécurité des systèmes",
                "Trouve les outils qui fonctionnent le mieux pour la personnalité d'un membre de l'équipe",
            ],
            "examples": [
                "A fait une présentation informelle sur les paiements",
                "A écrit un article sur Hatch sur l'évitement des problèmes de réapprovisionnement de RDS",
                "A écrit le module de contenu Medium-U",
            ],
        }, {
            "summary": "Encourage les gens à se mentor mutuellement et crée des moyens pour qu'ils le fassent",
            "signals": [
                "Définit un programme complet pour une discipline",
                "Attire l'attention positive sur les comportements de mentorat et d'enseignement bien modélisés",
                "Crée des séries de présentations informelles et organise des intervenants",
            ],
            "examples": [
                "A créé et dirigé le groupe Women in Eng de Medium",
                "A organisé une réunion générale d'ingénierie avec un intervenant externe",
                "A conçu et enseigné le programme de la guilde des clients web",
            ],
        }, {
            "summary": "Inculque et promeut une culture d'apprentissage et de développement au sein de l'équipe",
            "signals": [
                "Établit des structures d'incitation pour reconnaître et récompenser le mentorat",
                "Donne aux membres de l'équipe le pouvoir de se développer",
                "Modélise des relations de mentorat productives et saines",
            ],
            "examples": [
                "A institué le budget de formation professionnelle pour les ingénieurs",
                "A mentoré des mentors",
                "A lancé le programme de conseillers en ingénierie et a organisé des mentors externes",
            ],
        }],
    },

    "EVANGELISM": {
        "displayName": "Évangélisation",
        "category": "D",
        "description": "Promeut Medium auprès du monde extérieur et l'établit comme un endroit attractif et réfléchi où travailler",
        "milestones": [{
            "summary": "Représente bien Medium à l'extérieur et influence positivement les individus",
            "signals": [
                "Partage les succès personnels et organisationnels avec leur réseau",
                "Assiste aux événements organisés par Medium et discute avec les invités",
                "Communique une excitation authentique et honnête concernant leur travail à l'extérieur",
            ],
            "examples": [
                "A partagé un article sur le lancement d'un produit Medium sur Facebook",
                "A agi comme guide pour un visiteur non ami au bureau",
                "A soutenu les efforts de relations publiques en donnant une citation ou en se faisant prendre en photo",
            ],
        }, {
            "summary": "Participe de manière plus centrale à de petits événements et prend des actions simples qui influencent positivement des groupes de personnes",
            "signals": [
                "Prend des mesures significatives pour présenter Medium aux gens",
                "A rejoint un groupe public Slack et a représenté Medium de manière appropriée et efficace",
                "Organise de petits ou moyens événements positifs qui attirent les gens vers Medium",
            ],
            "examples": [
                "A été bénévole pour un atelier d'écriture CODE2040",
                "A organisé une courte visite du bureau par des étudiants universitaires",
                "A parlé lors d'un événement Women Who Code organisé chez Medium",
            ],
        }, {
            "summary": "Travaille dur pour influencer positivement de grands groupes de personnes sur leur vision de Medium",
            "signals": [
                "Mentore ou participe de manière très visible à une organisation externe",
                "Établit des partenariats fructueux avec des organisations externes",
                "Écrit des articles sur Medium qui reçoivent un trafic modéré",
            ],
            "examples": [
                "A représenté Medium lors d'un panel lors d'une conférence d'experts de l'industrie",
                "A établi des liens étroits avec Creative Commons",
                "A construit une relation durable et solide avec Code2040",
            ],
        }, {
            "summary": "Établit Medium comme une entreprise et un lieu de travail innovant et formidable pour toute l'industrie",
            "signals": [
                "S'établit en tant que leader d'opinion de l'industrie qui attire les talents",
                "Publie du matériel sur les innovations organisationnelles ou techniques de Medium",
                "Exploite un suivi significatif pour évangéliser Medium",
            ],
            "examples": [
                "A publié un article sur la technologie Medium dans une revue à comité de lecture",
                "A rédigé un communiqué de presse conjoint avec l'EFF sur le DNT",
                "A publié « Pourquoi Content Editable est terrible » sur le blog d'ingénierie de Medium",
            ],
        }, {
            "summary": "Présente Medium sous un jour positif à un public plus large en dehors de l'industrie",
            "signals": [
                "Transmet des messages clés à des publics larges et grand public",
                "Influence des personnes ayant de grands audiences pour parler positivement de Medium",
                "Favorise la reconnaissance et l'adoption de Medium en nombre significatif",
            ],
            "examples": [
                "A publié ou a été interviewé dans un journal ou un site web grand public en dehors de la technologie",
                "A été le conférencier principal lors d'une conférence avec une attention internationale",
                "A représenté Medium dans les médias nationaux télévisés",
            ],
        }],
    },

    "RECRUITING": {
        "displayName": "Recrutement",
        "category": "D",
        "description": "Renforce l'équipe de Medium en recrutant d'excellents membres du personnel",
        "milestones": [{
            "summary": "Amène de nouveaux candidats dans le pipeline et comprend comment évaluer les candidats chez Medium",
            "signals": [
                "Passe régulièrement en revue son réseau existant pour des pistes de recrutement",
                "Suit des entretiens pour se familiariser avec le processus",
                "Passe régulièrement en revue les offres d'emploi actuelles",
            ],
            "examples": [
                "A complété l'étalonnage des entretiens",
                "A organisé des sessions informelles pour pratiquer les questions",
                "A recommandé des personnes appropriées pour des postes ouverts",
            ],
        }, {
            "summary": "Mène régulièrement des entretiens, aide l'équipe à prendre des décisions de recrutement significatives et aide à construire un pipeline diversifié",
            "signals": [
                "Utilise une grille d'entretien pour fournir des retours clairs et objectifs sur les candidats",
                "Mène des entretiens avec empathie et les traite tous avec le même respect",
                "Recherche des approches pour trouver des candidats et diversifier le recrutement",
            ],
            "examples": [
                "A ajouté des preuves observables pour chaque évaluation",
                "A lancé un brunch mensuel pour que les candidats rencontrent les employés de Medium",
                "A testé un nouveau service pour la qualité et la diversité des candidats",
            ],
        }, {
            "summary": "Maintient et renforce l'intégrité du processus actuel et amène régulièrement d'excellents candidats",
            "signals": [
                "Enseigne aux nouveaux intervieweurs comment mener des entretiens avec empathie",
                "Modélise une grande technique d'entretien et des retours lorsqu'il est suivi",
                "Fait des entretiens inversés avec les stagiaires et les aide à étalonner leurs retours",
            ],
            "examples": [
                "A écrit de nouvelles questions d'entretien qui répondent à nos critères de qualité",
                "A amené des candidats dans notre pipeline de manière proactive, avec un taux de conversion élevé",
                "A proposé des améliorations utiles et tangibles au processus d'entretien",
            ],
        }, {
            "summary": "Contribue activement aux décisions de recrutement et les mène à bien, et déploie de grands efforts pour trouver d'excellents candidats",
            "signals": [
                "Documente des indices subtils dans les entretiens qui indiquent une alignement des valeurs",
                "Prend des décisions de recrutement, résolvant les divergences entre des rapports conflictuels",
                "Donne les meilleures notes aux candidats et met en évidence leurs traits de caractère",
            ],
            "examples": [
                "A planifié un sommet d'ingénierie sur le processus d'entretien et la formation",
                "A organisé et dirigé la présence de Medium lors d'un salon de recrutement",
                "A lancé le programme de stage CODE2040",
            ],
        }, {
            "summary": "Établit la stratégie de recrutement, investit dans des relations à long terme pour des rôles critiques et recrute à grande échelle",
            "signals": [
                "Donne le ton, la politique et les objectifs autour de la construction d'une équipe diversifiée et de haute qualité",
                "Identifie et attire des acquisitions prometteuses",
                "Suit l'activité de l'industrie, identifiant des opportunités pour des rôles critiques",
            ],
            "examples": [
                "A discuté avec un candidat senior pendant de nombreux mois pour pourvoir un rôle critique",
                "A organisé des efforts pour convaincre des ingénieurs acquis de rejoindre et de rester",
                "A fixé des objectifs, puis suivi et rapporté des indicateurs sur la démographie de l'équipe au fil du temps",
            ],
        }],
    },

    "COMMUNITY": {
        "displayName": "Communauté",
        "category": "D",
        "description": "Construit une communauté en interne, donne de soi à l'équipe, et défend et exalte les valeurs de l'entreprise",
        "milestones": [{
            "summary": "Est disponible et présent dans les équipes actuelles, et travaille à contribuer positivement à la culture d'entreprise",
            "signals": [
                "Participe aux activités d'équipe et aux sorties",
                "Traite les collègues et les clients avec respect",
                "Rejoint des groupes ou des comités en dehors des responsabilités régulières",
            ],
            "examples": [
                "A rejoint et participé activement à la guilde des clients web",
                "A ramené un petit cadeau de vacances pour l'équipe",
                "A rédigé des articles divertissants et informatifs sur Prod Ops sur Hatch",
            ],
        }, {
            "summary": "Prend des initiatives, renforce les liens et prend des actions concrètes pour promouvoir une culture inclusive",
            "signals": [
                "Fait de la place pour que d'autres participent",
                "Collabore avec d'autres ingénieurs en dehors des responsabilités directes",
                "Trouve des moyens d'intégrer rapidement et d'engager les nouvelles recrues",
            ],
            "examples": [
                "A créé un bingo d'intégration",
                "A inclus des personnes timides et introverties dans une conversation dominante",
                "A été volontaire en tant que secrétaire pour une équipe",
            ],
        }, {
            "summary": "Contribue à améliorer le lien d'équipe et aide à construire une culture de soutien mutuel",
            "signals": [
                "Prend des quarts de veille supplémentaires à court terme",
                "Contribue pour aider d'autres équipes à respecter les délais, sans manquer ses propres délais",
                "Utilise sa position pour soulever des problèmes difficiles au nom de quelqu'un d'autre",
            ],
            "examples": [
                "A mené des cycles de veille avec peu de soutien tout en contribuant toujours à des projets",
                "A démarré et dirigé le groupe LGBTQIA ERG",
                "Est resté positif et a amélioré le moral de l'équipe pendant la période après les licenciements",
            ],
        }, {
            "summary": "Exemple de désintéressement pour l'équipe sans compromettre les responsabilités, et élève tout le monde",
            "signals": [
                "Fait des efforts supplémentaires lors des veilles, servant l'équipe sans se plaindre",
                "Met en place des programmes concrets pour améliorer significativement l'inclusivité de l'équipe",
                "Assume de grandes quantités de travail fastidieux pour l'équipe sans être sollicité",
            ],
            "examples": [
                "A consacré beaucoup de temps à aider en dehors des responsabilités directes",
                "A refactorisé des centaines de nœuds hérités de Shepherd",
                "A agi en tant que seul responsable de Boxen pendant des années",
            ],
        }, {
            "summary": "Vit les valeurs de l'entreprise, protège une culture positive, et définit des politiques qui soutiennent le lien entre les équipes",
            "signals": [
                "Rassemble des équipes séparées pour renforcer le lien",
                "Tient les individus, les équipes et la direction responsables des valeurs de Medium",
                "Donne le ton, la politique et les objectifs pour maintenir une entreprise inclusive",
            ],
            "examples": [
                "A organisé une dégustation de vin et d'olives à Napa pour toute l'organisation d'ingénierie",
                "A conçu, livré et agi sur les conclusions d'une enquête sur le bonheur des ingénieurs",
                "A remis en question et corrigé les comportements ou politiques d'exclusion",
            ],
        }]
    }
};

export const trackIds: TrackId[] = Object.keys(tracks)

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  let pointsByCategory = new Map()
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId]
    const categoryId = tracks[trackId].category
    let currentPoints = pointsByCategory.get(categoryId) || 0
    pointsByCategory.set(categoryId, currentPoints + milestoneToPoints(milestone))
  })
  return Array.from(categoryIds.values()).map(categoryId => {
    const points = pointsByCategory.get(categoryId)
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
  })
}

export const totalPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number =>
  trackIds.map(trackId => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => (sum + addend), 0)

export const categoryColorScale = d3.scaleOrdinal()
  .domain(categoryIds)
  .range(['#00abc2', '#428af6', '#e1439f', '#e54552'])

export const titles = [
  {label: 'Engineer I', minPoints: 0, maxPoints: 16},
  {label: 'Engineer II', minPoints: 17, maxPoints: 35},
  {label: 'Senior Engineer', minPoints: 36, maxPoints: 57},
  {label: 'Group Lead', minPoints: 36, maxPoints: 57},
  {label: 'Staff Engineer', minPoints: 58, maxPoints: 89},
  {label: 'Senior Group Lead', minPoints: 58, maxPoints: 89},
  {label: 'Principal Engineer', minPoints: 90},
  {label: 'Director of Engineering', minPoints: 90}
]

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  return titles.filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints)
                             && (title.maxPoints === undefined || totalPoints <= title.maxPoints))
    .map(title => title.label)
}
