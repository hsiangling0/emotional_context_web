# Stage 0 - Build Frontend Assets
FROM node:12.18.1-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN yarn run build

# Stage 1 - Serve Frontend Assets
FROM nginx:stable-alpine as production-stage

WORKDIR /etc/nginx
ADD nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]