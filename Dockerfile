FROM node:18-alpine

WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm ci --only=production

# Copier le code source
COPY . .

# Construire l'application pour la production
RUN npm run build

# Exposer le port
EXPOSE 3000

# Variables d'environnement
ENV NODE_ENV=production

# Démarrer l'application
CMD ["npm", "start"]