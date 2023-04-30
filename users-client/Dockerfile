FROM node:19 as development
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 4200

FROM node:19 AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --quiet
COPY . .
RUN npm run build --configuration=production

FROM nginx:1.21.1-alpine as production
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/dist/users-client /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
