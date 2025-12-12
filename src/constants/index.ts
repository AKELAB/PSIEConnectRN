import { Job, UserProfile, NewsItem } from '../types';

// Contenu officiel extrait du site psie.bj
export const PSIE_INFO = {
  mission: "Promouvoir l'emploi et l'auto-emploi des jeunes par le développement des compétences et le soutien aux entreprises.",
  eligibility: [
    "Être de nationalité béninoise",
    "Être âgé de 18 à 40 ans",
    "Être immédiatement disponible",
    "Être inscrit sur la plateforme PSIE",
    "Avoir un diplôme (BAC, BTS, Licence, Master, Ingénieur)"
  ],
  documents: [
    "Une photo d'identité",
    "Le diplôme ou l'attestation",
    "Le CV détaillé",
    "La pièce d'identité (CIP ou Passeport)"
  ],
  sectors: [
    "Agriculture & Agrobusiness",
    "Tourisme & Hôtellerie",
    "Numérique & Digital",
    "BTP & Infrastructures",
    "Artisanat & Services",
    "Énergie & Environnement"
  ]
};

export const INITIAL_USER_PROFILE: UserProfile = {
  name: "Koffi Mensah",
  title: "Développeur Full Stack & Intégrateur",
  location: "Cotonou, Bénin",
  bio: "Jeune diplômé passionné par le développement web et l'innovation numérique. Je cherche une opportunité pour appliquer mes compétences en React et Node.js dans le cadre du programme PSIE. Rigoureux et autodidacte.",
  experienceYears: 2,
  status: 'VALIDATED', // Statut par défaut : Dossier validé, prêt à postuler
  skills: [
    { name: "JavaScript", level: 4 },
    { name: "React.js", level: 3 },
    { name: "Python", level: 2 },
    { name: "Gestion de projet", level: 3 },
    { name: "Anglais", level: 3 }
  ],
  education: [
    { 
      id: '1', 
      degree: "Licence en Informatique de Gestion", 
      institution: "ENEAM Cotonou", 
      year: "2023",
      description: "Spécialisation en bases de données et génie logiciel. Major de promotion. Mémoire sur l'IA dans l'agriculture."
    },
    { 
      id: '2', 
      degree: "Baccalauréat Série C", 
      institution: "Collège Père Aupiais", 
      year: "2020",
      description: "Mention Bien."
    }
  ],
  certifications: [
    { id: '1', name: "Meta Front-End Developer", issuer: "Coursera", year: "2023" },
    { id: '2', name: "Certificat Compétences Numériques", issuer: "ADN Bénin", year: "2022" }
  ],
  projects: [
    { 
      id: '1', 
      name: "AgriTech Bénin", 
      description: "Plateforme de mise en relation entre producteurs locaux et restaurants. Utilisation de React et Firebase.", 
      role: "Lead Dev",
      year: "2023",
      link: "https://github.com/koffi/agritech"
    }
  ]
};

