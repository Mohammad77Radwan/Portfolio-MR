# Portfolio MR - BTS SIO SLAM (Session 2026)

[Français](README.md) | [English](README.en.md)

Repository principal du portfolio professionnel et pedagogique de Mohammad Radwan.

Ce depot centralise :
- le portfolio web moderne (Next.js),
- la documentation de conformite E4/E5,
- les preuves de competences BTS SIO,
- les ressources projets, stages, certifications et CV.

## Objectifs du repository

Ce repository a un double objectif :
1. Fournir un support clair et exploitable pour le jury BTS SIO (CCF E4/E5).
2. Presenter un profil technique solide pour poursuite d'etudes et recrutement.

## Sommaire rapide

- [Vue d'ensemble](#vue-densemble)
- [Demarrage rapide](#demarrage-rapide)
- [Structure du repository](#structure-du-repository)
- [Portfolio web principal](#portfolio-web-principal)
- [Documentation E4E5](#documentation-e4e5)
- [Projets et preuves techniques](#projets-et-preuves-techniques)
- [Conformite et verification](#conformite-et-verification)
- [Workflow recommande](#workflow-recommande)
- [Roadmap](#roadmap)
- [Contact](#contact)

## Vue d'ensemble

Entrées principales :
- [portfolio-next](portfolio-next/README.md) : application portfolio Next.js (version principale)
- [index.html](index.html) : version statique de portfolio
- [documentation](documentation/README.md) : base documentaire E4/E5
- [projets](projets/README.md) : dossiers projets et templates
- [stages](stages/README.md) : pieces de stage
- [certifications](certifications/README.md) : certifications techniques
- [cv](cv/README.md) : CV et informations de parcours
- [medias](medias/README.md) : ressources visuelles

## Demarrage rapide

### Prerequis
- Node.js 20+
- npm 10+
- Git

### Lancer le portfolio Next.js
```bash
cd /workspaces/Portfolio-MR/portfolio-next
npm install
npm run dev
```

Puis ouvrir : [http://localhost:3000](http://localhost:3000)

### Build de verification
```bash
cd /workspaces/Portfolio-MR/portfolio-next
npm run lint
npm run build
```

## Structure du repository

```text
Portfolio-MR/
|-- README.md
|-- index.html
|-- assets/
|-- portfolio-next/
|   |-- app/
|   |-- components/
|   |-- lib/
|   |-- public/
|   |-- types/
|   `-- README.md
|-- documentation/
|   |-- README.md
|   |-- CHECKLIST-CONFORMITE-E4-E5.md
|   |-- E5-EXIGENCES-OFFICIELLES.md
|   |-- competences/
|   |-- cybersecurite/
|   |-- diaporama/
|   |-- evaluation/
|   |-- oral/
|   |-- tableau-synthese/
|   `-- veille-technologique/
|-- projets/
|   |-- README.md
|   `-- _template/
|-- stages/
|-- certifications/
|-- cv/
`-- medias/
```

## Portfolio web principal

Le projet principal est [portfolio-next](portfolio-next/README.md).

Technologies utilisees :
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Zod

Principales sections fonctionnelles :
- Hero avance
- Statistiques animees
- Projects Bento + modal detaillee
- Skills / Experience / Testimonials / Blog
- GitHub live section
- Documents E5 telechargeables
- Newsletter
- Contact avec validation server-side

Actifs publics importants :
- Documents jury : [portfolio-next/public/documents](portfolio-next/public/documents)
- Visuels projets : [portfolio-next/public/projects](portfolio-next/public/projects)
- Social preview : [portfolio-next/public/og-cover.svg](portfolio-next/public/og-cover.svg)

## Documentation E4/E5

Point d'entree : [documentation/README.md](documentation/README.md)

Documents critiques :
- Exigences officielles : [documentation/E5-EXIGENCES-OFFICIELLES.md](documentation/E5-EXIGENCES-OFFICIELLES.md)
- Checklist conformite : [documentation/CHECKLIST-CONFORMITE-E4-E5.md](documentation/CHECKLIST-CONFORMITE-E4-E5.md)
- Competences BTS : [documentation/competences/BLOCS-BTS-SIO-COMPETENCES-SAVOIRS.md](documentation/competences/BLOCS-BTS-SIO-COMPETENCES-SAVOIRS.md)
- Tableau de synthese : [documentation/tableau-synthese/README.md](documentation/tableau-synthese/README.md)
- Script oral : [documentation/oral/SCRIPT-ORAL-10-MIN.md](documentation/oral/SCRIPT-ORAL-10-MIN.md)
- Questions jury : [documentation/oral/QUESTIONS-JURY-30-QA.md](documentation/oral/QUESTIONS-JURY-30-QA.md)
- Annexes evaluation : [documentation/evaluation/README.md](documentation/evaluation/README.md)

## Projets et preuves techniques

Point d'entree : [projets/README.md](projets/README.md)

Template standardise :
- [projets/_template/README-projet-template.md](projets/_template/README-projet-template.md)

Le template couvre notamment :
- contexte et objectifs,
- architecture et choix techniques,
- mapping competences BTS,
- securite,
- tests,
- difficultes et retours d'experience.

## Conformite et verification

Avant remise jury, verifier au minimum :
1. Les liens de documents E5 sont fonctionnels.
2. Les pieces de stage sont presentes et finales.
3. Le tableau de synthese est complet et coherent avec les projets.
4. Le portfolio se lance sans erreur en local.
5. Le build de production passe (`npm run build`).
6. La navigation mobile est exploitable.
7. Les preuves BTS sont explicites dans chaque projet.

## Workflow recommande

1. Mettre a jour les contenus dans [portfolio-next/lib/data.ts](portfolio-next/lib/data.ts).
2. Ajouter ou remplacer les visuels dans [portfolio-next/public/projects](portfolio-next/public/projects).
3. Ajouter les documents officiels finaux dans [portfolio-next/public/documents](portfolio-next/public/documents).
4. Verifier lint/build.
5. Mettre a jour la documentation E4/E5 si une preuve change.
6. Commit avec message explicite.

## Roadmap

- Remplacer les PDF placeholders par versions officielles signees.
- Remplacer les visuels projets placeholders par captures finales.
- Ajouter une version anglaise du portfolio (optionnel).
- Ajouter analytics et observabilite legere (optionnel).

## Contact

- GitHub : [Mohammad77Radwan](https://github.com/Mohammad77Radwan)
- Email : mohammadradwn804@gmail.com
- LinkedIn : profil personnel Mohammad Radwan

---

Si vous ouvrez ce repository pour la premiere fois, commencez par [portfolio-next/README.md](portfolio-next/README.md) pour le run technique, puis [documentation/README.md](documentation/README.md) pour le cadre E4/E5.