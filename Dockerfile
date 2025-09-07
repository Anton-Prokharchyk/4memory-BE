FROM node:22.14.0-alpine
WORKDIR /ath-backend
ADD package.json package.json
RUN npm install
ADD . .
CMD ["npm", "run", "start:dev"]

EXPOSE 3000