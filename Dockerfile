### BUILD STAGE
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm ci
copy . .
RUN npm run build

###PRODUCTION STAGE
FROM node:lts-alpine as production-stage
WORKDIR /app
COPY --from=build-stage /app/dist ./dist
COPY --from=build-stage /app/package*.json ./
RUN npm ci --only=production
EXPOSE 3000
CMD ["npm", "run", "start:prod"]
