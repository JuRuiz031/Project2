# Build stage
FROM node:20-alpine AS build
WORKDIR /app
RUN npm install -g npm@11
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Run stage
FROM node:20-alpine
WORKDIR /app
COPY --from=build /app/dist/calendario ./dist/calendario
ENV PORT=4000
EXPOSE 4000
CMD ["node", "dist/calendario/server/server.mjs"]
