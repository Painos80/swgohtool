FROM node:alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g @angular/cli

RUN npm install

##RUN npm run ng build swgohtool --configuration production
##COPY nginx.conf /etc/nginx/nginx.conf
##COPY /dist/aston-villa-app /usr/share/nginx/html

CMD ["ng", "serve", "--host", "0.0.0.0"]


# Generate the build of the application
#RUN npm run build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
#FROM nginx:latest

# Copy the build output to replace the default nginx contents.
#COPY --from=build /usr/local/app/dist/sample-angular-app /usr/share/nginx/html

# Expose port 80
EXPOSE 4201