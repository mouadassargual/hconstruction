# Site statique Ste Hsaina Construction

Site vitrine statique pour la location de grue mobile et matériel de construction à Agadir et partout au Maroc.

## Fichiers principaux

- `index.html` : page d'accueil optimisée pour "location grue mobile Agadir" et "location grue mobile Maroc".
- `machines.html` : page catalogue pour les machines, la grue mobile, la manutention lourde et le matériel BTP.
- `secteurs.html` : page dédiée aux secteurs d'intervention : BTP, industrie, logistique, conteneurs et chantiers techniques.
- `location-grue-mobile-agadir.html` : page locale dédiée à Agadir et Souss-Massa.
- `location-grue-mobile-maroc.html` : page nationale dédiée au Maroc.
- `location-materiel-construction-agadir.html` : page SEO dédiée à la location de matériel de construction à Agadir.
- `location-materiel-chantier-maroc.html` : page SEO dédiée à la location de matériel chantier au Maroc.
- `styles.css` : design responsive.
- `script.js` : menu mobile, animations sobres, année automatique et formulaire WhatsApp.
- `robots.txt` et `sitemap.xml` : base technique SEO.
- `assets/` : visuels générés et logos utilisés par le site.
- `vercel.json` : configuration Vercel pour les headers et le cache des assets.
- `.vercelignore` : fichiers exclus du déploiement, comme les captures et les photos brutes non utilisées.

## Déploiement Vercel

### Méthode recommandée : GitHub + Vercel

1. Créer un repository GitHub pour le projet.
2. Envoyer tout le dossier du site dans ce repository.
3. Aller sur https://vercel.com/new.
4. Importer le repository GitHub.
5. Framework Preset : `Other`.
6. Build Command : laisser vide.
7. Output Directory : laisser vide ou mettre `.`.
8. Cliquer sur Deploy.

Le site étant statique, Vercel publie directement les fichiers HTML, CSS, JS et `assets/`.

### Option CLI

Installer puis publier :

```bash
npm i -g vercel
vercel login
vercel --prod
```

Pendant les questions Vercel :

- Set up and deploy : `Y`
- Which scope : choisir le compte
- Link to existing project : `N` pour la première fois
- Project name : `hsaina-construction`
- Directory : `./`
- Override settings : `N`

## Avant publication

Le domaine final configuré dans les balises SEO est `https://hsainaconstruction.com/`.

Après connexion du domaine sur Vercel, vérifier que ces deux URLs fonctionnent :

- `https://hsainaconstruction.com/robots.txt`
- `https://hsainaconstruction.com/sitemap.xml`

## SEO local à faire après mise en ligne

Créer ou compléter la fiche Google Business Profile de Ste Hsaina Construction avec le même téléphone, le même email, la zone Agadir/Souss-Massa et la catégorie liée au matériel de construction. C'est indispensable pour viser les premières positions locales.

## Checklist indexation Google

1. Déployer le site sur Vercel avec le domaine `https://hsainaconstruction.com/`.
2. Vérifier que `https://hsainaconstruction.com/robots.txt` et `https://hsainaconstruction.com/sitemap.xml` répondent bien en ligne.
3. Ajouter le domaine dans Google Search Console.
4. Envoyer le sitemap : `https://hsainaconstruction.com/sitemap.xml`.
5. Utiliser l'inspection d'URL dans Search Console pour demander l'indexation des pages importantes :
   - `https://hsainaconstruction.com/`
   - `https://hsainaconstruction.com/location-grue-mobile-agadir.html`
   - `https://hsainaconstruction.com/location-materiel-construction-agadir.html`
   - `https://hsainaconstruction.com/location-materiel-chantier-maroc.html`
   - `https://hsainaconstruction.com/machines.html`
6. Créer ou optimiser Google Business Profile avec les mêmes informations NAP : nom, adresse/zone, téléphone, email, horaires.
7. Sur le site, garder les visuels générés. Pour Google Business Profile, ajouter seulement des photos réelles si elles sont validées par l'entreprise.
8. Demander des avis clients authentiques après les interventions.

Objectif SEO principal :

- `location grue mobile Agadir`
- `location grue mobile Maroc`
- `location matériel de construction Agadir`
- `location matériel chantier Maroc`
- `grues de chantier Maroc`
- `Manitou Maroc`
- `machine JCB Maroc`
- `matériel BTP Agadir`
- `levage chantier Maroc`

La première position Google ne peut pas être garantie, mais cette structure donne au site une base propre pour l'indexation, le SEO local et le suivi dans Search Console.

## Inspiration métier

Le site a été enrichi avec une structure comparable aux acteurs du secteur : catalogue de machines, secteurs d'application, critères de choix, formules de location, conseils et brief WhatsApp. Les textes sont originaux et adaptés aux informations confirmées de Ste Hsaina Construction.

## Images catalogue

Les images `assets/grue-mobile-catalogue-*.png` et `assets/hero-grue-mobile-professionnelle.png` sont des visuels générés pour donner un style catalogue/professionnel proche des sites spécialisés. Elles ne sont pas copiées depuis un concurrent et ne doivent pas être présentées comme des photos réelles du parc sans confirmation.
