# Site statique Ste.H.C.Sarl

Site vitrine statique pour la location de grue mobile et matériel de construction à Agadir et partout au Maroc.

## Fichiers principaux

- `index.html` : page d'accueil optimisée pour "location grue mobile Agadir" et "location grue mobile Maroc".
- `machines.html` : page catalogue pour les machines, la grue mobile, la manutention lourde et le matériel BTP.
- `secteurs.html` : page dédiée aux secteurs d'intervention : BTP, industrie, logistique, conteneurs et chantiers techniques.
- `location-grue-mobile-agadir.html` : page locale dédiée à Agadir et Souss-Massa.
- `location-grue-mobile-maroc.html` : page nationale dédiée au Maroc.
- `styles.css` : design responsive.
- `script.js` : menu mobile, animations sobres, année automatique et formulaire WhatsApp.
- `robots.txt` et `sitemap.xml` : base technique SEO.
- `assets/` : photos renommées avec des mots-clés utiles.
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
- Project name : `ste-hc-sarl`
- Directory : `./`
- Override settings : `N`

## Avant publication

Remplacer `https://ste-hc-sarl.ma/` dans les balises canonical, Open Graph, JSON-LD, `robots.txt` et `sitemap.xml` par le vrai domaine si le domaine final est différent.

## SEO local à faire après mise en ligne

Créer ou compléter la fiche Google Business Profile de Ste.H.C.Sarl avec le même téléphone, le même email, les photos du matériel, la zone Agadir/Souss-Massa et la catégorie liée au matériel de construction. C'est indispensable pour viser les premières positions locales.

## Inspiration métier

Le site a été enrichi avec une structure comparable aux acteurs du secteur : catalogue de machines, secteurs d'application, critères de choix, formules de location, conseils et brief WhatsApp. Les textes sont originaux et adaptés aux informations confirmées de Ste.H.C.Sarl.

## Images catalogue

Les images `assets/grue-mobile-catalogue-*.png` et `assets/hero-grue-mobile-professionnelle.png` sont des visuels générés pour donner un style catalogue/professionnel proche des sites spécialisés. Elles ne sont pas copiées depuis un concurrent et ne doivent pas être présentées comme des photos réelles du parc sans confirmation.
