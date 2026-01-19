# PSIEConnect - Application Mobile

> Application mobile React Native pour le Programme de Stage et d'Insertion à l'Emploi (PSIE) du Bénin.

## Langue
Francais (prefere)

## Stack

- **Framework** : React Native 0.83 + TypeScript
- **Navigation** : React Navigation 7 (Native Stack + Bottom Tabs)
- **State** : Zustand
- **Styling** : NativeWind (Tailwind CSS)
- **Validation** : Zod
- **Icons** : Lucide React Native

## Structure

```
src/
├── components/    # Composants réutilisables
├── constants/     # Constantes et config
├── navigation/    # Configuration navigation
├── screens/       # Écrans de l'application
├── services/      # API et services externes
├── store/         # State management Zustand
├── types/         # Types TypeScript
└── utils/         # Fonctions utilitaires
```

## Commandes

```bash
# Dev
npm start                    # Metro bundler
npm run android              # Run Android
npm run ios                  # Run iOS

# Qualité
npm run lint                 # ESLint
npm run test                 # Jest

# Build
cd android && ./gradlew assembleRelease
```

## Conventions

- **Composants** : PascalCase, un fichier par composant
- **Hooks** : préfixe `use` (useAuth, useOffline)
- **Types** : interfaces dans `types/`, suffixe explicite (UserType, StageData)
- **Styles** : NativeWind classes, pas de StyleSheet inline

## Git Commits
Format : `type(scope): description`

**Types** :
- `feat` - Nouvelle feature
- `fix` - Bug fix
- `ui` - Changements UI/UX
- `refactor` - Refactoring
- `perf` - Performance
- `test` - Tests
- `docs` - Documentation

**Exemples** :
```bash
feat(auth): add login screen
fix(navigation): bottom tabs active state
ui(home): update card component styling
```

## Workflow : Feedback Loop

### Principe : Modifier -> Lancer -> Verifier

**Template vérification** :
```bash
# Vérifier qualité code
npm run lint && npm test

# Lancer app
npm run android  # ou npm run ios
```

**Critères succès** :
- ✅ TypeScript : 0 erreurs
- ✅ ESLint : 0 warnings
- ✅ Tests : 100% pass
- ✅ App démarre sans crash
- ✅ Pas de warnings Metro

## Règles strictes

- ❌ Pas de `any` TypeScript
- ❌ Pas de `console.log` en prod
- ❌ Pas de styles hardcodés (utiliser NativeWind)
- ✅ Gestion offline obligatoire (AsyncStorage)
- ✅ Gestion erreurs réseau avec retry

## Contexte métier

L'app permet aux stagiaires PSIE de :
- Consulter leurs informations de stage
- Suivre leurs présences et absences
- Recevoir des notifications du programme
- Accéder aux ressources et formations

## Erreurs connues de Claude

<!-- Ajouter ici les erreurs récurrentes observées -->
<!-- Format : - [Erreur] → [Solution] -->

Exemples types à surveiller :
- Import incorrect de composants NativeWind
- Oubli de SafeAreaView sur certains écrans
- Mauvaise gestion du offline state
- Types Zod mal inférés

## Projet Indépendant
PSIEConnectRN est un projet **complètement indépendant** et séparé des autres projets (EnLive, CIAS, JPJ, Brave Field, Hotel, etc.) 
