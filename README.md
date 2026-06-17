# 📚 Bibliothèque Numérique

Application web full-stack simulant le fonctionnement d'une bibliothèque en ligne. Elle permet de consulter les livres disponibles et de visualiser les emprunts d'un utilisateur (titre, auteur, date d'emprunt et date de retour prévue).

Développée dans le cadre de l'évaluation finale du cours **420-WA6-AG — Programmation Web Avancée** (Institut Grasset, Hiver 2026).

---

## 🛠️ Technologies utilisées

| Côté | Technologies |
|------|--------------|
| **Frontend** | React, Vite, React Router |
| **Backend** | Node.js, Express |
| **Base de données** | MySQL (MariaDB) |
| **Documentation API** | Swagger (swagger-ui-express, swagger-jsdoc) |
| **Tests** | Jest, Supertest, Cypress |
| **Déploiement** | Railway (BD), Render (backend), Vercel (frontend) |

---

## 📂 Structure du projet

```
Mohamed-Nouaoury-evaluation-finaleH26/
├── client/                 # Frontend React (Vite)
│   ├── src/
│   ├── cypress/            # Tests E2E
│   └── package.json
├── server/                 # Backend Express
│   ├── config/
│   │   └── db.js           # Connexion MySQL
│   ├── controllers/
│   │   └── livresController.js
│   ├── routes/
│   │   └── livresRoutes.js
│   ├── swagger.js          # Configuration Swagger
│   ├── server.js           # Point d'entrée du serveur
│   ├── test.js             # Tests Jest + Supertest
│   └── package.json
├── bibliotheque.sql        # Script de la base de données
└── README.md
```

---

## ⚙️ Prérequis

- [Node.js](https://nodejs.org/) (version 18 ou supérieure)
- [MySQL](https://www.mysql.com/) ou [XAMPP](https://www.apachefriends.org/) (pour phpMyAdmin)
- npm (installé avec Node.js)

---

## 🚀 Installation et lancement

### 1. Cloner le dépôt

```bash
git clone https://github.com/Med-Nouaoury/Mohamed-Nouaoury-evaluation-finaleH26.git
cd Mohamed-Nouaoury-evaluation-finaleH26
```

### 2. Importer la base de données

1. Démarrer MySQL (via XAMPP ou autre).
2. Ouvrir phpMyAdmin (`http://localhost/phpmyadmin`).
3. Créer une base de données nommée `bibliotheque`.
4. Importer le fichier `bibliotheque.sql`.

La base contient 3 tables : `livres`, `utilisateurs` et `emprunts`.

### 3. Configurer et lancer le backend

```bash
cd server
npm install
```

Créer un fichier `.env` dans le dossier `server/` :

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=bibliotheque
DB_PORT=3306
```

Lancer le serveur :

```bash
node server.js
```

Le backend démarre sur `http://localhost:5000`.

### 4. Configurer et lancer le frontend

Dans un nouveau terminal :

```bash
cd client
npm install
npm run dev
```

Le frontend démarre sur `http://localhost:5173`.

---

## 🔌 Endpoints de l'API

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| `GET` | `/api/livres` | Récupérer la liste des livres disponibles |
| `GET` | `/api/livres/emprunts?email=` | Récupérer les emprunts d'un utilisateur par email |

### Exemples

**Livres disponibles :**
```
GET http://localhost:5000/api/livres
```

**Emprunts d'un utilisateur :**
```
GET http://localhost:5000/api/livres/emprunts?email=jean.dupont@biblio.com
```

---

## 📖 Documentation Swagger

Une documentation interactive de l'API est disponible une fois le serveur lancé :

```
http://localhost:5000/api-docs
```

Elle permet de consulter et de tester directement chaque endpoint via le bouton **« Try it out »**.

---

## 🧪 Tests

### Tests unitaires et d'intégration (Jest + Supertest)

Dans le dossier `server/` :

```bash
npm test
```

Ces tests vérifient que les endpoints renvoient le bon statut HTTP (200) et une réponse JSON valide.

### Tests End-to-End (Cypress)

Dans le dossier `client/` :

```bash
npx cypress open
```

Le test E2E ouvre la page des emprunts, remplit le formulaire avec un email, soumet et vérifie l'affichage des emprunts (titre, auteur, dates).

> ⚠️ Le backend et le frontend doivent être lancés avant d'exécuter les tests Cypress.

---

## 👤 Utilisateurs de test

| Email | Mot de passe |
|-------|--------------|
| jean.dupont@biblio.com | 123456 |
| sophie.martin@biblio.com | 123456 |

---

## 🌐 Déploiement

| Service | Plateforme |
|---------|------------|
| Base de données | [Railway](https://railway.app/) |
| Backend (Express) | [Render](https://render.com/) |
| Frontend (React) | [Vercel](https://vercel.com/) |

**Liens en production :**
- Frontend : `[à compléter avec le lien Vercel]`
- Backend : `https://mohamed-nouaoury-evaluation-finaleh26.onrender.com`

---

## ✍️ Auteur

**Mohamed Nouaoury**
Institut Grasset — Techniques de l'informatique (420.B0)
Cours : 420-WA6-AG — Programmation Web Avancée — Hiver 2026