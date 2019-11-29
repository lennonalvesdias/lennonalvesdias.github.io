FROM node:10.16.0-alpine as node
LABEL autodelete="true"
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
LABEL description="application"
COPY --from=node /usr/src/app/dist/lennonalvesdias /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf