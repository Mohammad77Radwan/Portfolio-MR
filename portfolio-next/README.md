# Portfolio Next.js

Application portfolio moderne pour le projet BTS SIO SLAM.

## Lancer en local
```bash
npm install
npm run dev
```

## Configuration Formspree (Contact)
Le formulaire de contact utilise Formspree via une Server Action.

1. Créez un formulaire sur Formspree.
2. Copiez l'endpoint (ex: `https://formspree.io/f/xxxxabcd`).
3. Ajoutez la variable d'environnement:

```bash
FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxabcd
```

Sans cette variable, l'envoi affichera un message de configuration manquante.

Ouvrir [http://localhost:3000](http://localhost:3000).

## Scripts
- `npm run dev` : serveur de développement
- `npm run build` : build de production
- `npm run start` : lancement du build
- `npm run lint` : vérification ESLint

## Contenu
- Hero avancé, statistiques, projets bento, compétences, expérience, blog, GitHub live, documents E5, newsletter et contact.
- Les notes d’implémentation sont dans [ETAPE1_IMPLEMENTATION.md](ETAPE1_IMPLEMENTATION.md).

## Déploiement
Le projet est prêt pour Vercel après configuration éventuelle des données et documents finaux.
