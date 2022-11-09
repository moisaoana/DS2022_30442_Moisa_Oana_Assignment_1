#!/bin/sh

echo "Stopping and removing the back-end container"

docker stop  spring-demo-integration

docker rm  spring-demo-integration

echo "Removing the image for the back-end container"
docker image rm deploy-spring-demo-integration

echo "Removing the volume for the back-end container"
docker volume rm  deploy_spring-demo-integration


echo "Stopping and removing the front-end container"

docker stop angular-integration

docker rm angular-integration

echo "Removing the image for the front-end container"
docker image rm deploy-angular-integration

echo "Stopping and removing the MySql container"

docker stop  mysql-demo-integration

docker rm  mysql-demo-integration

echo "Removing the image for the back-end container"
docker image rm mysql

echo "Removing the volume for the back-end container"
docker volume rm  deploy_mysql-demo-integration


docker-compose up --build