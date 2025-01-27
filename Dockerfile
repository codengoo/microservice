FROM node:22 AS build-env
WORKDIR /app
COPY server/src/* ./src/
COPY server/package.json ./
COPY server/tsconfig.json ./
COPY server/webpack.config.js ./
RUN npm install
RUN npm run build

FROM node:22
WORKDIR /app
COPY --from=build-env /app/dist/ ./

ENTRYPOINT ["node", "index.js"]