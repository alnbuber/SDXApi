FROM nginx:stable-perl

#copy custom NGINX configuration
COPY /nginx-custom.conf /etc/nginx/conf.d/default.conf
 
COPY /dist/SDXApiNew /usr/share/nginx/html