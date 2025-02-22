FROM node:22 AS build
WORKDIR /app
COPY package.json ./
RUN npm install

COPY . .
RUN npm run build


#serve the app with nginx
FROM nginx:alpine 

#copy the build folder to the nginx html folder
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80



