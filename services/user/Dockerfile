FROM node:22 AS build-env
WORKDIR /app
COPY src/* ./src/
COPY package.json ./
COPY tsconfig.json ./
COPY webpack.config.js ./
RUN npm install
RUN npm run build

FROM node:22
WORKDIR /app
COPY --from=build-env /app/dist/ ./

ENTRYPOINT ["node", "index.js"]