export const MOCK_JOBS: Job[] = [
  {
    id: "1",
    title: "Développeur d'Applications Web",
    company: "Agence de Développement du Numérique (ADN)",
    location: "Cotonou",
    type: "Contrat PSIE (12 mois)",
    salary: "Allocation PSIE Niveau 1",
    description: "Dans le cadre de la dématérialisation des services publics, vous participerez au développement de modules frontend pour le portail national service-public.bj.",
    requiredSkills: ["React", "TypeScript", "Tailwind CSS"],
    postedAt: "Il y a 2 jours"
  },
  {
    id: "2",
    title: "Responsable Qualité Agroalimentaire",
    company: "Tolaro Global",
    location: "Parakou",
    type: "CDI après PSIE",
    salary: "Allocation PSIE Niveau 2",
    description: "Supervision de la chaîne de transformation de l'anacarde. Contrôle qualité selon les normes ISO 9001 et HACCP. Formation des équipes locales.",
    requiredSkills: ["Qualité", "HACCP", "Management", "Agronomie"],
    postedAt: "Il y a 5 jours"
  },
  {
    id: "3",
    title: "Chargé de Clientèle & Vente",
    company: "Moov Africa Bénin",
    location: "Porto-Novo",
    type: "Stage Professionnel",
    salary: "100.000 FCFA + Primes",
    description: "Accueil et orientation des clients en agence. Gestion des réclamations via le CRM et promotion des nouveaux produits Moov Money.",
    requiredSkills: ["Relation client", "Communication", "Vente", "CRM"],
    postedAt: "Hier"
  },
  {
    id: "4",
    title: "Guide Touristique & Gestionnaire de Site",
    company: "African Parks (Pendjari)",
    location: "Tanguiéta",
    type: "CDD",
    salary: "150.000 FCFA",
    description: "Accompagnement des touristes, gestion des réservations du lodge et participation aux actions de conservation de la faune.",
    requiredSkills: ["Anglais courant", "Tourisme", "Faune", "Accueil"],
    postedAt: "Il y a 1 semaine"
  },
  {
    id: "5",
    title: "Conducteur de Travaux BTP",
    company: "Colas Afrique - Bénin",
    location: "Abomey-Calavi",
    type: "Contrat PSIE",
    salary: "Allocation PSIE Niveau 1",
    description: "Suivi de chantier pour la construction de voiries urbaines (Projet Asphaltage). Gestion des équipes et des approvisionnements.",
    requiredSkills: ["Génie Civil", "AutoCAD", "Gestion d'équipe"],
    postedAt: "Il y a 3 jours"
  },
  {
    id: "6",
    title: "Electromécanicien de Maintenance",
    company: "SBEE (Direction Technique)",
    location: "Bohicon",
    type: "Contrat PSIE",
    salary: "Allocation PSIE Niveau 2",
    description: "Maintenance préventive et curative des groupes électrogènes et des transformateurs haute tension.",
    requiredSkills: ["Électricité", "Mécanique", "Maintenance Industrielle"],
    postedAt: "Il y a 4 jours"
  },
  {
    id: "7",
    title: "Comptable Junior",
    company: "Pharmacie Camp Guézo",
    location: "Cotonou",
    type: "Stage Pré-Emploi",
    salary: "80.000 FCFA",
    description: "Saisie des factures, gestion de la caisse, inventaires mensuels et rapprochements bancaires sous la supervision de l'expert-comptable.",
    requiredSkills: ["Comptabilité", "Sage Saari", "Excel"],
    postedAt: "Aujourd'hui"
  }
];

// Images contextuelles : Agriculture béninoise, Infrastructure/Port, Jeunesse pro
export const MOCK_NEWS: NewsItem[] = [
  {
    id: '1',
    title: "Allocations PSIE : Virement du mois en cours",
    category: 'NEWS',
    date: "Aujourd'hui",
    // Image: Agriculture / Marché local (contexte économique)
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=800",
    summary: "Le Secrétariat Technique du PSIE informe les bénéficiaires que les virements des allocations sont effectifs dans les banques partenaires."
  },
  {
    id: '2',
    title: "Cohorte 9 : Les inscriptions sont ouvertes",
    category: 'EVENT',
    date: "10 Nov 2024",
    // Image: Jeunes professionnels africains / Tech
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    summary: "Les entreprises souhaitant bénéficier du programme peuvent désormais soumettre leurs besoins en personnel sur la plateforme."
  },
  {
    id: '3',
    title: "Guide : Réussir son entretien d'embauche",
    category: 'TIP',
    date: "08 Nov 2024",
    // Image: Entretien / Bureau moderne
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    summary: "Conseils pratiques pour convaincre les recruteurs partenaires du PSIE lors de la phase de sélection."
  },
  {
    id: '4',
    title: "Partenariat CCI Bénin & PSIE",
    category: 'NEWS',
    date: "01 Nov 2024",
    // Image: Industrie / Port (Contexte GDIZ ou Port autonome)
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    summary: "Signature d'une convention pour faciliter l'insertion de 500 jeunes dans les PME industrielles de la zone de Glo-Djigbé."
  }
];