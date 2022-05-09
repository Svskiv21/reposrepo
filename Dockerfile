FROM node:latest
LABEL author = "Natalia Krukar"
WORKDIR /app
ADD . .
RUN npm ci --only=production
CMD node index.js
