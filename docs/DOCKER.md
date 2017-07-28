Makefile
------------------
* Contains prepare, start, install and local options

Dockerfile
------------------
* Base image is Ubuntu
* Installs curl and node

docker-compose.yml
------------------
* one service initially, for the front end ("no-youre-a-docker")
* builds in current directory
* makes an image - seaside
* makes a container - landlocked
* makes the yesmate directory available to the container as /root/inhere
* runs a python server serving that directory on 1998 (later change to running npm run dev on 1998)
* maps it to the host on 8080
* is run by #make start

useful commands / troubleshooting
------------------
* docker images - list images
* docker ps - list containers
* docker exec landlocked cat /etc/os-release - runs a command inside a container
* docker-compose down


