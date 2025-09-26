Voici un fichier `deploy.md` prêt à l’emploi pour documenter et expliquer le lancement de ton container avec **Docker Compose** :

---

# 🚀 Déploiement de l’application Next.js avec MongoDB et Mongo Express

Ce guide explique comment lancer une application **Next.js** connectée à **MongoDB** avec une interface d’administration **Mongo Express** via **Docker Compose**.

---

## 📂 Prérequis

* [Docker](https://docs.docker.com/get-docker/) installé
* [Docker Compose](https://docs.docker.com/compose/install/) installé
* Un fichier `docker-compose.yml` (fourni ci-dessous) présent dans le dossier racine du projet

---

## 🛠️ Fichier `docker-compose.yml`

```yaml
version: '3.8'

services:
  # Application Next.js
  app:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - mongodb
    environment:
      - MONGODB_URI=mongodb://mongodb:27017/mgf_website_db
      - NODE_ENV=development
    volumes:
      - .:/app
      - /app/node_modules
    command: npm run dev

  # Base de données MongoDB
  mongodb:
    image: mongo:7.0
    restart: always
    ports:
      - "27017:27017"
    environment:
      - MONGO_INITDB_ROOT_USERNAME=sac@jaune
      - MONGO_INITDB_ROOT_PASSWORD=goudron@AbresX245BC
      - MONGO_INITDB_DATABASE=mgf_website_db
    volumes:
      - mongodb_data:/data/db
      - ./mongo-init.js:/docker-entrypoint-initdb.d/mongo-init.js:ro

  # Interface d'administration MongoDB (optionnel)
  mongo-express:
    image: mongo-express:latest
    restart: always
    ports:
      - "8081:8081"
    environment:
      - ME_CONFIG_MONGODB_ADMINUSERNAME=sac@jaune
      - ME_CONFIG_MONGODB_ADMINPASSWORD=goudron@AbresX245BC
      - ME_CONFIG_MONGODB_SERVER=mongodb
      - ME_CONFIG_BASICAUTH_USERNAME=admin
      - ME_CONFIG_BASICAUTH_PASSWORD=admin
    depends_on:
      - mongodb

volumes:
  mongodb_data:
```

---

## ▶️ Étapes de déploiement

1. **Cloner le projet** (si nécessaire)

   ```bash
   git clone https://github.com/mon-projet/mgf_website.git
   cd mgf_website
   ```

2. **Construire et lancer les containers**

   ```bash
   docker compose up --build -d
   ```

3. **Vérifier les logs (optionnel)**

   ```bash
   docker compose logs -f
   ```

4. **Accéder aux services** :

   * 🌐 Application Next.js : [http://localhost:3000](http://localhost:3000)
   * 📦 MongoDB : `mongodb://sac@jaune:goudron@AbresX245BC@localhost:27017/mgf_website_db`
   * 🛠️ Mongo Express : [http://localhost:8081](http://localhost:8081) (user/pass : `admin/admin`)

---

## 🧹 Arrêt des containers

```bash
docker compose down
```

---

## 🔄 Réinitialiser la base de données

Si tu veux repartir à zéro (supprimer les volumes) :

```bash
docker compose down -v
```

---

👉 Veux-tu que je mette aussi la **commande de build optimisée pour la prod** (Next.js en `npm run build` et `npm start`) dans ce `deploy.md`, ou tu veux uniquement la version dev (`npm run dev` comme tu l’as mis) ?
